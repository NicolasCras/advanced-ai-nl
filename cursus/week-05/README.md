# Week 5: variatie, caching en modelkeuze

*Krijg ik twee keer hetzelfde antwoord?*

Woensdag 21 oktober, 10:30–13:30.

## Waar het om gaat

**Kan je je eigen cijfers vertrouwen?**

Je hebt nu drie cijfers: een score, een kost per run en een netto per jaar. Vandaag test je ze.

- Je draait je tool opnieuw op dezelfde inputs. Dan zie je hoeveel je score vanzelf schommelt: je **foutmarge**. Zoals bij een peiling: een verschil binnen de foutmarge is geen verschil.
- Je test een kleiner model en een lagere effort. Valt het verschil binnen je foutmarge?
- Je bouwt je value chain opnieuw, met de foutmarge erin.
- Je zoekt de AI-ismen in je eigen posts en herschrijft ze.

Alles komt samen in één pagina: je **dashboard**, met een publieke link in je post.

Die cijfers tellen voor twee criteria van je memo: **waarde onderbouwen** (20%) en **kosten** (15%).

## Wat je om 13:30 hebt

- Je foutmarge: je laatste en je vorige versie, elk 3 runs op dezelfde inputs. Je claim uit week 3 of 4 is **bevestigd** of **ingetrokken**.
- Een tabel met drie setups van je eigen tool: score en kost.
- Je volledige value chain, met een bereik in plaats van één getal.
- `build/dashboard.html`, met een publieke link.
- Een juiste prijs in `build/kosten.md`.
- Een begin van je post, met je AI-ismen.

## Verloop

| | |
|---|---|
| 10:30 | `start week 5`, de Haiku-correctie, en een gok |
| 10:45 | Zo testen bedrijven AI: evals |
| 10:55 | Lus 1: je foutmarge |
| 11:20 | De pelikaantest |
| 11:35 | Lus 2: welk model en welke effort voor jouw taak? |
| 12:00 | Pauze |
| 12:10 | Waarde: de value chain, met de foutmarge erin |
| 12:40 | Je dashboard |
| 13:00 | AI-ismen |
| 13:10 | Post en pull request |

## Start

Open je tool in je eigen map, `studenten/jouw-naam/`. Typ:

| Claude | Codex |
|---|---|
| `/week start week 5` | `$week start week 5` |

Check daarna: staan je prompt, je testset en `kosten.md` van week 4 in `build/`? Nee? Zeg het meteen.

Nog geen pull request voor week 4? Typ eerst `dien week 4 in`.

**Nieuw: de skill `context` heet nu `profiel`.** Hij botste met het ingebouwde commando `/context`. Na `start week 5` typ je `/context` en zie je weer wat je tool meestuurt. Je bestand `context.md` blijft gewoon staan. Wil je het aanpassen? Typ `/profiel` (Codex: `$profiel`).

## Eerst: welke Haiku had je?

In week 4 typte je `/model haiku`. De prijstabel had alleen Haiku 4.5. Maar er bestaat ook **Haiku 5.5**, en die kost een tiende. Kreeg je Haiku 5.5 en rekende je met de prijs van 4.5? Dan staat je kost tien keer te hoog.

**Check het.** Open een sessie, typ `/model haiku`, stuur één woord en typ `/cost`. Daar staat de naam van het model: `haiku-4-5` of `haiku-5-5`. Reken met de prijs van dát model. Wil je zeker Haiku 5.5? Typ `/model claude-haiku-5-5`.

**Let op bij Haiku 5.5: geloof de dollars in `/cost` niet.** Claude Code kent Haiku 5.5 nog niet en rekent hem aan de prijs van Opus. Dat is ongeveer 40 keer te veel. Neem de tokens uit `/cost` en reken zelf met de tabel hieronder.

Prijs per miljoen tokens, in dollar, op 21 oktober 2026:

