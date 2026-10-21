# Week 4 — Mijn review-sorteerder kost bijna niets

## Mijn tool in cijfers

Mijn tool sorteert bezoekersreviews van een evenement in vaste categorieën. De categorieën zijn onder andere organisatie, sfeer, locatie en wachttijden. Als organisator kan ik daardoor sneller zien over welke thema's bezoekers iets zeggen. Ik heb de tien reviews uit mijn testset opnieuw getest met versie 2 van mijn prompt. Daarvan waren er 8 op 10 juist (n = 10, 1 run).

Ik dacht na vorige week dat mijn systeem bijna waterdicht was. De testset laat zien dat dit niet klopt. Bij twee reviews voegde de tool een extra label toe. Bij review 2 zag de tool naast organisatie en wachttijden ook sfeer in de woorden “fijn evenement”. Bij review 5 voegde hij organisatie toe aan “genoeg te doen”. Volgens mijn vooraf geschreven antwoorden waren die extra labels fout. Ik noteerde beide als F1-fouten: een fout antwoord met overtuiging.

Toch vind ik deze fouten voorlopig aanvaardbaar. De twee reviews zijn dubbelzinnig en ik blijf de uitvoer zelf nakijken voordat ik de labels gebruik. De tool neemt dus niet de volledige beslissing over; hij maakt alleen het eerste sorteerwerk sneller.

## Wat kost één run?

Ik mat één run met mijn prompt en testinput T01 in Codex. De gebruikte context steeg van 16,3K naar 17,0K tokens. Mijn run gebruikte dus ongeveer 700 tokens. Codex toont mij geen aparte aantallen voor input en output. Daarom schat ik transparant dat ongeveer 650 tokens input zijn en 50 tokens het korte JSON-antwoord vormen.

Voor de prijs gebruik ik GPT-6.1 Sol uit de cursusprijstabel: $2 per miljoen inputtokens en $10 per miljoen outputtokens. De berekening is: 650 inputtokens kosten $0,00130 en 50 outputtokens kosten $0,00050. Samen is dat $0,00180. Met de cursusaanname van $1 = €0,90 komt dat neer op €0,00162 per run, of ongeveer 0,16 eurocent. De 700 tokens zijn gemeten; de verdeling tussen input en output is een schatting.

Ik verwacht voor mijn toekomstig muziekfestival ongeveer 750 bezoekers en ongeveer 20 reviews per maand. Dat is 2,7% van de bezoekers en is een aanname op basis van mijn verwachte bezoekersaantal en eigen ervaring. Bij 20 reviews per maand kost de tool €0,0324. Bij tien keer dat volume, 200 reviews, kost hij €0,324 per maand. Pas bij 20.000 reviews per maand, duizend keer mijn volume, wordt het €32,40. De AI-kost is dus opvallend laag voor mijn scenario.

## Met de hand of met de tool?

Zonder tool schat ik dat ik twee minuten per review nodig heb: de review lezen, labels kiezen en het resultaat in een overzicht zetten. Met de tool schat ik tien seconden: het antwoord laten maken, nakijken en overnemen. Dat is een winst van 110 seconden per review. Deze tijden zijn mijn eigen schattingen.

Bij 20 reviews per maand win ik 36 minuten en 40 seconden per maand. Dat is ongeveer 5 reviews per week en 240 reviews per jaar. Over een jaar levert dit 7 uur en 20 minuten tijdwinst op. Ik reken met €13 per uur, als aanname op basis van een verwacht studentenloon bij een gelijkaardige job. De tijdwinst is dan €95,33 per jaar. De jaarlijkse AI-kost is maar ongeveer €0,39, waardoor de netto waarde op ongeveer €94,94 per jaar uitkomt.

## Mijn zwakste cijfer

Mijn zwakste cijfer is de tien seconden met de tool. Het antwoord zelf kwam snel, maar nakijken en overnemen kan langer duren. Als dat twintig seconden wordt, daalt de tijdwinst naar 6 uur en 40 minuten per jaar. De netto waarde wordt dan ongeveer €86,28. De tool blijft dan nuttig, maar de controle door een persoon blijft belangrijker dan de lage AI-kost.
