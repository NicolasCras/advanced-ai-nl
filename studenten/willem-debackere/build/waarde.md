# Waarde: met de hand of met de tool?

Rekent met de tool zoals hij nu is (scenario, lijn 2): ik zoek het bedrijf, de tool beoordeelt de website en haalt het e-mailadres eruit, ik kijk na.

| Schakel | Waarde | Bron |
|---|---|---|
| Met de hand | Bedrijf zoeken, site openen, beoordelen, e-mail zoeken, doorgeven = **15 min** | eigen schatting |
| Met de tool | Bedrijf opzoeken 1 min · tekst kopiëren en plakken, tool draaien 2 min · nakijken of het een e-mailadres is (geen telefoonnummer of adres) 10 s = **± 3 min 10 s** | eigen schatting |
| Winst per bedrijf | 15 − 3 min 10 s = **± 11 min 50 s** | |
| Volume | ± 5 per dag · 25 per week · **100 per maand** · 1.200 per jaar | eigen schatting (gok); 20 werkdagen per maand |
| Uren gewonnen | ± 1 u per dag · 4,9 u per week · 19,7 u per maand · **± 237 u per jaar** | |
| Uurkost | **€ 45** | aanname: loonkost van een bediende in België (voorbeeld uit de les) |
| Waarde | 237 × 45 = **± € 10.650 per jaar** | |
| Kost van de tool | 1.200 × € 0,0066 = **± € 8 per jaar** (Sonnet 5.5) | gemeten, `kosten.md` |
| Netto | **± € 10.640 per jaar** | |

Kanttekening: de tool haalt 18 op 20 (n = 10, 2 runs). Een foute `ja` met een fout e-mailadres kost tijd en vervuilt het klantenbestand (scenario, lijn 4). Dat zit nog niet in deze berekening.

## Zwakste cijfer: de 100 bedrijven per maand
Het kunnen er zowel meer als minder zijn: het hangt volledig af van de maand en het andere werk.
Is het de helft (50 per maand): ± 118 u per jaar × € 45 = ± € 5.325, min ± € 4 tool = **± € 5.320 netto per jaar**.
Het netto schaalt recht mee met het volume, want de tool kost bijna niets. Het volume bepaalt dus de hele waarde.

## Later: als de tool zelf zoekt
Dan blijft enkel nakijken over: 10 s. Winst ± 14 min 50 s per bedrijf, ± 297 u en ± € 13.340 netto per jaar bij 100 per maand. Nog niet gebouwd; zoeken met web search kost ook meer en is niet gemeten.

## Wat het nakijken wel en niet vangt
Nakijken = enkel controleren of het een e-mailadres is (geen telefoonnummer of adres). Niet of het op de site staat. Of het adres werkt, blijkt pas bij de mailing. Een verzonnen adres (F2) valt dus pas op als er geen antwoord komt of de mail terugkomt. Daarom blijft F2 de fout om te meten: 0 in 20 runs, maar maar 6 runs testen het echt.
