import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import ExcelJS from "exceljs";
import { findOrder, getOrderCount, isValidOrderNumber, replaceOrders } from "./orders.mjs";
import { collectionNotice } from "./notices.mjs";

const port = Number(process.env.PORT ?? 3000);
const apiKey = process.env.OPENAI_API_KEY;
const model = process.env.OPENAI_MODEL ?? "gpt-6-luna";
const publicDir = new URL("./public/", import.meta.url);
const orderDataFile = new URL("./data/bestellingen.xlsx", import.meta.url);
let lastModified = null;
const garageName = "Ford Geeraerts";

function fromGarage(message) {
  return `${garageName}: ${message}`;
}

function send(response, status, body, contentType = "application/json; charset=utf-8") {
  response.writeHead(status, { "Content-Type": contentType, "Cache-Control": "no-store" });
  response.end(Buffer.isBuffer(body) || typeof body === "string" ? body : JSON.stringify(body));
}

async function readJson(request) {
  let body = "";
  for await (const chunk of request) body += chunk;
  if (body.length > 20_000) throw new Error("Bericht is te groot.");
  return JSON.parse(body || "{}");
}

const headerNames = {
  orderNumber: ["bestelbonnummer", "bestelnummer", "order number", "ordernummer"],
  buyerName: ["naam", "klantnaam", "naam klant", "customer name"],
  model: ["wagen", "model", "voertuig", "vehicle"],
  status: ["status", "bestelstatus", "orderstatus"],
  expectedArrival: ["verwachte aankomst", "aankomstdatum", "verwachte leverdatum", "estimated arrival"]
};

function normaliseHeader(value) {
  return String(value ?? "").trim().toLocaleLowerCase("nl-BE");
}

function cellText(value) {
  if (value instanceof Date) {
    return value.toLocaleDateString("nl-BE", { day: "numeric", month: "long", year: "numeric" });
  }
  if (value && typeof value === "object" && "text" in value) return String(value.text).trim();
  return String(value ?? "").trim();
}

async function mapSpreadsheet(buffer) {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.load(buffer);
  const sheet = workbook.worksheets[0];
  if (!sheet) throw new Error("Het Excelbestand bevat geen werkblad.");
  const headers = sheet.getRow(1).values.slice(1);
  const fieldForHeader = (header) => Object.entries(headerNames).find(([, names]) => names.includes(normaliseHeader(header)))?.[0];
  const orders = [];
  sheet.eachRow((row, rowNumber) => {
    if (rowNumber === 1) return;
    const mapped = {};
    headers.forEach((header, index) => {
      const field = fieldForHeader(header);
      if (field) mapped[field] = cellText(row.getCell(index + 1).value);
    });
    if (mapped.orderNumber && mapped.buyerName && mapped.model && mapped.status && mapped.expectedArrival) orders.push(mapped);
  });

  if (!orders.length) {
    throw new Error("Geen geldige bestellingen gevonden. Gebruik de kolommen Bestelbonnummer, Naam, Wagen, Status en Verwachte aankomst.");
  }
  if (orders.some((order) => !isValidOrderNumber(order.orderNumber))) {
    throw new Error("Elk bestelbonnummer in Excel moet precies vijf cijfers bevatten.");
  }
  return orders;
}

async function refreshOrders() {
  try {
    const info = await stat(orderDataFile);
    if (info.mtimeMs === lastModified) return;
    replaceOrders(await mapSpreadsheet(await readFile(orderDataFile)));
    lastModified = info.mtimeMs;
    console.log(`${getOrderCount()} bestellingen geladen uit het Excelbestand.`);
  } catch (error) {
    if (error.code !== "ENOENT") console.error("Excelbestand kon niet worden gelezen; de vorige gegevens blijven actief:", error.message);
  }
}

