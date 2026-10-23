# Kosten

Model: Claude Sonnet 5.5 (2 dollar per miljoen tokens in, 10 dollar uit). Koers: 1 dollar = 0,90 euro (aanname).

## Kost van 1 run (1 sporter, 1 week)

| | Dollar | Euro | Hoe |
|---|---:|---:|---|
| Gemeten in Claude Code (`/cost`) | 0,0625 | 0,056 | Eén run in Claude Code, inclusief de context van Claude Code zelf |
| Alleen mijn deel (schatting) | 0,006 | 0,0056 | Prompt ongeveer 1.600 tokens + notities 100 tot 250 tokens in, antwoord ongeveer 250 tokens uit |

Tokens zijn geschat: tekens ÷ 3,5. Mijn deel is ongeveer 10× goedkoper dan wat `/cost` toont. Het verschil is de context van Claude Code (20.000 tot 35.000 tokens bij elke vraag).

## Echte plek: Level Up Sportcoaching (Jurgen, 25 sporters)
25 sporters × 4 weken = 100 runs per maand.

| Volume | Runs per maand | Via Claude Code (0,056 euro per run) | Alleen mijn deel (0,0056 euro per run) |
|---|---:|---:|---:|
| Nu | 100 | 5,60 euro | 0,56 euro |
| 10× (250 sporters) | 1.000 | 56 euro | 5,60 euro |
| 1.000× (25.000 sporters) | 100.000 | 5.600 euro | 560 euro |

Let op: 1.000× is geen coach meer maar bijna een heel platform. De rekensom gaat uit van dezelfde lengte van notities.

## Eén sporter (ter vergelijking)
4 runs per maand: 0,22 euro (Claude Code) of 0,02 euro (alleen mijn deel).

## Opus 5.5, ter vergelijking met Sonnet 5.5

Prijs: Claude Opus 5.5 kost 4 dollar per miljoen tokens in, 20 dollar per miljoen uit (2× zo duur als Sonnet 5.5, zowel in als uit).

Gemeten in `modellen.md` (10 runs per setup, buiten Claude Code, dus zonder de Claude Code-context van de tabel hierboven — alleen de prompt, de input en het antwoord):

| Setup | Gem. kost per run (dollar) | Gem. kost per run (euro) |
|---|---:|---:|
| A: Opus 5.5, standaard niveau | 0,0409 | 0,037 |
| B: Sonnet 5.5, standaard niveau | 0,0186 | 0,017 |
| C: Sonnet 5.5, laagste niveau | 0,0160 | 0,014 |

Opus kost hier ongeveer 2,2× zoveel per run als Sonnet op standaard niveau — in lijn met de 2× hogere tarieven, met een klein verschil door iets minder output-tokens bij Opus (zie `modellen.md`). Bij Jurgen (100 runs per maand) zou dat ongeveer 3,70 euro per maand zijn met Opus tegenover 1,70 euro met Sonnet op standaard niveau — het verschil is bij dit volume verwaarloosbaar, maar schaalt wel mee bij 1.000× (zie tabel hierboven).

## Haiku 5.5, gecorrigeerd in week 5

Oude regel (mijn post van week 4): "Een goedkoper model als Haiku 4.5 (ongeveer de helft van de prijs) zou ik niet nemen."

**Gecorrigeerd in week 5.** Controle op 2026-10-22: `/model haiku` geeft `haiku-5-5`, niet `haiku-4-5`. Het goedkopere model is dus Haiku 5.5, en dat kost veel minder dan de helft van Sonnet 5.5:

| Model | Input (dollar per miljoen tokens) | Output (dollar per miljoen tokens) |
|---|---:|---:|
| Sonnet 5.5 | 2 | 10 |
| Haiku 5.5 | 0,10 | 0,50 |

Haiku 5.5 kost dus een twintigste van Sonnet 5.5, zowel in als uit (bron: Anthropic-prijzenpagina, tabel uit `cursus/week-05/README.md` van 21 oktober 2026). Die prijs geldt tot 100.000 tokens per vraag; mijn runs zitten daar ver onder. De kost van een run in de tabellen hierboven (Sonnet 5.5) blijft juist.

Gemeten in `modellen.md` (setup D, 10 runs, buiten Claude Code): **0,0018 dollar per run, 0,0016 euro**. Dat is ongeveer 10 keer minder dan Sonnet 5.5 op standaard niveau (0,0186 dollar), niet 20 keer, omdat Haiku veel meer output-tokens gebruikte (gemiddeld 1.349 tegenover 514). Bij 100 runs per maand is dat ongeveer 0,16 euro per maand, 1,94 euro per jaar.

Let op: Haiku 5.5 haalde 8 op 10 en viel daarmee buiten mijn foutmarge van 9–10 (zie `modellen.md`). Goedkoper is hier dus niet gelijk goed genoeg. Kost van Haiku 5.5 via Claude Code (met de context van Claude Code): nog niet gemeten.

Over de dollars in `/cost`: bij mijn Haiku-runs (`claude -p`, `total_cost_usd`) klopte het bedrag met mijn herberekening uit de tokens met de prijs van Haiku 5.5. Voor `/cost` in een gewone sessie heb ik dat niet gecontroleerd.
