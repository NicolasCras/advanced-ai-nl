# Kostenmeting — 14 oktober 2026

## Eén run in Codex

- Model volgens `/status`: GPT-6.1-Sol, reasoning low.
- Prompt: versie 4, nu bewaard in `build/prompt-v4.md`, met onderstaande notitie en de extra instructie om geen bestanden te openen of tools te gebruiken.
- Input: `bulgarian split squat, 20kg, 4 sets, 12 reps`.
- Cansu bevestigt dat het antwoord correct is.

| Oefening | Gewicht | Sets | Herhalingen |
|---|---|---|---|
| bulgarian split squat | 20kg | 4 | 12 |

## Gemeten tokengebruik

Bron: het `token_count`-event van de lokale Codex-testsessie `01a13c09-1153-73a0-97a7-725e7437360d`, tijdstip 14 oktober 2026 om 20:22:29 UTC.

| Onderdeel | Tokens |
|---|---:|
| Totale input, inclusief Codex-context | 17.060 |
| Daarvan gecachte input | 12.160 |
| Niet-gecachete input | 4.900 |
| Output | 43 |
| Waarvan reasoning-output | 0 |
| Totaal input + output | 17.103 |

De gecachte tokens zijn onderdeel van de totale input; ze mogen niet nogmaals worden opgeteld. `/status` toonde na de run afgerond 17,1K gebruikte context. Vóór de run was geen contextaantal zichtbaar, dus er is geen gemeten verschil tussen vóór en na.

Dit meet de volledige Codex-run, inclusief instructies en toolbeschrijvingen. Het aantal inputtokens van alleen de trainingsprompt en notitie is nog niet apart vastgesteld. Deze ene correcte run is geen nieuw succespercentage voor de volledige testset.

## Volume — eigen schatting van Cansu

Cansu traint ongeveer 3 keer per week en noteert per training 5 à 6 oefeningen. Eén oefennotitie is één run. Bron: Cansu's eigen inschatting, meegedeeld op 14 oktober 2026.

Aanname voor de omrekening: 52 trainingsweken per jaar; eventuele vakantie of gemiste trainingen is nog niet verrekend. Een gemiddelde maand is 52 / 12 weken.

| Periode of scenario | Runs |
|---|---:|
| Per training | 5–6 |
| Per week: 3 × (5–6) | 15–18 |
| Per jaar: (15–18) × 52 | 780–936 |
| Gemiddeld per maand: (780–936) / 12 | 65–78 |
| Per maand bij 10× volume | 650–780 |
| Per maand bij 1.000× volume | 65.000–78.000 |

## Tijdwinst — eerste eigen inschattingen

Bron: Cansu's beschrijving op 14 oktober 2026; deze tijden zijn niet gemeten.

- Zonder overzicht begint Cansu met een gewicht dat logisch lijkt en verhoogt ze het als het te licht is.
- Bij minstens 2 oefeningen per training moet ze het juiste gewicht uitproberen. Bij ongeveer 3 trainingen per week betekent dat minstens 6 zoekmomenten per week.
- Bij Bulgarian split squat kost dit volgens Cansu maximaal 2 minuten wanneer ze één stap hoger moet.
- Bij hip thrust schat Cansu ongeveer 5 minuten extra voor uitproberen en één keer het gewicht verhogen, inclusief gewichten wisselen. De tijd hangt ook af van hoeveel verschillende gewichten ze moet proberen.

Cansu geeft aan dat ze met het vorige gewicht meteen kan starten. Dumbbells halen of de gewichten op de stang zetten bij hip thrust blijft nodig en telt niet als besparing. Het extra uitproberen en opnieuw aanpassen van het gewicht is het zoekwerk dat een beschikbaar overzicht volgens haar kan wegnemen.

De maximaal 2 minuten bij Bulgarian split squat zijn geen gemiddelde voor alle oefeningen. De voorlopige berekening staat hieronder. De tijd om notities te maken, de tool te gebruiken, de uitvoer te controleren en het overzicht terug te vinden moet ook worden meegerekend. Automatisch bewaren en terugzoeken zijn nog niet gebouwd; de verwachte winst veronderstelt dat het vorige gewicht beschikbaar is.

