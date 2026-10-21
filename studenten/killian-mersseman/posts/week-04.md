# Week 4 — Tijd vrijmaken voor mijn eigen analyses

## Mijn tool in cijfers

Deze week heb ik mijn werkwijze veranderd. Eerst vergeleek ik twee rapporten in een antwoord. Nu werk ik één bedrijf per run bij in Excel, omdat bedrijven op verschillende dagen rapporteren. De tool verzamelt FCF, financiële schuld en kwartaalomzetgroei. De oorspronkelijke bedragen, perioden, definities en bronpagina’s blijven bewaard. Excel toont vergelijkingen en grafieken in USD. Ik selecteer een jaar en kwartaal; de datums volgen automatisch.

Over tien inputs zijn 15 van 20 geselecteerde runs expliciet geslaagd beoordeeld: 75% (n = 10 inputs, 2 runs per input). Drie zijn niet geslaagd en twee blijven bruikbaar met onvolledige beoordeling. Dit is een telling van mijn eerdere oordelen, geen uniforme nauwkeurigheidsmeting. Promptversies en scopes verschillen: sommige tests controleren financiële kerncijfers, andere alleen omzetgroei. Voor T06–T10 afzonderlijk is de omzetgroeiscore 10/10 (n = 5 inputs, 2 runs).

Vastgelegde fouten: F3 één geval, toen AMD’s gerapporteerde percentage ontbrak. F6 twee gevallen van wisselend gedrag: de omzetgroeikeuze bij AMD en het onzekerheidslabel bij Alphabet. F3 en F6 overlappen bij AMD. T03 heeft geen definitieve foutklasse: de aanvullende FCF-instructie is niet meer bekend. Ik sloot die twee runs af met beperkingen.

Voor Novo Nordisk en Lilly zijn elk drie waarden aan Excel toegevoegd en door mij gecontroleerd. Schuldbeperkingen blijven zichtbaar. Deze updates en de oudere tests bewijzen niet dat de nieuwe Excel-werkwijze algemeen betrouwbaar is.

## Wat kost één run?

Ik heb in een nieuwe Codex-sessie één AMZN-update uitgevoerd: het lokale rapport lezen, drie waarden extraheren, JSON opslaan en Excel bijwerken. Het zoeken en downloaden gebeurde vooraf. De uitvoer vermeldt 2 minuten en 54 seconden; drie nieuwe metingen zijn toegevoegd, vijftien in totaal. De AMZN-broncontrole moet ik nog doen.

Het sessielog registreert 809.064 inputtokens, waarvan 754.944 uit cache, en 4.076 outputtokens. De 54.120 overige inputtokens en de output reken ik apart af tegen de GPT-6.1 Sol-tarieven uit de les. Dat geeft (54.120 × $2 + 754.944 × $0,10 + 4.076 × $10) / 1.000.000 = $0,2244944. Dit is het API-equivalent van de volledige agentrun, geen bijkomende factuur boven op Plus.

De meting omvat ook agentcontext, het lezen van vaardigheden, een mislukte pdf-leespoging en de installatie van een pdf-lezer. Mijn eigen prompt en antwoord zijn niet apart van die context gemeten. De eerste tokenregistratie bevat al een modelstap; die zomaar aftrekken zou werk weglaten. Eén run is ook geen gemiddelde. Volgende rapporten, cachegebruik en een al geïnstalleerde lezer kunnen een andere kost geven.

Bij 40 updates per jaar wordt dit gemiddeld $0,75 per maand, $7,48 bij 10× en $748,31 bij 1.000×. Met dezelfde tokens en de Luna-lesprijzen wordt dat $0,05, $0,50 en $50,00. Dit vergelijkt alleen prijzen: ik heb Luna niet getest op kwaliteit of werkelijk verbruik.

De opgehaalde ECB-koers van 15 oktober is 1 euro = 1,1208 dollar. De run kost daarmee ongeveer €0,2003. Bron, tokenaantallen en berekeningen staan in `build/kosten.md`. De eerdere Netflix/Uber-sessie blijft daar bewaard, maar vormt niet langer de basis van mijn actuele scenario.

## Met de hand of met de tool?

Handmatig schat ik vijf minuten voor het rapport zoeken, 45 minuten voor cijfers verzamelen, invoeren en berekenen, en tien minuten voor controleren. Samen is dat 60 minuten per bedrijfsupdate. De eerste keer schat ik drie uur, daarna één uur per bedrijf doordat het bestand al bestaat. Met de tool schat ik acht minuten voor uitvoeren en zeven minuten voor controleren: samen vijftien minuten. Dit zijn mijn schattingen, geen gemeten tijden. Beide gaan uitsluitend over verzamelen, noteren en cijfercontrole. Mijn eigen analyses en het afzonderlijk volgen van risico’s vallen erbuiten.

Het verschil is 45 minuten per update. Tien bedrijven per kwartaal geven 40 updates per jaar: 30 uur mogelijke tijdwinst. Gemiddeld is dat 2,5 uur per maand, ongeveer 35 minuten per week en vijf minuten per kalenderdag. Het werk valt in werkelijkheid rond rapportages.

Ik waardeer mijn tijd persoonlijk op €5 per uur. Handmatig werk zou ten koste gaan van mijn trainingen en familietijd. De geschatte waarde is dus €150 per jaar vóór toolkosten. Met de volledige AMZN-run als kostaanname wordt dat €150 − 40 × €0,2003 = ongeveer €141,99. Dit scenario veronderstelt dat iedere update hetzelfde kost. Het is geen aangetoonde netto-opbrengst. Zonder tool zou ik het handwerk mogelijk niet doen. De tool maakt de opvolging vooral haalbaar. Betere beleggingen hoop ik ermee te ondersteunen, maar die opbrengst is niet gemeten.

## Mijn zwakste cijfer

Ik vertrouw de 40 updates het minst. Soms volg ik de beurs meer, soms moet ik een kwartaal inhalen. Ik moet consistent blijven. Bij twintig updates halveert de tijdwinst naar vijftien uur en de waarde vóór kosten naar €75. Met hetzelfde kostenscenario blijft ongeveer €70,99 over. Later inhalen verlaagt het jaarvolume niet automatisch. Historische data, lijngrafieken per bedrijf en nieuwsupdates blijven toekomstige uitbreidingen. Eerst wil ik mijn huidige werkwijze consequent gebruiken.
