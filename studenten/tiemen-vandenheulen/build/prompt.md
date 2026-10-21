# Prompt v1 — Review-sorteerder voor evenementen

Kies alle categorieën die duidelijk in de review voorkomen, zodat de organisator meteen ziet welke thema’s bezoekers noemen.

## Categorieën

- `organisatie`: planning, programma, activiteiten, personeel of hoe het evenement geregeld is.
- `prijs`: toegangsprijs, kosten of prijs-kwaliteit.
- `sfeer`: gezelligheid, stemming, entertainment of algemene beleving.
- `locatie`: de plaats, bereikbaarheid of voorzieningen van de locatie.
- `wachttijden`: wachten aan de ingang, bar, toiletten of andere rijen.
- `catering`: eten, drinken, aanbod of bediening aan bar en eetstanden.
- `veiligheid`: beveiliging, onveilige situaties, nooduitgangen of toezicht.
- `andere`: gebruik dit alleen als geen van de bovenstaande categorieën duidelijk past.

Kies een categorie alleen wanneer de review er voldoende informatie over geeft. Voeg geen categorie toe op basis van een aanname. Kies `andere` als de review te vaag is of over een ander onderwerp gaat.

Geef alleen deze JSON terug, zonder extra tekst:

```json
{"labels": ["categorie"], "reden": "korte verwijzing naar de review"}
```

## Review


Leuke locatie en genoeg te doen. Het was op sommige momenten wel erg druk.



