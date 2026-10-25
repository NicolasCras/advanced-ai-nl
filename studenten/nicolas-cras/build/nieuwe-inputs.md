# Nieuwe inputs T11 tot T30

Gedraaid op 2026-10-23. Dit is een aparte meting (n = 20), niet te vergelijken met mijn oude testset (n = 10, T01 tot T10).

- **Inputs:** T11 tot T30 = week 1 tot 20 uit `20_weken_trainingsdagboek.docx` (aangeleverd door mij; hoe het bestand gemaakt is: nog in te vullen). Letterlijk overgenomen in `inputs/t11.txt` tot `inputs/t30.txt`. Alleen de terugblik-zin op zondag van week 20 (T30) is weggehaald.
- **Verwachte antwoorden:** door mij geschreven in `test-set.md`, vóór de runs. Niet aangepast nadat ik de uitvoer zag.
- **Doel:** bij alle twintig `kracht en snelheid`.
- **Model:** Claude Opus 5.5 (`claude-opus-5-5`), standaard niveau. Claude Code 2.1.306.
- **Prompt:** `prompt.md` (v5).
- **Hoe:** zelfde methode als `foutmarge.md` en `modellen.md`: elke run een nieuwe, aparte sessie met alleen de prompt en de input, zonder tools (`claude -p --tools "" --model claude-opus-5-5 --no-session-persistence --disable-slash-commands --setting-sources "" --output-format json`), vanuit een lege map. 10 runs tegelijk. 3 runs per input, samen 60 runs.
- **Scoring:** zoals in `foutmarge.md`: juist als alle zes velden gelijk zijn aan mijn verwachte antwoord. Reden telt niet mee. Volgorde in Soort maakt niet uit, `meer` = `meer, niet te veel in één keer`.
- **Ruwe antwoorden:** `runs/opus-t11-t30.md`.

## Score per run

| Run | Score (n = 20) |
|---|---:|
| Run 1 | 8 op 20 |
| Run 2 | 8 op 20 |
| Run 3 | 7 op 20 |
| **Bereik** | **7–8 op 20** |
| Samen | 23 op 60 |

Kost: gemiddeld 0,0341 dollar per run (0,031 euro), samen 2,05 dollar. Gemiddeld 749,6 output-tokens per run. Alle 60 antwoorden hadden precies de zeven regels.

## Per input

| Input | Verwacht (Belasting, Herstel) | Run 1 | Run 2 | Run 3 | Waar het verschil zit |
|---|---|---|---|---|---|
| T11 | normaal, voldoende | fout | fout | fout | Belasting: za (55 km, geen hartslag) telt als twijfelgeval hard |
| T12 | zwaar, onvoldoende | juist | juist | juist | |
| T13 | normaal, voldoende | fout | fout | fout | Belasting: di (duur en tempo onbekend) telt als hard. Herstel: zo niet getraind door slecht slapen = onvoldoende |
| T14 | zwaar, voldoende | fout | fout | fout | Herstel: onzeker (geen duidelijk signaal) |
| T15 | normaal, voldoende | fout | fout | fout | Belasting: vr ("laatste set zwaar") en za (90 km) tellen als hard. Herstel: onzeker |
| T16 | zwaar, voldoende | juist | juist | juist | |
| T17 | zwaar, voldoende | juist | juist | juist | |
| T18 | normaal, voldoende | fout | fout | fout | Belasting: di (8 km, tempo onbekend) telt als hard. Herstel: onzeker |
| T19 | normaal, onvoldoende | fout | fout | fout | Belasting: di (145 bpm), do (10x100 m) en/of za (85 km) tellen als hard |
| T20 | zwaar, voldoende | fout | fout | fout | Herstel: onzeker |
| T21 | zwaar, voldoende | fout | juist | fout | Herstel: onzeker in run 1 en 3 |
| T22 | zwaar, onvoldoende | juist | juist | juist | |
| T23 | normaal, voldoende | fout | fout | fout | Belasting: do (4x200 m sneller) en za (110 km) tellen als hard |
| T24 | zwaar, onvoldoende | juist | fout | fout | Herstel: onzeker in run 2 en 3 |
| T25 | zwaar, voldoende | juist | juist | juist | |
| T26 | zwaar, onvoldoende | juist | juist | juist | |
| T27 | zwaar, voldoende | juist | juist | juist | |
| T28 | zwaar, onvoldoende | fout | fout | fout | Herstel: voldoende (run 1 en 3, "stop door de kou is geen herstelprobleem") of onzeker (run 2) |
| T29 | zwaar, voldoende | fout | fout | fout | Herstel: onvoldoende, want vr minder volume door vermoeidheid |
| T30 | licht, voldoende | fout | fout | fout | Belasting: ma (beentraining) en wo (HYROX) tellen altijd als hard, vr als twijfelgeval: zwaar. Herstel: onzeker |

7 inputs waren in alle 3 runs juist: T12, T16, T17, T22, T25, T26, T27.

## Wat opvalt

