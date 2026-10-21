# Kosten van de leveringsassistent

Datum van meting: 16 oktober 2026.

## Gemeten run

De meting gebeurde met de API en `gpt-6-luna`. In het OpenAI-dashboard telde één klantvraag 376 inputtokens en 36 outputtokens. De website stuurt alleen de klantvraag en de gevonden fictieve bestelgegevens naar de API; er is geen Codex-sessiecontext in deze productierun.

| Onderdeel | Berekening | Kost in dollar |
| --- | --- | ---: |
| Input | 376 × $0,10 / 1.000.000 | $0,0000376 |
| Output | 36 × $0,50 / 1.000.000 | $0,0000180 |
| **Kost per run** | input + output | **$0,0000556** |

Met de cursusaanname van $1 = €0,90 is dat **€0,0000500 per run**.

## Op schaal

Mijn aanname is 30 klantvragen per maand bij Ford Geeraerts.

| Model | Kost per run | Per maand: 30 vragen | 10×: 300 vragen | 1.000×: 30.000 vragen |
| --- | ---: | ---: | ---: | ---: |
| GPT-6 Luna | €0,0000500 | €0,00150 | €0,0150 | €1,5012 |
| GPT-6.1 Sol | €0,0010008 | €0,0300 | €0,3002 | €30,0240 |

Voor GPT-6.1 Sol is dezelfde gemeten hoeveelheid tokens gebruikt, met $2 per miljoen inputtokens en $10 per miljoen outputtokens. Dat model is ongeveer twintig keer duurder, maar blijft bij dit volume goedkoop.

## Geschatte waarde van tijdswinst

| Schakel | Waarde | Bron |
| --- | ---: | --- |
| Manueel antwoord | 10 minuten per vraag | eigen schatting |
| Met de tool | 30 seconden menselijke controle per vraag | eigen schatting |
| Winst | 9,5 minuten per vraag | berekening |
| Volume | 30 vragen per maand, 360 per jaar | eigen schatting |
| Tijdswinst | 4,75 uur per maand, 57 uur per jaar | berekening |
| Uurkost verkoper | €40 | eigen aanname |
| Waarde tijdswinst | €2.280 per jaar | 57 uur × €40 |
| API-kost | ongeveer €0,02 per jaar | 360 runs × €0,0000500 |
| Netto geschatte waarde | ongeveer €2.279,98 per jaar | waarde tijdswinst − API-kost |

## Zwakste cijfer

Ik vertrouw de 30 vragen per maand het minst, omdat dit voorlopig vooral een inschatting is en ik nog niet echt heb gemeten hoeveel klanten maandelijks bellen met vragen over hun levering. Als het werkelijke volume de helft lager ligt, zijn er 15 vragen per maand en 180 per jaar. Dan bedraagt de tijdswinst 28,5 uur per jaar, de geschatte waarde €1.140 per jaar en de API-kost ongeveer €0,01 per jaar.

## Beperking

Dit is één gemeten run. Langere klantvragen of langere antwoorden kunnen meer tokens en dus een hogere kost veroorzaken.
