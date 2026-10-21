# Kosten

Gemeten op 20 oktober 2026. Eén run: prompt v1 + T01 (`inc db 36 x 6`), nieuwe sessie in Claude Code, model Claude Haiku 5.5.

| Model | Context (`/context`) | Totaal (`/cost`) | Jouw deel | Kost per run | Per maand, jouw volume | 10× | 1.000× |
|---|---:|---:|---:|---:|---:|---:|---:|
| Haiku 5.5 | ± 56,7k (benadering) | 58,8k input · 1,5k output · $0,0061 | 2,1k input · 1,5k output | $0,00096 ≈ €0,00086 | 22 runs: $0,021 ≈ €0,019 | 220 runs: $0,21 ≈ €0,19 | 22.000 runs: $21,12 ≈ €19,01 |
| Sonnet 5.5 (berekend, niet gemeten) | | | 2,1k input · 1,5k output (overgenomen van Haiku) | $0,0192 ≈ €0,0173 | 22 runs: $0,42 ≈ €0,38 | 220 runs: $4,22 ≈ €3,80 | 22.000 runs: $422 ≈ €380 |

- Volume: eigen schatting, 3 à 5 trainingen per week (13 à 22 per maand), één bericht per training. Gerekend met 22 per maand (de bovengrens, 5 per week).
- Prijs Haiku 5.5: $0,10 input en $0,50 output per miljoen tokens. Bron: platform.claude.com/docs/en/about-claude/pricing. De tabel in het README van week 4 geeft de prijs van Haiku 4.5 ($1 en $5).
- Prijs Sonnet 5.5: $2 input en $10 output per miljoen tokens (zelfde bron). De tokens zijn die van de Haiku-run: Sonnet kan meer of minder denken, dus dit is een schatting.
- Euro: 1 dollar = 0,90 euro (aanname uit het README). Koers op 20 oktober 2026: 0,89, een verschil van 1%.
- `/context` werkte niet: in deze repo start dat commando de skill `context`. Daarom is de context benaderd met `/cost`: cache lezen (32,8k) + cache schrijven (23,9k) = 56,7k. Jouw deel = de input die niet uit de cache kwam (2,1k) + de output (1,5k).
- De 1,5k output is meer dan de tabel die terugkwam: de rest is denkwerk van Haiku, en dat wordt ook betaald.
