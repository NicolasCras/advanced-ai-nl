# Testset — Trainingsnotities

Vanaf v4 in voorbereiding wordt input 7 met het verwachte antwoord als voorbeeld in de prompt opgenomen, op keuze van Cansu. Houd nieuwe tests van deze input apart van tests op ongeziene inputs. De eerdere resultaten horen bij de toen gebruikte versies en blijven bewaard.

Zes echte trainingsnotities van Cansu. De verwachte antwoorden komen uit haar eigen notities en verduidelijkingen. Cansu bevestigde dat `4 x 12` betekent: 4 sets en 12 herhalingen per set. De antwoorden zijn vastgelegd vóór de AI wordt getest.

| Nr. | Originele input | Oefening | Gewicht | Sets | Herhalingen per set |
|---|---|---|---|---|---|
| 1 | bulgarian split squat, 20kg, 4 sets, 12 reps | bulgarian split squat | 20kg | 4 | 12 |
| 2 | RDL, 40kg, 4 sets, 12 reps | RDL | 40kg | 4 | 12 |
| 3 | cable kickbaks, 15kg, 4 sets, 12 reps | cable kickbaks | 15kg | 4 | 12 |
| 4 | hip thrusts, 60kg, 4 x 12 | hip thrusts | 60kg | 4 | 12 |
| 5 | seated hamstring curl, 20kg, 4 x 12 | seated hamstring curl | 20kg | 4 | 12 |

## Input 6 — extra set tot failure

Originele input, na correctie door Cansu:

> cable strght arm pull down 20kg 3x12 + laatste set tot faillure

Cansu verduidelijkt dat ze drie sets van 12 deed, plus een extra vierde set waarin ze doorging tot ze niet meer kon. Het exacte aantal herhalingen in de vierde set weet ze niet.

Verwacht antwoord op basis van Cansu's verduidelijking:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| cable strght arm pull down | 20kg | 4 | 12, 12, 12, onbekend |

Let op bij de beoordeling: de oorspronkelijke formulering is dubbelzinnig over het totale aantal sets. Het bedoelde antwoord is vastgelegd, maar Cansu's verduidelijking wordt niet meegestuurd bij de test. Een antwoord met `onbekend` voor sets moet daarom worden beoordeeld in het licht van de instructie om bij onduidelijkheid niet te gokken.

Eerste run, antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| cable strght arm pull down | 20kg | 3 | 12 + laatste set tot faillure |

Oefening en gewicht komen overeen. Sets en herhalingen wijken af van het bedoelde antwoord: Cansu deed vier sets, met een onbekend aantal herhalingen in de vierde. De input is dubbelzinnig over het aantal sets.

Cansu beoordeelt deze run als **F1 — verkeerd antwoord**: "er wordt letterlijk vermeld dat ik maar 3 sets heb gedaan en de laatste kolom lost dit ook niet op, het is precies ik maar 2 sets van 12 heb gedaan en dan een set tot faillure".

Tweede run, antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| cable strght arm pull down | 20kg | 3 | 12, laatste set tot faillure |

Ook deze run valt onder Cansu's beoordeling **F1 — verkeerd antwoord**: opnieuw drie sets in plaats van de bedoelde vier, zonder een onbekend aantal herhalingen voor de extra vierde set. De tekst in de laatste cel verschilt (`+` versus een komma), maar de inhoudelijke fout blijft gelijk; dit is op zichzelf geen inhoudelijke F6-fout.

Score over alle uitgevoerde runs: 10 van 12 correct (83,3%), op zes unieke inputs, elk tweemaal getest. Twee runs met F1, beide bij input 6. Beperking: de oorspronkelijke input 6 is dubbelzinnig; het bedoelde antwoord berust mede op Cansu's verduidelijking.

## Input 6b — duidelijkere formulering door Cansu

> cable straight arm pull down, 20kg, 3 sets van 12 reps + 1 set tot faillure

Dit is een herschrijving van input 6, geen nieuwe training. Cansu vermeldt nu expliciet de extra set. Het verwachte antwoord is vooraf vastgelegd:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| cable straight arm pull down | 20kg | 4 | 12, 12, 12, onbekend |

Eerste run, antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| cable straight arm pull down | 20kg | 4 | 12, 12, 12, tot faillure |

Oefening, gewicht, aantal sets en de eerste drie herhalingsaantallen komen overeen. Voor de vierde set staat `tot faillure` in plaats van het vooraf vastgelegde `onbekend`. Beoordeling door Cansu nog te bepalen; tweede run nog uit te voeren. Gebruik dezelfde prompt v1. Houd de resultaten van deze variant apart van de oorspronkelijke zes inputs.

## Verwachte antwoorden voor prompt v2 — vóór nieuwe tests

Cansu kiest ervoor om informatie over trainen tot failure te behouden, zonder een aantal herhalingen te verzinnen. De oude verwachte antwoorden en resultaten hierboven blijven bij v1 horen.

- Inputs 1–5: verwachte antwoorden blijven gelijk.
- Input 6: het bedoelde aantal sets blijft 4, met herhalingen `12, 12, 12, tot failure (aantal onbekend)`. De eerder vastgelegde dubbelzinnigheid over het aantal sets blijft gelden.
- Input 6b: verwacht antwoord hieronder. Deze duidelijke variant wordt eerst met v2 getest; resultaten blijven apart van de oorspronkelijke testset.

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| cable straight arm pull down | 20kg | 4 | 12, 12, 12, tot failure (aantal onbekend) |

