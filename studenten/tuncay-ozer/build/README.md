# Excel-progressievolger

## Wat het doet

De tool zet een kort, slordig berichtje over een training (fitness, lopen of allebei) om naar rijen voor mijn Excel-bestand, zodat ik mijn progressie kan bijhouden.

Kolommen, in deze volgorde:

| oefening | sets | reps | gewicht (kg) | afstand (km) | tijd (min) | notitie |

- Eén rij per oefening.
- Staat een waarde niet in het bericht: `?`.
- Gaat het bericht niet over een training: `geen training`.

## Zo draai je het

1. Open een nieuw gesprek met je AI (of `claude -p --model haiku`).
2. Plak alles onder de lijn uit `prompt.md`. Zet het bericht onderaan in de plaats van het bericht dat er nu staat.
3. Vergelijk de tabel met het juiste antwoord in `test-set.md`.
4. Elke input in een nieuw gesprek.
5. Schrijf het resultaat in `log.md` en in `test-set.md`.
6. Kopieer de tabel en plak hem in Excel.

## Resultaat

9 op 10 juist (n = 10, 1 run, 20 oktober 2026, Haiku 5.5). Fout: T02 = F3. Details in `test-set.md`.

Kost per run: $0,00096 ≈ €0,00086 (Haiku 5.5, mijn deel zonder de context van Claude Code). Details in `kosten.md`.

## Versies

| Versie | Datum | Wat veranderde | Waarom |
|---|---|---|---|
| v1 | 6 oktober 2026 | Eerste prompt: rol, regels, vorm, uitweg (`?`, `geen training`) | week 2 |
| v1 + audit | 7 oktober 2026 | 3 voorbeelden toegevoegd, *want* bij `geen training`, `notitie` wordt samengevat | audit week 3: bouwsteen 4 (voorbeelden) ontbrak |
| v2 | 13 oktober 2026 | Regel: `A x B` zonder apart gewicht in kg = gewicht x reps; zijn A en B gelijk (`12X12`), neem ze allebei over. Oude versie bewaard als `prompt-v1.md` | T10 faalde met F3 |
