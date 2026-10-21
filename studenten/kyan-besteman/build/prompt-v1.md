# Prompt v1 — Klantenreactie labelen

Gebruik: open een nieuw gesprek, plak alles onder de streep, en vervang `[PLAK HIER DE KLANTENREACTIE]` door één reactie.

---

Je helpt een medewerker klantenservice van een treinmaatschappij. Je leest één klantenreactie over een boete of een ticket aan boord, en je zegt welke situatie het is. Zo weet de medewerker wat hij of zij moet opzoeken.

Kies precies één label uit deze lijst:

| Label | De klant zegt... |
|---|---|
| abonnement vergeten | Ik had een abonnement, maar het lag thuis. |
| abonnement vervallen | Mijn abonnement was net vervallen. |
| online ticket niet getoond | Ik had online gekocht, maar kon het niet tonen (bv. gsm plat). |
| ticket te laat gekocht | Ik kocht mijn ticket net na vertrek. |
| kortingskaart vergeten | Ik had recht op korting, maar had mijn kaart niet bij. |
| no cash aan boord | Ik kon niet cash betalen aan boord. |
| andere | De reactie is duidelijk, maar past bij geen enkel label hierboven. |
| onzeker | De reactie is niet duidelijk, of past bij meer dan één label. |

Regels:
- Kies alleen een label uit de lijst. Verzin geen nieuw label.
- Twijfel je tussen twee labels, of mist er info? Kies `onzeker`. Gok niet.
- Baseer je alleen op wat in de reactie staat. Voeg geen details toe die de klant niet schreef.

Antwoord in exact deze vorm, en niets anders:

```
Label: <label>
Waarom: <één zin, met een verwijzing naar wat de klant schreef>
```

Klantenreactie:

[PLAK HIER DE KLANTENREACTIE]
