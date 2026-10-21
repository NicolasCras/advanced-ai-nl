# Reflectie 1

## Wat kan mijn tool nu?
Momenteel kan de tool uit de tekst van een website het e-mailadres halen en zeggen of het bedrijf een klant kan zijn. Zelf bedrijven zoeken kan hij nog niet. Over tien bedrijven, elk twee keer gedraaid, haalt hij 18 op 20 juist (n = 10, 2 runs), en hij verzon in die runs geen enkel e-mailadres.

## Wat kan hij niet?
Twijfelgevallen betrouwbaar beoordelen, zoals een bedrijf dat "workshop" zegt maar elders laat maken. Hij geeft dan soms `ja` en soms `nee`.

## Welk cijfer bewijst dat?
Bautier: in week 3 2 op 2 juist, in week 4 0 op 2, met exact dezelfde prompt (n = 1 input, 4 runs). Het model leert niet bij tussen de runs: het is toeval (F6, wisselend).

Daarnaast: één run kost gemiddeld € 0,0066 (Sonnet 5.5, gemiddelde van 20 runs). De tool is dus goedkoop; de vraag is of hij betrouwbaar genoeg is.
