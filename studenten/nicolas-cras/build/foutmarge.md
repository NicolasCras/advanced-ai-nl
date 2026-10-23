# Foutmargetest

Gedraaid op 2026-10-21.

- **Model:** Claude Sonnet 5.5 (`claude-sonnet-5-5`), hetzelfde model als mijn testset (zie `posts/week-04.md`). Claude Code 2.1.306.
- **Versies:** `prompt.md` (mijn laatste versie) en `prompt-v4.md` (de versie ervoor). Het enige verschil: de regel dat een training die de sporter "zwaar" noemt als hard telt, ook bij krachttraining. `prompt-v3.md` bestaat niet in `build/` of git (v3 is nooit als apart bestand bewaard), dus `prompt-v4.md` is de versie ervoor.
- **Inputs:** alle tien uit `test-set.md` (T01 t/m T10), 3 runs per versie. Samen 60 runs.
- **Hoe:** elke run een nieuwe, aparte sessie met alleen de prompt en de input, zonder tools: `claude -p --tools "" --model claude-sonnet-5-5 --no-session-persistence --disable-slash-commands --setting-sources ""`, vanuit een lege map (geen `CLAUDE.md`, geen settings). 10 runs tegelijk. De prompt ging via stdin, met `{doel}` en `{notities}` ingevuld. Het model kreeg nooit de verwachte antwoorden.
- **Doel in de prompt:** de kolom Doel uit `test-set.md` (bv. `kracht en snelheid`). Bij T01, T02, T03 en T05 staat in het inputbestand een vrije doelzin; die heb ik vervangen door de kolom Doel en de rest van het bestand als notities genomen. T04 kreeg `geen doel`, met de regel `Focus: gewoon beter worden` als gewone notitie (zoals in het inputbestand).
- **Scoring:** een input is juist als alle zes velden (Belasting, Herstel, Volume, Harde trainingen, Focus, Soort) gelijk zijn aan mijn verwachte antwoord in `test-set.md`. Reden telt niet mee. Bij Soort maakt de volgorde van een combinatie niet uit, en bij Volume telt `meer` als gelijk aan `meer, niet te veel in één keer`. Mijn verwachte antwoorden zijn niet aangepast.

## Score per run

Score = aantal inputs (van 10) waarvan alle zes velden juist zijn.

| Run | v4 (oud) | v5 (laatste) |
|---|---|---|
| Run 1 | 10 op 10 | 9 op 10 |
| Run 2 | 10 op 10 | 9 op 10 |
| Run 3 | 10 op 10 | 10 op 10 |
| **Laagste** | **10 op 10** | **9 op 10** |
| **Hoogste** | **10 op 10** | **10 op 10** |
| Samen | 30 op 30 | 28 op 30 |

Foutmarge: v4 haalde alle drie runs 10 op 10. v5 haalde 9 op 10 in twee van de drie runs en 10 op 10 in de derde. Met deze testset en dit model deed v4 het dus niet slechter dan v5 — in deze 60 runs zelfs iets beter.

## Mijn claim

Mijn claim: "De regel die ik in v5 toevoegde (alleen als de sporter een training 'zwaar' noemt telt ze als hard, ook bij krachttraining) maakt mijn prompt beter dan v4." Bron: `log.md`, rij van 2026-10-11. De claim staat in die vorm niet letterlijk in mijn post van week 4; ik heb ze afgeleid uit het logboek.

Bevestigd of ingetrokken: **ingetrokken**, want de bereiken overlappen. v4 haalde 10–10 op 10, v5 haalde 9–10 op 10 (n = 10, 3 runs per versie, Claude Sonnet 5.5). De laagste score van v5 (9) ligt niet hoger dan de hoogste score van v4 (10). Het verschil valt binnen de foutmarge: niet bewezen dat v5 beter is, en ook niet bewezen dat het slechter is.

## Fouten

Alle fouten zitten in dezelfde input, T07, en in hetzelfde veld (Belasting), allebei bij v5:

| Input | Run | Versie | Veld | Verwacht | Model |
|---|---|---|---|---|---|
| T07 | 1 | v5 | Belasting | zwaar | normaal |
| T07 | 2 | v5 | Belasting | zwaar | normaal |

In beide foute runs telde het model alleen di (duurloop, hartslag niet vermeld) en do (VO2max-intervallen) als hard, en liet het vr (100 km rit, hartslag niet vermeld, "nog zeer vermoeid") buiten de telling: 2 harde in plaats van 3, dus `normaal` in plaats van `zwaar`. In v5 run 3 en in alle drie v4-runs telde het model vr wel mee als twijfelgeval (geen hartslag vermeld, dus volgens de regel "bij twijfel hard"), en kwam het wel op `zwaar`. Dat is wisselend gedrag (F6) op precies dezelfde training, over de drie runs van dezelfde versie.

Alle andere inputs (T01 t/m T06, T08 t/m T10) waren 6 op 6 runs juist, in beide versies. Alle 60 antwoorden hadden precies de zeven regels, zonder extra tekst.

## Aantekeningen

- **Geen verschil aan te wijzen tussen v4 en v5.** De wijziging in v5 (zwaar genoemde krachttraining telt als hard) speelt geen rol in de T07-fout: T07 heeft geen krachttraining, de fout zit in het wel of niet meetellen van een duurtraining als twijfelgeval. Dat de fout alleen bij v5 optrad, lijkt toeval (wisselend modelgedrag) en niet het gevolg van de prompt­wijziging.
- **Kleine steekproef.** 10 inputs, 3 runs per versie, en alle fouten zitten in één input bij één veld. Eén run meer of minder op T07 verandert de rangorde van v4 en v5.
- **Zelfde zwakke plek als eerder.** T07 (de lange-afstandsweek met twee onbekende-hartslag-twijfelgevallen) was ook in eerdere rondes de input waar het model wisselde tussen `zwaar` en `normaal`. Dit blijft de minst stabiele input in mijn testset.

## Kosten

Sonnet 5 en Sonnet 5.5 kosten precies hetzelfde: $2 per miljoen tokens in, $10 per miljoen uit, allebei. Sonnet 5.5 is de opvolger van Sonnet 5 aan dezelfde prijs (zelfde tokenizer, zelfde contextvenster). De keuze tussen die twee verandert dus niets aan de kostprijs in `build/kosten.md` of aan de cijfers in `posts/week-04.md` — enkel het model dat antwoordt verandert, niet wat het kost.
