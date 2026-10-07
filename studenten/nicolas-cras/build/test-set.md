# Testset

Het juiste antwoord schrijf ik vooraf, volgens `regels.md`, en voor ik de tool laat draaien. Run 1 en Run 2 vul ik pas daarna in.

| ID | Input | Doel | Belasting | Herstel | Volume | Harde trainingen | Focus | Soort trainingen | Waarom | Run 1 | Run 2 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| T01 | `inputs/t01.txt` | aerobe basis | zwaar | voldoende | minder | 2 | herstel | lange lage hartslag | Herstel voldoende: trainingen lukten zoals gepland. Advies volgens tabel (zwaar + voldoende). Harde trainingen: di (full-body met squats), wo (lange rit, zwaar laatste uur), za (lange bike + brick). 3 hard, dus zwaar. | normaal, voldoende, meer, minstens 2, opbouw, lange lage hartslag (telde 2 harde: di, za) | zwaar, voldoende, minder, 2, herstel, lange lage hartslag (telde 3 harde: di, wo, za) |
| T02 | `inputs/t02.txt` | kracht en snelheid | zwaar | onvoldoende | minder | max 1 | herstel | lange lage hartslag + gym | Herstel onvoldoende: do geschrapt door vermoeidheid, za tempo flink gezakt. Advies volgens tabel (onvoldoende). Gym rustig, met genoeg rust tussen de sets. Harde trainingen: ma (beentraining), di (HYROX), wo (intervallen), za (HYROX-simulatie). 4 hard, dus zwaar. | zwaar, onvoldoende, minder, max 1, herstel, lange lage hartslag + gym | zwaar, onvoldoende, minder, max 1, herstel, lange lage hartslag + gym |
| T03 | `inputs/t03.txt` | spiermassa opbouwen | normaal | voldoende | meer, niet te veel in één keer | minstens 2 | opbouw | gym + lange lage hartslag | Herstel voldoende: trainingen lukten zoals gepland. Advies volgens tabel (normaal + voldoende). Soort: gym en 1 loop- of fietstraining om conditie te behouden; de harde trainingen zijn beentraining. Harde trainingen: alleen vr (beentraining), zwem-intervallen zijn niet hard. 1 hard + 1 rustdag + veel krachtvolume: ik kies normaal. Argument: bij gesplitste spiergroepen (boven, boven, benen) zijn de spieren hersteld voor ze weer nodig zijn. Past niet in de regel normaal = 2 harde, zie regels.md. | normaal, voldoende, meer niet te veel, minstens 2, opbouw, gym + lange lage hartslag (telde do-zwemintervallen als hard) | normaal, voldoende, meer niet te veel, minstens 2, opbouw, gym + lange lage hartslag (telde do-zwemintervallen als hard) |
| T04 | `inputs/t04.txt` | geen doel | onzeker | onzeker | onzeker | onzeker | onzeker | onzeker | Geen soort training genoemd, dus niet te zien welke dagen hard waren. Geen duidelijk signaal over herstel. Geen doel. Alles onzeker, geen gok. | onzeker (alle zes velden) | onzeker (alle zes velden) |
| T05 | `inputs/t05.txt` | kracht en snelheid | zwaar | onvoldoende | minder | max 1 | herstel | lange lage hartslag + gym | Herstel onvoldoende: za zwaar en do geschrapt, terwijl er normaal geen rustdag gepland was. Advies volgens tabel (onvoldoende). Soort zoals week 2: gym rustig met genoeg rust tussen de sets. Harde trainingen: ma (HYROX), wo (intervallen), vr (full-body met compound lifts), za (HYROX-simulatie). 4 hard, dus zwaar. | zwaar, onvoldoende, minder, max 1, herstel, lange lage hartslag + gym | zwaar, onvoldoende, minder, max 1, herstel, lange lage hartslag + gym |


## Na aanpassing prompt (v2)

In v1 gaf T01 run 1 een fout antwoord: de lange zone-2 rit met zwaar laatste uur telde niet mee als hard. Ik heb in `prompt.md` twee regels toegevoegd (full-body met squats is beentraining; een lange rustige training met een zwaar deel is hard). De v1-prompt staat in `prompt-v1.md`.

T01 opnieuw gedraaid, drie runs in nieuwe gesprekken: alle drie zwaar, voldoende, minder, 2, herstel, lange lage hartslag, met 3 geteld harde trainingen (di, wo, za). Dat klopt met mijn antwoord.

T02 tot en met T05 ook opnieuw gedraaid met v2, elk twee keer in nieuwe gesprekken (8 runs):

| Input | v2 run 1 | v2 run 2 | Klopt met mijn antwoord? |
|---|---|---|---|
| T02 | zwaar, onvoldoende, minder, max 1, herstel, lange lage hartslag + gym | hetzelfde | ja, beide |
| T03 | normaal, voldoende, meer niet te veel, minstens 2, opbouw, gym + lange lage hartslag | hetzelfde | ja, beide (maar zie hieronder) |
| T04 | onzeker (alle zes velden) | onzeker (alle zes velden) | ja, beide |
| T05 | zwaar, onvoldoende, minder, max 1, herstel, lange lage hartslag + gym | hetzelfde | ja, beide |

Totaal met v2: 11 van 11 runs komen overeen met mijn antwoord.

Let op bij T03: het model telt de zwem-intervallen van donderdag als hard (twijfelgeval, dus hard), terwijl ik zei dat die niet hard zijn. Het antwoord klopt dus voor een andere reden dan de mijne. Mijn eigen telling (1 harde training) past niet in mijn geschreven regel voor normaal (2 harde). Dit blijft een open punt in `regels.md`.

## T03 opgelost (v3)

Beslissing: een week met 1 harde training en 3 of meer krachttrainingen is normaal (gesplitste spiergroepen herstellen tussen de sessies). Daarnaast staat nu expliciet in de prompt dat een technische zwemtraining met korte intervallen niet hard is. Beide staan in `regels.md` en `prompt.md`. De v2-prompt staat in `prompt-v2.md`.

T03 opnieuw gedraaid, twee runs in nieuwe gesprekken: beide normaal, voldoende, meer niet te veel, minstens 2, opbouw, gym + lange lage hartslag. Het model telt nu 1 harde training (vr, beentraining) naast 3 krachttrainingen. Het antwoord klopt nu ook om de goede reden.

T01, T02, T04 en T05 zijn niet opnieuw gedraaid met v3. Ze hebben geen week met 3 of meer krachttrainingen en 1 harde training, maar dat is niet getest.
