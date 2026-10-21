# Foutmargetest

Gedraaid op 2026-10-21.

- **Model:** Claude Sonnet 5.5 (`claude-sonnet-5-5`), hetzelfde model als mijn testset (zie `posts/week-04.md`). Claude Code 2.1.306.
- **Versies:** `prompt-v4.md` (v4, de versie ervoor) en `prompt.md` (v5, mijn laatste). Het enige verschil: de regel dat een training die de sporter "zwaar" noemt als hard telt, ook bij krachttraining.
- **Inputs:** alle tien uit `test-set.md` (T01 t/m T10), 3 runs per versie. Samen 60 runs.
- **Hoe:** elke run een nieuwe, aparte sessie met alleen de prompt en de input, zonder tools: `claude -p --tools ""`, vanuit een lege map, zonder sessie bewaren en zonder skills. 10 runs tegelijk. Het model kreeg nooit de verwachte antwoorden.
- **Doel in de prompt:** de kolom Doel uit `test-set.md` (bv. `kracht en snelheid`), voor alle tien. Bij T01 t/m T05 staat in het bestand een vrije doelzin; die heb ik vervangen door de kolom Doel en de rest van het bestand als notities genomen. T04 kreeg `geen doel`.
- **Scoring:** een input is juist als alle zes velden (Belasting, Herstel, Volume, Harde trainingen, Focus, Soort) gelijk zijn aan mijn verwachte antwoord in `test-set.md`. Reden/Waarom telt niet mee. Bij Soort maakt de volgorde van een combinatie niet uit, en bij Volume telt `meer` als gelijk aan `meer, niet te veel in één keer`, zoals ik eerder scoorde. Mijn verwachte antwoorden zijn niet aangepast.

## Score per run

Score = aantal inputs (van 10) waarvan alle zes velden juist zijn. Tussen haakjes: juiste velden van 60.

| Run | v4 | v5 |
|---|---|---|
| Run 1 | 9 op 10 (59/60) | 9 op 10 (59/60) |
| Run 2 | 10 op 10 (60/60) | 9 op 10 (59/60) |
| Run 3 | 10 op 10 (60/60) | 10 op 10 (60/60) |
| **Laagste** | **9 op 10** | **9 op 10** |
| **Hoogste** | **10 op 10** | **10 op 10** |
| Samen | 29 op 30 | 28 op 30 |

De foutmarge is voor beide versies dezelfde: 9 tot 10 op 10. Het verschil tussen v4 en v5 (29 tegenover 28 op 30) zit binnen die marge. Met deze testset kan ik dus niet zeggen dat de ene versie beter is dan de andere.

## Fouten

Alle fouten zitten in één input, T07, en in één veld:

| Input | Run | Versie | Veld | Verwacht | Model | 
|---|---|---|---|---|---|
| T07 | 1 | v4 | Belasting | zwaar | normaal |
| T07 | 1 | v5 | Belasting | zwaar | normaal |
| T07 | 2 | v5 | Belasting | zwaar | normaal |

In de andere runs van T07 telde het model di, do en vr als hard (zwaar, zoals verwacht). In de foute runs telde het alleen di en do: vr (lange duurrit, "gelukt maar nog zeer vermoeid") viel buiten de harde trainingen. Het model bleef dus wisselen (F6) op dezelfde training. Dat gebeurde in 1 van 3 runs bij v4 en in 2 van 3 bij v5.

Alle andere inputs (T01 t/m T06, T08 t/m T10) waren 6 op 6 runs juist, in beide versies. Alle antwoorden hadden precies de zeven regels, zonder extra tekst.

## Aantekeningen

- **Eerste ronde, niet meegeteld.** Mijn eerste ronde gaf bij T01 t/m T05 het vrije doel uit het inputbestand mee. Bij T05 ("Hoge intensiteit combineren met voldoende kracht en een atletische look") zei het model dan in alle 6 runs `onzeker` bij Soort, want dat doel staat niet in de lijst. Ronde 1 gaf v4: 9, 8, 9 op 10 en v5: 8, 9, 9 op 10. Ik heb alles opnieuw gedraaid met de doelcategorie uit de testset, dat is de tabel hierboven. Les: de woorden van het doel in de input bepalen of het model `onzeker` zegt.
- **Verschil met mijn eerdere runs.** In `test-set.md` stonden voor v5 fouten bij T03 (Soort) en T09 (vr niet als hard geteld). Die kwamen in deze 30 runs niet terug. Daarentegen kwam T07 `normaal` nu wel voor, terwijl die eerder 2 op 2 juist was. Dat past bij een model dat soms wisselt, en bij een kleine testset.
- **Kleine steekproef.** 10 inputs, 3 runs, en alle fouten zitten in één input. Eén extra fout of juist antwoord in T07 verandert de rangorde van v4 en v5.
- **Versie ervoor.** `prompt-v3.md` bestaat niet (v3 staat niet in `build/` of git), dus de versie ervoor is `prompt-v4.md`.