async function createAnswer(question, order) {
  if (!apiKey) {
    return [
      `[Demo zonder AI] De ${order.model} staat momenteel als “${order.status}” geregistreerd.`,
      order.expectedArrival === "Nog niet bekend"
        ? "De verwachte aankomstdatum bij de garage is nog niet bekend."
        : `De verwachte aankomst bij de garage is ${order.expectedArrival}.`,
      collectionNotice(order.expectedArrival, question)
    ].filter(Boolean).join("\n\n");
  }

  const input = `Klantvraag: ${question}\n\nBestelgegevens:\n- Wagen: ${order.model}\n- Status: ${order.status}\n- Verwachte aankomst bij de garage: ${order.expectedArrival}`;
  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model,
      instructions: [
        "Je bent een assistent van Ford Geeraerts. Antwoord in dezelfde taal als de klant.",
        "Beantwoord alleen op basis van de bestelgegevens.",
        "Een verwachte aankomst bij de garage is nooit een afhaaldatum.",
        "Noem alleen de status en de verwachte aankomst. De toepassing voegt daarna zelf de vaste uitleg over afhaling toe; herhaal die uitleg niet.",
        "Verzin geen datum, voorbereidingstijd, vertragingsoorzaak of afspraak.",
        "Als de aankomstdatum 'Nog niet bekend' is, zeg dan dat je die nog niet kunt bevestigen.",
        "Geef hoogstens twee korte zinnen en vermeld duidelijk dat de datum een verwachting is.",
        "Voorbeeld bij een bekende aankomstdatum: 'Uw Ford Mustang Mach-E staat momenteel als onderweg naar de garage geregistreerd. De verwachte aankomst bij Ford Geeraerts is 12 december 2026.'",
        "Voorbeeld bij een onbekende aankomstdatum: 'Uw Ford Kuga Active staat momenteel als “In productie” geregistreerd. Op dit moment is er nog geen verwachte aankomstdatum bij Ford Geeraerts beschikbaar. Daarom kunnen we momenteel ook nog geen verdere inschatting geven over de levering of afhaling van uw wagen.'",
        "Voorbeeld zonder bestelbonnummer: 'Om de status van uw wagen bij Ford Geeraerts te kunnen nakijken, heb ik eerst uw bestelbonnummer nodig. Dit nummer bestaat uit 5 cijfers. Bezorg mij uw bestelbonnummer. Daarna vraag ik ook nog naar de naam waarop de wagen besteld is, zodat ik de juiste bestelgegevens kan nakijken.'"
      ].join(" "),
      input
    })
  });

  if (!response.ok) throw new Error(`De AI-dienst gaf fout ${response.status}.`);
  const data = await response.json();
  const answer = [
    data.output_text,
    ...(data.output ?? []).flatMap((item) => (item.content ?? [])
      .filter((content) => content.type === "output_text")
      .map((content) => content.text))
  ].filter(Boolean).join("\n").trim();
  if (!answer) throw new Error("De AI-dienst gaf geen bruikbaar antwoord.");
  const notice = collectionNotice(order.expectedArrival, question);
  return [answer, notice].filter(Boolean).join("\n\n");
}

const server = createServer(async (request, response) => {
  try {
    if (request.method === "POST" && request.url === "/api/chat") {
      await refreshOrders();
      const { orderNumber, buyerName, question } = await readJson(request);
      if (typeof question !== "string" || !question.trim()) {
        return send(response, 400, { error: fromGarage("stel eerst je vraag over de bestelling.") });
      }
      if (typeof orderNumber !== "string" || !orderNumber.trim()) {
        return send(response, 200, { answer: fromGarage("om de status van uw wagen te kunnen nakijken, heb ik eerst uw bestelbonnummer nodig. Dit nummer bestaat uit 5 cijfers. Bezorg mij uw bestelbonnummer. Daarna vraag ik ook naar de naam waarop de wagen besteld is, zodat ik de juiste bestelgegevens kan nakijken.") });
      }
      if (!isValidOrderNumber(orderNumber)) {
        return send(response, 400, { error: fromGarage("het bestelbonnummer moet uit 5 cijfers bestaan. Controleer het nummer en probeer het opnieuw. Als u het juiste bestelbonnummer niet kunt terugvinden, neem dan contact op met Ford Geeraerts.") });
      }
      if (typeof buyerName !== "string" || !buyerName.trim()) {
        return send(response, 200, { answer: fromGarage("dank je. Op welke naam staat de wagen besteld?") });
      }

      const order = findOrder(orderNumber, buyerName);
      if (!order) {
        return send(response, 404, { error: fromGarage("ik kan deze bestelling niet bevestigen. Controleer het bestelbonnummer en de naam, of neem contact op met de garage.") });
      }

      const answer = await createAnswer(question, order);
      return send(response, 200, { answer: fromGarage(answer) });
    }

    if (request.method === "GET" && request.url === "/api/status") {
      await refreshOrders();
      return send(response, 200, { orderCount: getOrderCount() });
    }

    if (request.method === "GET" && (request.url === "/" || request.url === "/index.html")) {
      return send(response, 200, await readFile(new URL("index.html", publicDir)), "text/html; charset=utf-8");
    }

    return send(response, 404, "Niet gevonden.", "text/plain; charset=utf-8");
  } catch (error) {
    return send(response, 500, { error: fromGarage(error.message || "er ging iets mis.") });
  }
});

await refreshOrders();
server.listen(port, () => console.log(`Open http://localhost:${port}`));