| Model | Input | Output | Cache schrijven | Cache lezen |
|---|---:|---:|---:|---:|
| Claude Haiku 5.5 | 0,10 | 0,50 | 0,125 tot 0,20 | 0,01 |
| Claude Haiku 4.5 | 1 | 5 | 1,25 tot 2 | 0,10 |
| Claude Sonnet 5.5 | 2 | 10 | 2,50 tot 4 | 0,10 |
| Claude Opus 5.5 | 4 | 20 | 5 tot 8 | 0,20 |
| GPT-6 Luna | 0,10 | 0,50 | — | 0,01 |
| GPT-6.1 Sol | 2 | 10 | — | 0,10 |

Haiku 5.5: die prijs geldt tot 100.000 tokens per vraag. Daarboven betaal je vijf keer meer. Bronnen: [Anthropic](https://platform.claude.com/docs/en/about-claude/pricing), [OpenAI](https://openai.com/api/pricing/).

**Pas `build/kosten.md` aan in deze pull request.** Het juiste model, de juiste prijs, de nieuwe kost per run en per maand. Laat de oude regel staan en zet erbij: "gecorrigeerd in week 5". Een fout wis je niet, je verbetert ze.

## Wat een eval is

Een **eval** is een vaste test die zegt hoe goed een AI-toepassing is. Je doet het al sinds week 3.

### Zo doen bedrijven het

- **Veel gevallen.** Anthropic: meer vragen met automatische beoordeling zijn beter dan weinig vragen die mensen met de hand nakijken. ([Anthropic](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests))
- **Drie soorten beoordelaar.** Code (snel, maar zonder nuance), een mens (traag en duur), of een taalmodel. Een taalmodel als beoordelaar test je eerst, dan pas schaal je op. (Anthropic, idem)
- **De beoordelaar wordt zelf nagekeken.** Bij Honeycomb waren drie rondes nodig voor de LLM-beoordelaar het in meer dan 90% eens was met een expert. ([Hamel Husain](https://hamel.dev/blog/posts/llm-judge/))
- **Opnieuw bij elke wijziging.** OpenAI raadt aan om je evals bij elke wijziging te draaien en de testset te laten groeien. Rechat draait honderden tests bij elke wijziging. ([OpenAI](https://developers.openai.com/api/docs/guides/evaluation-best-practices), [Hamel Husain](https://hamel.dev/blog/posts/evals/))
- **Meerdere runs per geval.** In τ-bench loste GPT-4o ongeveer 61% van de taken op in één run, maar minder dan 25% in alle 8 runs. ([τ-bench](https://arxiv.org/abs/2406.12045))
- **Eigen evals, geen ranglijst.** Een publieke benchmark zegt niets over jouw toepassing. Nieuwe testgevallen haal je uit wat er echt binnenkomt. (OpenAI, idem)

### Jouw testset is dezelfde machine, in het klein

| Term | Wat het is | Bij een bedrijf | Bij jou |
|---|---|---|---|
| **Input** | Wat je tool krijgt | honderden gevallen | T01 tot T10 in `build/test-set.md` |
| **Verwacht antwoord** | Wat juist is, vooraf opgeschreven | de "golden dataset" | De kolom naast elke input |
| **Beoordelaar** | Wie of wat zegt: juist of fout | code, mens of taalmodel | Jij, of je agent met jouw regel |
| **Score** | Hoeveel juist | per versie, opgevolgd in de tijd | "8 op 10" |
| **n** | Hoeveel inputs, hoeveel runs | meerdere runs per geval | n = 10, 2 runs |

Vandaag komt er één ding bij: **draai het opnieuw.**

Vier regels. Breek je er één, dan zegt je score niets meer:

1. **Dezelfde inputs.** Je vergelijkt twee versies op exact dezelfde inputs.
2. **Dezelfde n.** "6 op 10" tegen "4 op 5" is geen vergelijking.
3. **Het antwoord eerst.** Je schrijft het verwachte antwoord op vóór je tool draait.
4. **Nooit achteraf herlabelen.** Zie je de uitvoer en denk je "eigenlijk is dat ook juist"? Dan pas je het verwachte antwoord niet aan. Noteer het in `build/log.md` en pas het aan vóór de volgende run, nooit voor de run die je net zag.

Schrijf ook altijd het **model** op. "Haiku" kan Haiku 4.5 of Haiku 5.5 zijn. Zonder modelnaam weet je later niet of je tool veranderde, of het model.

## Lus 1: je foutmarge

Dezelfde prompt, dezelfde input, een ander antwoord. Dat zag je al: F6. Je score schommelt dus ook, zonder dat je iets verandert. Die schommeling is je **foutmarge**.

Denk aan een peiling: partij A 21%, partij B 20%, foutmarge 2 punten. Dan weet je niet wie voor staat. Met je tool is het net zo.

In week 3 of 4 veranderde je iets en zei je: beter. Klopt dat? Of valt het binnen de foutmarge?

**Wat je test:** je laatste versie tegen de versie ervoor. Beide opnieuw, op dezelfde inputs, 3 runs per versie.

Plak dit bij je agent. Je agent draait de runs, jij kijkt na of hij juist nakeek.

> Draai mijn foutmargetest. Neem mijn laatste versie van de prompt en de versie ervoor, uit `build/`, of uit git als ze daar niet meer staat. Draai beide op dezelfde inputs uit `build/test-set.md`, 3 runs per versie, op hetzelfde model als mijn testset. Elke run in een nieuwe, aparte sessie met alleen de prompt en de input, zonder tools: bij Claude `claude -p --tools ""`, bij Codex `codex exec`. Draai ze parallel als dat kan. Geef het model nooit de verwachte antwoorden. Vergelijk daarna elk antwoord met het verwachte antwoord uit mijn testset, en maak een tabel: de score per run per versie, en per versie de laagste en de hoogste score. Noteer het model. Pas mijn verwachte antwoorden niet aan. Zet alles in `build/foutmarge.md`.

Duurt het te lang? Neem 5 inputs, voor beide versies dezelfde, en schrijf n = 5.

Open daarna twee antwoorden zelf en check ze. Je agent is je beoordelaar: vertrouw hem niet blind.

**Je tabel**, in `build/foutmarge.md`:

```markdown
# Foutmarge, 21 oktober 2026

Model: <model, met versie>. n = <aantal inputs>, 3 runs per versie. Zelfde inputs voor beide.

| Versie | Run 1 | Run 2 | Run 3 | Foutmarge (min–max) |
|---|---:|---:|---:|---:|
| v<vorige> | /10 | /10 | /10 | – |
| v<laatste> | /10 | /10 | /10 | – |

Mijn claim: "<wat je in week 3 of 4 schreef>"
Bevestigd of ingetrokken: <...>, want <...>
```

**Hoe je beslist:**

- **Bevestigd:** de laagste score van je nieuwe versie ligt hoger dan de hoogste score van je oude. Voorbeeld: oud 5–6, nieuw 7–8.
- **Ingetrokken:** de twee bereiken overlappen. Het verschil valt binnen de foutmarge. Voorbeeld: oud 4–4, nieuw 4–5. Dan is je verbetering niet bewezen. Ze is niet slechter, je kan het gewoon niet zeggen.

Ingetrokken is geen slecht cijfer. Een eerlijk "niet bewezen" scoort hoger dan een claim die binnen de foutmarge valt.

Veranderde je nog niets? Draai dan je huidige versie 3 keer. Je hebt een foutmarge, en nog geen claim.

## De pelikaantest

Simon Willison test elk nieuw model met één zin: *"Generate an SVG of a pelican riding a bicycle."* Op het scherm: vijf pelikanen, van vijf setups. Jij gokt welke van welke kwam. Dan zie je wat elk kostte. Daarna nog één: Fable 5.1 op maximale effort, voor 87 dollarcent per pelikaan.

Je hoeft niets te doen. Kijk, gok, en onthoud: duurder is niet altijd beter, en hetzelfde model geeft twee keer een andere pelikaan.

## Lus 2: welk model en welke effort voor jouw taak?

Dit is de vraag die een bedrijf stelt voor het een tool in productie zet: **welk model en welke effort gebruik je voor déze taak?**

- **Goedkoper?** Kan het met een kleiner model of minder effort, zonder dat je score buiten je foutmarge zakt?
- **Groter?** Is een groter model echt beter op jouw taak, of alleen op de pelikaan?

Je antwoord is één zin in je memo, voor het criterium **kosten**: "Deze taak draait op dit model, met deze effort, omdat …"

Twee knoppen bepalen hoe sterk je tool denkt:

- **Het model.** Haiku is klein en goedkoop. Sonnet zit in het midden. Opus is groot en duur.
- **De effort.** Hoe lang het model nadenkt voor het antwoordt. Meer effort is meer denkwerk, en dat betaal je als output. Soms verandert effort bijna niets. Dat weet je pas als je meet, en dan is dat ook een resultaat.

Bij Claude zet je het model met `/model` en de effort met `/effort`. In een run: `--model` en `--effort` (low, medium, high, xhigh, max).

Bij Codex: in een run `codex exec -m <model>` en `-c model_reasoning_effort="low"` (of `medium`, `high`). Welke modellen je Codex aanbiedt en hoe je in een sessie wisselt: vraag je agent.

**Een vuistregel: begin bij Sonnet.**

| Model | Voor taken zoals |
|---|---|
| Haiku 5.5 | Een mail sorteren. Een review labelen. |
| Sonnet 5.5 | Een rapport samenvatten. Twee documenten vergelijken. |
| Opus 5.5 | Een lang, lastig document. Een skill bouwen. |

1. Start op Sonnet 5.5, gemiddelde effort.
2. Is de taak echt eenvoudig? Ga omlaag naar Haiku 5.5.
3. Heeft de taak meer intelligentie nodig? Ga omhoog naar Opus 5.5.
4. Is het antwoord te mager? Zet eerst de effort hoger.
5. Snelle, eenvoudige taken: zet de effort lager.

Een vuistregel is geen meting. Dat doe je nu.

**Je drie setups.** Iedereen test dezelfde drie: de standaard, één stap omlaag en één stap omhoog.

| Tool | A · standaard | B · omlaag | C · omhoog |
|---|---|---|---|
| Claude | Sonnet 5.5, effort medium | Haiku 5.5 | Opus 5.5 |
| Codex | je standaardmodel | een kleiner model | een groter model |

Houdt Haiku stand? Dan ga je omlaag. Helpt Opus meer dan je foutmarge? Dan ga je omhoog. Anders blijf je op Sonnet.

**Eerst gokken.** Schrijf in `build/modellen.md`, vóór je iets draait: welke setup scoort het best? Welke is goed genoeg voor je echte plek?

Plak dan dit bij je agent:

> Draai mijn modeltest. Drie setups, elk één run op mijn inputs uit `build/test-set.md`, met mijn laatste prompt, op dezelfde manier als de foutmargetest: A <...>, B <...>, C <...>. Bij Claude: `claude -p --model <model> --effort <niveau> --tools ""`. Bij Codex: `codex exec -m <model> -c model_reasoning_effort="<niveau>"`. Noteer per setup het model, de score en de gemiddelde output-tokens per run. Pas mijn verwachte antwoorden niet aan. Zet het in `build/modellen.md`, onder mijn gok.

**Je tabel:**

| Setup | Model | Effort | Score (n = 10, 1 run) | Binnen mijn foutmarge? | Output-tokens per run | Kost per run | Per jaar |
|---|---|---|---:|---|---:|---:|---:|
| A | | | | | | | |
| B | | | | | | | |
| C | | | | | | | |

**Kost per run** = de input-tokens van jouw deel uit week 4 × de inputprijs + de output-tokens van deze setup × de outputprijs. Je input is voor elke setup gelijk. De output verschilt: dat is het denkwerk.

**Hoe je leest:** valt het verschil in score binnen je foutmarge? Dan zijn de setups op score niet te onderscheiden. Kies dan op kost. Klopte je gok? Zeg het in je post, ook als hij fout was.

## Waarde: de value chain, met de foutmarge erin

In week 4 bouwde je een value chain: van tijd met de hand naar netto per jaar. Vandaag doe je hem volledig, en je zet er je foutmarge in. Een tool die fout zit, kost tijd: iemand moet die fout herstellen.

### De value chain

1. **Met de hand.** Uit welke stappen bestaat de taak? Geef elke stap een tijd. Zeg je bron: je deed het zelf, je vroeg het, of je schat het.
2. **Met de tool.** Draaien + nakijken + **fouten herstellen**. Fouten herstellen = het deel dat fout is × de tijd om één fout met de hand te doen. Het deel dat fout is, haal je uit je score.
3. **Winst per taak.** Met de hand − met de tool.
4. **Hoe vaak?** Per dag, per week, per maand, per jaar. Zeg waar het volume vandaan komt.
5. **Uren per jaar.** Winst per taak × taken per jaar.
6. **Wat kost een uur?** De kost voor de werkgever, niet het brutoloon. Vuistregel: bruto × 1,5. Een aanname, met een bron.
7. **Min de kost van je tool.** Kost per run × runs per jaar. Met de juiste prijs.
8. **Netto per jaar.** Uren × uurkost − kost van de tool.
9. **Het bereik.** Reken stap 2 tot 8 opnieuw met je laagste en je hoogste score uit lus 1.
10. **Je zwakste cijfer.** Welke schakel vertrouw je het minst? Wat gebeurt er met het netto als dat getal de helft is? Beweegt het netto meer door dat getal dan door je foutmarge?

**Waarom × 1,5?** Een bediende met €20 bruto per uur krijgt ook dubbel vakantiegeld en een dertiende maand. Daarbovenop betaalt de werkgever ongeveer 25 tot 27% sociale bijdragen. Samen kost dat uur de werkgever ongeveer €30. Bronnen: [Acerta](https://www.acerta.be/nl/werkgevers/verlonen-en-belonen/loonberekening), [Securex](https://www.securex.be/nl/personeelsbeleid/loonkosten-en-verloning/je-loonkosten-berekenen), [Teamed](https://www.teamed.global/country-hiring-guides/belgium/cost-breakdown).

### Voorbeeld: de mailsorteerder

| Schakel | Waarde | Bron |
|---|---|---|
| Met de hand | Openen en lezen 40 s · beslissen 10 s · verplaatsen 5 s = **55 s** | eigen inbox, geschat |
| Score | 8 op 10 (foutmarge 7–9, n = 10, 3 runs) | gemeten |
| Met de tool | Draaien 3 s · nakijken 10 s · fouten herstellen 20% × 55 s = 11 s · samen **24 s** | gemeten / geschat |
| Winst per mail | 55 − 24 = **31 s** | |
| Volume | 150 per dag · 750 per week · 3.000 per maand · 33.000 per jaar | aanname: 5 dagen per week, 20 per maand, 220 per jaar |
| Uren gewonnen | 1,3 u per dag · 6,5 u per week · 26 u per maand · **284 u per jaar** | |
| Uurkost | **€20 bruto ≈ €30 voor de werkgever** | aanname, bron hierboven |
| Waarde | 284 × 30 = **€8.525 per jaar** | |
| Kost van de tool | 33.000 × €0,0044 = **± €145 per jaar** (Sonnet 5.5, jouw deel: 765 tokens in, 334 uit) | gemeten |
| Netto | **± €8.380 per jaar** | |
| Bereik | Bij 7 op 10: ± €6.870 · bij 9 op 10: ± €9.890 | foutmarge |
| Zwakste cijfer | De 55 s: geschat, niet gemeten. Is het 30 s, dan blijft er ± €2.880 per jaar over. | |

Merk op: de foutmarge verschuift het netto met ± €1.510. De 55 s verschuift het met ± €5.500. Je zwakste cijfer is dus niet je score, maar je schatting van het handwerk.

### Zelfde value chain, ander werk: de accountant

Een accountant vergelijkt twee kwartaalrapporten.

| Schakel | Waarde |
|---|---|
| Met de hand | **40 min** per vergelijking |
| Met de tool | 2 min draaien + 10 min nakijken + 20% × 40 min herstellen = **20 min** |
| Winst | 20 min × 40 per maand = **160 u per jaar** |
| Uurkost | **€60** (aanname: loonkost van een accountant) |
| Waarde | 160 × 60 = **€9.600 per jaar** |
| Kost van de tool | 480 × ± €0,05 = **± €22 per jaar** (Sonnet 5.5, ± 20.000 tokens in, 1.000 uit, schatting) |
| Netto | **± €9.580 per jaar** |

33.000 mails of 480 rapporten: de waarde ligt in dezelfde orde. Waarde = tijd × uurkost, niet volume.

## Je dashboard

Al je cijfers op één pagina. Die pagina gaat mee in je post, en je bouwt erop verder tot week 12.

Plak dit bij je agent:

> Maak `build/dashboard.html`: één pagina, alles in dat ene bestand, geen externe scripts of lettertypes. Goed leesbaar op een gsm. Haal de cijfers uit `build/foutmarge.md`, `build/modellen.md`, `build/kosten.md` en de value chain uit mijn post. Toon: mijn score met de foutmarge (min–max, n, runs), mijn claim (bevestigd of ingetrokken), de tabel van de drie setups met score en kost, de kost per run en per jaar, en de volledige value chain met het netto per jaar, het bereik en mijn zwakste cijfer. Verzin geen cijfers: ontbreekt er een, schrijf dan "nog niet gemeten". Geen echte namen en geen vertrouwelijke inputs.

**Lees het na.** Staat er een cijfer dat niet in je bestanden staat? Dan heeft je agent het verzonnen. Haal het weg.

**De link is publiek.** Iedereen met de link ziet je pagina. Geen namen van klanten, collega's of familie.

### Publiceren

Iedereen zet `build/dashboard.html` in de pull request. Daarnaast maak je een publieke link:

| Je hebt | Zo doe je het |
|---|---|
| **Claude Pro of hoger**, ingelogd met `/login` | Vraag Claude: "Publiceer `build/dashboard.html` als Artifact." Open het, kies **Share** en zet het op publiek. `/artifacts` toont je lijst. |
| **ChatGPT Plus of hoger** | Sites werkt niet in de Codex-terminal. Open ChatGPT op chatgpt.com of in de app, laad `dashboard.html` op en vraag: "Maak hier een Site van." Kies **Share** → **Anyone on the internet** → **Publish**. |
| **Iets anders** (ChatGPT Go, gratis, een API-sleutel) | Push je branch. Je link is dan: `https://raw.githack.com/<jouw-github-naam>/advanced-ai-nl/week-05/studenten/<jouw-naam>/build/dashboard.html` |

De raw.githack-link werkt pas na een push. Die link kan iedereen ook als reserve gebruiken.

**Test je link** in een privévenster van je browser. Vraagt hij om in te loggen? Dan staat hij nog niet publiek.

## Snel klaar? Laat een klasgenoot blind nakijken

Geef een klasgenoot 5 inputs met de uitvoer van je tool. Niet je verwachte antwoord, niet je oordeel. Je klasgenoot zegt per uitvoer: juist of fout.

Tel hoe vaak jullie het eens zijn. "4 van 5 eens" zet je in `build/log.md`.

Niet eens? Dan is je regel voor "juist" niet duidelijk genoeg. Twee mensen moeten los van elkaar hetzelfde beslissen. Dat is de regel uit de Build-brief.

## AI-ismen

Sommige zinnen klinken alsof een taalmodel ze schreef. Dat zijn **AI-ismen**: woorden en patronen die taalmodellen veel vaker gebruiken dan mensen. Een studie van meer dan 15 miljoen wetenschappelijke samenvattingen vond het Engelse woord *delves* in 2024 28 keer vaker dan verwacht. ([Kobak e.a., 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC12219543/))

De tien vaakste ([Wikipedia: Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing)):

| # | Patroon | Voorbeeld |
|---|---|---|
| 1 | AI-woorden | "Laten we dieper ingaan op het complexe landschap van retail." |
| 2 | Opgeblazen belang | "Data speelt een cruciale rol en is een bewijs van innovatie." |
| 3 | Niet X, maar Y | "Het is niet alleen een tool, maar een echte gamechanger." |
| 4 | Altijd drie | "Snel, efficiënt en schaalbaar." |
| 5 | Holle -end-zinnen | "…waardoor de klanttevredenheid wordt versterkt en groei wordt gegarandeerd." |
| 6 | Reclametaal | "Een naadloze, baanbrekende oplossing voor elk bedrijf." |
| 7 | Algemene opener | "In een wereld waar technologie razendsnel evolueert…" |
| 8 | Vage bron | "Experts zijn het erover eens dat AI de toekomst is." |
| 9 | Formuleslot en chatbotresten | "Kortom: AI biedt enorme kansen. Ik hoop dat dit helpt!" |
| 10 | Het lange streepje — | "De tool is snel — en dat merk je meteen." In het Nederlands schrijft bijna niemand dat streepje. |

Eén AI-isme maakt een tekst niet "AI". Het lange streepje (—) gebruiken sommige mensen ook, maar in een Nederlandse studententekst valt het meteen op. Het streepje in de titel van je posts kwam uit ons sjabloon: dat telt niet. Het echte probleem is dat de zin niets zegt.

**Je opdracht voor je post.** Ga terug door je eigen posts van week 1 tot 4. Vind er minstens **5** AI-ismen. Citeer elke zin letterlijk, met de week. Herschrijf elke zin in één gewone zin, met een cijfer of een feit.

Voorbeeld:

> Week 4: "Deze berekening heeft mijn visie uitgebreid."
> Herschreven: "Ik dacht dat één run niets kostte. Bij 1.000 keer mijn volume is het meer dan 100 euro per maand."

## Je post

Bestand: `posts/week-05.md`. **300 tot 500 woorden**, de citaten niet meegeteld. Minstens één gemeten cijfer met n.

```markdown
# Week 5: <titel in je eigen woorden>

## Mijn foutmarge
<Je laatste en je vorige versie, 3 runs elk, zelfde inputs, met het model. Het bereik per versie. Is je claim bevestigd of ingetrokken?>

## Model en effort
<Je gok, en wat eruit kwam. Score en kost per setup. Viel het verschil binnen je foutmarge? Welke setup zet je in productie, en waarom?>

## Mijn value chain, met de foutmarge erin
<Met de hand → met de tool (draaien + nakijken + fouten herstellen) → winst per taak → per jaar → × uurkost voor de werkgever → min de kost van je tool → netto per jaar. Het bereik bij je laagste en je hoogste score. Je zwakste cijfer.>

## Mijn dashboard
<De publieke link. Eén zin: wat moet een lezer er eerst zien?>

## Mijn AI-ismen
<Minstens 5 zinnen uit je posts van week 1 tot 4. Per zin: het citaat met de week, en je herschrijving in één gewone zin.>
```

Indienen: typ `dien week 5 in`. Deadline: **dinsdag 27 oktober, 23:59**.

## Klaar als

- [ ] `build/kosten.md` heeft het juiste Haiku-model en de juiste prijs, met "gecorrigeerd in week 5".
- [ ] `build/foutmarge.md` heeft 2 versies × 3 runs op dezelfde inputs, met min–max per versie en het model.
- [ ] Je claim is bevestigd of ingetrokken, met de reden.
- [ ] `build/modellen.md` heeft je gok, geschreven vóór de runs, en drie setups met score en kost.
- [ ] Geen enkel verwacht antwoord is aangepast nadat je de uitvoer zag.
- [ ] Je value chain heeft alle schakels, een uurkost voor de werkgever, een bereik en je zwakste cijfer.
- [ ] `build/dashboard.html` staat in je pull request.
- [ ] De link in je post opent zonder in te loggen.
- [ ] `## Mijn AI-ismen` heeft minstens 5 citaten uit je eigen posts, elk herschreven.
- [ ] Je post heeft 300 tot 500 woorden en vijf koppen.
