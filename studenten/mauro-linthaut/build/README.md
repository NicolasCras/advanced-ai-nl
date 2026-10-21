# Build — velden uit het KID van een ETF halen

## Wat het doet
Het haalt 8 velden uit het KID (essentiële-informatiedocument) van een ETF, met bij elk veld de bronzin uit het KID: risico-indicator, aanbevolen bewaartermijn, lopende kosten, instapkosten, uitstapkosten, gevolgde index, uitkerend of accumulerend, en het ongunstige scenario.

## Wat je nodig hebt
Enkel het KID van de ETF als pdf. De prompt zit in `prompt.md`.

## Hoe je het draait
1. Open `prompt.md` en vervang `<hier komt het KID>` onderaan door de tekst van het KID.
2. Plak alles in één bericht in Claude.
3. Lees het antwoord: acht regels, elk met een bron. Controleer vooral het ongunstige scenario.

## Bekende beperking
Het ongunstige scenario is niet altijd juist: soms neemt de tool de verkeerde kolom of een verschoven rendement. En dezelfde input geeft niet altijd dezelfde uitkomst. Kijk het scenario dus altijd na.

## Meer
- `test-set.md`: tien KID's met het juiste antwoord en de resultaten per run
- `log.md`: wat ik veranderde en waarom
- `kosten.md`: kost per run en de waarde
