# Bouwaanvragen sorteren voor een grond- en afbraakbedrijf

## De taak

De tool leest de beschrijving van een bouwaanvraag uit een bekendmaking van een openbaar onderzoek, en zegt of er werk in zit voor Deprez, een bedrijf in grond- en afbraakwerken. Volledige taak: `taak.md`.

## De uitvoer

Eén JSON-object met drie velden:

| Veld | Keuzes |
|---|---|
| `interessant` | `ja` (afbraak of grondwerk, langer dan één dag) · `nee` · `onzeker` |
| `soort_werk` | `afbraak` · `grondwerk` · `beide` · `geen` |
| `reden` | één korte zin |

```
{"interessant": "ja", "soort_werk": "grondwerk", "reden": "Reliëfwijziging en keermuren zijn grondwerk."}
```

## Zo draai je het

1. Open een nieuw gesprek, in een lege map, zonder tools.
2. Plak de prompt uit `prompt.md`. Vul onder BESCHRIJVING één beschrijving in, zonder namen en adressen.
3. Vergelijk het antwoord met `test-set.md`.
4. Doe elke input twee keer, telkens in een nieuw gesprek.
5. Schrijf het resultaat in `log.md`.

## Bestanden

| Bestand | Wat |
|---|---|
| `taak.md` | de taak in vijf regels |
| `prompt.md` | de huidige prompt (v2) |
| `prompt-v1.md` | de vorige prompt |
| `test-set.md` | inputs, juiste antwoorden, fouten en succespercentage |
| `log.md` | elke run, elk resultaat, elke wijziging |
| `runs-v1.txt`, `runs-v2.txt` | ruwe antwoorden |
| `kosten.md` | kost per run en per maand |
| `waarde.md` | hoeveel tijd de tool wint |

## Versies

| Versie | Week | Wat veranderde | Waarom |
|---|---|---|---|
| v1 | 2–3 | Eerste prompt met `interessant` en `soort_werk` | |
| v2 | 3 | Uitleg bij `onzeker`: alleen als er iets belangrijks ontbreekt, niet omdat een woord onbekend is | Bij T08 koos ik zelf "onzeker" omdat ik een woord niet kende. Te vaak "onzeker" betekent dat iemand alles toch zelf moet nalezen. |
