# Kosten per run

Datum meting: 14 oktober 2026. Input: T01 (Xtrackers NASDAQ 100, `kid/3.pdf`), prompt v1 met voorbeelden.

## Ronde 1: één run

Jouw deel = alleen de prompt met het KID erin (zonder Claude Code zelf), zo afgesproken met de docent. Schatting: ± 13k tokens in en ± 0,5k uit. Bron: de Haiku-regel van `/cost` (12,9k in, 339 uit), die qua grootte past bij prompt + KID van T01 (27 KB). Niet exact gescheiden van Claude Code. Prijzen uit de README, 1 dollar = 0,90 euro (koers van de dag 0,89, verschil ± 1%).

| Model | Jouw deel | Kost per run | Per maand (6) | 10× (60) | 1.000× (6.000) |
|---|---|---:|---:|---:|---:|
| Sonnet 5.5 (2 / 10 dollar) | 13k in + 0,5k uit | $0,031 = ± €0,028 | ± €0,17 | ± €1,67 | ± €167 |
| Haiku 4.5 (1 / 5 dollar) | 13k in + 0,5k uit | $0,0155 = ± €0,014 | ± €0,08 | ± €0,84 | ± €84 |

**Volume:** 4 tot 12 runs per maand, gemiddeld 6 (2 onderzoeken x 2 tot 4 ETF's, eigen schatting, zie `scenario.md`).

**Open punt:** `/cost` toonde $0,0015 voor de Haiku-regel, de README-prijs geeft $0,0146 voor hetzelfde. Factor 10 verschil, nog uitzoeken (prijspagina Anthropic). Ook bij een factor 10 meer blijft de kost op jaarbasis klein tegenover de waarde.

## Vanaf welk volume doet de kost ertoe?

- Winst per run: 9,7 min x 15 euro per uur = 2,42 euro. Kost per run: ± 0,028 euro (Sonnet), dus ± 1% van de winst.
- De kost wint van de winst pas bij ± 86 keer de kost per run, of als nakijken ± 11,7 min duurt. Op mijn volume gebeurt dat niet.
- De kost wordt een budgetpost rond 100 euro per maand: ± 3.600 runs per maand met Sonnet, ± 7.100 met Haiku (600 keer mijn volume).
- Bij 1.000x (6.000 runs, 167 euro per maand) is nakijken het probleem: 6.000 x 2,8 min = ± 280 uur per maand.

**Conclusie:** voor mij is de API-kost nooit het argument (± 2 euro per jaar). Bij een groot volume is het nakijken de beperking.

## Waarde: met de hand of met de tool? (geschat, 14 oktober 2026)

| Schakel | Waarde | Bron |
|---|---|---|
| Met de hand | KID zoeken ± 10 s · velden opzoeken 7 tot 10 min · noteren 3 tot 5 min = **± 12,5 min per ETF** (10 tot 15) | eigen schatting |
| Met de tool | zoeken 10 s · draaien ± 40 s · nakijken 2 min (ik controleer, ook het scenario) = **± 2,8 min** | draaien gemeten (wall 40 s), nakijken geschat |
| Winst per ETF | 12,5 − 2,8 = **± 9,7 min** (7,2 tot 12,2) | |
| Volume | 6 per maand, 72 per jaar (48 tot 144) | 2 onderzoeken × 2 tot 4 ETF's, eigen schatting |
| Uren per jaar | 72 × 9,7 min = **± 11,6 u** (5,7 tot 29) | |
| Uurkost | **€15** | aanname: studentenjob-uurloon |
| Waarde | 11,6 × 15 = **± €174 per jaar** (€85 tot €438) | |
| Kost van de tool | ± €2 per jaar (voorlopig, meting klopt nog niet) | |
| Netto | **± €172 per jaar** | |
| Zwakste cijfer | **Nakijken: 2 min.** Geschat, en de tool maakte fouten bij het scenario (verkeerde kolom). Is het 5 min: tool 5,8 min, winst 6,7 min per ETF, 8 u per jaar, ± €120 waarde, netto ± €118. De tool levert pas niets meer op bij ± 11,7 min nakijken. | berekend |
