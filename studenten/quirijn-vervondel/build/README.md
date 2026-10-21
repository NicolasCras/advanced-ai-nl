# Stuklijst uit notities plaatsbezoek

## De taak

Na een plaatsbezoek typt mijn broer (JAVE Klimatech) snel notities in zijn gsm. De tool maakt daar een stuklijst met hoeveelheden van voor een airco- of warmtepompinstallatie.

## Wat erin gaat

De getypte notities van één plaatsbezoek. Geanonimiseerd: geen namen, adressen of prijzen.

## Wat eruit komt

Eén tabel met per onderdeel een hoeveelheid, een eenheid en een bron:

| Onderdeel | Eenheid |
|---|---|
| Koelleiding per binnenunit en totaal | m |
| Communicatiekabel | m |
| Voedingskabel | m |
| Aansluitpunt voeding | zekeringkast of stopcontact |
| Elektriciteitsbuis | m |
| Kabelgoot | stuks (1 stuk = 2 m) |
| Condensafvoer lengte en type | m, gravitair naar buiten of druk-PVC |
| Bochten en tussenstukken, per soort | stuks |

De kolom Bron zegt waar een hoeveelheid vandaan komt: `notities` (letterlijk in de notities) of `rekenregel` (afgeleid met een vaste regel). Zo zie je meteen of een getal uit de notities komt.

Hergebruikte leidingen en onderdelen komen niet op de stuklijst.

## Waarom `onbekend, na te vragen`?

Een model zonder uitweg gokt. In een stuklijst kost een geraden getal geld: te veel bestellen, of te weinig mee op de werf. Staat iets niet in de notities en volgt het niet uit een rekenregel, dan schrijft de tool `onbekend, na te vragen`. Dan vult mijn broer het zelf in.

## Wat de tool niet doet

Prijzen opzoeken en werkuren berekenen. Daar mag geen enkel getal verzonnen worden. Dat hoort in een database met de prijzen van Daikin en Cebeo en dropdowns, niet in een taalmodel.

## Hoe weet ik of het juist is?

Per input staat in `test-set.md` wat ik van de tool verwacht, en waarom, vooraf opgeschreven. Per onderdeel kunnen twee mensen los van elkaar beslissen of de hoeveelheid klopt. Een input is juist als alles uit "Verwacht van de tool" klopt en er niets verzonnen is.

## Zo draai je het

1. Open een nieuw, tijdelijk gesprek in de Claude-app, zonder web search. Niet in je studentenmap: daar leest de tool `context.md` mee.
2. Plak de prompt uit `prompt.md`. Vervang `<plak hier de notities van het plaatsbezoek>` door één notitie.
3. Vergelijk de tabel met "Verwacht van de tool" in `test-set.md`.
4. Draai elke input twee keer, telkens in een nieuw gesprek.
5. Schrijf het resultaat in `test-set.md` en de fouten in `log.md`.

## Bestanden

| Bestand | Wat |
|---|---|
| `taak.md` | De taak in vijf regels, en vijf inputideeën |
| `prompt.md` | De prompt |
| `test-set.md` | Tien inputs met verwacht antwoord, runs en succespercentage |
| `log.md` | Wat er gebeurde en wat er misging |

## Versies

| Versie | Datum | Wat veranderde | Waarom |
|---|---|---|---|
| v1 | 2026-10-13 | Eerste prompt met rekenregels en uitweg `onbekend, na te vragen` | Eerste versie. Een taalmodel dat geen uitweg heeft, gokt, en een gegokte hoeveelheid kost geld op de werf. Daarom vaste rekenregels en de uitweg 'onbekend, na te vragen'. |
| v2 | 2026-10-20 | Twee regels erbij: kabelgoot per route apart naar boven afronden, en een condenspompje betekent condensafvoer druk-PVC | T08 faalde op beide punten: 3 stuks kabelgoot in plaats van 4, en condensafvoer type onbekend in plaats van druk-PVC. Die vakkennis stond niet in de prompt. **Teruggedraaid op 2026-10-20:** beide regels kwamen uit een AI-suggestie en klopten niet. De v1-kabelgootregel (alle meters samen delen door 2) was juist, en een condenspompje betekent niet druk-PVC. `prompt.md` is weer v1. |