Cansu bevestigt dat de oefeningen waarbij ze het gewicht moet uitproberen afhangen van wat ze die dag traint. Bulgarian split squat en hip thrust zijn voorbeelden; ze vormen geen vaste combinatie per training. Cansu schat later de totale extra zoektijd op gemiddeld 3 minuten per training; de aanvankelijk genoemde 35 minuten was een typfout en is door haar gecorrigeerd. Dit is een schatting, geen meting.

### Tijd om notities te maken

Cansu schat 10–15 seconden om na één oefening een korte trainingsnotitie te typen. Bij 5–6 oefeningen is dat 50–90 seconden per training. Bron: eigen inschatting van Cansu op 14 oktober 2026; niet gemeten. Dit is alleen de schrijftijd. De verwerking, controle en het terugvinden van het vorige gewicht zijn hierin nog niet inbegrepen.

### Tijd om de uitvoer te controleren

Cansu schat ongeveer 18 seconden per tabel om de uitvoer met de originele notitie te vergelijken. Ze bevestigt dat dit een schatting is, niet met een timer gemeten.

- Notitie typen + tabel controleren: 10–15 + 18 = 28–33 seconden per oefening.
- Bij 5–6 oefeningen: 140–198 seconden, dus 2 minuten 20 seconden tot 3 minuten 18 seconden per training.

Dit is nog geen volledige gebruikstijd: de wachttijd van de tool, eventuele invoerhandelingen en het terugvinden van het vorige gewicht ontbreken nog. De tijd wordt voor alle genoteerde oefeningen gerekend, ook als Cansu bij een oefening geen gewicht hoeft uit te proberen.

### Terugvinden en voorlopige netto tijdwinst

Cansu schat 30 seconden om vóór één oefening het vorige gewicht in het overzicht terug te vinden. Ze bevestigt dat ze het overzicht alleen raadpleegt als ze haar vorige gewicht niet meer weet. Eerder schatte ze dat dit bij minstens twee oefeningen per training gebeurt. We rekenen voorlopig met precies twee raadplegingen als minimumscenario; meer raadplegingen kosten extra tijd. Het overzicht en het terugzoeken zijn nog niet gebouwd; onderstaande berekening gaat over het verwachte gebruik.

Uitgangspunt: zonder tool gemiddeld 180 seconden extra uitproberen per training, volgens Cansu's gecorrigeerde schatting. Typen en controleren voor alle 5–6 oefeningen kost 140–198 seconden. Alleen het aantal raadplegingen verschilt tussen onderstaande scenario's:

| Scenario, geen vastgesteld gebruik | Terugzoeken | Totale tijd typen + controleren + terugzoeken | Netto winst: 180 s min totale tijd |
|---|---:|---:|---:|
| Minimumscenario: 2 keer raadplegen per training | 60 s | 200–258 s | −20 tot −78 s |
| Bij alle 5–6 oefeningen raadplegen | 150–180 s | 290–378 s | −110 tot −198 s |

Negatieve winst betekent extra tijd: 20–78 seconden per training in het eerste scenario, 1 minuut 50 seconden tot 3 minuten 18 seconden in het tweede. Wachttijd, eventuele extra invoerhandelingen en bewaren zijn nog niet meegenomen. Deze schattingen onderbouwen daarom voorlopig geen tijdsbesparing. De waarde van progressie volgen is hiermee niet beoordeeld. De tijdinschattingen moeten nog in echt gebruik worden getoetst.

### Omrekening van het minimumscenario

Met precies twee raadplegingen per training is de netto tijdwinst −20 tot −78 seconden per training (dus 20–78 seconden extra werk), nog zonder wachttijd en bewaren. Aanname: 3 trainingen per week, 52 weken per jaar.

| Periode | Extra tijd, geen besparing |
|---|---:|
| Per trainingsdag (één training) | 20–78 seconden |
| Per week (3 trainingen) | 1 minuut–3 minuten 54 seconden |
| Per gemiddelde maand (13 trainingen) | 4 minuten 20 seconden–16 minuten 54 seconden |
| Per jaar (156 trainingen) | 52 minuten–3 uur 22 minuten 48 seconden |

