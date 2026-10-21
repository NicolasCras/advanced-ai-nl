# Kosten

Gemeten op 18 oktober 2026. Prompt: `prompt.md` (v2). Input: T01. Prijzen uit de tabel van week 4 (14 oktober 2026). 1 dollar = 0,90 euro (aanname van de cursus).

| Model | Context (`/context`) | Totaal (`/cost`) | Jouw deel | Kost per run | Per maand, jouw volume | 10× | 1.000× |
|---|---:|---:|---:|---:|---:|---:|---:|
| Haiku 4.5, laag (496/maand) | 27.631 | 28.191 in + 514 uit | 560 in + 514 uit | $0,0031 (€0,0028) | €1,40 | €13,97 | €1.397 |
| Haiku 4.5, hoog (1.612/maand) | 27.631 | 28.191 in + 514 uit | 560 in + 514 uit | $0,0031 (€0,0028) | €4,54 | €45,41 | €4.541 |
| Sonnet 5.5, laag (496/maand) | — | — | 560 in + 514 uit | $0,0063 (€0,0056) | €2,79 | €27,94 | €2.794 |
| Sonnet 5.5, hoog (1.612/maand) | — | — | 560 in + 514 uit | $0,0063 (€0,0056) | €9,08 | €90,82 | €9.082 |

## Volume (ronde 2)
- **Werkgebied:** West-Vlaanderen, 62 gemeenten. Soms ook Oost-Vlaanderen en Wallonië, maar dat tel ik niet mee.
- **Geteld** op 18 oktober 2026, op de gemeentewebsites: aanvragen waarvan het openbaar onderzoek geheel of gedeeltelijk liep tussen 18 september en 18 oktober.
  - Zonnebeke (kleine gemeente): 8 aanvragen.
  - Roeselare (stad): 26 aanvragen. Niet meegeteld: 58 beslissingen en 5 aanvragen die pas op 19/10 starten.
- **Laag:** 8 × 62 = 496 per maand. **Hoog:** 26 × 62 = 1.612 per maand.
- Geschat: ik neem aan dat elke gemeente tussen Zonnebeke en Roeselare ligt.

## Ander model (ronde 2)
- Sonnet 5.5, met dezelfde tokens als Haiku 4.5: 560 × $2/M + 514 × $10/M = $0,0063 per run. Dat is twee keer Haiku 4.5.
- Niet gemeten, alleen gerekend. Sonnet kan meer of minder tokens gebruiken.

## Hoe gemeten
- `/context` startte in deze repo de cursusskill `context` (het interview voor `context.md`) in plaats van de teller. Daarom gemeten met `claude -p --model claude-haiku-4-5 --output-format json`, in mijn eigen map. Dat geeft dezelfde tokens als `/cost`.
- **Context:** een lege vraag ("ok"). Tokens erin: 10 + 10.382 (cache schrijven) + 17.239 (cache lezen) = 27.631.
- **Totaal:** prompt + T01 in één bericht, zonder tools. Tokens erin: 9 + 6.922 + 21.260 = 28.191. Tokens eruit: 514.
- **Jouw deel:** 28.191 − 27.631 = 560 tokens erin. De 514 tokens eruit zijn allemaal van mijn run.
- **Kost per run:** 560 × $1 per miljoen + 514 × $5 per miljoen = $0,00056 + $0,00257 = $0,0031.

## Tweede run (cache)
- Zelfde bericht nog eens: 28.191 erin, nu helemaal uit de cache. Kost van de hele sessie: $0,0069 in plaats van $0,0185.
- Tokens eruit: 822 in plaats van 514. Jouw deel: 560 × $1/M + 822 × $5/M = $0,0047 (€0,0042).

## Opgemerkt
- `haiku` kiest in Claude Code nu Haiku 5.5, dat niet in de prijstabel staat. Daarom expliciet `claude-haiku-4-5` gebruikt.
- T01 gaf met Haiku 4.5 twee verschillende antwoorden: run 1 "ja, grondwerk", run 2 "onzeker, grondwerk".
