# Week 4 — Hoe groot is de kost van mijn build

## Mijn tool in cijfers

Mijn tool scoort **18 op 20 juist (n = 10, 2 runs)**. Twee inputs hadden een fout, T03 en T09, allebei in run 2. Samen waren dit 3 fouten: 2 keer F1 en 1 keer F6.

Zulke fouten vind ik zeker niet erg. Het is juist goed dat er fouten worden gemaakt, want zo leer je iets bij en zie je wanneer er iets niet klopt.

- **F1 (fout antwoord), 2 keer.** Bij T09 telde het model één training niet als hard, terwijl die wel hard moest zijn. Bij T03 gaf het de verkeerde soort trainingen in de week.
- **F6 (wisselend), 1 keer.** Bij T09 zag het model in run 1 die training wel als hard, en in run 2 niet. Het antwoord wisselde dus.

Ik vermoed dat dit vooral aan de prompt lag, die nog niet helemaal perfect was.

## Wat kost één run?

Ik gebruikte Claude Code met Sonnet 5.5 (2 dollar per miljoen tokens in, 10 dollar uit). Eén run, de notities van één sporter over één week, kostte **0,0625 dollar**, ofwel 0,056 euro (1 dollar = 0,90 euro).

Dat bedrag bevat ook de context van Claude Code zelf: 20.000 tot 35.000 tokens bij elke vraag. Mijn deel is veel kleiner: de prompt (ongeveer 1.600 tokens), de notities (100 tot 250 tokens) en het antwoord (ongeveer 250 tokens uit). Dat kost samen ongeveer **0,006 dollar**, ofwel 0,0056 euro. De tokens zijn geschat (tekens ÷ 3,5), niet gemeten.

Voor Level Up Sportcoaching (Jurgen, 25 sporters, 4 weken per maand = 100 runs per maand):

| Volume | Via Claude Code | Alleen mijn deel |
|---|---:|---:|
| Nu (100 runs) | 5,60 euro per maand | 0,56 euro per maand |
| 10× | 56 euro per maand | 5,60 euro per maand |
| 1.000× | 5.600 euro per maand | 560 euro per maand |

**Met een ander model?** Ik denk dat het beter is om hetzelfde model te houden, of zelfs een beter model te nemen, zodat er minder fouten zijn. Minder fouten betekent dat Jurgen minder moet nakijken en dus nog meer tijd bespaart. Een goedkoper model als Haiku 4.5 (ongeveer de helft van de prijs) zou ik niet nemen. Opus 5.5 (ongeveer twee keer de prijs van Sonnet 5.5) kost voor mijn deel ongeveer 0,011 euro per run, dus ongeveer 1,10 euro per maand voor Jurgen. Dat is weinig tegenover de tijd die hij wint. Ik heb dit nog niet getest: of Opus echt minder fouten maakt op mijn testset, weet ik niet.

## Met de hand of met de tool?

**Met de hand.** Zonder tool moet Jurgen alles zelf doen: de notities lezen, de harde trainingen tellen, het herstel inschatten, het advies schrijven en versturen. Dat kost veel tijd. Het grootste deel gaat naar de notities lezen, het advies schrijven en het herstel goed inschatten. Ik schat 20 minuten per sporter, dus 25 × 20 = 500 minuten = **8 uur 20 per week**. Dit is mijn schatting, Jurgen heeft het niet gezegd.

**Met de tool.** De tool doet de drie zwaarste stappen. Jurgen kijkt enkel de onzekere en foute resultaten volledig na. Ik schat dat op **45 minuten per week** voor alle sporters samen (ook een schatting van mij, niet gemeten).

**Winst.** 8 uur 20 min 45 minuten = **7 uur 35 per week**.

Per week is dat 153 tot 328 euro waard, per jaar 394 uur ofwel 7.960 tot 17.060 euro (zie `build/waarde.md` voor dag en maand).

**Uurwaarde.** Een wekelijkse trainingsanalyse via een online coach of platform kost 70 tot 150 euro per maand (bron: AI-overzicht van Google, 15 oktober 2026, gebaseerd op onder andere RunMotion Coach). Dat is een gemiddelde voor online coaches, niet de prijs van Jurgen zelf. Met 25 sporters is dat 1.750 tot 3.750 euro per maand. Jurgen werkt ongeveer 20 uur per week (87 uur per maand), dus een uur is 20 tot 43 euro waard. Alles samen met 5 werkdagen per week en 52 weken per jaar.

**Netto.** Min de kost van de tool (67 euro per jaar) houdt Jurgen ongeveer **7.900 tot 17.000 euro per jaar** over.

## Mijn zwakste cijfer

Het cijfer dat ik het minst vertrouw is de **18 op 20**. Ik heb de tool nog niet getest met echte notities van sporters. Mijn testinputs heb ik zelf geschreven, dus ze lijken waarschijnlijk meer op wat mijn prompt verwacht dan echte notities van Jurgens sporters dat doen.

Als het cijfer lager is met echte notities, maakt de tool meer fouten en moet Jurgen meer nakijken dan de 45 minuten per week die ik schat. Dan daalt de tijdswinst van 7 uur 35 per week. Hoeveel, weet ik pas als ik echte notities test.