De wijziging is een nieuwe uitvoerafspraak, geen bewijs dat v1 achteraf correct was. De tweede run van variant 6b met v1 is nog niet uitgevoerd.

## Testresultaten v2

Variant 6b, eerste run, antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| cable straight arm pull down | 20kg | 4 | 12, 12, 12, tot failure (aantal onbekend) |

Alle velden en de tabelvorm komen overeen met het vooraf vastgelegde antwoord voor v2.

Variant 6b, tweede run, antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| cable straight arm pull down | 20kg | 4 | 12, 12, 12, tot failure (aantal onbekend) |

Beide runs correct en identiek: 2/2 op één inputvariant. Dit resultaat betreft de duidelijkere inputvariant én de nieuwe uitvoerafspraak; het bewijst niet dat de fout bij de oorspronkelijke input 6 is opgelost.

Input 1, eerste run met v2, antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| bulgarian split squat | 20kg | 4 | 12 |

Alle vier velden en de tabelvorm correct.

Input 1, tweede run met v2, antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| bulgarian split squat | 20kg | 4 | 12 |

Beide runs voor input 1 correct en identiek. Inputs 2–6 nog niet getest met v2. Voorlopig 4/4 runs correct, op input 1 en variant 6b, elk tweemaal getest; deze beperkte score blijft apart van de v1-resultaten.

Input 2, eerste run met v2, antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| RDL | 40kg | 4 | 12 |

Alle vier velden en de tabelvorm correct.

Input 2, tweede run met v2, antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| RDL | 40kg | 4 | 12 |

Beide runs voor input 2 correct en identiek. Inputs 3–6 nog niet getest met v2. Actuele voorlopige score v2: 6/6 runs correct, op inputs 1, 2 en variant 6b, elk tweemaal getest.

Input 3, eerste run met v2, antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| cable kickbaks | 15kg | 4 | 12 |

Alle vier velden en de tabelvorm correct.

Input 3, tweede run met v2, antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| cable kickbaks | 15kg | 4 | 12 |

Beide runs voor input 3 correct en identiek. Inputs 4–6 nog niet getest met v2. Actuele voorlopige score v2: 8/8 runs correct, op inputs 1, 2, 3 en variant 6b, elk tweemaal getest.

Input 4, eerste run met v2, antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| hip thrusts | 60kg | 4 | 12, 12, 12, 12 |

Inhoudelijk correct: vier sets van twaalf herhalingen, zoals vooraf vastgelegd. De uitsplitsing per set is een andere weergave van dezelfde gegevens. Cansu zegt na deze run: "ik vind deze eigenlijk beter". Deze voorkeur is na de test genoteerd; het oorspronkelijke verwachte antwoord blijft bewaard. Zowel `12` per set als `12, 12, 12, 12` wordt inhoudelijk geaccepteerd bij vier sets van twaalf. De prompt v2 is niet gewijzigd.

Input 4, tweede run met v2, antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| hip thrusts | 60kg | 4 | 12, 12, 12, 12 |

Beide runs voor input 4 inhoudelijk correct en identiek. Inputs 5 en 6 nog niet getest met v2. Actuele voorlopige score v2: 10/10 runs correct, op inputs 1–4 en variant 6b, elk tweemaal getest.

Input 5, eerste run met v2, antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| seated hamstring curl | 20kg | 4 | 12, 12, 12, 12 |

Alle vier velden en de tabelvorm inhoudelijk correct. De uitsplitsing is gelijkwaardig aan twaalf herhalingen per set, volgens de vastgelegde acceptatie van beide schrijfwijzen.

Input 5, tweede run met v2, antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| seated hamstring curl | 20kg | 4 | 12, 12, 12, 12 |

Beide runs voor input 5 inhoudelijk correct en identiek. Actuele voorlopige score v2: 12/12 runs correct, op inputs 1–5 en variant 6b, elk tweemaal getest. Oorspronkelijke input 6 nog niet getest met v2; deze score is daarom niet rechtstreeks vergelijkbaar met de v1-score op inputs 1–6.

Input 6 (oorspronkelijke formulering), eerste run met v2, antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| cable straight arm pull down | 20kg | 4 | 12, 12, 12, tot failure (aantal onbekend) |

Gewicht, sets en herhalingen komen overeen met het vooraf vastgelegde bedoelde antwoord voor v2. De oefennaam is gewijzigd van `cable strght arm pull down` naar `cable straight arm pull down`, ondanks de instructie de naam letterlijk over te nemen. Beoordeling en foutclassificatie door Cansu nog te bepalen; tweede run nog uit te voeren. De oorspronkelijke input blijft dubbelzinnig. Geen nieuwe totaalscore vastgesteld zolang deze run nog niet is beoordeeld.

## Verwachte antwoorden voor prompt v3 — vóór nieuwe tests

Cansu kiest ervoor duidelijke spelfouten in oefennamen te laten verbeteren. V3 behoudt de failure-regel van v2. De eerdere verwachte antwoorden en resultaten blijven bij hun eigen promptversies horen; het antwoord op input 6 met v2 wordt niet achteraf als een geslaagde v3-test beschouwd.

Wijzigingen ten opzichte van de verwachte antwoorden voor v2:

