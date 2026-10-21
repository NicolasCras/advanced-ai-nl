# Week 4 — Mijn regel loste 1 fout op en maakte een nieuwe

## Mijn tool in cijfers
Ik heb mijn tool v3 getest op 13 inputs, elk 2 keer. Daarvan waren er 24 van de 26 juist, dus ongeveer 92%. Beide fouten zaten bij T05, de pagina met alleen vage zoekwoorden. Daar moest de tool ONZEKER zeggen, maar hij zei 2 keer vol overtuiging NO-GO, dus 2 × F1. Dat kwam door mijn eigen regel 4, die ik vorige week toevoegde voor de gummies. Die regel loste T07 op, maar maakte T05 kapot. De tool heeft wel nergens een citaat verzonnen. Mijn 3 nieuwe moeilijke inputs (T11–T13) waren alle 6 keer juist. Let op: deze runs liepen via claude -p en niet via claude.ai zoals vorige weken, dus de cijfers zijn niet helemaal te vergelijken.

## Wat kost één run?
Toen ik /cost zag, viel me vooral op dat bijna alles context was. Van de ongeveer 55.000 tokens waren er maar zo'n 6.700 van mijn prompt, de productpagina en het antwoord. De rest stuurt Claude Code altijd mee, zoals mijn CLAUDE.md, de skills van de cursus en de tools. Mijn eigen deel was dus maar ongeveer 12%.

Er waren ook 2 dingen die me verrasten. Ten eerste werkte /context niet, want in deze cursus start dat de context-skill en niet de teller met tokens. Ten tweede kreeg ik Haiku 5.5 en niet Haiku 4.5 zoals in de les. Die prijs staat niet in de tabel van de cursus, dus Claude Code moest hem afleiden uit /cost. Met Haiku 5.5 is het ongeveer 10 keer goedkoper.

Wat het kost is eigenlijk bijna niets. Mijn deel van 1 run is ongeveer 0,0012 dollar. Met mijn 80 pagina's per maand kom ik op ongeveer 9 eurocent per maand. Zelfs bij 1.000 keer zoveel, dus 80.000 pagina's, is het 88 euro per maand. Voor mijn Vinted verkoop is dat niks. Op 1 knuffel verdien ik ongeveer 12 euro (5 inkopen en 17 verkopen). Met de winst van 1 knuffel kan ik de tool dus meer dan 10 jaar laten draaien.

## Met de hand of met de tool?
Met de hand doe ik per pagina dit: ongeveer 2 minuten lezen, dan elk risico A, B, C en D apart checken, wat ongeveer 35 seconden per risico is, en dan nog een 30 seconden om te beslissen. Samen is dat ongeveer 4 minuten en 50 seconden per pagina. Die tijden zijn geschat. Ik heb ze niet met een chronometer gemeten, maar zo lang deed ik erover toen ik de juiste antwoorden voor mijn testset opschreef.

Met de tool kopieer ik de tekst van de pagina, plak ik die bij mijn prompt en laat ik hem draaien. Dat duurt ongeveer 1 minuut. Daarna kijk ik nog na of het klopt, ook ongeveer 1 minuut. Ik kijk of het label logisch is en zoek met Ctrl+F of de citaten echt op de pagina staan. Met de tool ben ik dus ongeveer 2 minuten bezig. Het draaien zelf duurde 30 seconden, dat zag ik in /cost. Het kopiëren en het nakijken heb ik geschat.

Dat is ongeveer 2 minuten en 50 seconden winst per pagina. Ik schat dat ik ongeveer 20 pagina's per week bekijk, dus 80 per maand en 960 per jaar. Dat is ongeveer 57 minuten winst per week, 3,8 uur per maand en 45 uur per jaar. Als uurkost neem ik 13 euro, want dat verdien ik per uur bij Brand Activators. Een uur dat ik pagina's zit na te kijken, is een uur dat ik daar niet werk. 45 uur keer 13 euro is ongeveer 589 euro per jaar. De tool kost met Haiku 5.5 maar ongeveer 1 euro per jaar (met Haiku 4.5 ongeveer 11 euro), dus netto win ik ongeveer 588 euro per jaar.

## Mijn zwakste cijfer
Mijn zwakste cijfer is de 4 minuten en 50 seconden met de hand. Dat verschilt heel sterk per pagina. Sommige pagina's zijn 4 keer zo lang, of hebben meer risico's, en dan ben ik veel langer bezig. Andere zijn kort en simpel, en dan ben ik sneller klaar.

Als de tijd met de hand maar de helft is, dus ongeveer 2 minuten 25, dan win ik met de tool nog maar 25 seconden per pagina. Dan zakt mijn winst van ongeveer 588 euro naar ongeveer 87 euro per jaar. Dat is bijna 7 keer minder. Bij lange pagina's wint de tool juist veel meer.

Ook de 80 pagina's per maand zijn geschat en niet geteld. Om dit sterker te maken ga ik een paar weken echt bijhouden hoeveel pagina's ik bekijk en hoe lang ik per pagina bezig ben, met een timer. Dan heb ik echte cijfers in plaats van schattingen.
