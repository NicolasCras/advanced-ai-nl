# Reactie-classificeerder

## De taak

De tool leest één klantenreactie over een boete of een ticket aan boord. Hij zegt welke situatie het is, en haalt de naam, het abonnement, de online aankoop en de datum van de rit uit de reactie. Zo weet ik wat ik in het CRM moet opzoeken.

Alle inputs zijn zelf geschreven en anoniem, nooit uit het CRM.

## De labels

| Label | De klant zegt... |
|---|---|
| `abonnement vergeten` | Ik had een abonnement, maar het lag thuis. |
| `abonnement vervallen` | Ik had mijn abonnement bij, maar het was vervallen of niet geldig. |
| `online ticket niet getoond` | Ik had online gekocht, maar kon het niet tonen (bv. gsm plat). |
| `ticket te laat gekocht` | Ik kocht mijn ticket net na vertrek. |
| `kortingskaart vergeten` | Ik had recht op korting, maar had mijn kaart niet bij. |
| `no cash aan boord` | Ik kon niet cash betalen aan boord. |
| `geen geldig vervoersbewijs` | Ik had geen ticket of abonnement, of ik vind een tarief aan boord onterecht. |
| `andere` | De reactie is duidelijk, maar past bij geen enkel label. |
| `onzeker` | De reactie is niet duidelijk, of past bij meer dan één label. |

## Waarom `onzeker`?

Mijn tool heeft het label `onzeker` om gokken te vermijden. Als de tool begint te gokken, kunnen er foute opzoekingen gebeuren in het CRM en misschien foute beslissingen gemaakt worden.

## De uitvoer

```
Label: <label>
Naam: <naam, of: niet vermeld>
Abonnement: <ja / nee / niet vermeld>
Online aankoop: <ja / nee / niet vermeld>
Datum rit: <zoals de klant hem schrijft, of: niet vermeld>
Waarom: <één zin>
```

Het label en de velden zijn juist of fout. Twee mensen kunnen dat los van elkaar beslissen. Daarom is het meetbaar.

## Zo draai je het

1. Open een nieuw gesprek, zonder web search en zonder geheugen.
2. Plak de prompt uit `prompt-v2.md`. Vul één klantenreactie in.
3. Vergelijk het antwoord met `test-set.md`.
4. Doe elke reactie twee keer, telkens in een nieuw gesprek.
5. Schrijf het resultaat in `test-set.md` en `log.md`.

## Versies

| Versie | Datum | Wat veranderde | Waarom |
|---|---|---|---|
| v1 | 2026-10-17 | Eerste prompt: één label en één zin waarom | Start |
| v2 | 2026-10-19 | Vier velden erbij, elke regel met een "want", nieuw label `geen geldig vervoersbewijs`, regel vergeten of vervallen, drie voorbeelden | T02 en T05 uit v1, en minder tijd kwijt aan klantinfo opzoeken |
