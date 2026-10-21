# Taak — Velden uit horlogeadvertenties halen

1. **Taak:** uit een advertentie van een tweedehands luxehorloge tien vaste velden halen, zodat ik snel zie welke horloges verder onderzoek waard zijn.
2. **Input:** de tekst van één advertentie (bv. Chrono24, 2dehands).
3. **Output:** een record met merk en model, referentienummer, bouwjaar, staat (nieuw / zeer goed / gedragen / beschadigd), doos en papieren (full set / enkel doos / enkel papieren / geen), vraagprijs en munt, verkoper (particulier / handelaar), servicegeschiedenis. Staat iets er niet in: "onbekend". Nooit aanvullen uit eigen kennis.
4. **Soort AI:** taalmodel, want de input is vrije tekst die elke verkoper anders schrijft. Of het een koopje is, beslist later een vaste prijsregel, geen AI.
5. **Controle:** per advertentie elk veld vergelijken met wat letterlijk in de advertentie staat. Juist of fout per veld. "Onbekend" is juist als het er niet staat.

## Vijf inputideeën

1. Een korte Nederlandstalige advertentie van een Rolex van een particulier, zonder papieren.
2. Een Franstalige advertentie van een Omega, met informatie over de staat en vraagprijs, maar zonder bouwjaar.
3. Een Duitstalige advertentie van een Rolex, met vage informatie over doos en papieren.
4. Een Nederlandstalige advertentie van een Audemars Piguet van een handelaar, met full set en servicegeschiedenis.
5. Een korte advertentie van een tweedehands Tudor waarbij meerdere gegevens ontbreken, waaronder het referentienummer en de bouwjaarvermelding.
