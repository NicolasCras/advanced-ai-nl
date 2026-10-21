# Week 4 — AI dan toch goedkoper dan gedacht

## Mijn tool in cijfers
Mijn tool leest de beschrijving van een bouwaanvraag en zegt of er werk in zit voor Deprez, een bedrijf in grond- en afbraakwerken. Deze week voegde ik drie moeilijke inputs toe, alle drie in het Frans uit Komen-Waasten: een uitbreiding van een woning, een regularisatie van iets wat al gebouwd is, en de sloop van een hekwerk. Daarna draaide ik alle 14 inputs twee keer met prompt v2 op Haiku 4.5.

Resultaat: "interessant" 23 op 28 juist, "soort werk" 25 op 28 juist (n = 14, 2 runs). Vorige week haalde ik nog 22 op 22, maar toen had ik geen moeilijke inputs.

De 8 fouten:
- **F6 Wisselend, 4 keer:** een ander antwoord bij dezelfde input. Bij T01 en T09 de ene keer "ja", de andere keer "onzeker".
- **F3 Gemist, 3 keer:** bij de uitbreiding van de woning (T12) ziet de tool niet dat er funderingen en buizen nodig zijn.
- **F4 Vorm, 1 keer:** "onzeker" bij soort werk, terwijl dat geen geldige keuze is.

Ik denk dat het zeer storend is als je een tool gebruikt die niet zeker is van zijn werk en wisselt. Zo kan je als werknemer niet op deze tool vertrouwen en ga je twijfelen of het nut heeft dat je hem gebruikt.

Ik paste ook twee juiste antwoorden aan. Bij T01 zei de tool "onzeker" omdat de grootte van het werk niet in de beschrijving staat. Maar de grootte staat bij bijna alle aanvragen er niet bij, dus dan kan je dit niet als onzeker zien. Daarom bleef T01 "ja", en werd T03 ook "ja".

## Wat kost één run?
Gemeten met Haiku 4.5 op 18 oktober, met T01:

| | Tokens |
|---|---:|
| Context van Claude Code | 27.631 |
| Totaal na één run | 28.191 erin + 514 eruit |
| Jouw deel | 560 erin + 514 eruit |

Kost van jouw deel: 560 × $1 per miljoen + 514 × $5 per miljoen = $0,0031, of €0,0028 per run (1 dollar = 0,90 euro, de koers die de cursus aanneemt).

Een bedrijf stuurt alleen de prompt en de aanvraag, en niet de context van Claude Code, zoals mijn `context.md`. Daarom telt alleen jouw deel.

Per maand, met mijn volume (zie hieronder):

| | Per maand | 10× | 1.000× |
|---|---:|---:|---:|
| Haiku 4.5 | €1,40 tot €4,54 | €14 tot €45 | €1.397 tot €4.541 |
| Sonnet 5.5 | €2,79 tot €9,08 | €28 tot €91 | €2.794 tot €9.082 |

Sonnet 5.5 is twee keer zo duur. Dat heb ik gerekend, niet gemeten.

Ik vond het bedrag opvallend laag. Ik dacht dat dit veel meer zou kosten, zeker omdat wij al 20 euro per maand betalen om Claude Pro te gebruiken. Ik denk dat het volume er bij Deprez niet toe doet. Het bedrag is zo klein dat het voor een bedrijf als Deprez altijd de moeite is om het te proberen.

## Met de hand of met de tool?
Deprez leest nu geen bouwaanvragen. Werk komt binnen via aannemers, telefoontjes en mond-tot-mondreclame. Ik vergelijk de tool dus met iemand die het met de hand zou doen.

| Schakel | Laag | Hoog | Bron |
|---|---|---|---|
| Met de hand | openen 10 s, lezen 40 s, beslissen 30 s, noteren 10 s = 90 s | idem | zelf, met een aanvraag van Roeselare |
| Met de tool | erin krijgen 15 s, draaien 5 s, nakijken 30 s = 50 s | idem | zelf geschat |
| Winst per aanvraag | 40 s | 40 s | |
| Volume per jaar | 5.952 (496 per maand) | 19.344 (1.612 per maand) | geteld: Zonnebeke 8, Roeselare 26 aanvragen in één maand, × 62 gemeenten in West-Vlaanderen |
| Uren gewonnen per jaar | 66 u | 215 u | |
| Uurkost | €21,25 | €24,29 | brutoloon van een bediende, €3.500 tot €4.000 per maand, eigen schatting |
| Kost van de tool | €17 per jaar | €54 per jaar | gemeten |
| **Netto per jaar** | **± €1.388** | **± €5.166** | |

Ik denk dat de tool uiteindelijk meer geld zal opleveren dan nu berekend is. Want als Deprez door de tool al 1 werk binnenhaalt, is dit bedrag al bekomen.

## Mijn zwakste cijfer
Het volume, want dat is maar op twee gemeenten gebaseerd. Is het volume maar de helft, dan wint de tool 33 tot 107 uur per jaar, of ± €694 tot €2.583. Dan blijft het netto nog altijd positief, want de tool zelf kost bijna niets.