- Input 3: oefennaam `cable kickbacks` in plaats van `cable kickbaks`; overige gegevens blijven gelijk.
- Input 6: oefennaam `cable straight arm pull down` in plaats van `cable strght arm pull down`; overige bedoelde gegevens blijven gelijk. De eerder vastgelegde dubbelzinnigheid over het aantal sets blijft gelden.
- Inputs 1, 2, 4, 5 en variant 6b: verwachte antwoorden blijven gelijk. Beide inhoudelijk gelijkwaardige schrijfwijzen voor twaalf herhalingen per set blijven toegestaan.

V3 nog niet getest. Begin met de oorspronkelijke input 6. Het vooraf vastgelegde bedoelde antwoord is:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| cable straight arm pull down | 20kg | 4 | 12, 12, 12, tot failure (aantal onbekend) |

## Testresultaten v3

Oorspronkelijke input 6, eerste run, antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| cable straight arm pull down | 20kg | 4 | 12, 12, 12, tot failure (aantal onbekend) |

Alle velden en de tabelvorm komen overeen met het vooraf vastgelegde bedoelde antwoord voor v3. De spelfout is verbeterd volgens de nieuwe regel.

Oorspronkelijke input 6, tweede run, antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| cable straight arm pull down | 20kg | 4 | 12, 12, 12, tot failure (aantal onbekend) |

Beide runs correct ten opzichte van Cansu's bedoelde antwoord en identiek: 2/2 runs op één input. De oorspronkelijke input blijft dubbelzinnig over het aantal sets. Dit beperkte resultaat is geen bewijs van algemene betrouwbaarheid. Overige inputs nog niet getest met v3.

Input 3, eerste run met v3, antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| cable kickbacks | 15kg | 4 | 12 |

Alle vier velden en de tabelvorm correct volgens het vooraf vastgelegde antwoord voor v3. De spelfout `kickbaks` is verbeterd naar `kickbacks`.

Input 3, tweede run met v3, antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| cable kickbacks | 15kg | 4 | 12 |

Beide runs voor input 3 correct en identiek. Voorlopig 4/4 runs correct met v3, op inputs 3 en 6, elk tweemaal getest. Inputs 1, 2, 4, 5 en variant 6b nog niet getest met v3. De eerder vastgelegde dubbelzinnigheid bij input 6 blijft gelden.

Input 1, eerste run met v3, antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| Bulgarian split squat | 20kg | 4 | 12 |

Inhoudelijk correct: alleen de beginhoofdletter verschilt van het verwachte antwoord, zonder betekenisverschil. Gewicht, sets, herhalingen en tabelvorm correct.

Input 1, tweede run met v3, antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| Bulgarian split squat | 20kg | 4 | 12 |

Beide runs voor input 1 correct en identiek. Voorlopig 6/6 runs correct met v3, op inputs 1, 3 en 6, elk tweemaal getest. Inputs 2, 4, 5 en variant 6b nog niet getest met v3.

Input 2, eerste run met v3, antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| RDL | 40kg | 4 | 12 |

Alle vier velden en de tabelvorm correct volgens het vooraf vastgelegde antwoord voor v3.

Input 2, tweede run met v3, antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| RDL | 40kg | 4 | 12 |

Beide runs voor input 2 correct en identiek. Voorlopig 8/8 runs correct met v3, op inputs 1, 2, 3 en 6, elk tweemaal getest. Inputs 4, 5 en variant 6b nog niet getest met v3.

Input 4, eerste run met v3, antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| hip thrusts | 60kg | 4 | 12 |

Alle vier velden en de tabelvorm inhoudelijk correct. `12` per set en `12, 12, 12, 12` zijn beide toegestaan volgens de eerder vastgelegde afspraak; Cansu geeft de voorkeur aan de uitsplitsing.

Input 4, tweede run met v3, antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| hip thrusts | 60kg | 4 | 12 |

Beide runs voor input 4 correct en identiek. Voorlopig 10/10 runs correct met v3, op inputs 1–4 en 6, elk tweemaal getest. Input 5 en variant 6b nog niet getest met v3.

Input 5, eerste run met v3, antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| seated hamstring curl | 20kg | 4 | 12 |

Alle vier velden en de tabelvorm inhoudelijk correct. De verkorte schrijfwijze voor twaalf herhalingen per set voldoet aan de eerder vastgelegde afspraak.

Input 5, tweede run met v3, antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| seated hamstring curl | 20kg | 4 | 12 |

Beide runs voor input 5 correct en identiek. V3: 12/12 runs correct (100%) op zes oorspronkelijke inputs, elk tweemaal getest, volgens de verwachte antwoorden voor v3. Geen wisselende antwoorden waargenomen. Variant 6b nog niet getest met v3. Beperkingen: kleine testset, vijf vergelijkbare volledige notities, dubbelzinnige input 6 en gewijzigde uitvoerafspraken ten opzichte van v1. De scores van v1 en v3 zijn daarom geen zuivere vergelijking onder dezelfde beoordelingsregels.

## Input 7 — ontbrekend gewicht

Originele input van Cansu:

> Dumbbell Row (Single‑Arm), 4 x 15

Verwacht antwoord voor v3, door Cansu bevestigd vóór de test:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| Dumbbell Row (Single‑Arm) | onbekend | 4 | 15 |

Vijftien herhalingen per set; een uitsplitsing als `15, 15, 15, 15` is inhoudelijk gelijkwaardig. Het gewicht ontbreekt en mag niet worden aangevuld.

