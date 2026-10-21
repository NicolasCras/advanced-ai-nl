# Week 4 — Lezen kost tijd...

## Mijn tool in cijfers
Voor mijn tool heb ik drie versies getest: v1, v2 en v3. De succespercentages zijn respectievelijk 8 op 10 juist (n = 5, 2 runs), 7 op 10 juist (n = 5, 2 runs) en 16 op 20 juist (n = 10, 2 runs). Bij v1 was T04 verkeerd, want de tool gaf 2x "geen info" in plaats van "goed". Bij v2, na het toevoegen van voorbeelden en "want"-regels aan mijn prompt, waren T06 (foutklasse F1: vol overtuiging het verkeerde antwoord) en T09 (foutklasse F6: een ander antwoord bij dezelfde input) fout. Doordat het percentage hoog lag bij v1 en v2, heb ik nog andere testinputs toegevoegd met moeilijkere opgaves, bijvoorbeeld weinig informatie, artikels in een andere taal of een artikel met gemengde signalen. Om de resultaten weer hoger te brengen, heb ik een nieuwe regel toegevoegd aan de prompt voor artikels met gemengde signalen. Die regel loste T06 op, maar maakte T03 en T09 fout, omdat hij te breed is. Bij v3 waren T03 en T09 dus fout, elk 2x met foutklasse F1. Er waren geen fouten van de klassen F2 tot F6. Mijn tool is dus stabiel: hij gaf bij elke input twee keer hetzelfde antwoord. Maar bij gemengde signalen is hij te voorzichtig. Let wel: v1 en v2 zijn getest op 5 inputs, v3 op 10, waarvan vijf moeilijke, dus de cijfers zijn niet helemaal te vergelijken.

## Wat kost één run?
De kost van 1 run met het model Haiku was € 0,017 (het goedkoopste Claude-model uit de tabel). Met het model Opus zou de kost € 0,068 zijn (berekend met de tabelprijs; dit is mijn meest gebruikte model voor het aanmaken van deze tool). Opvallend is het verschil tussen de context en mijn deel: Claude Code stuurt bij elke vraag eerst zelf 32,3k tokens mee (zijn eigen instructies, tools en mijn context.md), terwijl mijn deel (de prompt, de input en het antwoord) 14,5k tokens is. Voor een bedrijf telt alleen mijn deel, want via de API stuurt het alleen de prompt en de input mee. Tijdens het testen van mijn kostberekening heb ik T01 gedraaid in een lege map en in mijn studentenmap. Hierbij merkte ik een klein verschil: de run in de studentenmap was goedkoper ($ 0,0042 tegenover $ 0,0045). Dat kwam door de cache: 68% van de input kwam uit de cache, en tekst die hergebruikt wordt kost maar een tiende van de gewone prijs.

Voor Sporza zou dit voorlopig ± € 16 per jaar zijn. Aangezien de Sporza Wielermanager voor de voorjaarsklassiekers 900 tot 1.000 renners bevat, wordt de berekening € 0,017 × 950 = ± € 16. Bij 10× is dat ± € 162 en bij 1.000× ± € 16.150. Pas bij dat laatste volume doet het bedrag er echt toe. Met GPT-6 Luna (€ 0,0017 per run) zou het nog tien keer goedkoper zijn, maar ik weet nog niet of dat model even goed scoort op mijn testset.

## Met de hand of met de tool?
Met de hand zoek ik eerst nieuwsberichten over de renner (± 2 min), lees ik twee artikels (5 tot 10 min, gemiddeld 7,5 min) en kies ik een label (30 s). Dat is ongeveer 10 minuten per renner.

Met de tool moet ik de berichten nog altijd zelf zoeken (2 min), want mijn tool zoekt nog geen artikels. Daarna plak ik ze in de prompt (1 min), laat ik de tool draaien (7 s, gemeten met /cost) en kijk ik de uitvoer na (15 s). Dat is ongeveer 3,4 minuten. Per renner win ik dus ± 6,6 minuten, vooral omdat de tool het lezen overneemt.

| Schakel | Waarde | Bron |
|---|---|---|
| Met de hand | 600 s per renner | geschat |
| Met de tool | 202 s per renner | draaien gemeten, de rest geschat |
| Winst per renner | 398 s | |
| Volume | ± 950 renners per jaar | Sporza: 900 tot 1.000 renners in de voorjaarsklassiekers |
| Uren gewonnen | ± 105 uur per jaar | |
| Uurkost | € 16 tot € 23 | aanname: brutoloon medewerker of journalist |
| Waarde | € 1.680 tot € 2.415 per jaar | |
| Kost van de tool | ± € 16 per jaar | gemeten, kosten.md |
| **Netto** | **± € 1.660 tot € 2.400 per jaar** | |

De beoordeling gebeurt één keer per jaar, vóór het voorjaarsspel. Daarom reken ik per jaar en niet per dag of per week. Wat opvalt: de kost van de tool (± € 16) is bijna niets tegenover de waarde van de tijdwinst. De echte vraag is of mijn geschatte tijden kloppen, en of Sporza vandaag al iemand de vorm laat opvolgen.

## Mijn zwakste cijfer
Het cijfer dat ik het minst vertrouw, is de leestijd van 5 tot 10 minuten per renner. Die heb ik geschat, niet gemeten. Als het lezen in werkelijkheid maar 5 minuten duurt in plaats van 7,5, daalt de winst per renner van 398 naar 248 seconden. Het netto voor Sporza zakt dan van ± € 2.030 naar ± € 1.290 per jaar. De tool blijft dan nog altijd veel meer opleveren dan hij kost (± € 16 per jaar).

Een nog groter vraagteken is of Sporza vandaag al iemand de vorm van renners laat opvolgen bij het bepalen van de prijzen. Doet niemand dat, dan bespaart mijn tool geen tijd, en zit de waarde vooral in betere prijzen en een spannender spel. Om dit uit te zoeken, wil ik de leestijd echt meten met een chronometer, en navragen hoe Sporza de prijzen bepaalt.
