# Kosten per run

Gemeten op 16 oktober 2026. Koers: 1 dollar = 0,90 euro (aanname uit de
opdracht, koers van de dag nog te checken).

Input T11 uit `test-set.md`, prompt uit `prompt.md` (1.946 woorden, 11.186
tekens) plus de tien regels van `materialenlijst.csv`. De run was juist: zeven
posten, 13,5 m2, correctie en kraan op `open`, exact zoals vooraf opgeschreven.

## Wat de sessie verbruikte

| | Tokens |
|---|---:|
| Verse input | 2 |
| Cache write (beurt 1) | 70.000 |
| Cache read (beurt 2) | 58.500 |
| Output | 6.000 |
| **Totaal** | **134.500** |
| Kost hele sessie | $0,09 |

Model: Haiku 5.5. `/model haiku` geeft 5.5, terwijl de prijstabel van de cursus
Haiku 4.5 vermeldt. Ik reken met de 4.5-prijzen en noteer dat als aanname.

## Context tegenover jouw deel

`/context` heb ik niet apart genoteerd. Afgeleid uit de cache write van beurt 1:
die 70.000 tokens zijn de hele eerste prompt, dus context plus mijn deel.

| | Tokens | Hoe |
|---|---:|---|
| Context (Claude Code zelf) | ± 66.600 | 70.000 min mijn deel |
| Mijn deel, input | ± 3.400 | prompt + materialenlijst + T11 |
| Mijn deel, output | 6.000 | gemeten |

De context is hier bijna twintig keer groter dan mijn eigen prompt. De les noemt
20.000 tot 35.000 tokens als normaal; ik zit veel hoger omdat er MCP-servers
aanstaan (Claude Browser, terminal, ccd_turn, ccd_session). Elke server stuurt
zijn volledige toolbeschrijving mee bij elk bericht.

Een echte server stuurt die context niet mee. Voor de memo telt alleen mijn
deel.

## Kost per run, alleen mijn deel

| Model | Input | Output | Kost per run | In euro |
|---|---:|---:|---:|---:|
| Haiku 4.5 ($1 / $5 per M) | 3.400 | 6.000 | $0,0334 | **€ 0,030** |
| GPT-6.1 Sol ($2 / $10 per M) | 3.400 | 6.000 | $0,0668 | € 0,060 |

Het zwaartepunt ligt bij de output: 6.000 tokens tegen 3.400 input, en output
kost vijf keer meer per token. Van die 6.000 is de JSON zelf maar ongeveer 600.
De rest is denkwerk van het model dat je niet ziet en wel betaalt.

## Per maand

| Volume per maand | Haiku 4.5 | GPT-6.1 Sol |
|---:|---:|---:|
| 8 | € 0,24 | € 0,48 |
| 80 (10x) | € 2,40 | € 4,80 |
| 8.000 (1.000x) | € 240 | € 480 |

Die 8 komt van 2 offertes per week, mijn eigen schatting voor een zelfstandige
als Joeri. Niet geteld en niet aan hem gevraagd, dus het blijft een aanname. Op
jaarbasis is dat 96 runs, ofwel € 2,88 aan tokens.

Vanaf welk volume doet het bedrag ertoe? Bij Joeri nooit: 96 runs per jaar kost
minder dan drie euro. Pas rond duizend keer dat volume, 8.000 runs per maand,
wordt het een post op een begroting.

## De cache

Beurt 1 schreef 70.000 tokens naar de cache, beurt 2 las er 58.500 terug. Lezen
kost $0,10 per miljoen, schrijven $1,25. Dezelfde vraag twee keer na elkaar
kost dus niet twee keer hetzelfde. Dat raakt mijn cijfer per run niet, want dat
rekent alleen mijn deel.

## Let op: de echte tool draait niet op Haiku

Deze meting loopt op Haiku, zodat ze met de demo te vergelijken is. OpMaat
gebruikt Whisper voor de transcriptie en GPT-4o voor de structuur (zie
`taak.md`). Voor de memo moet ik dus nog meten:

- de kost van Whisper per minuut opname, per run
- de kost van het structureren op het model dat echt draait

Dat meet ik in de app zelf: stand van de credits noteren, tien offertes draaien,
opnieuw noteren, delen door tien.