Eerste run met v3, antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| Dumbbell Row (Single‑Arm) | onbekend | 4 | 15 |

Alle vier velden en de tabelvorm correct; geen gewicht verzonnen.

Tweede run met v3, antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| Dumbbell Row (Single‑Arm) | onbekend | 4 | 15 |

Beide runs voor input 7 correct en identiek. Actuele score v3: 14/14 runs correct (100%), op zeven inputs, elk tweemaal getest. Geen wisselende antwoorden waargenomen. De testset blijft klein; de eerder vastgelegde dubbelzinnigheid bij input 6 blijft gelden.

## Input 8 — verschillende gewichten, alle sets tot failure

Originele input van Cansu:

> dumbbell pullover, eerst 10kg, dan 12, dan 14 3xtot faillure

Cansu bevestigt vóór de test: drie sets totaal, achtereenvolgens met 10 kg, 12 kg en 14 kg. Alle sets tot failure; aantallen herhalingen niet bijgehouden.

Verwacht antwoord voor v3 op basis van haar bevestiging:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| dumbbell pullover | 10kg, 12, 14 | 3 | tot failure (aantal onbekend), tot failure (aantal onbekend), tot failure (aantal onbekend) |

De prompt vraagt de genoemde eenheden over te nemen en geen ontbrekende eenheden toe te voegen. Daarom worden `12` en `14` in het verwachte antwoord zonder toegevoegde `kg` weergegeven, hoewel Cansu bevestigt dat ze kilogram bedoelt. Gewichten moeten in volgorde behouden blijven. Een samenvatting die expliciet alle drie sets tot failure met onbekende aantallen vermeldt, is inhoudelijk gelijkwaardig.

Eerste run met v3, antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| dumbbell pullover | 10kg, 12, 14 | 3 | tot failure |

Oefening, gewichten en sets correct. Bij herhalingen ontbreekt de voorgeschreven vermelding `aantal onbekend`; de tekst splitst de drie sets ook niet uit.

Cansu beoordeelt deze run als **F4 — juiste inhoud, verkeerde uitvoervorm**: "de info op zich niet mis is, het is gewoon niet genoteerd op de manier dat wij hebben afgesproken".

Tweede run met v3, antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| dumbbell pullover | 10kg, 12, 14 | 3 | tot failure (aantal onbekend), tot failure (aantal onbekend), tot failure (aantal onbekend) |

Tweede run correct: alle velden en de afgesproken uitvoer komen overeen. Eerste run F4 volgens Cansu's beoordeling. **F6 — wisselend** waargenomen bij het runpaar: dezelfde input en prompt geven eenmaal een afwijkende en eenmaal een conforme uitvoer. F6 is een aanvullende observatie van herhaalbaarheid, geen extra mislukte run bovenop F4.

Actuele score v3: 15/16 runs voldoen aan inhoud én afgesproken uitvoer (93,75%), op acht inputs, elk tweemaal getest. Eén run met F4; één input met wisselende naleving van de uitvoerregel (F6). Kleine testset en dubbelzinnigheid van input 6 blijven beperkingen.

## Input 9 — ontbrekende herhalingen en laatste set tot failure

Originele input van Cansu:

> faceplls, 30kg, 4, laatste set tot faillure

Cansu bevestigt vóór de test: vier sets totaal met 30 kg, de laatste tot failure. Voor geen van de sets is het aantal herhalingen genoteerd.

Verwacht antwoord voor v3 op basis van haar bevestiging en de afgesproken spellingcorrectie:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| facepulls | 30kg | 4 | onbekend, onbekend, onbekend, tot failure (aantal onbekend) |

Een gelijkwaardige weergave zoals `eerste 3 sets: onbekend; laatste set: tot failure (aantal onbekend)` is toegestaan. Geen herhalingsaantallen toevoegen.

Eerste run met v3, antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| face pulls | 30kg | 4 | onbekend |

Oefennaam inhoudelijk correct gecorrigeerd (`face pulls` is gelijkwaardig aan `facepulls`); gewicht en sets correct. De vermelding dat de laatste set tot failure ging ontbreekt, ondanks de expliciete input en uitvoerregel.

Cansu merkt op dat alle herhalingsaantallen inderdaad onbekend zijn, maar kiest ervoor de huidige afspraak te behouden: informatie over failure moet vermeld blijven. Deze afwijking is geregistreerd als **F3 — gemiste informatie**, omdat de expliciet genoemde laatste set tot failure ontbreekt. De prompt is niet gewijzigd.

Tweede run met v3, antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| face pulls | 30kg | 4 | onbekend |

Identiek aan de eerste run: opnieuw **F3 — gemiste informatie**, omdat de laatste set tot failure ontbreekt. Geen F6 waargenomen bij input 9.

Actuele score v3: 15/18 runs voldoen aan inhoud en afgesproken uitvoer (83,3%), op negen inputs, elk tweemaal getest. Eén F4-run (input 8) en twee F3-runs (input 9); F6 waargenomen bij input 8 als aanvullende observatie van het runpaar, niet als extra mislukte run.

## Input 10 — spelfout in oefennaam

Originele input van Cansu:

> lat puldwon, 35kg, 3 sets, 12 herhalingen per set

Verwacht antwoord voor v3, door Cansu bevestigd vóór de test:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| lat pulldown | 35kg | 3 | 12 |

