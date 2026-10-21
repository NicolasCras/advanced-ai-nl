# Testset

Prompt: `prompt-v1.md` (kolommen Run 1 en Run 2) en `prompt-v2.md` (kolommen v2 Run 1 en v2 Run 2). Inputs zelf geschreven (geen echte klantenreacties), dus het succespercentage is een bovengrens.

T05: juiste antwoord aangepast vóór de v2-runs, van `andere` naar `geen geldig vervoersbewijs` (label nieuw in v2). De v1-runs zijn gemeten tegen het oude antwoord `andere`.

T06–T10: geschreven na de v1-runs, dus alleen gedraaid met v2.

| ID | Input | Juiste antwoord | Waarom | Run 1 | Run 2 | v2 Run 1 | v2 Run 2 |
|---|---|---|---|---|---|---|---|
| T01 | Ik heb een ticket op mijn gsm gekocht voor het opstappen, maar tijdens dat de treinbegeleider langs kwam is de batterij van mijn gsm plat gegaan | online ticket niet getoond | Omdat de gsm plat was kan hij deze niet tonen dus de treinbegeleider kan er niet van uit gaan of hij een geldig vervoersbewijs heeft. | online ticket niet getoond | online ticket niet getoond | online ticket niet getoond | online ticket niet getoond |
| T02 | Ik ben mijn abonnement thuis vergeten toen ik op de trein zat opweg naar het werk, later zag ik in mijn agenda dat deze vandaag vervallen is. Ik ben meteen naar huis vertokken en heb deze opnieuw gevalideerd de dag dat hij vervallen was. Kan deze boete misschien geannuleerd worden? | abonnement vergeten (datum rit: niet vermeld) | De klant heeft zijn abonnement de dag zelf nog opnieuw gevalideerd waardoor deze dus geldig is. Datum rit: "vandaag" gaat over het vervallen, niet over de rit. | onzeker | onzeker | abonnement vergeten, maar datum rit: vandaag (F6) | abonnement vergeten (datum rit: niet vermeld) |
| T03 | Tijdens mijn treinrit had ik een online ticket gekocht, toen de treinbegeleider langskwam zei hij dat ik in de verkeerde klassen zat. | andere | Dit is een klassenverhoging waardoor hij een verschil van prijs zal moeten betalen. | andere | andere | andere, maar abonnement: niet vermeld i.p.v. nee (F6) | andere |
| T04 | Ik heb boete gekregen, ik heb ticket in trein gekocht | ticket te laat gekocht | De ticket is na het instappen gekocht wat niet mag. | onzeker | onzeker | onzeker (F5) | onzeker (F5) |
| T05 | Ik had geen ticket op de trein, mag ik tarief aan boord betalen, want dit werd niet aan mij gevraagd? | geen geldig vervoersbewijs | De klant heeft geen bewijs van een ticket voor de treinrit. Dit betekent dat er geen ticket is. | andere | andere | geen geldig vervoersbewijs | geen geldig vervoersbewijs |
| T06 | Ik heb tijdens de rit van 13 oktober een boete gekregen, terwijl ik in orde was. Kan deze geannuleerd worden? | onzeker (datum rit: 13 oktober) | We hebben te weinig informatie om er van uit te gaan bij welke label deze hoort. | | | onzeker | onzeker |
| T07 | Ik heb een abonnement... Waarom krijg ik een boete voor de rit van 7/09/2026? | onzeker (abonnement: ja, datum rit: 7/09/2026) | We weten niet wat er precies aan de hand is en waarom de klant een boete heeft gekregen. | | | onzeker, maar online aankoop: niet vermeld i.p.v. nee (F3) | onzeker, maar online aankoop: niet vermeld i.p.v. nee (F3) |
| T08 | Madame, Monsieur, J'ai pris le train le 14/05/2026 d'Ostende à Lokeren. Ce trajet n'est pas couvert par mon abonnement. Je ne le savais pas, c'est l'accompagnateur de train qui me l'a dit. Je pensais que mon abonnement me permettait de voyager partout. L'accompagnateur m'a proposé un billet au tarif à bord, mais comme je n'avais pas d'argent liquide sur moi, je n'ai pas pu l'accepter. L'amende peut-elle être réduite au prix du billet avec le tarif à bord ? | no cash aan boord (abonnement: ja, datum rit: 14/05/2026) | De klant wist niet dat het traject buiten het abonnement viel, dus had geen geldig abonnement en moest een ticketprijs + tarief aan boord betalen. De klant had geen cash op zak, dus kon daar niet op ingaan. | | | onzeker (F5), en online aankoop: niet vermeld i.p.v. nee (F3) | onzeker (F5), en online aankoop: niet vermeld i.p.v. nee (F3) |
| T09 | Beste, tijdens mijn rit op 17/08/2026 heb ik een ticket met verlaagd tarief gekocht, want ik krijg financiele steun waardoor ik recht heb op verlaagd tarief. Echter kon ik op de trein niet bewijzen dat ik hier recht op had omdat ik deze niet op zak had. | kortingskaart vergeten (datum rit: 17/08/2026) | De klant had recht op verlaagd tarief, maar kon de kortingskaart niet tonen aan de treinbegeleider. | | | kortingskaart vergeten | kortingskaart vergeten |
| T10 | Beste, ik reisde op 16/10/2026 laat in de avond naar huis van mijn werk. Bij het controleren van mijn abonnement zei de treinbegeleider dat deze niet meer geldig was en dat ik mijn abonnement de dag zelf nog moest verlengen omdat ik anders een boete zou krijgen. Dit was op het moment onmogelijk omdat mijn bestemmingsstation geen loket heeft. Ik heb mijn abonnement de dag erna moeten verlengen. Is er een mogelijkheid om deze boete te annuleren of te reduceren naar een normaal ticket? Ik ben bereid dit te betalen. Met vriendelijke groeten, Bert Van Den Broeck | abonnement vervallen (naam: Bert Van Den Broeck, abonnement: ja, datum rit: 16/10/2026) | De klant heeft het abonnement niet tijdig kunnen verlengen en is hierdoor niet geldig oftewel vervallen. | | | abonnement vervallen | abonnement vervallen, maar online aankoop: niet vermeld i.p.v. nee (F6) |

## Succespercentage prompt v2

- Label juist: 16 op 20 (n = 10, 2 runs)
- Label en alle velden juist: 11 op 20 (n = 10, 2 runs)

| Klasse | Aantal | Waar |
|---|---|---|
| F3 Gemist | 4 | T07 (2×), T08 (2×): online aankoop `niet vermeld` i.p.v. `nee` |
| F5 Geweigerd | 4 | T04 (2×), T08 (2×): `onzeker` bij twee mogelijke labels |
| F6 Wisselend | 3 | T02 Run 1 (datum), T03 Run 1 (abonnement), T10 Run 2 (online aankoop) |

T08 heeft in elke run twee fouten (F5 en F3), dus 11 fouten in 9 runs.
