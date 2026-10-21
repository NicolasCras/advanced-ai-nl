# Taak — Kyan Besteman

1. **Taak:** een klantenreactie over een boete of een ticket aan boord lezen en zeggen welke situatie het is, zodat ik weet wat ik in het CRM moet opzoeken.
2. **In:** één klantenreactie (uit een publieke bron, of zelf geschreven en anoniem, nooit uit het NMBS-CRM).
3. **Uit:** één label uit: abonnement vergeten, abonnement vervallen, online ticket niet getoond, ticket te laat gekocht, kortingskaart vergeten, no cash aan boord, geen geldig vervoersbewijs, **andere**, **onzeker**. Plus één zin waarom.
4. **Soort AI:** een taalmodel, want er gaat tekst in en er komt een label uit. Wat ik daarna opzoek, is een vaste regel zonder AI.
5. **Checken:** ik schrijf het juiste label op vóór de tool draait. Twee collega's zouden los van elkaar hetzelfde label kiezen.

## Labels en wat ik opzoek

| Label | De klant zegt... | Ik zoek op in het CRM |
|---|---|---|
| Abonnement vergeten | "Ik had een abonnement, maar het lag thuis" | Was het abonnement geldig op die dag? Ja → boete of tarief aan boord geannuleerd |
| Abonnement vervallen | "Mijn abonnement was net vervallen" | Vervaldatum, verlenging? |
| Online ticket niet getoond | "Ik had online gekocht, maar kon het niet tonen" (bv. gsm plat) | Online aankoop vóór de rit? |
| Ticket te laat gekocht | "Ik kocht mijn ticket net na vertrek" | Tijdstip aankoop vs. vertrek |
| Kortingskaart vergeten | "Ik had recht op korting, maar kaart niet bij" | Kortingskaart geldig? |
| No cash aan boord | "Ik kon niet cash betalen aan boord" | (nog in te vullen) |
| Geen geldig vervoersbewijs | "Ik had geen ticket of abonnement, kan de boete omlaag?" of "Ik moest tarief aan boord betalen, maar vind dat onterecht" | (nog in te vullen) |
| Andere | App-probleem, dubbele aankoop, terugbetaling, ... | Valt buiten deze Build |
| Onzeker | Niet duidelijk, of meerdere situaties tegelijk | Ik beslis zelf |

## Vijf inputideeën

1. "Ik heb een ticket op mijn gsm gekocht voor het opstappen, maar tijdens dat de treinbegeleider langs kwam is de batterij van mijn gsm plat gegaan"
2. "Ik ben mijn abonnement thuis vergeten toen ik op de trein zat opweg naar het werk, later zag ik in mijn agenda dat deze vandaag vervallen is. Ik ben meteen naar huis vertokken en heb deze opnieuw gevalideerd de dag dat hij vervallen was. Kan deze boete misschien geannuleerd worden?"
3. "Tijdens mijn treinrit had ik een online ticket gekocht, toen de treinbegeleider langskwam zei hij dat ik in de verkeerde klassen zat."
4. "Ik heb boete gekregen, ik heb ticket in trein gekocht"
5. "Ik had geen ticket op de trein, mag ik tarief aan boord betalen, want dit werd niet aan mij gevraagd?"