Twaalf herhalingen per set; `12, 12, 12` is inhoudelijk gelijkwaardig. De spelfout wordt verbeterd volgens v3.

Eerste run met v3, antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| lat pulldown | 35kg | 3 | 12 per set |

Alle vier velden en de tabelvorm inhoudelijk correct. `12 per set` benoemt expliciet dezelfde vooraf vastgelegde informatie.

Tweede run met v3, antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| lat pulldown | 35kg | 3 | 12 per set |

Beide runs voor input 10 correct en identiek.

## Eindstand van deze testronde — v3

Tien inputs, elk tweemaal getest: **17/20 runs correct (85%)** volgens inhoud en afgesproken uitvoer. Eén F4-run (input 8), twee F3-runs (input 9). F6 waargenomen bij het runpaar van input 8; niet als extra mislukte run geteld. Negen van tien inputs gaven identieke antwoorden; acht van tien inputs waren in beide runs correct.

Beperkingen: kleine testset, deels vergelijkbare notities en dubbelzinnige input 6. Verwachte antwoorden zijn per versie gewijzigd en vooraf vastgelegd; scores tussen versies zijn geen zuivere vergelijking onder dezelfde beoordelingsregels. Variant 6b is apart gehouden en niet meegeteld als elfde input.

Gebruikt model/instelling in ChatGPT, achteraf gerapporteerd door Cansu: `GPT 5.6 terra hoog`. Letterlijk overgenomen zoals Cansu het ziet; geen technische model-ID vastgesteld.

## Testresultaten v4 — hertest van foute inputs

Verwachte antwoorden voor inputs 8 en 9 blijven gelijk aan v3. Input 7 staat met antwoord als voorbeeld in v4; tests daarvan moeten apart worden gehouden. De voorbeelden en waarom-zin zijn tegelijk toegevoegd, dus hun afzonderlijke effect is niet vast te stellen.

Input 9, eerste run met v4, antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| facepulls | 30kg | 4 | onbekend, onbekend, onbekend, tot failure (aantal onbekend) |

Alle velden en de afgesproken uitvoer correct.

Input 9, tweede run met v4, antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| facepulls | 30kg | 4 | onbekend, onbekend, onbekend, tot failure (aantal onbekend) |

Beide hertests correct en identiek. Input 9: v3 0/2 correct (tweemaal F3), v4 2/2 correct onder dezelfde verwachte uitvoer. Input 8 nog niet met v4 getest. Dit resultaat betreft één input; het bewijst nog geen algemene betrouwbare verbetering en is geen nieuwe score op de volledige testset.

Input 8, eerste run met v4, antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| dumbbell pullover | 10kg, 12, 14 | 3 | tot failure (aantal onbekend), tot failure (aantal onbekend), tot failure (aantal onbekend) |

Alle velden en de afgesproken uitvoer correct.

Input 8, tweede run met v4, antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| dumbbell pullover | 10kg, 12, 14 | 3 | tot failure (aantal onbekend), tot failure (aantal onbekend), tot failure (aantal onbekend) |

Beide hertests van input 8 correct en identiek.

### Vergelijking op dezelfde twee inputs en uitvoerafspraken

| Input | V3, twee runs | V4, twee runs |
|---|---|---|
| 8 | 1/2 correct; één F4 en wisselende naleving (F6) | 2/2 correct; identieke antwoorden |
| 9 | 0/2 correct; tweemaal F3 | 2/2 correct; identieke antwoorden |
| Totaal herteste selectie | 1/4 correct (25%) | 4/4 correct (100%) |

V4 is alleen getest op deze twee eerder foute inputs, elk tweemaal. Dit is geen score voor de volledige testset en geen bewijs van algemene betrouwbaarheid. De voorbeelden en waarom-zin zijn tegelijk toegevoegd, dus hun afzonderlijke effect is niet vastgesteld. De volledige v3-score blijft 17/20 (85%).

Buurtest niet uitgevoerd: Cansu was niet meer in de les en kon deze op dat moment niet met een klasgenoot doen.

## Teststatus v1 — inputs 1–5

Input 1: beide runs correct (alle vier velden en de tabelvorm); de antwoorden zijn identiek.

Input 2: beide runs correct (alle vier velden en de tabelvorm); de antwoorden zijn identiek.

Input 3: beide runs correct (alle vier velden en de tabelvorm); de antwoorden zijn identiek.

Input 4: beide runs correct (alle vier velden en de tabelvorm); de antwoorden zijn identiek.

Input 5: beide runs correct (alle vier velden en de tabelvorm); de antwoorden zijn identiek.

Totaal: vijf unieke inputs, elk tweemaal getest. 10 van 10 runs correct (100%). Geen wisselende antwoorden waargenomen. Deze kleine testset bevat alleen volledige, vergelijkbare notities; het resultaat zegt nog niets over ontbrekende of onduidelijke gegevens.

Geef alleen de originele input aan het model, niet de verwachte antwoorden.

## Gerichte hertest — v3 met alleen voorbeelden

Voorbereid op 8 oktober 2026, nog niet getest. Prompt: `prompt-v3-met-voorbeelden.md`. Alleen bouwsteen 4 (voorbeelden) is gewijzigd ten opzichte van v3; de waarom-zin van v4 is niet toegevoegd. Verwachte antwoorden en acceptatieregels van inputs 8 en 9 blijven gelijk aan v3. Test beide inputs elk tweemaal met hetzelfde model. Houd resultaten apart van v4 en van de volledige v3-score. Input 7 staat als voorbeeld in deze prompt en is geen ongeziene testinput.

