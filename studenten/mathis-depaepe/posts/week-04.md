# Week 4 — Werd mijn tool te voorzichtig door mijn eigen regel?

## Mijn tool in cijfers

Met v4 haalt mijn tool 188 op 200 velden juist (n = 10, 2 runs, v4, Haiku 5.5). De zes fouten zitten telkens in beide runs: 4 × F3 (T03 bouwjaar, T05 vraagprijs, T07 vraagprijs, T08 doos_papieren) en 2 × F1 (T10 merk en verkoper).

Ik vind dit goed, maar niet goed genoeg om er blindelings op te vertrouwen, zeker niet als het met geld te maken heeft. Tegenover mijn eerste runs (v1 en v2) zijn vijf fouten opgelost, maar er zijn er vier bijgekomen, omdat de tool nu te voorzichtig is: hij zegt "onbekend" waar het antwoord er wel staat.

De fout die ik het ergst vind, is die bij de papieren (T08). Er zat een certificaat bij, maar de tool zei "onbekend". Dan lijkt het horloge minder waard dan het is, en kan ik een deal mislopen. Volgens mijn inschatting kunnen doos en papieren 10 à 20% van de prijs schelen.

## Wat kost één run?

Ik mat de kost op mijn 20 runs met Haiku 5.5. Claude Code stuurt bij elke run ongeveer 3.000 tokens eigen instructies mee: de context. Mijn deel is gemiddeld 1.631 input-tokens en 1.207 output-tokens. Bijna 9 op 10 output-tokens zijn denkwerk dat ik niet zie, maar wel betaal.

Een bedrijf via de API betaalt alleen mijn deel. Met het totaal zou de tool dubbel zoveel tokens gebruiken, maar slechts 1,4 keer zo duur zijn, want de extra tokens zijn input en output kost het meest.

Eén run kost met Haiku 5.5 € 0,00069, met Haiku 4.5 € 0,0069 (1 dollar = 0,90 euro, aanname van de cursus). De echte koers op 20 oktober 2026 is 1 euro = 1,1219 dollar, dus 1 dollar = 0,89 euro (bron: poundsterlinglive.com). Dat scheelt ongeveer 1% en verandert niets aan mijn conclusie. Ik vind het zot dat Haiku 4.5 tien keer meer kost dan Haiku 5.5. De rij van Haiku 4.5 is berekend met de tokens van Haiku 5.5, niet gemeten.

| | Per maand (600) | 10× | 1.000× |
|---|---:|---:|---:|
| Haiku 5.5 | € 0,41 | € 4,14 | € 414 |
| Haiku 4.5 | € 4,14 | € 41,40 | € 4.140 |

Voor mij telt de kost nooit mee: 600 advertenties kosten mij met Haiku 5.5 41 cent per maand. Het grootste probleem is niet de kosten, maar de tijd om alles na te kijken.

## Met de hand of met de tool?

| Schakel | Waarde | Bron |
|---|---|---|
| Met de hand | Lezen 8 min · velden opzoeken 3 min · prijzen vergelijken 5 min · handelaar bekijken 3 min = **19 min** | geschat |
| Met de tool | Draaien 6 s · nakijken 3 min · vergelijken 5 min en handelaar 3 min blijven met de hand. De tool vervangt lezen en velden opzoeken (11 min) door 3,1 min | draaien gemeten (gemiddelde van 20 runs), nakijken geschat |
| Winst per advertentie | 11 − 3,1 = **7,9 min** | |
| Volume | 20 per dag · 140 per week · 600 per maand · 7.200 per jaar | geschat, 7 dagen per week |
| Uren gewonnen | 2,6 u per dag · 18,4 u per week · 79 u per maand · **948 u per jaar** | |
| Uurkost | **15 euro** | aanname: mijn uurloon in de beachbar |
| Waarde | 948 × 15 = **14.220 euro per jaar** | |
| Kost van de tool | 7.200 × € 0,00069 = **± 5 euro per jaar** (Haiku 5.5, mijn deel) | gemeten |
| Netto | **± 14.215 euro per jaar** | |

De € 14.215 is geen geld dat ik verdien, maar de waarde van de tijd die ik overhoud. De tool kost mij bijna niets, elke minuut die ik bespaar met de tool is winst.

## Mijn zwakste cijfer

Mijn zwakste cijfer is 20 advertenties per dag. Dit was een inschatting. Als ik er maar 10 doe, halveert alles: 474 u per jaar in plaats van 948, en ± 7.108 euro netto in plaats van ± 14.215.
