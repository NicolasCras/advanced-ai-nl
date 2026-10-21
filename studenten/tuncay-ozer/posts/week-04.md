# Week 4 — Een gemak voor minder dan een euro

## Mijn tool in cijfers
Vorige week haalde mijn tool 4 op 5 juist (n = 5, 1 run). De enige fout was T10: `spidercurl 12X12 voor 3sets.` Het model zette `?` bij reps en gewicht en schreef `12X12` in de notitie. Dat is een F3: gemist. Ik versta dat het verwarrend kan zijn. Eerlijk gezegd noteer ik zelf ook af en toe iets anders. Daarom zette ik een regel in mijn prompt: `A x B` is gewicht x reps, en zijn A en B gelijk, dan neem je ze allebei over.

Deze week draaide ik alle tien inputs met Haiku 5.5: 9 op 10 juist (n = 10, 1 run). T10 slaagt nu. De enige fout was T02: `5km 36min`. Het model zag niet dat het om lopen ging en zette 5 en 36 in de notitie in plaats van in afstand en tijd. Weer een F3. Vorige week gaf T02 één keer wel het juiste antwoord, dus de tool doet het niet altijd hetzelfde. Toch ben ik blij met mijn resultaat, want er was maar één fout. Later wil ik een systeem bouwen waarin de AI mij beter leert kennen, zodat hij minder tot geen fouten maakt.

Om de fout bij T02 op te lossen, moet ik concretere regels en voorbeelden in mijn prompt zetten, zoals ik voor `12X12` deed. Dit project is een beetje "eenvoudig" als je het aan anderen uitlegt. Later wil ik nog verder gaan en grotere projecten doen.

## Wat kost één run?
Over de kosten ben ik een beetje verrast, want ik heb eigenlijk nooit nagedacht over wat een prompt kost die ik gebruik.

Ik mat één run met Haiku 5.5: prompt + T01 (`inc db 36 x 6`). Volgens `/cost` kostte de hele run $0,0061. Maar ongeveer 85% daarvan was de context van Claude Code: systeeminstructies, tools en skills die bij elke vraag meegaan. Mijn deel (2,1k input en 1,5k output) kost $0,00096, ongeveer €0,00086. `/context` werkte niet, omdat het in deze repo een skill start. Daarom heb ik de context benaderd met de cachecijfers uit `/cost`.

Ik train 3 à 5 keer per week, dus maximaal 22 runs per maand. Dat kost €0,019 per maand. Bij 10× is dat €0,19, bij 1.000× €19: evenveel als mijn sportabonnement. Met Sonnet 5.5 is het 20× duurder: €3,80 bij 10× en €380 bij 1.000×. Ik zou bij Haiku blijven, want €4 voor zoiets vind ik onnodig.

Ik rekende met 1 dollar = 0,90 euro. Op 20 oktober 2026 was de koers 0,89. Dat verschil van 1% verandert niets aan mijn conclusies.

## Met de hand of met de tool?

| Schakel | 3 per week | 4 per week | 5 per week | Bron |
|---|---:|---:|---:|---|
| Met de hand: Excel openen 10 s + 3 tot 6 oefeningen × 30 s | 100 s | 145 s | 190 s | eigen schatting |
| Met de tool: typen 10 s + draaien 8 s + nakijken 10 s + Excel openen 10 s + plakken 5 s | 43 s | 43 s | 43 s | draaien gemeten, rest geschat |
| Winst per training | 57 s | 102 s | 147 s | |
| Trainingen per jaar | 156 | 208 | 260 | eigen schatting |
| Winst per jaar | 2,5 u | 5,9 u | 10,6 u | |
| × uurkost €16 | €39,50 | €94,30 | €169,90 | mijn uurloon bij Volvo Logistics |
| − kost van de tool | €0,13 | €0,18 | €0,22 | gemeten |
| **Netto per jaar** | **€39** | **€94** | **€170** | |

De kost van de tool valt bijna weg. Het netto hangt bijna alleen af van mijn tijd. Maar tijd is niet het belangrijkste. Als ik het manueel in Excel zet, stel ik vaak uit, en uiteindelijk komt het er niet eens in. Ongeveer de helft van mijn trainingen staat nu nooit in mijn Excel (eigen schatting). Met de tool typ ik gewoon een kort bericht en plak ik de tabel.

Uiteindelijk wil ik dat alles automatisch gebeurt. Ik schrijf ergens iets op, bijvoorbeeld in de Claude-app op mijn gsm, en hij zet het zelf in een Excel-bestand. Na een tijdje weet hij wat ik bedoel en maakt hij geen fouten meer. Dan valt ook het openen en plakken weg.

## Mijn zwakste cijfer
Het aantal trainingen. Het hangt sterk af van mijn week: ik probeer minstens 3 keer per week te gaan, en maximaal 5. Als ik maar half zoveel train, blijft er netto €20 tot €85 per jaar over. Ook dan levert de tool nog iets op, omdat hij bijna niets kost.
