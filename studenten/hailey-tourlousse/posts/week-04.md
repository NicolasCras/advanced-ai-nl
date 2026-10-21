# Week 4 — Een kwart cent per review

## Mijn tool in cijfers
Mijn tool sorteert gastenreviews van Hotel Cosmopolite. Hij geeft elke review een onderwerp en zegt of we moeten antwoorden, en hoe snel. Ik draaide mijn tien testreviews twee keer met Claude Haiku 4.5, elke keer in een nieuwe sessie.

Resultaat: 10 op 20 juist, met beide labels juist (n = 10, 2 runs). Het antwoordlabel was 17 op 20 keer juist, het onderwerp maar 13 op 20. Talen waren geen probleem: Nederlands, Frans en Duits gingen even goed.

Ik had 10 fouten. 8 keer F1 (fout): bij T02, T03, T04 en T10 gaf het model twee keer hetzelfde foute antwoord. Bij T02 en T03 koos het "Room" in plaats van "Price and value". 2 keer F6 (wisselend): bij T06 en T08 was het antwoord de ene keer juist en de andere keer fout.

Mijn wijziging: ik schrapte het onderwerp "Booking and check-in". Bij T04 koos het model dat in plaats van "Service and staff". Ik denk dat het model niet kon kiezen tussen twee onderwerpen die allebei pasten. Daarna draaide ik de zes reviews met fouten opnieuw: van 2 op 12 naar 5 op 12 juist (n = 6, 2 runs). T04 was nu twee keer juist. Maar T06 was ook twee keer juist, terwijl mijn wijziging daar niets mee te maken had. Ik denk dat het model bij T06 gewoon een paar keer wisselt. Ik weet dus nog niet hoe nauwkeurig de sorteerder echt is.

## Wat kost één run?
Ik mat het in Claude Code met Haiku 4.5. Claude Code stuurt bij elke vraag eerst zijn eigen instructies mee: de context, ongeveer 3.520 tokens. Mijn deel is mijn prompt met de review (ongeveer 1.530 tokens in) en het antwoord (ongeveer 300 tokens uit, waarvan 230 tokens denkwerk dat je niet ziet). Een bedrijf dat de tool via de API gebruikt, betaalt alleen mijn deel.

Eén run kost ongeveer 0,0027 euro: een kwart cent. In september kreeg het hotel 44 reviews: 36 op Booking, 6 op Google en 2 op TripAdvisor. Dat telde ik zelf. Per maand kost de tool dus ongeveer 0,12 euro. Bij 10 keer zoveel (440 reviews) is dat 1,21 euro, bij 1.000 keer zoveel (44.000 reviews) 120,50 euro. Met Sonnet 5.5 is het het dubbele, met Opus 5.5 vier keer zoveel, met GPT-6 Luna tien keer minder. Ik rekende met 1 dollar = 0,90 euro, een aanname.

Wauw, dat verraste me echt. Ik dacht dat het veel meer ging kosten.

## Met de hand of met de tool?
Met de hand: Booking openen en de nieuwe review zoeken 40 seconden, lezen 9 seconden, het onderwerp kiezen 5 seconden, beslissen of en hoe snel we antwoorden 3 seconden, doorgeven 5 seconden. Samen 62 seconden. Dat deed ik zelf thuis.

Met de tool: ik ga ervan uit dat de reviews later automatisch in de tool komen. Die koppeling bestaat nog niet. Dan blijft over: de tool draaien 7 seconden (gemeten), nakijken 7,5 seconden (mijn schatting) en doorgeven 5 seconden. Samen 19,5 seconden.

Winst: 42,5 seconden per review. Bij 44 reviews per maand is dat 528 reviews en 6,23 uur per jaar. Een receptionist kost 17,50 euro per uur bruto. Dat weet ik, en ik checkte het bij mijn broer die in het hotel werkt. Voor de werkgever is een uur eigenlijk duurder. 6,23 uur keer 17,50 euro is 109,08 euro per jaar. Min de kost van de tool, 1,45 euro per jaar, blijft er 107,63 euro per jaar over.

Zonder automatische koppeling ziet het er anders uit. Dan blijven de 40 seconden om de review te zoeken, en met 15 seconden nakijken duurt het met de tool 5 seconden langer dan met de hand.

## Mijn zwakste cijfer
Ik vertrouw twee getallen het minst. Eerst het nakijken: ik schat 7,5 seconden. Maar de tool is maar de helft van de keren juist, dus nakijken kan langer duren. Bij 15 seconden wint de tool nog 35 seconden per review, of 88,39 euro per jaar.

Dan het zoeken van de review op Booking. In mijn berekening valt dat weg, omdat ik denk dat het in de toekomst te automatiseren is. Lukt dat niet, dan wint de tool niets: hij kost dan 14,28 euro per jaar.