Input 9, eerste run op 8 oktober 2026, antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| face pulls | 30kg | 4 | onbekend, onbekend, onbekend, tot failure (aantal onbekend) |

Alle velden en uitvoervorm correct. `face pulls` is inhoudelijk gelijkwaardig aan `facepulls`, volgens de eerdere beoordeling.

Input 9, tweede run op 8 oktober 2026, antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| face pulls | 30kg | 4 | onbekend, onbekend, onbekend, tot failure (aantal onbekend) |

Beide runs correct en identiek. Input 9: oorspronkelijke v3 0/2 correct; v3 met alleen voorbeelden 2/2 correct onder dezelfde verwachte uitvoer. Input 8 nog niet getest met deze versie. Dit beperkte resultaat op één input geeft nog geen bewijs van algemene betrouwbaarheid.

Input 8, eerste run op 8 oktober 2026 met v3 met alleen voorbeelden, antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| dumbbell pullover | 10kg, 12, 14 | 3 | tot failure (aantal onbekend), tot failure (aantal onbekend), tot failure (aantal onbekend) |

Alle velden en uitvoervorm correct. Tweede run input 8 nog uit te voeren. Voorlopig 3/3 gerichte hertests correct op inputs 8 en 9; geen volledige testsetscore.

Input 8, tweede run op 8 oktober 2026 met v3 met alleen voorbeelden, antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| dumbbell pullover | 10kg, 12, 14 | 3 | tot failure (aantal onbekend), tot failure (aantal onbekend), tot failure (aantal onbekend) |

Correct en identiek aan de eerste run. Gerichte hertest afgerond: oorspronkelijke v3 1/4 correct op inputs 8 en 9, v3 met alleen voorbeelden 4/4 correct (twee inputs, twee runs). Verwachte antwoorden gelijk gebleven; alleen bouwsteen voorbeelden gewijzigd. Geen volledige testsetscore of bewijs van algemene betrouwbaarheid.

## Volledige hertestronde v4 — gestart op 14 oktober 2026

Prompt: huidige `prompt.md` (v4). Model/instelling door Cansu gerapporteerd als `GPT 5.6 terra hoog`; letterlijk overgenomen, technische model-ID niet vastgesteld. Plan: de tien oorspronkelijke inputs elk tweemaal in een nieuw leeg gesprek, met dezelfde prompt en modelinstelling. Verwachte antwoorden blijven vooraf vastgelegd. Input 7 is ook een voorbeeld in de prompt en moet als zodanig herkenbaar blijven. De Codex-kostenmeting is een aparte run en telt niet mee in deze ronde.

### Input 1 — run 1

Notitie: `bulgarian split squat, 20kg, 4 sets, 12 reps`.

Antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| Bulgarian split squat | 20kg | 4 | 12 |

Cansu beoordeelt dit antwoord als correct. De hoofdletter verandert de betekenis van de oefennaam niet.

### Input 1 — run 2

Antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| Bulgarian split squat | 20kg | 4 | 12 |

Cansu beoordeelt ook run 2 als correct. Beide antwoorden zijn identiek: input 1 is 2/2 correct. Voorlopig 2 correcte runs geregistreerd van 20 geplande runs; nog geen volledige testsetscore.

### Input 2 — run 1

Notitie: `RDL, 40kg, 4 sets, 12 reps`. Dezelfde prompt v4 en door Cansu genoemde modelinstelling `GPT 5.6 terra hoog`.

Antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| RDL | 40kg | 4 | 12 |

Cansu beoordeelt run 1 als correct. Run 2 nog uit te voeren. Voorlopig 3 correcte runs geregistreerd van 20 geplande runs; nog geen volledige testsetscore.

### Input 2 — run 2

Antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| RDL | 40kg | 4 | 12 |

Cansu beoordeelt run 2 als correct. Beide antwoorden zijn identiek: input 2 is 2/2 correct. Dezelfde prompt en modelinstelling als run 1. Voorlopig 4 correcte runs geregistreerd van 20 geplande runs; nog geen volledige testsetscore.

### Input 3 — run 1

Notitie: `cable kickbaks, 15kg, 4 sets, 12 reps`. Dezelfde prompt v4 en modelinstelling `GPT 5.6 terra hoog`.

Antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| cable kickbacks | 15kg | 4 | 12 |

Cansu beoordeelt run 1 als correct, inclusief de spellingcorrectie van `kickbaks` naar `kickbacks`, passend bij de bestaande promptregel. Run 2 nog uit te voeren. Voorlopig 5 correcte runs geregistreerd van 20 geplande runs; nog geen volledige testsetscore.

### Input 3 — run 2

Antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| cable kickbacks | 15kg | 4 | 12 |

Cansu beoordeelt run 2 als correct. Beide antwoorden zijn identiek: input 3 is 2/2 correct. Dezelfde prompt en modelinstelling als run 1. Voorlopig 6 correcte runs geregistreerd van 20 geplande runs; nog geen volledige testsetscore.

### Input 4 — run 1

Notitie: `hip thrusts, 60kg, 4 x 12`. Dezelfde prompt v4 en modelinstelling `GPT 5.6 terra hoog`.

Antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| hip thrusts | 60kg | 4 | 12 |

