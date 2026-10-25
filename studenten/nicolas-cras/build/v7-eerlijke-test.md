# Eerlijke test van v7: T31 tot T40

Gedraaid op 2026-10-25. T31 tot T40 waren nooit eerder gedraaid, en de v7-regels zijn er niet op geschreven. Dit is dus een eerlijke test.

- **Inputs:** uit mijn document `T31.docx`. T31 tot T35: zeer vage weken in het Nederlands. T36 tot T40: gelijkaardige weken in het Frans, Spaans, Duits, Italiaans en Portugees.
- **Verwachte antwoorden:** in `test-set.md`, vóór de run aangepast aan `regels.md` (v7). Niet aangepast na de run.
- **Doel:** kracht en snelheid.
- **Model:** Claude Opus 5.5 (`claude-opus-5-5`), standaard niveau. Prompt: `prompt.md` (v7).
- **Hoe:** zelfde methode als `foutmarge.md`, 3 runs per input, samen 30 runs.
- **Ruwe antwoorden:** `runs/opus-v7-t31-t40.md`.

## Score

| Run | Score (n = 10) |
|---|---:|
| Run 1 | 6 op 10 |
| Run 2 | 6 op 10 |
| Run 3 | 5 op 10 |
| **Bereik** | **5–6 op 10** |

Kost: gemiddeld 0,0424 dollar per run, samen 1,27 dollar. Gemiddeld 843,4 output-tokens per run. Alle antwoorden hadden precies de zeven regels.

Ter vergelijking, v7 op Opus: 9–9 op T01 tot T10 en 20–20 op T11 tot T30. Op inputs waarop de regels niet geschreven zijn, scoort v7 dus veel lager.

## Per input

| Input | Taal | Run 1 | Run 2 | Run 3 | Wat ging fout |
|---|---|---|---|---|---|
| T31 | NL | juist | juist | juist | |
| T32 | NL | juist | juist | juist | |
| T33 | NL | juist | juist | juist | |
| T34 | NL | juist | juist | juist | |
| T35 | NL | juist | fout | fout | Belasting zwaar i.p.v. onzeker: ma ("training gedaan") en za ("goeie inspanning") als twijfelgeval hard geteld |
| T36 | FR | juist | fout | fout | Belasting normaal i.p.v. zwaar: alleen wo en za hard, di (loop) en do (zwemmen) niet |
| T37 | ES | fout | fout | fout | Run 1 en 2: belasting onzeker i.p.v. zwaar. Run 3: herstel onvoldoende ("estaba cansado" op de rustdag) |
| T38 | DE | fout | fout | fout | Belasting onzeker i.p.v. zwaar: "alleen wo is zeker hard, de rest is niet te bepalen" |
| T39 | IT | fout | juist | juist | Run 1: belasting onzeker i.p.v. zwaar |
| T40 | PT | fout | juist | fout | Belasting onzeker i.p.v. zwaar: "het kunnen 2 of 3 harde trainingen zijn" |

## Wat opvalt

- **De andere talen zijn geen probleem.** In de redenen vertaalt het model de notities juist ("bastante duro", "ziemlich anstrengend", "correu bem"). De fouten bij T36 tot T40 gaan niet over taal.
- **Bijna alle fouten (12 van de 13 foute runs) gaan over de Belasting, en het model wisselt (F6).** Mijn prompt heeft twee regels die hier botsen:
  - "Bij twijfel kies je de zwaardere optie: een twijfelgeval telt als hard."
  - "Kun je uit de notities niet zien welke dagen hard waren, dan zet je onzeker. Raad nooit."

  Bij een loop zonder tempo of zwemmen zonder afstand kiest het model soms de eerste regel (hard, dus zwaar of normaal) en soms de tweede (onzeker). Bij T35 telde het model vage dagen als hard, terwijl ik daar onzeker verwachtte. Bij T37, T38 en T40 koos het juist onzeker, terwijl ik zwaar verwachtte.
- **Herstel ging bijna altijd goed:** 1 fout in 30 runs (T37, run 3).
- **Mijn eigen grens staat niet in de prompt.** Ik besliste: weet je welke soort training het was (lopen, zwemmen, fietsen) maar niet hoe zwaar, dan is het twijfel en dus hard. Weet je niet eens welke training het was ("beetje getraind", "sport gedaan"), dan is het onzeker. Die grens moet in de prompt.

## Aantekeningen

- **Ik pas mijn verwachte antwoorden niet aan.** Deze run is de eerlijke meting van v7: 5–6 op 10.
- **Pas ik de prompt aan (v8), dan is een nieuwe test nodig** op inputs die ik nog nooit liet draaien. Anders zit ik weer in dezelfde lus als bij T11 tot T30.
