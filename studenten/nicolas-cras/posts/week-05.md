# Week 5: Wat is mijn tool waard?

## Mijn foutmarge
Mijn tool geeft niet altijd hetzelfde antwoord, dus wilde ik zijn foutmarge testen. Daarvoor vergeleek ik twee versies van mijn prompt, V4 en V5, die maar in één regel verschillen: een training die de sporter "zwaar" noemt telt als hard. Elke versie draaide ik 3 keer op dezelfde 10 inputs, met Claude Sonnet 5.5, en ik telde hoeveel van de 10 juist waren.
V4 haalde in alle 3 runs 10 op 10 (bereik 10–10). V5 haalde 9, 9 en 10 op 10 (bereik 9–10). In 2 van de 3 runs scoorde V4 dus hoger, in run 3 scoorden ze gelijk, en V5 schommelde terwijl V4 elke keer hetzelfde gaf.
Mijn claim dat V5 beter is dan V4 trek ik in, want de bereiken overlappen. Ik kan ook niet zeggen dat V5 slechter is, want daarvoor zijn meer en moeilijkere runs nodig.

## Model en effort
Ik testte vier setups op mijn 10 inputs, 1 run per input: Opus 5.5 haalde 10 op 10, Sonnet 5.5 haalde 9 op 10, Sonnet 5.5 op laagste niveau haalde 9 op 10 en Haiku 5.5 haalde 8 op 10. Opus, Sonnet en Sonnet op laagste niveau vallen binnen mijn foutmarge van 9–10, Haiku niet. Mijn gok schreef ik niet vooraf op. Ik zou Opus op standaard niveau laten draaien (ongeveer 44 euro per jaar, tegenover 20 euro voor Sonnet), omdat Opus 10 op 10 haalde en ik daar het meeste vertrouwen in heb, en omdat ik de tool wil uitbreiden en het duurste model dan waarschijnlijk het best met moeilijkere taken omgaat. Dat kan ik nog niet met 100% zekerheid zeggen, want er zijn nog meer testruns nodig.

## Mijn value chain, met de foutmarge erin
Met de hand doet de coach er volgens mijn schatting 20 minuten per sporter over, niet gemeten door een coach. Voor 25 sporters is dat 8 uur en 20 minuten per week. Met de tool kost het controleren ongeveer 45 minuten voor alle 25 sporters (ook een schatting), en het herstellen van de mogelijke fouten ongeveer 33 minuten, berekend uit mijn score van 28 op 30. De tijdwinst is dan 422 minuten per week.
Mijn tijdwinst van 422 minuten per week is ongeveer 365 uur per jaar (52 weken). Een uur van de coach reken ik op 20,19 tot 43,27 euro, op basis van de omzet per uur van een online coach (70 tot 150 euro per sporter per maand, een gemiddelde en niet de prijs van deze coach). Min de kost van de tool, 67 euro per jaar, is het netto 7.312 tot 15.746 euro per jaar. Met mijn laagste score (9 op 10) en mijn hoogste (10 op 10) is het bereik 7.021 tot 16.996 euro per jaar.
Het cijfer dat ik het minst vertrouw is de 45 minuten per week die de coach nodig heeft om het werk van de tool na te kijken, voor alle 25 sporters samen. Ik heb dat geschat en niet gemeten. Als het dubbel zo lang duurt, 90 minuten, daalt het netto naar 6.525 tot 14.058 euro per jaar, ongeveer 790 tot 1.690 euro minder. Dat is ongeveer evenveel als het effect van mijn foutmarge (875 tot 1.880 euro), en het netto blijft ruim positief.

## Mijn dashboard
https://claude.ai/artifact/XEQbHuB76B7Xxh34qUmktd
Een lezer ziet bovenaan het netto per jaar, omdat dat de waarde van mijn tool laat zien.

## Mijn AI-ismen

Week 4: "Zulke fouten vind ik zeker niet erg. Het is juist goed dat er fouten worden gemaakt, want zo leer je iets bij en zie je wanneer er iets niet klopt."
Herschreven: Bij 1 van de twee foute runs gaf hij een fout aan omdat hij vanuit de context niet goed kon afleiden als het om een zware training ging of niet, dit kan misschien opgelost worden door meer synoniemen te gebruiken in de prompt voor een zware training.

Week 4: "Ik denk dat het beter is om hetzelfde model te houden, of zelfs een beter model te nemen, zodat er minder fouten zijn."
Herschreven: Ik denk dat het beter is om hetzelfde model of een beter model te gebruiken aangezien Haiku 8 op 10 haalde en Opus 10 op 10, dan moet de coach van 5 van de 25 sporters nakijken en het zelf analyseren wat 100 minuten per week zou zijn die verspild worden, aangezien er 20 min per analyse van sporter wordt gerekend.

Week 3: "Ik ben tevreden over de wijziging, omdat de tool nu nauwkeuriger leest wat zwaar is."
Herschreven: V4 behaalde 30 op 30 en V5 28 op 30, maar omdat de bereiken overlappen, trek ik mijn eerdere claim dat V5 beter scoort dan V4 in.

Week 1: "Ik verbaasde me er ook over hoe makkelijk en snel sommige dingen, projecten en taken nu gaan, terwijl ze vroeger super veel tijd kostten."
Herschreven: Een samenvatting maken zonder AI duurde vroeger 8 uur, terwijl het nu in 5 minuten gedaan kan worden met AI.

Week 2: "Ik merkte dat de tool niet veel weet als je hem geen of weinig context geeft, waardoor hij soms verkeerd interpreteert."
Herschreven: Ik ondervond dat de tool niet veel weet als hij weinig context heeft: bij T01 zei hij normaal terwijl het zwaar was, en nadat ik twee regels aan de prompt had toegevoegd gaf hij in 3 van 3 runs wel zwaar.
