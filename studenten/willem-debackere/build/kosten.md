# Kosten

Gemeten op 14 oktober 2026 met `claude -p --output-format json`, prompt v2. Prijzen per miljoen tokens (input / output): Haiku 4.5 $1 / $5, Sonnet 5.5 $2 / $10. 1 dollar = 0,90 euro (aanname).

- **Context** = wat Claude Code meestuurt voor ik iets vraag. Gemeten met een lege vraag ("Antwoord enkel: ok").
- **Jouw deel** = totaal − context: mijn prompt, de websitetekst en het antwoord. Dat stuurt een bedrijf via de API.
- Kost per run = jouw deel, zonder cache.

| Model | Context | Totaal (input) | Jouw deel (input / output) | Kost per run | Per maand, mijn volume | 10× | 1.000× |
|---|---:|---:|---:|---:|---:|---:|---:|
| Sonnet 5.5 (T01) | 15.789 | 17.267 | 1.478 / 176 | $0,0047 · € 0,0042 | € 0,42 | € 4,20 | € 420 |
| Sonnet 5.5 (gem. 10 inputs, 20 runs) | 15.789 | 18.486 | 2.697 / 198 | $0,0074 · € 0,0066 | € 0,66 | € 6,60 | € 660 |
| Haiku 4.5 (T01) | 16.303 | 17.427 | 1.124 / 876 | $0,0055 · € 0,0050 | € 0,50 | € 5 | € 500 |
| Haiku 4.5 (T07) | 16.303 | 18.875 | 2.572 / 1.437 | $0,0098 · € 0,0088 | € 0,88 | € 8,80 | € 880 |
| Haiku 4.5 (T01), eigen run in Claude Code, 5 requests | ± 40.000 per request | ± 213.000 | n.v.t. | $0,0738 · € 0,066 | € 6,60 | € 66 | € 6.600 |

Opvallend:
- De context van Claude Code (± 16.000 tokens) is 6 tot 10 keer groter dan mijn deel.
- Haiku is per token de helft goedkoper, maar denkt eerst: 711 tot 1.255 denk-tokens per run. Daardoor kost een Haiku-run hier evenveel of meer dan Sonnet.
- De websitetekst is het grootste stuk van mijn deel. Een lange site (T10, Victor Renoveert) kost bijna dubbel zoveel als een korte.

**Volume:** ± 100 bedrijven per maand. Geschat, niet geteld. 10× = 1.000, 1.000× = 100.000 per maand.
Bij mijn volume kost de tool minder dan 1 euro per maand. Bij 10× (1.000 bedrijven) is het € 6,60 per maand. Pas bij 1.000× (100.000 bedrijven) wordt het € 660 per maand.

## Eigen meting in Claude Code (14 oktober 2026)

Nieuwe sessie in mijn studentenmap, `/model haiku`, één run op T01, daarna `/cost`:

| | |
|---|---|
| Requests | 5 (niet 1: de tool opende zelf bestanden) |
| Input | 948 + 18.000 cache schrijven + 194.300 cache lezen = ± 213.000 tokens |
| Output | 3.500 tokens (inclusief denkwerk) |
| Kost (`/cost`, API-prijs) | **$0,0738 · € 0,066** |

Dat is ± 13 keer meer dan jouw deel van T01 met Haiku (€ 0,0050). Oorzaak: elke extra stap (een bestand openen) stuurt de hele context van ± 40.000 tokens opnieuw mee. Les: in de echte tool alleen de prompt en de websitetekst meesturen, in één bericht.

Let op: `/context` in mijn studentenmap start de cursusskill `context` (die heeft dezelfde naam) in plaats van het ingebouwde commando. Die las `AGENTS.md` en `context.md`: ook dat telde mee in de 5 requests. Het contextgetal komt daarom uit de meting met `claude -p` hierboven.
