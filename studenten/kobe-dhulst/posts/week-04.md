# Week 4 — De kost van een tool

## Mijn tool in cijfers
Mijn tool sorteert schoolmails in vijf labels: dringend, later, info, negeren en onzeker. Ik draaide alle tien mails van mijn testset twee keer met prompt v2, telkens in een nieuw tijdelijk gesprek in de Claude-app met Opus 5.5. Resultaat: 18 op 20 juist (n = 10, 2 runs).

Beide fouten zijn F1, en het is twee keer dezelfde mail: T07, een verificatiecode van UNIZO. Het juiste label is dringend, want ik moet de code meteen invullen. De tool zei twee keer later, met dezelfde reden: "de mail noemt geen deadline". Het is jammer dat T07 twee keer op dezelfde manier fout gaat. Dat wijst op een fout in mijn prompt, niet op toeval. Ik zal hier later een aanpassing doen. Eerst wil ik meer dringende mails in mijn testset, want nu staat er maar één in. Anders schrijf ik een regel voor die ene mail en weet ik niet of hij ook voor andere werkt.

## Wat kost één run?
Ik mat het in Claude Code met Haiku 4.5, in een lege map. In mijn studentenmap startte `/context` de cursus-skill met dezelfde naam in plaats van het commando dat tokens telt.

Voor ik één woord typte, toonde `/context` 34.400 tokens. Dat is de context: wat Claude Code zelf meestuurt. Dat verraste me het meest. Na één run met prompt + T01 toonde `/cost` 44.800 tokens. Jouw deel is dus 10.400 tokens: 9.200 input en 1.200 output. Met de prijzen van Haiku 4.5 ($1 input, $5 output per miljoen) is dat $0,0152, ongeveer € 0,014 per run.

Maar mijn prompt met T01 is maar 523 woorden, ongeveer 1.000 tokens. De rest komt van Claude Code, niet van mij. Een bedrijf dat via de API alleen mijn prompt stuurt, betaalt ongeveer € 0,006 per run. De output is het duurste deel: 1.200 tokens voor een antwoord van één regel. Dat is het denkwerk van Haiku, dat ik niet zie maar wel betaal.

Per maand, bij 65 mails: € 0,41 met Haiku. Bij 10× (650 mails) € 4,10, bij 1.000× (65.000 mails) € 410. Met Opus 5.5, het model waarmee ik mijn 18 op 20 mat, is het vier keer zoveel: € 1,64, € 16,38 en € 1.638 per maand. Het verraste me ook dat het voor mij maar een paar cent per maand kost. Dat zou ik zeker betalen. Bij 1.000 studenten zou Artevelde het overwegen: dan moet iemand kunnen tonen dat het meer oplevert dan het kost.

Goedkoper is niet zomaar even goed: Haiku gaf bij T01 negeren, Opus twee keer info.

## Met de hand of met de tool?
Met de hand: openen en lezen 25 s, beslissen 10 s, verplaatsen 5 s. Samen 40 s per mail, gemeten.

Met de tool zoals nu, met copy-paste: draaien 40 s, nakijken 8 s. Samen 48 s, gemeten op één mail. Zo verlies ik 8 s per mail.

Als de tool automatisch in mijn mailbox draait, valt het draaien weg (aanname) en blijft nakijken over: 8 s. Dan win ik 32 s per mail.

Mijn volume: 65 mails per maand. Ik telde de mails van de afgelopen twee weken en deed dat × 2. Met 10 maanden per jaar is dat 650 mails per jaar, ongeveer 3 per dag en 15 per week. Automatisch win ik 1,6 minuten per dag, 8 minuten per week, 35 minuten per maand en 5,8 uur per jaar.

Een uur van mij is € 14 waard: dat verdiende ik ongeveer als jobstudent in een rusthuis. 5,8 × € 14 = € 81 per jaar. De tool kost 650 × € 0,025 = € 16 per jaar met Opus. Netto: ongeveer € 65 per jaar. Met copy-paste is het netto ongeveer −€ 36 per jaar.

Ik zou de tool gebruiken als hij automatisch werkt en als ik eerst de fout bij dringende mails oplos. Dan win ik veel tijd. Maar nu miste de tool de enige dringende mail twee keer, en een gemiste deadline is een 0 op de opdracht. Eén 0 weegt zwaarder dan € 65 per jaar.

## Mijn zwakste cijfer
Het volume van 65 mails per maand vertrouw ik het minst. Ik telde het in de eerste weken van het semester, en dan komen er misschien meer mails dan gemiddeld. Is het de helft, 325 mails per jaar, dan win ik 2,9 uur, € 40 min € 8 voor de tool: ongeveer € 32 netto per jaar. Dan blijft de tool nog altijd positief, maar de winst is klein. Hoe goed de tool dringende mails herkent, weegt voor mij zwaarder dan dat bedrag.
