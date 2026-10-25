# v7 op allebei de sets

Gedraaid op 2026-10-23.

- **Versie:** `prompt.md` (v7): de HYROX/beentraining-regel van v6, met een mildere herstelregel (zie `log.md`). Oude versies: `prompt-v5.md`, `prompt-v6.md`.
- **Model:** Claude Opus 5.5 (`claude-opus-5-5`), standaard niveau.
- **Inputs:** T01 tot T10 (oude testset, verwachte antwoorden niet aangepast) en T11 tot T30 (nieuwe inputs, verwachte antwoorden drie keer herzien na het zien van modelantwoorden, zie `log.md`).
- **Hoe:** zelfde methode als `foutmarge.md`, 3 runs per input, samen 90 runs.
- **Ruwe antwoorden:** `runs/opus-v7-t01-t10.md` en `runs/opus-v7-t11-t30.md`.

## Score, alle versies op Opus 5.5

Elke rij is nagekeken tegen de verwachte antwoorden zoals ze nu in `test-set.md` staan.

| Versie | T01 tot T10 (n = 10) | T11 tot T30 (n = 20) |
|---|---:|---:|
| v5 | 10, 10, 10 (bereik 10–10) | niet opnieuw nagekeken met de laatste antwoorden |
| v6 | 7, 8, 7 (bereik 7–8) | niet opnieuw nagekeken met de laatste antwoorden |
| v7 | 9, 9, 9 (bereik 9–9) | 20, 20, 20 (bereik 20–20) |

Kost v7: gemiddeld 0,0271 dollar per run op T01 tot T10, 0,0324 dollar per run op T11 tot T30. Samen 2,76 dollar voor 90 runs. Alle antwoorden hadden precies de zeven regels.

## De enige fout van v7

| Input | Fout | Runs | Waarom |
|---|---|---|---|
| T04 | Herstel voldoende i.p.v. onzeker | 3 van 3 | "ging beter dan verwacht" (di) en "goede sessie" lezen als positieve signalen. Sinds v6 staat in de prompt dat zulke woorden voldoende betekenen. Mijn verwachte antwoord (alles onzeker) dateert van week 3. |

De andere velden van T04 waren juist (onzeker). T07, de input die in eerdere tests wisselde, was in alle 3 runs juist.

## Wat dit betekent

- **Op T01 tot T10 is v7 net iets slechter dan v5** (9–9 tegenover 10–10, geen overlap), en veel beter dan v6 (7–8). Het verschil met v5 is één input, T04, die in elke run op dezelfde manier fout gaat.
- **20 op 20 op T11 tot T30 zegt weinig.** Ik paste daar de verwachte antwoorden drie keer aan nadat ik de modelantwoorden zag, en ik schreef de regels op basis van precies die inputs. Het juiste antwoord is daardoor dicht bij wat het model zegt gekomen.
- **Een eerlijke test van v7 vraagt nieuwe inputs** die ik nog nooit liet draaien, met het juiste antwoord vooraf.
