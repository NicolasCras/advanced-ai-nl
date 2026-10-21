# Week 4 — De context kost meer dan de offerte

## Mijn tool in cijfers

22 op 24 juist (n = 12, 2 runs) op promptversie v2b. Eén echte fout, twee keer
gemaakt, klasse F2: bij "een ruimte schilderen en nadien de belichting regelen"
verzon het model een post Elektriciteit lichtpunt van 415 euro, waar een vraag
had moeten staan. Twee keer F6, wisselend antwoord, en alleen in de vragen:
dezelfde input kreeg eerst twee vragen en dan drie over dezelfde onbekende. De
posten zelf waren in alle twaalf inputs identiek, tot op het aantal, de eenheid
en het bronlabel.

Na de wijziging draaide ik T02 twee keer en T11 een keer op v3. Alle drie juist,
n = 2. Dat is te weinig om 24 op 24 te claimen.

## Wat kost één run?

De run van T11, de echte werfopname, met mijn prompt en mijn materialenlijst in
hetzelfde bericht. Model Haiku. De sessie verbruikte 134.500 tokens voor 0,09
dollar.

Die 134.500 is niet wat een server zou versturen. De cache write van de eerste
beurt was 70.000 tokens: dat is de hele prompt, context inbegrepen. Mijn eigen
deel daarvan is ongeveer 3.400 tokens input, want mijn prompt is 11.186 tekens
en de materialenlijst tien regels. De rest, ongeveer 66.600 tokens, is Claude
Code zelf: zijn instructies, mijn context.md, en de toolbeschrijving van elke
MCP-server die aanstaat. De les noemt 20.000 tot 35.000 als normaal. Ik zit op
het dubbele, en de reden staat in het usage-paneel: Claude Browser, terminal,
ccd_turn, ccd_session.

De context is hier twintig keer groter dan mijn eigen prompt. Een bedrijf dat
deze tool via de API draait, stuurt die 66.600 tokens nooit mee.

Mijn deel: 3.400 tokens in, 6.000 tokens uit. Aan 1 dollar per miljoen input en
5 per miljoen output is dat 0,0334 dollar, ofwel **0,030 euro per run** (koers
1 dollar = 0,90 euro, aanname uit de opdracht).

Het zwaartepunt ligt bij de output, en niet omdat het antwoord lang is. De JSON
die ik terugkrijg is ongeveer 600 tokens. De andere 5.400 zijn denkwerk dat ik
niet zie en wel betaal.

Bij 2 offertes per week, 8 per maand, kost dat 0,24 euro per maand. Tien keer
dat volume: 2,40 euro. Duizend keer: 240 euro. Op GPT-6.1 Sol verdubbelt alles,
want die rekent 2 en 10 dollar per miljoen in plaats van 1 en 5.

Twee aannames die ik moet noemen. `/model haiku` gaf me Haiku 5.5, terwijl de
prijstabel van de cursus Haiku 4.5 vermeldt. En OpMaat draait in productie niet
op Haiku maar op Whisper plus GPT-4o. Dat cijfer moet ik nog meten in de app
zelf.

## Met de hand of met de tool?

| Schakel | Waarde | Bron |
|---|---|---|
| Met de hand | Werfbezoek uitwerken, posten opzoeken, prijzen invullen, nakijken: **60 min** voor een grotere offerte | eigen schatting, Joeri gebruikt Excel |
| Met de tool | Inspreken plus de posten nakijken voor hij verstuurt: **18 min** | eigen schatting na testen in de app |
| Winst per offerte | 60 min min 18 min = **42 min** | |
| Volume | 2 per week, 8 per maand, **96 per jaar** | aanname: 48 werkweken |
| Uren gewonnen | 1,4 u per week, 5,6 u per maand, **67 u per jaar** | |
| Uurkost | **50 euro** | aanname, loonkost van een zelfstandige. Mijn materialenlijst rekent 58 euro als factuurtarief |
| Waarde | 67 x 50 = **3.360 euro per jaar** | |
| Kost van de tool | 96 x 0,030 = **2,88 euro per jaar** | gemeten |
| **Netto** | **± 3.357 euro per jaar** | |

De kost van de tool is hier irrelevant. Drie euro per jaar tegenover 3.360 euro
aan tijd. Als de tool afgeraden moet worden, is dat nooit om de tokenprijs.

## Mijn zwakste cijfer

De 18 minuten nakijken. Die 60 minuten met de hand is ook geschat, maar als die
de helft is, blijft er nog altijd 12 minuten winst per offerte over: 19 uur en
960 euro per jaar. Vervelend, geen ander antwoord.

De 18 minuten is gevaarlijker, want hij kan de andere kant op. Mijn hele cijfer
veronderstelt dat Joeri de zeven posten snel overloopt en doorstuurt. Doet hij
dat niet, omdat hij de bronlabels niet vertrouwt en alles natelt, dan wordt
nakijken 35 minuten en zakt de winst naar 7 minuten per offerte: 11 uur en 560
euro per jaar. Bij 42 minuten nakijken is de winst nul.

Dat is geen technisch probleem maar een vertrouwensprobleem, en het staat als
openstaande vraag in mijn scenario. Het cijfer dat ik nodig heb, krijg ik pas
als Joeri de tool echt gebruikt.
