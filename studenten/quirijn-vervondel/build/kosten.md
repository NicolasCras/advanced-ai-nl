# Kosten van één run

Datum: 2026-10-20

## Hoe gemeten
- Gemeten met Claude Code, `/model haiku` = Haiku 5.5.
- Één run met prompt v1 en de notitie van T06 (geen T01).
- `/context` werkte niet: de projectskill `/context` van de cursus nam het over en startte het context-interview. Daarom heb ik de context afgeleid uit `/cost`: de cachetokens zijn wat Claude Code meestuurt.

## Wat `/cost` gaf
- 2,5k input
- 3,3k output
- 28,9k cache read
- 33,6k cache write
- Totaal: $0,0089

## Prijzen
Haiku 5.5, per miljoen tokens: input $0,10, output $0,50, cache lezen $0,01, cache schrijven (1 uur) $0,20. Bron: eesel.ai, gecontroleerd: dit geeft exact $0,0089.

Haiku 4.5 en Sonnet 5.5, per miljoen tokens: Haiku 4.5 input $1, output $5. Sonnet 5.5 input $2, output $10. Bron: prijstabel in `cursus/week-04/README.md` (14 oktober 2026), met [Anthropic](https://platform.claude.com/docs/en/about-claude/pricing) als bron.

## Context en mijn deel
- Context (alles wat Claude Code meestuurt): 62,5k tokens, $0,0070.
- Mijn deel (input + output): 2,5k + 3,3k = 5,8k tokens, $0,0019 = € 0,0017 per run (aanname: $1 = € 0,90).
- Output is groter dan input: Haiku denkt eerst, en die tokens betaal je.

## Volume
Ongeveer 10 plaatsbezoeken per maand (huidig volume bij Jasper, volgens mij).

| Model | Per run (mijn deel) | Huidig volume (10 runs/maand) | 10× volume (100 runs/maand) | 1.000× volume (10.000 runs/maand) |
|---|---|---|---|---|
| Haiku 5.5 | € 0,0017 | € 0,017 | € 0,17 | € 17 |
| Haiku 4.5 | € 0,017 | € 0,17 | € 1,70 | € 170 |
| Sonnet 5.5 | € 0,034 | € 0,34 | € 3,40 | € 340 |

## Conclusie
Bij het huidige volume is de kost verwaarloosbaar. Pas bij 1.000× volume en een duurder model wordt het een bedrag.