Cansu beoordeelt run 1 als correct. Run 2 nog uit te voeren. Voorlopig 7 correcte runs geregistreerd van 20 geplande runs; nog geen volledige testsetscore.

### Input 4 — run 2

Antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| hip thrusts | 60kg | 4 | 12 |

Cansu beoordeelt run 2 als correct. Beide antwoorden zijn identiek: input 4 is 2/2 correct. Dezelfde prompt en modelinstelling als run 1. Voorlopig 8 correcte runs geregistreerd van 20 geplande runs; nog geen volledige testsetscore.

### Input 5 — run 1

Notitie: `seated hamstring curl, 20kg, 4 x 12`. Dezelfde prompt v4 en modelinstelling `GPT 5.6 terra hoog`.

Antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| seated hamstring curl | 20kg | 4 | 12 |

Cansu beoordeelt run 1 als correct. Run 2 nog uit te voeren. Voorlopig 9 correcte runs geregistreerd van 20 geplande runs; nog geen volledige testsetscore.

### Input 5 — run 2

Antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| seated hamstring curl | 20kg | 4 | 12 |

Cansu beoordeelt run 2 als correct. Beide antwoorden zijn identiek: input 5 is 2/2 correct. Dezelfde prompt en modelinstelling als run 1. Tussenstand: 10/10 uitgevoerde runs correct, op 5 inputs elk tweemaal getest. Nog 10 van de 20 geplande runs uit te voeren; dit is geen score op de volledige testset.

### Input 6 — run 1

Notitie: `cable strght arm pull down 20kg 3x12 + laatste set tot faillure`. Dezelfde prompt v4 en modelinstelling `GPT 5.6 terra hoog`.

Antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| cable straight arm pull down | 20kg | 3 | 12, 12, tot failure (aantal onbekend) |

Cansu beoordeelt dit als **F1 — verkeerd antwoord**: 3 sets in plaats van de vooraf bedoelde 4, met twee sets van 12 in plaats van drie vóór de extra set tot failure. Spelling en gewicht correct; failure is behouden. Beperking: de oorspronkelijke notitie is dubbelzinnig en Cansu's verduidelijking van het aantal sets is niet meegestuurd. Run 2 nog uit te voeren. Tussenstand: 10/11 uitgevoerde runs correct; nog geen volledige testsetscore.

### Input 6 — run 2

Antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| cable straight arm pull down | 20kg | 3 | 12, 12, tot failure (aantal onbekend) |

Cansu beoordeelt ook run 2 als **F1 — verkeerd antwoord**, om dezelfde reden als run 1. Beide antwoorden zijn identiek; geen F6 waargenomen. Dezelfde prompt en modelinstelling. Input 6 is 0/2 correct ten opzichte van het vooraf bedoelde antwoord; de dubbelzinnigheid blijft een beperking. Tussenstand: 10/12 uitgevoerde runs correct, met twee F1-runs; nog geen volledige testsetscore.

### Input 7 — run 1 (ook een voorbeeld in de prompt)

Notitie: `Dumbbell Row (Single‑Arm), 4 x 15`. Dezelfde prompt v4 en modelinstelling `GPT 5.6 terra hoog`.

Antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| Dumbbell Row (Single‑Arm) | onbekend | 4 | 15 |

Cansu beoordeelt run 1 als correct. Deze input staat met antwoord als voorbeeld in de prompt en is dus geen ongeziene testinput. Run 2 nog uit te voeren. Tussenstand over alle uitgevoerde runs: 11/13 correct, waarvan 1/1 op de voorbeeldinput en 10/12 op de overige inputs; nog geen volledige testsetscore.

### Input 7 — run 2 (ook een voorbeeld in de prompt)

Antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| Dumbbell Row (Single‑Arm) | onbekend | 4 | 15 |

Cansu beoordeelt run 2 als correct. Beide antwoorden zijn identiek: input 7 is 2/2 correct. Dezelfde prompt en modelinstelling. Deze voorbeeldinput blijft apart herkenbaar. Tussenstand: 12/14 uitgevoerde runs correct, waarvan 2/2 op de voorbeeldinput en 10/12 op de overige inputs; nog geen volledige testsetscore.

### Input 8 — run 1

Notitie: `dumbbell pullover, eerst 10kg, dan 12, dan 14 3xtot faillure`. Dezelfde prompt v4 en modelinstelling `GPT 5.6 terra hoog`.

Antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| dumbbell pullover | 10kg, 12, 14 | 3 | tot failure (aantal onbekend), tot failure (aantal onbekend), tot failure (aantal onbekend) |

Cansu beoordeelt run 1 als correct. Run 2 nog uit te voeren. Tussenstand: 13/15 uitgevoerde runs correct, waarvan 2/2 op de voorbeeldinput en 11/13 op de overige inputs; nog geen volledige testsetscore.

### Input 8 — run 2

Antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| dumbbell pullover | 10kg, 12, 14 | 3 | tot failure (aantal onbekend), tot failure (aantal onbekend), tot failure (aantal onbekend) |

Cansu beoordeelt run 2 als correct. Beide antwoorden zijn identiek: input 8 is 2/2 correct. Dezelfde prompt en modelinstelling. Tussenstand: 14/16 uitgevoerde runs correct, waarvan 2/2 op de voorbeeldinput en 12/14 op de overige inputs; nog geen volledige testsetscore.

### Input 9 — run 1

