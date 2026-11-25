# Week 7: Skills en connectors: wat ik zelf bouwde en wat ik koppelde

## Mijn skill
Ik maakte de skill `viral-short` in de desktop-app van Claude. Je geeft één zin over een onderwerp, en hij maakt een YouTube Short met een upload-kit erbij.

Ik testte hem 3 keer met 3 verschillende inputs: een video over champagne, een over cava en een over prosecco. Alle 3 de keren werkte de skill perfect: 3 van 3.

## Mijn connector
Ik koppelde Gmail in Claude. Ik vroeg of ik nog belangrijke kortingen had in mijn mail. Claude bekeek mijn laatste 40 mails en gaf alle kortingen, met de percentages en de codes. Hij vroeg daarvoor geen toestemming.

In Claude Code koppelde ik ook CoinGecko als MCP-server (`/mcp` toont `coingecko`, 2 tools). Ik vroeg: "Wat kost bitcoin nu in euro, en hoeveel steeg of daalde hij de laatste 24 uur?" Met de koppeling kreeg ik €53.535, 2,78% lager dan 24 uur eerder (ongeveer €1.530 daling), om 13:44. Wat Claude vóór de koppeling antwoordde, weet ik niet meer: ik heb dat niet genoteerd.

## Build, Connect, Buy
Capstone-plek: Level UP Sportcoaching (25 sporters). Taak: de trainingsnotities van een sporter per week analyseren en advies geven.

|  | Voor Level UP | Wat zit er vast? |
|---|---|---|
| **Build** | Mijn eigen Build, een taalmodel dat de notities leest en een oordeel en advies geeft. | Het is heel moeilijk om de AI de notities van de sporter goed te laten begrijpen en analyseren. |
| **Connect** | Strava koppelen. De AI bekijkt de training via hartslag, duur en hartslagzones, zonder dat er een beschrijving bij moet staan. | De sporter heeft Strava Plus nodig. Eigen hartslagzones zijn een betaalde functie (support.strava.com, 25 november 2026). In België kost Strava €69,99 per jaar per persoon, of €34,99 voor een geverifieerde student (strava.com/pricing en strava.com/subscribe, 25 november 2026). Of een AI die zones via de koppeling kan ophalen, moet ik nog nagaan. |
| **Buy** | Drie programma's, prijzen van 25 november 2026 voor 25 sporters: TrueCoach 136,99 USD per maand (Pro, truecoach.co/pricing), Athletica ongeveer 497,50 USD per maand (athletica.ai/pricing), Everfit 75 USD per maand (everfit.io/pricing). | Geen van de drie analyseert vrije notities zoals mijn Build. Geen enkele site zegt iets over data-export: dat moet ik aan support vragen. |

**Mijn advies:** Connect. De informatie is correcter, want je baseert je op feiten, namelijk de hartslagzones van de sporter.
**Wat me van mening doet veranderen:** Als minder dan de helft van de sporters Strava Plus wil nemen, is het beter om voor Build te gaan.