Een persoonlijke waarde per uur is nog niet gekozen. Omdat dit over eigen sporttijd gaat, is een loon niet automatisch een passende waardering. Er is nog geen netto geldwaarde berekend. Deze berekening zegt niets over de mogelijke waarde van een beter progressieoverzicht.

## Kostenberekening

Prijzen gecontroleerd op 14 oktober 2026, standaard API-tarieven per miljoen tokens:

| Model | Input | Cache lezen | Output |
|---|---:|---:|---:|
| GPT-6.1 Sol | $2 | $0,10 | $10 |
| GPT-6 Luna | $0,10 | $0,01 | $0,50 |

Bronnen: [officiële OpenAI-documentatie voor Sol](https://developers.openai.com/api/docs/models/gpt-6.1-sol) en [Luna](https://developers.openai.com/api/docs/models/gpt-6-luna).

Omrekening: $1 = €0,90, de rekenaanname uit de cursus; dit is geen geverifieerde actuele wisselkoers. Bedragen betreffen alleen modelgebruik, zonder eventuele belastingen, hosting of opslag. De API-equivalente kost is geen bedrag dat apart van het Plus-abonnement is afgeschreven.

### Losse trainingsprompt: voorlopige raming

De tekst van v4 (`prompt-v4.md`) met de eerste trainingsnotitie telt lokaal 632 tokens met `tiktoken` 0.14.0 en `o200k_base`. Deze versie van tiktoken herkent `gpt-6.1-sol` niet automatisch. De telling is daarom een benadering, geen exact API-inputverbruik voor dit model. Berichtopmaak en eventuele extra API-instructies zijn niet meegerekend. De extra Codex-instructie om geen tools te gebruiken is weggelaten voor deze losse-toolraming.

Voor output gebruiken we de 43 tokens van de gemeten Sol-run. We rekenen zonder inputcache, met één run per notitie en hetzelfde verbruik voor elke notitie. Langere notities, langere antwoorden en eventuele reasoning-tokens kunnen de kost veranderen.

Sol per run: (632 × $2 + 43 × $10) / 1.000.000 = $0,001694 = €0,0015246.

Luna per run, bij aangenomen gelijk tokenverbruik: (632 × $0,10 + 43 × $0,50) / 1.000.000 = $0,0000847 = €0,00007623. Luna is niet getest; dit is alleen een prijsvergelijking, geen bewijs van gelijke kwaliteit of gelijk verbruik.

| Model, losse-toolraming | Per run | 65–78 runs/maand | 650–780 runs/maand (10×) | 65.000–78.000 runs/maand (1.000×) |
|---|---:|---:|---:|---:|
| GPT-6.1 Sol | €0,0015246 | €0,099–€0,119 | €0,991–€1,189 | €99,10–€118,92 |
| GPT-6 Luna, gelijk tokenverbruik aangenomen | €0,00007623 | €0,0050–€0,0059 | €0,050–€0,059 | €4,95–€5,95 |

Voorbeeld: 65 × €0,0015246 = €0,099099 per maand. Bij 780–936 runs per jaar is de Sol-raming €1,19–€1,43 per jaar.

### Volledige gemeten Codex-run ter vergelijking

Hier gebruiken we de geregistreerde tokens, inclusief de Codex-context en cache: (4.900 × $2 + 12.160 × $0,10 + 43 × $10) / 1.000.000 = $0,011446 = €0,0103014 per run.

Bij herhaling van exact dit verbruik en deze cacheverdeling:

| Per maand | API-equivalente kost |
|---|---:|
| 65–78 runs | €0,67–€0,80 |
| 650–780 runs (10×) | €6,70–€8,04 |
| 65.000–78.000 runs (1.000×) | €669,59–€803,51 |

Dit is een scenario op basis van één gemeten run. De context en cacheverdeling kunnen bij andere Codex-runs verschillen.

## Nog te bepalen

- Exact API-inputverbruik van de losse tool ter vervanging van de lokale tokenraming.
- Wisselkoers gecontroleerd: zie de actuele v5-raming onderaan; eerdere bedragen blijven historische cursusberekeningen.
- Werkelijk aantal raadplegingen boven het minimum van twee en volledige gebruikstijd, inclusief wachten en bewaren.
- Tijdschattingen toetsen tijdens echt gebruik; de kostenraming hierboven hoort bij v4, niet bij de langere v5.

## Wachttijd toegevoegd — schatting van Cansu

Cansu schat dat bij haar tests de volledige tabel na ongeveer 20 seconden verscheen. Niet gemeten met een timer. Deze schatting betreft de tests met de door haar genoemde instelling `GPT 5.6 terra hoog`; de kostenraming hierboven betreft GPT-6.1 Sol. Wachttijd en kwaliteit zijn niet voor Sol of Luna onder dezelfde omstandigheden vastgesteld.

Bij 5–6 notities per training is dat 100–120 seconden wachttijd. Voorlopige aanname: elke run wordt afzonderlijk uitgevoerd en de wachttijd telt volledig als extra gebruikstijd. Als Cansu ondertussen rust of iets anders doet, kan een deel hiervan samenvallen met bestaande trainingstijd. Dat is nog niet vastgesteld.

### Bijgewerkte tijdsberekening — minimum van twee raadplegingen

| Onderdeel | Tijd per training |
|---|---:|
| 5–6 notities typen en controleren | 140–198 s |
| 5–6 antwoorden afwachten | 100–120 s |
| Twee keer vorig gewicht terugzoeken | 60 s |
| Totaal | 300–378 s (5 min–6 min 18 s) |
| Extra uitproberen zonder overzicht | 180 s (3 min) |
| Netto tijdwinst: 180 s − totaal | −120 tot −198 s |

Deze bijgewerkte berekening vervangt de eerdere berekening zonder wachttijd als volledig wachten extra tijd kost. Dat betekent **2 minuten tot 3 minuten 18 seconden extra per training**, nog zonder eventuele extra handelingen voor invoeren en bewaren. Bij meer dan twee raadplegingen neemt de tijd verder toe. Het gewenste scherm met één klik is nog niet gebouwd; de 30 seconden terugzoeken blijft de oorspronkelijke schatting, niet de gemeten tijd van dat scherm.

| Periode | Extra tijd, bij volledig meetellen van wachten |
|---|---:|
| Per trainingsdag (één training) | 2 min–3 min 18 s |
| Per week (3 trainingen) | 6 min–9 min 54 s |
| Per gemiddelde maand (13 trainingen) | 26 min–42 min 54 s |
| Per jaar (156 trainingen) | 5 uur 12 min–8 uur 34 min 48 s |

Er is dus op basis van deze aannames geen aangetoonde tijdwinst. Overlap van wachttijd met rustpauzes en het sneller terugzoeken via het gewenste scherm moeten nog worden onderzocht.

## Wachttijd tijdens rust — verduidelijking van Cansu

Cansu geeft aan dat ze tijdens het wachten op de tabel gewoon rust tussen haar sets. Voor het huidige gebruiksscenario rekenen we de 20 seconden daarom niet als extra trainingstijd, mits de volledige wachttijd binnen haar gebruikelijke rustpauze valt. Het model voert de run wel uit: de tokenkosten blijven meetellen. De bovenstaande berekening met volledig extra wachten blijft alleen als vergelijkingsscenario staan.

De geldende voorlopige berekening bij precies twee raadplegingen wordt daarmee opnieuw:

- Typen en controleren: 140–198 seconden voor 5–6 notities.
- Terugzoeken: 2 × 30 = 60 seconden.
- Extra wachten: 0 seconden, onder de aanname van volledige overlap met bestaande rust.
- Totaal: 200–258 seconden (3 minuten 20 seconden–4 minuten 18 seconden).
- Uitproberen zonder overzicht: 180 seconden (3 minuten).
- Netto winst: −20 tot −78 seconden per training, dus **20–78 seconden extra werk**.

Bij 3 trainingen per week en 52 weken per jaar is dat 1 minuut–3 minuten 54 seconden extra per week, 4 minuten 20 seconden–16 minuten 54 seconden per gemiddelde maand en 52 minuten–3 uur 22 minuten 48 seconden extra per jaar. Dit blijft een schatting, met minimaal twee raadplegingen. Meer raadplegingen en eventuele extra invoer- of bewaarhandelingen kosten meer tijd. Of typen en controleren ook met bestaande rust samenvallen, is nog niet vastgesteld. De tijd van het gewenste scherm met één klik is nog niet gemeten.

## Typen en controleren tijdens rust — huidig gebruiksscenario

Cansu verduidelijkt dat ze ook de notitie typt en de tabel controleert tijdens haar gewone rustpauze. We onderscheiden de tijd die de handelingen kosten van extra tijd boven op de training. Per notitie kosten typen, wachten en controleren samen naar schatting 48–53 seconden (10–15 + 20 + 18). Deze tijd is niet weg; ze valt volgens het voorgenomen gebruik binnen bestaande rust. Cansu bevestigt dat dit binnen haar gewone rustpauze past zonder die te verlengen. Dit is haar inschatting; het moet nog in echt gebruik worden getoetst.

Onder de aanname dat typen, wachten en controleren de bestaande rust niet verlengen, en bij precies twee raadplegingen:

| Onderdeel | Extra trainingstijd |
|---|---:|
| Typen, wachten en controleren tijdens bestaande rust | 0 s, mits volledige overlap |
| Twee keer vorig gewicht terugzoeken | 60 s |
| Totaal met tool | 60 s |
| Uitproberen zonder overzicht | 180 s |
| Netto verwachte tijdwinst | 120 s (2 min) per training |

| Periode | Verwachte tijdwinst onder deze aannames |
|---|---:|
| Per trainingsdag (één training) | 2 min |
| Per week (3 trainingen) | 6 min |
| Per gemiddelde maand (13 trainingen) | 26 min |
| Per jaar (156 trainingen) | 312 min = 5,2 uur |

Dit is geen gemeten tijdwinst. De berekening veronderstelt een beschikbaar overzicht; bewaren en terugzoeken zijn nog niet gebouwd. Bij meer dan twee raadplegingen neemt de winst af. Iedere seconde verlenging van de rustpauzes door toolgebruik vermindert de winst. Het gewenste scherm met één klik heeft nog geen gemeten terugzoektijd.

Als gevoeligheidsanalyse: wanneer de geschatte 3 minuten uitproberen zonder overzicht in werkelijkheid de helft zijn, blijft bij twee raadplegingen nog 90 − 60 = 30 seconden winst per training over, oftewel 1,3 uur per jaar, mits de overige aannames gelijk blijven. Welke aanname Cansu het minst vertrouwt, is nog te bespreken. Een persoonlijke uurwaarde is nog niet gekozen; daarom is nog geen netto waarde in euro berekend.

## Onzekerheid volgens Cansu

Cansu vertrouwt alle drie de tijdschattingen nog onvoldoende: de 3 minuten uitproberen, de 30 seconden terugzoeken en de tijd voor typen en controleren. Ze noemt het ruime schattingen en zegt dat ze ze effectief moet testen. De 2 minuten winst per training en 5,2 uur per jaar zijn dus alleen een voorlopig scenario, geen bewezen besparing.

Bij een volgende training wil ze de extra tijd voor uitproberen meten, zonder gewone sets, rust en het eerste klaarzetten mee te tellen. Zodra het overzicht beschikbaar is, moet ze ook terugzoeken, typen en controleren meten en nagaan of het gebruik haar normale rustpauze verlengt. Werkelijk aantal raadplegingen per training eveneens noteren.

## Persoonlijke waarde van tijd — vergelijking met eigen uurloon

Cansu kiest haar uurloon bij haar studentenjob als vergelijkingswaarde voor vrije tijd. Ze geeft aan: €15 per uur doorheen de week, €17 per uur ‘na 11 uur’ en €17 op zondag. Of ‘na 11 uur’ 11:00 of 23:00 betekent, is niet verduidelijkt en is niet nodig voor deze bandbreedte. Bron: Cansu's eigen opgave op 14 oktober 2026; bruto/netto niet vastgesteld. Er is geen gewogen gemiddeld uurloon berekend.

Dit is een persoonlijke waarderingsaanname: bespaarde sporttijd levert geen loon of daadwerkelijke inkomsten op. We rekenen daarom met €15–€17 per uur als vergelijking, niet als financieel rendement of werkgeversloonkost.

### Jaarwaarde van het voorlopige tijdscenario

- Verwachte tijdwinst: 5,2 uur per jaar bij twee raadplegingen per training en volledige overlap van typen, wachten en controleren met normale rust.
- Vergelijkingswaarde: 5,2 × €15–€17 = **€78–€88,40 per jaar**.
- Eerdere Sol-kostenraming voor v4: 780–936 runs × €0,0015246 = **€1,19–€1,43 per jaar**.
- Indicatieve waarde na aftrek van die modelkosten: **€76,57–€87,21 per jaar** (ondergrens €78 − €1,4270256; bovengrens €88,40 − €1,189188).

Dit is een scenario met verschillende onderbouwingen, geen gerealiseerd rendement: tijdschattingen komen van Cansu en haar Terra-tests; de modelkosten zijn een Sol-raming voor v4. V5 is langer, en tijdwinst is nog niet gemeten. Bewaren, terugzoeken, hosting en eventuele overige kosten zijn niet meegerekend. De uren moeten niet als betaalde werkuren worden voorgesteld.

### Als de extra uitprobeertijd de helft blijkt

Bij 1,5 minuut uitproberen en 1 minuut terugzoeken resteert 30 seconden winst per training: 1,3 uur per jaar. Vergelijkingswaarde: €19,50–€22,10. Na dezelfde indicatieve v4-modelkosten: **€18,07–€20,91 per jaar**. Deze gevoeligheidsanalyse verandert één aanname; Cansu vindt ook de andere tijdschattingen onzeker. Als extra toolgebruik de rust verlengt, kan de winst verder dalen of verdwijnen.

## Actuele kostenraming v5 — 14 oktober 2026

Deze sectie is de actuele raming voor v5; de eerdere v4-berekeningen blijven als geschiedenis bewaard. ECB-referentiekoers op 14 oktober 2026: €1 = $1,1195, dus $1 = €0.89325592. Bron: [ECB](https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.ff.html). Eerdere tabellen gebruikten de cursusaanname $1 = €0,90.

V5 met dezelfde eerste notitie telt 694 teksttokens met o200k_base, tegenover 632 voor v4. Dit blijft een lokale benadering: de tokenizer herkent het model niet automatisch. We nemen voor de Sol-raming dezelfde 43 outputtokens aan als bij de gemeten v4-run, zonder cachekorting. V5 is niet via Sol gemeten; andere invoer, antwoorden en reasoning kunnen de kost wijzigen.

Sol: (694 × $2 + 43 × $10) / 1.000.000 = $0,001818 per run. Omrekening naar euro: delen door 1,1195.

| Model, gelijk tokenverbruik aangenomen | Per run | 65–78/maand | 10× volume | 1.000× volume |
|---|---:|---:|---:|---:|
| Sol | €0.00162394 | €0.106–€0.127 | €1.06–€1.27 | €105.56–€126.67 |
| Luna, niet getest | €0.00008120 | €0.0053–€0.0063 | €0.053–€0.063 | €5.28–€6.33 |

Bij 780–936 runs per jaar: Sol €1.27–€1.52. Persoonlijke vergelijkingswaarde bij 5,2 uur winst en €15–€17 per uur: €78–€88,40; na v5-modelkosten €76.48–€87.13. Als uitproberen de helft kost: 1,3 uur winst, waarde €19,50–€22,10; na modelkosten €17.98–€20.83. Dit zijn scenario's, geen gerealiseerde inkomsten. Tijdschattingen zijn gebaseerd op Cansu's ervaringen en Terra-tests; Sol- en Luna-prestaties zijn niet onder dezelfde omstandigheden vastgesteld. Overige softwarekosten ontbreken.