Notitie: `faceplls, 30kg, 4, laatste set tot faillure`. Dezelfde prompt v4 en modelinstelling `GPT 5.6 terra hoog`.

Antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| face pulls | 30kg | 4 | onbekend, onbekend, onbekend, tot failure (aantal onbekend) |

Cansu beoordeelt run 1 als correct. De laatste set tot failure blijft vermeld. Run 2 nog uit te voeren. Tussenstand: 15/17 uitgevoerde runs correct, waarvan 2/2 op de voorbeeldinput en 13/15 op de overige inputs; nog geen volledige testsetscore.

### Input 9 — run 2

Antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| face pulls | 30kg | 4 | onbekend, onbekend, onbekend, tot failure (aantal onbekend) |

Cansu beoordeelt run 2 als correct. Beide antwoorden zijn identiek: input 9 is 2/2 correct. Dezelfde prompt en modelinstelling. Tussenstand: 16/18 uitgevoerde runs correct, waarvan 2/2 op de voorbeeldinput en 14/16 op de overige inputs; nog geen volledige testsetscore.

### Input 10 — run 1

Notitie: `lat puldwon, 35kg, 3 sets, 12 herhalingen per set`. Dezelfde prompt v4 en modelinstelling `GPT 5.6 terra hoog`.

Antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| lat pulldown | 35kg | 3 | 12 |

Cansu beoordeelt run 1 als correct, inclusief de spellingcorrectie. Run 2 nog uit te voeren. Tussenstand: 17/19 uitgevoerde runs correct, waarvan 2/2 op de voorbeeldinput en 15/17 op de overige inputs; nog geen volledige testsetscore.

### Input 10 — run 2

Antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| lat pulldown | 35kg | 3 | 12 |

Cansu beoordeelt run 2 als correct. Beide antwoorden zijn identiek: input 10 is 2/2 correct. Dezelfde prompt en modelinstelling.

### Eindresultaat volledige hertestronde v4

**18/20 runs correct (90%; n = 10 inputs, 2 runs per input).** Twee F1-runs bij input 6; geen F2–F5-fouten geregistreerd. Bij alle tien inputs waren de twee gedeelde antwoorden identiek; geen F6 waargenomen in deze ronde. Identieke antwoorden betekenen niet automatisch correcte antwoorden.

| Input | Correcte runs | Fouten / bijzonderheid |
|---|---|---|
| 1–5 | elk 2/2 | Geen |
| 6 | 0/2 | Tweemaal F1; dubbelzinnige notitie |
| 7 | 2/2 | Input en antwoord staan ook als voorbeeld in de prompt |
| 8–10 | elk 2/2 | Geen |

Zonder de voorbeeldinput 7: **16/18 correct (88,9%; n = 9, 2 runs)**. De testset is klein, eerder gebruikt bij promptverbeteringen en bevat een dubbelzinnige input. Dit is geen onafhankelijke test met nieuwe notities. V3 scoorde eerder 17/20; v4 scoort nu 18/20, maar input 7 is vanaf v4 een promptvoorbeeld. De scorevergelijking moet met die beperking worden gelezen. De eerdere fouten bij inputs 8 en 9 kwamen in deze ronde niet terug; bij input 6 blijft het bedoelde aantal sets verkeerd geïnterpreteerd.

## Gerichte hertest v5 — input 6, verwacht antwoord vooraf

Notitie: `cable strght arm pull down 20kg 3x12 + laatste set tot faillure`. Prompt: `prompt-v5.md`. Gepland: twee runs in nieuwe lege gesprekken met dezelfde modelinstelling `GPT 5.6 terra hoog`. Nog geen runs uitgevoerd.

Vooraf afgesproken: bij het dubbelzinnige totale aantal sets verwacht Cansu nu `onbekend`. Cansu geeft voor Herhalingen zelf op: `3 x 12, laatste set: tot failure (aantal onbekend)`. Oefening en gewicht blijven volgens de bestaande afspraken.

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| cable straight arm pull down | 20kg | onbekend | 3 x 12, laatste set: tot failure (aantal onbekend) |

Deze uitvoer legt geen totaal aantal sets vast. De uitvoerafspraak is gewijzigd ten opzichte van het eerdere verwachte antwoord van vier sets. Resultaten blijven daarom apart van de v4-score van 18/20 en zijn geen zuivere vergelijking onder gelijke beoordelingsregels.

### V5 — input 6, run 1

Antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| cable straight arm pull down | 20kg | onbekend | 3 x 12, laatste set: tot failure (aantal onbekend) |

Cansu beoordeelt dit als correct volgens de vooraf vastgelegde v5-uitvoerafspraak. Voorlopig 1/1 gerichte run correct op één input; run 2 nog uit te voeren. Geen volledige v5-testsetscore.

### V5 — input 6, run 2

Antwoord gedeeld door Cansu:

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| cable straight arm pull down | 20kg | onbekend | 3 x 12, laatste set: tot failure (aantal onbekend) |

Cansu beoordeelt ook run 2 als correct. Beide antwoorden zijn identiek. Gerichte v5-hertest: **2/2 correct (n = 1 input, 2 runs)** volgens de gewijzigde, vooraf vastgelegde uitvoerafspraak. Geen F6 waargenomen. Dit is geen volledige v5-testsetscore; v4 blijft 18/20 (90%). Het verwachte aantal sets is veranderd van 4 naar onbekend, dus deze resultaten zijn geen scorevergelijking onder gelijke beoordelingsregels.
