# Testset

Kolommen in het juiste antwoord: oefening | sets | reps | gewicht (kg) | afstand (km) | tijd (min) | notitie. Ontbreekt een waarde: `?`. Geen training: `geen training`.

| ID | Input | Juiste antwoord | Waarom | Run 1 | Run 2 |
|---|---|---|---|---|---|
| T01 | `inc db 36 x 6` | incline dumbbell press \| ? \| 6 \| 36 \| ? \| ? \| ? | Sets niet vermeld. Reps 6 (x6). Gewicht 36. | inc dumbbell \| ? \| ? \| 36 \| ? \| ? \| ? | inc dumbbell \| ? \| 6 \| 36 \| ? \| ? \| ? |
| T02 | `5km 36min` | lopen \| ? \| ? \| ? \| 5 \| 36 \| ? | Er staat km, dus het is sowieso lopen. De duur van een training zet ik nooit, dus 36min is de looptijd. | ? \| ? \| ? \| ? \| ? \| ? \| 5km 36min | lopen \| ? \| ? \| ? \| 5 \| 36 \| ? |
| T03 | `chestday niet optimaal` | ? \| ? \| ? \| ? \| ? \| ? \| chestday niet optimaal | Geen oefening of cijfers, alleen hoe de training voelde. | ? \| ? \| ? \| ? \| ? \| ? \| chestday, niet optimaal | chestday \| ? \| ? \| ? \| ? \| ? \| niet optimaal |
| T04 | `Chestday niet gevoeld.` | ? \| ? \| ? \| ? \| ? \| ? \| Chestday niet gevoeld. | Zelfde als T03: geen oefening of cijfers, alleen hoe de training voelde. | ? \| ? \| ? \| ? \| ? \| ? \| Chestday niet gevoeld. | ? \| ? \| ? \| ? \| ? \| ? \| Chestday niet gevoeld. |
| T05 | `db press en 30min cardio` | rij 1: dumbbell press \| ? \| ? \| ? \| ? \| ? \| ?<br>rij 2: cardio \| ? \| ? \| ? \| ? \| 30 \| ? | Twee oefeningen, dus twee rijen. db = dumbbell. Cardio blijft cardio, geen lopen. | rij 1: dumbbell press \| ? \| ? \| ? \| ? \| ? \| ?<br>rij 2: cardio \| ? \| ? \| ? \| ? \| 30 \| ? | rij 1: dumbbell press \| ? \| ? \| ? \| ? \| ? \| ?<br>rij 2: cardio \| ? \| ? \| ? \| ? \| 30 \| ? |
| T06 | `yo vandaag bench 80kg gedaan 3x5 lezgooo vorige week was 77,5 dus ja progressie he 💪` | bench \| 3 \| 5 \| 80 \| ? \| ? \| vorige week 77,5 | Twee gewichten: het meest recente telt (80). Het oude gaat in notitie. | bench \| 3 \| 5 \| 80 \| ? \| ? \| progressie, vorige week 77,5 kg | |
| T07 | `deadlift 140x3 ma rug deed raar dus gestopt. morgen ff rust denk ik` | deadlift \| ? \| 3 \| 140 \| ? \| ? \| rug deed raar, gestopt | x3 zijn reps. Sets staan niet in het bericht. | | |
| T08 | `pull ups 8 aan een stuk!! begin dit jaar was da er 2` | pullups \| ? \| 8 \| ? \| ? \| ? \| begin dit jaar 2 | Reps 8. Het oude getal 2 (begin dit jaar) in notitie. Sets niet vermeld. | | |
| T09 | `5km 32min 6:28/km laatste 1.5km zwaar` | lopen \| ? \| ? \| ? \| 5 \| 32 \| laatste 1.5km zwaar | 5 is de afstand, 32 is de tijd die ik nodig had. Het tempo heeft nog geen kolom. `notitie` is alleen hoe ik me voelde. | lopen \| ? \| ? \| ? \| 5 \| 32 \| 6:28/km, laatste 1,5 km zwaar | |
| T10 | `arm day, spidercurl 12X12 voor 3sets.` | spider curl \| 3 \| 12 \| 12 \| ? \| ? \| ? | 12 kg voor 12 reps, want het eerste getal voor x is het gewicht. 3 sets staan er expliciet. `arm day` staat niet in `notitie`, want ik zeg het erbij als het erin moet. | spidercurl \| 3 \| ? \| ? \| ? \| ? \| armday, "12X12" | |

Run 1 van T03, T05, T06, T09, T10 gedraaid op 13 oktober 2026, huidige prompt (met voorbeelden), nieuw gesprek per input. T05 gaf hetzelfde als op 6 oktober. T03 gaf vroeger `chestday niet optimaal` in notitie.

T05 is gereconstrueerd uit mijn hoofd, geen echt verstuurd bericht.

Runs: prompt v1, Claude Sonnet (`claude -p --model sonnet`), elke run een nieuw gesprek, 6 oktober 2026.

**Resultaat Run 1:** 4 op 5 juist (n = 5, 1 run: T03, T05, T06, T09, T10).
Fouten: T10 = F3 (gemist): reps 12 en gewicht 12 stonden in `12X12`, het model zette `?` en `12X12` in notitie.

## Run 3: alle tien, 20 oktober 2026

Huidige prompt (`prompt.md`, met de regel voor `12X12`), Claude Haiku 5.5 (`claude -p --model haiku`), elke input een eigen run, gedraaid vanuit een lege map zonder `CLAUDE.md` of `context.md`.

| ID | Uitkomst | Oordeel |
|---|---|---|
| T01 | inc dumbbell \| ? \| 6 \| 36 \| ? \| ? \| ? | juist |
| T02 | ? \| ? \| ? \| ? \| ? \| ? \| 5km in 36min | **fout, F3** |
| T03 | ? \| ? \| ? \| ? \| ? \| ? \| chestday, niet optimaal | juist |
| T04 | ? \| ? \| ? \| ? \| ? \| ? \| chestday, borst niet gevoeld | juist |
| T05 | rij 1: dumbbell press \| ? \| ? \| ? \| ? \| ? \| ?<br>rij 2: cardio \| ? \| ? \| ? \| ? \| 30 \| ? | juist |
| T06 | bench press \| 3 \| 5 \| 80 \| ? \| ? \| vorige week 77,5, progressie | juist |
| T07 | deadlift \| ? \| 3 \| 140 \| ? \| ? \| rug deed raar dus gestopt, morgen rust | juist |
| T08 | pull ups \| ? \| 8 \| ? \| ? \| ? \| 8 aan een stuk, begin dit jaar 2 | juist |
| T09 | lopen \| ? \| ? \| ? \| 5 \| 32 \| 6:28/km, laatste 1.5 km zwaar | juist |
| T10 | spidercurl \| 3 \| 12 \| 12 \| ? \| ? \| arm day | juist |

Kleine verschillen in de naam (bv. "pull ups" of "pullups") of extra woorden in `notitie` tellen niet als fout.

**Resultaat Run 3:** 9 op 10 juist (n = 10, 1 run).
Fouten: T02 = F3 (gemist): het model zag niet dat het om lopen ging en zette 5 en 36 in `notitie` in plaats van in afstand en tijd. T02 gaf in run 2 wel het juiste antwoord, dus de tool doet het niet altijd hetzelfde.

T10 slaagt nu: de regel voor `12X12` werkt.
