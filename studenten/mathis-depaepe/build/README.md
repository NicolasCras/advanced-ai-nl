# Horlogeadvertenties uitlezen

## De taak

De tool haalt uit één advertentie van een tweedehands luxehorloge tien vaste velden. Details: `taak.md`.

## De uitvoer

Eén JSON-object met `merk`, `model`, `referentienummer`, `bouwjaar`, `staat`, `doos_papieren`, `vraagprijs`, `munt`, `verkoper`, `servicegeschiedenis`. Staat iets er niet in: `"onbekend"`.

## Zo draai je het

### v1, v2 en v3: met de hand in ChatGPT

App: ChatGPT, gratis versie. Model: het standaardmodel van de gratis versie. De exacte modelversie is niet zichtbaar in de app en werd niet genoteerd. Bij de gratis versie kan ChatGPT ook overschakelen naar een kleiner model als de limiet bereikt is, dus niet elke run is zeker met hetzelfde model gedraaid.

1. Open een nieuw gesprek met je AI.
2. Plak de prompt uit `prompt.md`. Vul één advertentie in.
3. Vergelijk elk veld met `test-set.md`.
4. Doe elke advertentie twee keer, telkens in een nieuw gesprek.
5. Schrijf het resultaat in `log.md`.

### v4: met het script en Haiku 5.5

Het script `run-v4.mjs` draait de prompt uit `prompt.md` op T01–T10 uit `test-set.md`, twee runs. Elke run is een aparte aanroep van `claude -p --model haiku --tools "" --safe-mode --strict-mcp-config --no-session-persistence --output-format json`, vanuit een nieuwe lege map in de temp-map van het systeem. Zo leest het model alleen de prompt en die ene advertentie: geen tools, geen CLAUDE.md, geen MCP. Wel gaat er een korte standaard-systeemprompt van Claude Code mee (± 3.000 tokens). Het alias `haiku` gaf op 2026-10-20 `claude-haiku-5-5`.

Nodig: Node.js en Claude Code (`claude`), ingelogd.

1. Open een terminal in deze map (`build/`).
2. Typ `node run-v4.mjs runs-v4-nieuw`. De uitvoermap moet nieuw of leeg zijn, het script overschrijft niets.
3. Per input komen er in die map drie soorten bestanden:
   - `Txx-input.txt`: de prompt zoals hij naar het model ging.
   - `Txx-runN.txt`: het letterlijke antwoord.
   - `Txx-runN.raw.json`: de volledige uitvoer, met tokens en kost.
4. Vergelijk elk veld met `test-set.md` en schrijf het resultaat in `log.md`.

De runs van 2026-10-20 staan in `runs-v4/`.

## Versies

| Versie | Datum | Wat veranderde | Waarom |
|---|---|---|---|
| v1 | 2026-10-08 | Eerste prompt | |
| v2 | 2026-10-13 | Full-Set-regel bij `doos_papieren`, uitleg van alle vijf waarden van `doos_papieren` | Full-Set-regel na fout T04; uitleg van de waarden na de buurtest |
| v3 | 2026-10-13 | Uitweg-regel: twee waarden voor één veld, of een waarde die iets anders kan betekenen → "onbekend", met een want. v2 bewaard in `prompt-v2.md` | Fouten T06, T08, T09 in Run 1 (F1) |
| v4 | 2026-10-20 | "onbekend" als derde optie bij `verkoper`. v3 bewaard in `prompt-v3.md` | Fout T10 verkoper in Run 1 (F1): de prompt liet geen "onbekend" toe |
