# Kosten

Gemeten op 14 oktober 2026. Prompt v3, input T01 (tote bag). Antwoord: GO, juist (2 runs).

## Kost per run

| Model | Context | Totaal | Jouw deel | Kost per run | Per maand, jouw volume | 10× | 1.000× |
|---|---:|---:|---:|---:|---:|---:|---:|
| Haiku 5.5 (gemeten) | 48.600 | 53.900 in + 1.400 uit | 5.300 in + 1.400 uit | $0,0012 (€0,0011) | $0,10 (€0,09) | $0,98 (€0,89) | $98,40 (€88,56) |
| Haiku 4.5 (tabelprijs) | | | 5.300 in + 1.400 uit | $0,0123 (€0,0111) | $0,98 (€0,89) | $9,84 (€8,86) | $984 (€885,60) |

- **Context** = cache read + cache write van de T01-run (31.500 + 17.100). `/context` werkte niet: in deze cursus start dat de context-skill.
- **Jouw deel** = de gewone input + output van de T01-run. Dat is wat een bedrijf via de API zou sturen.
- **Kost per run, Haiku 5.5:** 5.300 × $0,10/M + 1.400 × $0,50/M = $0,0012.
- **Kost per run, Haiku 4.5:** 5.300 × $1/M + 1.400 × $5/M = $0,0123.
- Euro: 1 dollar = 0,90 euro (aanname uit de cursus, koers nog checken).
- **Volume:** 80 productpagina's per maand (± 20 per week als ik actief producten zoek om op Vinted te verkopen). Geschat, niet geteld: ik verkoop sinds 2 weken op Vinted, maar ik hield niet bij hoeveel pagina's ik bekeek. 10× = 800, 1.000× = 80.000 per maand.
- Per run gerekend met de exacte prijs: Haiku 5.5 = $0,00123, Haiku 4.5 = $0,0123.

## Waarde: hoeveel tijd wint mijn tool?

| Schakel | Waarde | Bron |
|---|---|---|
| Met de hand | Lezen 2 min · A t/m D elk 35 s (= 2 min 20 s) · beslissen 30 s = **4 min 50 s** | zelf gedaan, geschat |
| Met de tool | Kopiëren, plakken en draaien ± 1 min · nakijken ± 1 min (label checken, citaten opzoeken met Ctrl+F) = **2 min** | draaien: 30 s gemeten (`/cost`), de rest geschat |
| Winst per pagina | 4:50 − 2:00 = **2 min 50 s** (170 s) | |
| Volume | 4 per dag · 20 per week · 80 per maand · **960 per jaar** | geschat; aanname: 5 dagen per week, 12 maanden |
| Uren gewonnen | 11 min per dag · 57 min per week · 3,8 u per maand · **45 u per jaar** | |
| Uurkost | **13 euro** | aanname: mijn uurloon bij Brand Activators (studentenjob). Een uur nakijken is een uur dat ik daar niet werk. |
| Waarde | 45,3 u × 13 = **± 589 euro per jaar** | |
| Kost van de tool | 960 × $0,00123 = **€1,06 per jaar** (Haiku 5.5) · 960 × $0,0123 = €10,63 per jaar (Haiku 4.5) | gemeten |
| Netto | **± 588 euro per jaar** (Haiku 5.5) · ± 579 euro per jaar (Haiku 4.5) | |
| Als de tijd met de hand de helft is | 2 min 25 s met de hand − 2 min met de tool = 25 s winst · 960 × 25 s = 6,7 u · × 13 = **± 87 euro per jaar** | |

**Opgelet:** de tijd met de hand verschilt sterk per pagina. Sommige pagina's zijn vier keer zo lang, of bevatten meer risico's, en dan duurt de analyse langer. De 4 min 50 s is een gemiddelde. Kandidaat voor mijn zwakste cijfer.

## Ruwe metingen

| Run | Model | Input | Output | Cache read | Cache write | `/cost` |
|---|---|---:|---:|---:|---:|---:|
| T01, run 1 | claude-haiku-5-5 | 5,3k | 1,3k | 31,5k | 17,1k | $0,0049 |
| T01, run 2 | claude-haiku-5-5 | 5,3k | 1,4k | 31,5k | 17,1k | $0,0049 |
| Alleen "ok" (`claude -p`) | claude-haiku-5-5 | 2 | 262 | 14.052 | 14.476 | $0,0032 |

De "ok"-run liep in de achtergrond (`claude -p`). Daar stuurt Claude Code minder context mee (28.530 tokens) dan in een gewoon venster (48.600). Daarom gebruik ik hem niet om jouw deel uit te rekenen.

## Open vragen

- **Prijs van Haiku 5.5:** niet in de tabel van de cursus. Afgeleid uit `/cost`: $0,10 input, $0,50 output, $0,20 cache schrijven, $0,01 cache lezen per miljoen tokens. Beide runs kloppen hiermee. Nog checken op de prijspagina van Anthropic.
- **Welk model voor de memo?** `/model haiku` geeft Haiku 5.5, de demo gebruikt Haiku 4.5. Vragen aan de docent.
- **Volume per maand:** 80 is een schatting. Na een maand echt zoeken: tellen.
- **Uurkost:** 13 euro bij Brand Activators. Bruto of netto? Nakijken op de loonbrief.