- **De fouten zijn bijna altijd dezelfde in alle 3 runs.** 17 van de 20 inputs gaven in elke run hetzelfde resultaat. Alleen T21, T24 en T28 wisselden (F6). De lage score komt dus niet door toeval, maar door een vast verschil tussen mijn verwachte antwoorden en wat de prompt zegt.
- **Belasting te hoog (T11, T13, T15, T18, T19, T23, T30, samen 21 runs).** Het model volgt de regel "bij twijfel kies je de zwaardere optie: een twijfelgeval telt als hard" uit mijn prompt. Bij die inputs koos ik zelf "niet hard" voor ritten zonder hartslag, loopjes zonder tempo, zwemtrainingen met snellere stukken en een "laatste set zwaar". Mijn verwachte antwoorden volgen daar mijn eigen regel niet.
- **T30 (mijn enige lichte week).** Mijn prompt zegt dat beentraining altijd hard is en noemt HYROX een harde training. Dat de sporter "bewust niet te zwaar" en "niet maximaal gegaan" schrijft, staat niet als uitzondering in de prompt.
- **Herstel onzeker in plaats van voldoende (T14, T15, T18, T20, T21, T24, T30).** Het model leest "er staat geen klacht" niet als `voldoende`, maar als "de notities zeggen er niets duidelijks over", dus `onzeker`. Ik telde "niets geschrapt, geen klachten" wel als voldoende. Mijn prompt maakt dat verschil niet duidelijk.
- **Herstel strenger dan ik (T13, T29).** "Zondag niet gaan trainen door slecht slapen" en "minder volume omdat ik vermoeid was" telt het model als onvoldoende, volgens de regel "trainingen werden niet goed uitgevoerd of geschrapt omdat hij niet hersteld was". Ik koos voldoende.

## Aantekeningen

- **Ik pas mijn verwachte antwoorden niet aan voor deze run.** Vind ik bij sommige inputs dat het model gelijk heeft, dan noteer ik dat in `log.md` en pas ik het aan vóór de volgende run, nooit voor deze.
- **Alle inputs komen van één sporter en hebben hetzelfde doel.** Er is maar 1 lichte week en geen enkele volledig onzekere week.
- **Alleen Opus getest.** Hoe Sonnet 5.5 of Haiku 5.5 het op deze inputs doen: nog niet gemeten.

## v6, met herziene verwachte antwoorden

Gedraaid op 2026-10-23, zelfde methode en zelfde inputs als hierboven, maar met `prompt.md` v6 (oude versie: `prompt-v5.md`) en met de verwachte antwoorden die ik na de eerste run herzag (zie `log.md`). Ruwe antwoorden: `runs/opus-v6-t11-t30.md`.

Omdat ik zowel de prompt als de verwachte antwoorden veranderde, heb ik de v5-antwoorden van hierboven opnieuw nagekeken tegen de herziene verwachte antwoorden. Zo vergelijk ik v5 en v6 met dezelfde meetlat.

| Versie | Run 1 | Run 2 | Run 3 | Bereik (n = 20) |
|---|---:|---:|---:|---:|
| v5, oude verwachte antwoorden (de eerste meting) | 8 | 8 | 7 | 7–8 |
| v5, herziene verwachte antwoorden | 14 | 14 | 13 | 13–14 |
| v6, herziene verwachte antwoorden | 16 | 17 | 16 | 16–17 |

Kost v6: gemiddeld 0,0314 dollar per run, samen 1,89 dollar. Gemiddeld 616,2 output-tokens per run. Alle 60 antwoorden hadden precies de zeven regels.

- **Van 7–8 naar 13–14 komt door mijn herziene verwachte antwoorden**, niet door het model. Ik paste ze aan nadat ik de modelantwoorden zag. Dat is zwak bewijs.
- **Van 13–14 naar 16–17 komt door de v6-prompt.** De bereiken overlappen niet, dus met deze meetlat is v6 beter dan v5. Let op: ik schreef de nieuwe regels en signaalwoorden op basis van precies deze 20 inputs. Op nieuwe inputs kan het anders uitvallen.
- **v6 loste op:** T14, T18, T20, T21, T24, T28 en T30 (herstel en de lichte week).

Fouten van v6:

| Input | Fout | Runs | Waarom |
|---|---|---|---|
| T13 | Belasting normaal i.p.v. zwaar | 1 van 3 | di (duur en tempo onbekend) niet als twijfelgeval geteld (F6) |
| T15 | Herstel voldoende (2×) of onvoldoende (1×) i.p.v. onzeker | 3 van 3 | "goeie training vandaag" op ma is een signaal voor voldoende, "laatste rondes waren traag" leest het model 1 keer als onvoldoende |
| T17 | Herstel onvoldoende i.p.v. voldoende | 3 van 3 | "was echt kapot" (wo) en stijve schouders en rug (vr): "kapot" staat in de lijst voor onvoldoende, en bij signalen voor allebei kiest het model onvoldoende |
| T23 | Herstel onvoldoende i.p.v. voldoende | 1 van 3 | "benen zwaar maar geen pijn" (zo) gelezen als signaal voor onvoldoende |
| T25 | Herstel onvoldoende i.p.v. voldoende | 3 van 3 | "vermoeidheid in mijn kuiten" (di) wint van "herstel was ok", volgens de regel "bij signalen voor allebei: onvoldoende" |

Bij T15, T17 en T25 volgt het model mijn nieuwe herstelregels. Mijn verwachte antwoorden spreken die regels daar tegen.
