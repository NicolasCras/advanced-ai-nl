# Week 4 — Goedkoop, maar nog niet betrouwbaar

## Mijn tool in cijfers
Mijn tool leest de tekst van de website van een bedrijf en zegt of het een mogelijke klant is voor DBA Hardwoods, de houthandel van mijn vader. Op dit moment ligt de focus op rubberwood. Hij haalt ook het e-mailadres eruit. Zonder e-mailadres is het geen lead.

Met prompt v2 haalde hij 18 op 20 juist (n = 10 inputs, 2 runs). Beide fouten zijn F1 en zitten bij hetzelfde bedrijf: Bautier. De tool zag "eigen studio en workshop in Brussel" en zei `ja`, terwijl de meubels in Duitsland gemaakt worden. Geen F2: in 20 runs verzon hij geen enkel e-mailadres, ook niet bij de drie sites zonder adres.

Het opvallendste: met exact dezelfde v2-prompt gaf Bautier in week 3 twee keer `nee` en in week 4 twee keer `ja`. Het model leert niet bij tussen de runs. Elke run begint van nul. Het is toeval: F6, wisselend. Mijn wijziging van week 3 hield dus geen stand, zoals ik toen al vreesde. Mijn papa zei bij de buurtest al dat "workshop" niet bewijst dat ze zelf hout verwerken. Dat wordt mijn volgende wijziging.

## Wat kost één run?
Ik mat met `claude -p` op 14 oktober. Eerst een lege vraag, om te zien wat Claude Code zelf meestuurt: 15.789 tokens bij Sonnet 5.5, 16.303 bij Haiku 4.5. Dat is de context. Daarna elke input apart.

Mijn deel, de prompt plus de websitetekst plus het antwoord, is gemiddeld 2.697 input- en 198 output-tokens bij Sonnet 5.5 (20 runs). Aan $2 en $10 per miljoen tokens is dat $0,0074, ongeveer € 0,0066 per run. De context is dus 6 tot 10 keer groter dan mijn deel. Een bedrijf dat de tool via de API draait, betaalt alleen mijn deel.

Haiku 4.5 kost per token de helft, maar denkt eerst: 711 tot 1.255 denk-tokens per run. Daardoor kost een Haiku-run hier € 0,005 tot € 0,009, evenveel of meer dan Sonnet.

Per maand, aan ± 100 bedrijven, kost de tool met Sonnet € 0,66. Bij 10× is dat € 6,60, bij 1.000× € 660.

Ik draaide T01 ook zelf in Claude Code met Haiku. `/cost` gaf $0,0738, ongeveer € 0,066: 13 keer meer dan mijn deel. De tool opende zelf bestanden en deed 5 requests in plaats van 1, en elke stap stuurde de hele context opnieuw mee. Ook `/context` startte in mijn map de cursusskill met dezelfde naam in plaats van het commando. Hoe je de tool draait, bepaalt de kost meer dan welk model je kiest.

## Met de hand of met de tool?
Ik reken met de tool zoals hij nu is: ik zoek het bedrijf, de tool beoordeelt de site en haalt het e-mailadres eruit, ik kijk na.

- **Met de hand:** bedrijf zoeken, site openen, beoordelen, e-mail zoeken en doorgeven: 15 minuten per bedrijf. Eigen schatting.
- **Met de tool:** bedrijf opzoeken 1 minuut, tekst kopiëren en plakken en de tool draaien 2 minuten, nakijken of het wel een e-mailadres is, en geen telefoonnummer of adres, 10 seconden: ± 3 minuten 10 seconden. Eigen schatting. Ik kijk niet na of het adres echt op de site staat: of het werkt, zie ik pas bij de mailing, als er een antwoord komt. Een verzonnen adres (F2) merk ik dus pas laat.
- **Winst:** ± 11 minuten 50 seconden per bedrijf.
- **Volume:** ± 100 per maand, dus ± 5 per dag, 25 per week, 1.200 per jaar. Een gok.
- **Uren:** ± 1 u per dag, 4,9 u per week, 19,7 u per maand, ± 237 u per jaar.
- **Uurkost:** € 45, de loonkost van een bediende in België. Aanname, uit het voorbeeld van de les.
- **Waarde:** 237 × € 45 = ± € 10.650 per jaar.
- **Kost van de tool:** 1.200 × € 0,0066 = ± € 8 per jaar. Gemeten.
- **Netto:** ± € 10.640 per jaar.

Zoals in het voorbeeld uit de les is de kost van de tool bijna niets. De vraag is of mijn schattingen kloppen. Later wil ik dat de tool zelf bedrijven zoekt. Dan blijft enkel nakijken over: bijna 15 minuten winst per bedrijf, ± 297 uur per jaar. Maar dat is nog niet gebouwd.

## Mijn zwakste cijfer
De 100 bedrijven per maand. Het kunnen er zowel meer als minder zijn: het hangt volledig af van de maand en het andere werk.

Is het de helft, 50 per maand, dan win ik ± 118 uur per jaar. Dat is ± € 5.325, min ± € 4 voor de tool: ± € 5.320 netto. Het netto stijgt en daalt recht mee met het volume, omdat de tool bijna niets kost. Mijn zwakste cijfer bepaalt dus de hele waarde.

Wat ik ook nog niet weet: wat een nieuwe klant waard is. Dat hangt af van wat hij inbrengt. Voor mijn memo moet ik dat aan mijn papa vragen.
