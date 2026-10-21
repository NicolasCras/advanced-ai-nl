# Week 4 — De winst van mijn AI-tool op de werkvloer

## Mijn tool in cijfers
- Label juist: 16 op 20 (n = 10, 2 runs, prompt v2, Opus 5.5)
- Label en alle velden juist: 11 op 20 (n = 10, 2 runs)
- Fouten: 4× F5 (geweigerd), 4× F3 (gemist), 3× F6 (wisselend)

De tool werkt goed bij duidelijke klantenreacties, en die komen uit eigen ervaring het vaakst voor op het werk. Bij twijfel geeft hij `onzeker` in plaats van te gokken: bij T04, een korte en vage reactie, en bij T08, een lange reactie in het Frans waar hij twijfelde tussen twee labels. Bij de velden geeft hij bij online aankoop `niet vermeld` in plaats van `nee`. De velden zijn dus nog in progress.

## Wat kost één run?
Ik mat met Haiku 4.5, het goedkoopste model uit de prijstabel. Mijn eerste poging met `/model haiku` koos Haiku 5.5, dat niet in de tabel staat. Daarna koos ik het model met de volledige naam.

`/context` werkte niet: in de cursusrepo heet een skill ook `context`, dus het commando startte de skill in plaats van de meting. Daarom mat ik met een verschil. Eerst stuurde ik alleen `ok` (meting 1), daarna mijn prompt v2 met T01 (meting 2).

| | Tokens |
|---|---:|
| Context (meting 1) | ± 40.100 |
| Jouw deel (meting 2 − meting 1) | 3.159 input · ± 816 output |

De context is meer dan tien keer zo groot als mijn eigen deel. Dat zijn de instructies, tools en bestanden die Claude Code bij elke vraag meestuurt. Een bedrijf dat de tool via de API laat draaien, betaalt alleen mijn deel.

Kost per run, alleen mijn deel: $0,0072, ongeveer €0,0064 (1 dollar = 0,89 euro, koers van 20 oktober 2026).

| Volume per maand | Haiku 4.5 | Opus 5.5 |
|---|---:|---:|
| Mijn volume: 13 per dag × 20 dagen = 260 | €1,68 | €6,70 |
| 10× (2.600) | €16,75 | €67,01 |
| Het hele team: 124 medewerkers × 15 per dag × 20 dagen = 37.200 | €240 | €959 |

Mijn testset draaide ik met Opus 5.5. Opus is dus het model waarvan ik weet dat het werkt. Haiku is vier keer goedkoper, maar niet getest. Opus berekende ik met dezelfde tokens als Haiku, dat is een aanname.

## Met de hand of met de tool?
**Met de hand.** Een makkelijke reactie: lezen (1–3 min), info opzoeken over de persoon (5–7 min), abonnement of online ticket checken (2 min), invoeren in het CRM (1 min), standaardbrief aanvullen (2 min), mail maken (1 min). Samen ± 15 min. Een ingewikkelde reactie duurt 30–40 min, een heel ingewikkelde ± 50 min. Op een dag met ± 13 reacties zijn er ± 6,5 makkelijk, 4,5 ingewikkeld en 1,5 heel ingewikkeld. Gemiddeld is dat ± 26 min per reactie. Bron: eigen ervaring, geschat, nooit geklokt.

Het extra werk bij ingewikkelde reacties zit bijna volledig in het opzoeken: meerdere openstaande boetes, meerdere accounts, en die cleansen naar het master-account. Dat doet de tool niet.

**Met de tool.** Zolang de tool niet 20 op 20 haalt, lees ik de reactie toch volledig. De winst zit in het opzoeken: met de velden moet ik minder vaak terug naar de reactie. Bij een makkelijke reactie is dat 1–2 keer, bij een ingewikkelde 3–5 keer. Dat bespaart ± 2 min en ± 5 min. De tool laten draaien kost ± 30 s (18 s gemeten, plus plakken), de velden nakijken ook ± 30 s.

| Schakel | Waarde | Bron |
|---|---|---|
| Winst per reactie | makkelijk ± 1 min · ingewikkeld ± 4 min · gemiddeld ± 2,4 min | eigen schatting |
| Volume | 124 medewerkers × 15 per dag × 220 dagen = 409.200 per jaar | gevraagd aan een medewerker van de NMBS |
| Uren per jaar | 132 u per medewerker · 16.368 u voor het team | |
| Uurloon | €60.000 bruto per jaar ÷ 1.672 u = ± €35,90 | gevraagd aan de manager |
| Waarde | 16.368 u × €35,90 = ± €587.000 | |
| Kost van de tool | €10.545 (Opus) · €2.636 (Haiku) per jaar | Haiku gemeten, Opus berekend |
| **Netto** | **± €577.000 (Opus) · ± €585.000 (Haiku)** | |

Ik rekende met het brutoloon, niet met de loonkost. De NMBS betaalt ook werkgeversbijdragen, dus de echte waarde ligt hoger. De kost van de tool is minder dan 2% van de waarde: alles hangt af van de tijdswinst.

## Mijn zwakste cijfer
De tijdswinst bij het opzoeken. Die heb ik zelf geschat, en ze heeft de grootste invloed op het netto.

Is die winst maar de helft, dan wint een makkelijke reactie niets meer (1 min winst − 1 min draaien en nakijken) en een ingewikkelde nog ± 1,5 min. Het team wint dan ± 4.900 u per jaar, en het netto daalt naar ± €166.000 (Opus). De winst halveren doet het netto met ± 70% dalen, omdat de minuut voor draaien en nakijken altijd blijft.

Omgekeerd: haalt de tool 20 op 20, dan hoef ik de reactie misschien niet meer volledig te lezen. Dan komt er 1–3 min winst bij. Hoe beter de tool, hoe meer tijd hij wint. Mijn volgende stap is dus de tijden echt klokken, met en zonder de tool.
