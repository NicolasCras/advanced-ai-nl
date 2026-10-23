# Modeltest

Gedraaid op 2026-10-21 (setups A, B, C) en op 2026-10-22 (setup D).

- **Setups:** A = Claude Opus 5.5 (`claude-opus-5-5`), standaard niveau. B = Claude Sonnet 5.5 (`claude-sonnet-5-5`), standaard niveau. C = Claude Sonnet 5.5, laagste niveau (`--effort low`). D = Claude Haiku 5.5 (`claude-haiku-5-5`), standaard niveau. Claude Code 2.1.306.
- **Prompt:** `prompt.md` (mijn laatste versie, v5).
- **Inputs:** alle tien uit `test-set.md` (T01 t/m T10), 1 run per input per setup. Samen 40 runs.
- **Hoe:** elke run een nieuwe, aparte sessie met alleen de prompt en de input, zonder tools: `claude -p --tools "" --model <model> [--effort low] --no-session-persistence --disable-slash-commands --setting-sources "" --output-format json`, vanuit een lege map (geen `CLAUDE.md`, geen settings). 10 runs tegelijk. De prompt ging via stdin, met `{doel}` en `{notities}` ingevuld, zoals bij de foutmargetest. Het model kreeg nooit de verwachte antwoorden.
- **Scoring:** een input is juist als alle zes velden (Belasting, Herstel, Volume, Harde trainingen, Focus, Soort) gelijk zijn aan mijn verwachte antwoord in `test-set.md`. Reden telt niet mee. Bij Soort maakt de volgorde van een combinatie niet uit, en bij Volume telt `meer` als gelijk aan `meer, niet te veel in één keer`. Mijn verwachte antwoorden zijn niet aangepast.
- **Output-tokens en kost:** uit `usage.output_tokens` en `total_cost_usd` in de JSON-output van elke run. Voor D heb ik de kost herberekend uit de tokens met de prijs van Haiku 5.5 (0,10 dollar in, 0,50 uit, 0,20 cache schrijven, 0,01 cache lezen per miljoen tokens). Dat gaf precies hetzelfde bedrag als `total_cost_usd`, dus de dollars in de output waren voor D juist.

## Mijn gok

Mijn gok stond niet vooraf in dit bestand: ik schreef hem niet op vóór ik de runs draaide. Ik schrijf er achteraf geen in, want dan is het geen gok meer. Dit is een fout in mijn werkwijze, geen resultaat.

## Score per setup

Mijn foutmarge (uit `foutmarge.md`, v5 op Sonnet 5.5 standaard, 3 runs): **9–10 op 10**.

| Setup | Model | Niveau | Score (n = 10, 1 run) | Binnen mijn foutmarge (9–10)? | Gem. output-tokens per run | Kost per run (dollar) | Kost per run (euro) | Per jaar (euro) |
|---|---|---|---:|---|---:|---:|---:|---:|
| A | Opus 5.5 | standaard | 10 op 10 | ja | 434,6 | 0,0409 | 0,037 | 44,17 |
| B | Sonnet 5.5 | standaard | 9 op 10 | ja | 513,8 | 0,0186 | 0,017 | 20,09 |
| C | Sonnet 5.5 | laagste | 9 op 10 | ja | 469,5 | 0,0160 | 0,014 | 17,28 |
| D | Haiku 5.5 | standaard | 8 op 10 | nee, onder het minimum van 9 | 1.349,0 | 0,0018 | 0,0016 | 1,94 |

Per jaar = kost per run in dollar × 0,90 (koers, aanname) × 1.200 runs. 1.200 runs per jaar = 100 runs per maand (25 sporters × 4 weken, zie `kosten.md`) × 12. Dit heb ik berekend uit de ongeronde dollarbedragen, niet gemeten.

## Fouten

A had geen fouten. Fouten van B en C, in dezelfde input, T07, in hetzelfde veld (Belasting):

| Input | Setup | Veld | Verwacht | Model |
|---|---|---|---|---|
| T07 | B | Belasting | zwaar | normaal |
| T07 | C | Belasting | zwaar | normaal |

In beide gevallen telde het model alleen di (duurloop) en do (VO2max-intervallen) als hard, en liet het vr (100 km rit, "nog zeer vermoeid") buiten de telling: 2 harde in plaats van 3, dus `normaal` in plaats van `zwaar`. A (Opus) telde vr wel mee als twijfelgeval en kwam uit op `zwaar`. Dit is dezelfde fout en dezelfde input als in `foutmarge.md` (T07, v5): het model wisselt op dit specifieke twijfelgeval tussen wel en niet meetellen.

Fouten van D (Haiku), twee andere inputs, allebei in het veld Soort:

| Input | Setup | Veld | Verwacht | Model |
|---|---|---|---|---|
| T08 | D | Soort | onzeker | gym |
| T10 | D | Soort | onzeker | lange lage hartslag |

Bij T08 en T10 zijn de andere velden juist. Haiku vulde alleen bij Soort een waarde in waar mijn prompt "onzeker" vraagt ("raad nooit"). D telde bij T07 vr wel mee, en had daar dus de juiste score.

Alle andere inputs waren bij elke setup juist. Alle 40 antwoorden hadden precies de zeven regels, zonder extra tekst.

## Aantekeningen

- **Opus haalde hier de volle score, en met minder output-tokens dan Sonnet op standaard niveau.** Geen vanzelfsprekend resultaat: een groter model hoeft niet meer tokens te gebruiken voor dezelfde taak.
- **Sonnet op laagste niveau scoorde gelijk aan Sonnet op standaard niveau** (9 op 10, beide fout op T07) en gebruikte iets minder output-tokens (469,5 tegenover 513,8).
- **A, B en C vallen alle drie binnen mijn foutmarge (9–10).** Op score zijn ze niet te onderscheiden. De goedkoopste daarvan is C (Sonnet 5.5, laagste niveau).
- **Haiku 5.5 viel buiten mijn foutmarge, met 8 op 10, maar kost ongeveer 10 keer minder dan Sonnet op standaard niveau** (0,0018 tegenover 0,0186 dollar per run). Het was 1 run per input. Eén run meer of minder kan de score van D met 1 of 2 punten veranderen. Zijn twee fouten zitten in hetzelfde veld, Soort, bij de twee inputs waar het juiste antwoord "onzeker" is.
- **Haiku gebruikte veel meer output-tokens** (1.349,0 tegenover 434,6 tot 513,8). Waarom, heb ik niet onderzocht. Het verschil in kost per run blijft toch klein tegenover de lagere prijs.
- **Kleine steekproef, en T07 is de bekende zwakste plek.** 1 run per setup per input; met de 3-runs-per-versie van `foutmarge.md` wisselde v5 op T07 ook al tussen `zwaar` en `normaal` over de runs. Eén run meer of minder op T07 kan de score van B of C veranderen.
- **De foutmarge komt van Sonnet 5.5 op standaard niveau.** Ik pas ze hier ook toe op Opus, Haiku en Sonnet op laagste niveau. Dat is een benadering: voor die setups meet ik de eigen schommeling niet.
- **Kostenvergelijking van Opus en Sonnet staat ook in `kosten.md`.** De cijfers hier zijn dezelfde.
