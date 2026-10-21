# Kostenmeting — week 4

## Gemeten Codex-sessie op 15 oktober 2026

- Model volgens `/status`: GPT-6.1-Sol, reasoning low; ChatGPT Plus.
- Test: T01, Netflix en Uber; FCF-periode door mij gekozen: januari–juni 2026.
- Bron: lokale Codex-sessie `01a13f83-3086-7e31-a35f-c097c85fec8b`, laatste `token_count` om 12:30:57 UTC (14:30:57 Belgische tijd).
- `/status` na afloop: 82,9K gebruikte contexttokens. Dit is geen cumulatief input-/outputverbruik.

| Gemeten onderdeel | Tokens |
|---|---:|
| Input totaal, inclusief cache | 807.321 |
| Daarvan input uit cache | 725.248 |
| Input zonder cache, berekend als verschil | 82.073 |
| Output totaal | 6.822 |
| Daarvan reasoning, al inbegrepen in output | 459 |
| Input + output totaal | 814.143 |

## API-equivalent met de tariefaanname uit de les

De tabel in `cursus/week-04/README.md` gebruikt voor GPT-6.1 Sol per miljoen tokens: $2 input, $0,10 cache lezen en $10 output. Deze tarieven zijn hier een **lesaanname**, niet onafhankelijk gecontroleerde actuele prijzen.

Berekening van de volledige sessie:

`(82.073 × 2 + 725.248 × 0,10 + 6.822 × 10) / 1.000.000 = $0,3048908`, afgerond **$0,305**.

Dit is een berekend API-equivalent, geen afzonderlijk aangerekend bedrag boven op het Plus-abonnement.

## Grenzen van deze meting

Deze sessie bevat extra berichten over bijlagen en toestemming, mislukte pogingen om pdf-bibliotheken te gebruiken, pdf-extractie, meerdere modelstappen en mijn FCF-periodekeuze. Context wordt bij opeenvolgende modelstappen opnieuw verwerkt en kan uit cache komen. Het cumulatieve inputverbruik is daardoor groter dan de uiteindelijke context.

Dit bedrag meet de volledige waargenomen werksessie. Het is **nog geen geïsoleerde kost van alleen de vergelijkingsprompt plus rapporten en antwoord**. Een contextmeting vóór de eerste vraag ontbreekt; mijn eigen deel is dus nog niet afzonderlijk gemeten.

## Nog aan te vullen

- Een afgebakende, herhaalbare run voor de kost per vergelijking.
- Een vergelijking met een ander model.
- Eventuele euro-omrekening met vermelde koers, datum en bron.

## Mijn volume en voorlopige maandkosten

Ik schat **3 tot 5 vergelijkingen per maand**, omdat ik een beginnende belegger ben met een beperkt budget. Ik zou de vergelijkingen opsplitsen per bedrijfssector en regio. Bron: mijn eigen inschatting, opgegeven op 15 oktober 2026; geen gemeten gebruiksvolume.

Onderstaande bedragen gebruiken voorlopig het API-equivalent van de **volledige gemeten sessie** ($0,3048908) per vergelijking. Ze veronderstellen dat iedere vergelijking hetzelfde verbruik heeft. Dit is nog geen voorspelling op basis van een geïsoleerde, herhaalbare run; rapportlengte, aantal stappen en cachegebruik kunnen verschillen.

| Schaal | Vergelijkingen per maand | Voorlopige kosten per maand (USD) |
|---|---:|---:|
| Mijn volume | 3–5 | $0,91–$1,52 |
| 10× | 30–50 | $9,15–$15,24 |
| 1.000× | 3.000–5.000 | $914,67–$1.524,45 |

Berekening: aantal vergelijkingen × $0,3048908; afgerond na vermenigvuldiging. Tarieven blijven de lesaanname hierboven. Werk deze tabel bij zodra de afgebakende kost per vergelijking beschikbaar is.

## Met de hand: mijn tijdsinschatting

**Actuele afbakening, bevestigd op 15 oktober 2026:** de 60 minuten handmatig en 15 minuten met de tool gelden **per bedrijf, per kwartaalupdate**. Beide omvatten alle informatie verzamelen, noteren en de cijfers controleren. **Alle eigen analyses, interpretaties en beleggingsbeslissingen vallen buiten beide tijden**, evenals de afzonderlijke risicoanalyse. Het zijn mijn eigen schattingen, geen gemeten tijden. De eerdere passages over vergelijkingen van twee bedrijven blijven hieronder als voorgeschiedenis staan; voor verdere berekeningen geldt deze bevestigde afbakening.

Zonder de tool zou ik de rapporten zelf opzoeken, de inhoudsopgave bekijken, de benodigde cijfers in Excel zetten en die met formules berekenen.

- **Eerste vergelijking: 3 uur**, inclusief het aanmaken van het Excel-document en de formules.
- **Elke volgende vergelijking: 1 uur**, omdat het Excel-document dan al bestaat.
- Bron: mijn eigen schatting, opgegeven op 15 oktober 2026; niet met een chronometer gemeten. De tijd per afzonderlijke stap is nog niet uitgesplitst.

Het verschil van **2 uur** behandelen we voorlopig als eenmalige voorbereiding van Excel, op basis van mijn twee schattingen. Bij een terugkerende vergelijking is de handmatige basis dus **60 minuten**, niet 180 minuten.

Bij mijn volume van 3–5 vergelijkingen per maand is dit **3–5 uur per maand** zodra Excel bestaat. De eerste maand, inclusief de eenmalige voorbereiding, is dat **5–7 uur**. Bij twaalf maanden met hetzelfde volume: **36–60 vergelijkingen**, oftewel **36–60 uur terugkerend handwerk per jaar**; inclusief de eerste Excel-opzet **38–62 uur in het eerste jaar**. Dit is handmatige werktijd, nog geen berekende tijdwinst.

Nog nodig voor de tijdwinst: mijn tijd voor rapporten opzoeken en aanleveren aan de tool, de tool laten draaien, eventuele periodekeuzes beantwoorden, en het antwoord controleren en corrigeren. Ook moet duidelijk worden of het handmatige uur dezelfde risico- en broncontrole omvat als de toolvergelijking.

## Met de tool: voorlopige tijdwinst en kwartaalopvolging

Ik schat **15 minuten per vergelijking met de tool** (eigen schatting, 15 oktober 2026). De verdeling over voorbereiding, draaien, controleren en corrigeren is nog niet opgegeven. Of volledige risico- en broncontrole in beide tijdschattingen zit, moet nog worden bevestigd.

Met 60 minuten handmatig tegenover 15 minuten met de tool is de **voorlopige tijdwinst 45 minuten per vergelijking**. Dit geldt alleen als beide schattingen dezelfde taak en controle omvatten.

Als de eerdere schatting van 3–5 vergelijkingen per maand blijft gelden:

| Onderdeel | Per maand | Per jaar (12 maanden op dit volume) |
|---|---:|---:|
| Handmatig, zonder eenmalige Excel-opzet | 3–5 uur | 36–60 uur |
| Met de tool | 0,75–1,25 uur | 9–15 uur |
| Voorlopige tijdwinst | 2,25–3,75 uur | 27–45 uur |

Mijn doel is om vanaf dit jaar elk kwartaal de bedrijven op te volgen. Ik wil de verzamelde cijfers ook gebruiken voor grafieken. Grafieken zijn een gewenste uitbreiding; de huidige prompt levert tabellen en brononderbouwing, en grafiekgeneratie is nog niet aangetoond. Het aantal bedrijven en vergelijkingen per kwartaal moet nog worden vastgelegd, zodat het volume aansluit op deze werkwijze. De jaarcijfers hierboven zijn een scenario voor twaalf maanden, geen claim over het resterende deel van 2026.

### Verduidelijking van mijn werkwijze

Ik wil ongeveer **10 bedrijven elk kwartaal** opvolgen: ongeveer **40 bedrijfsupdates per volledig jaar**. Dit is niet automatisch 40 runs: de huidige prompt verwerkt twee bedrijven per vergelijking. Bij vijf vaste paren zou dit 5 vergelijkingen per kwartaal en 20 per jaar zijn; die indeling is nog niet door mij bevestigd. De eerdere maandvolumes en hun kosten blijven daarom een eerder scenario, niet het definitieve gebruiksvolume.

Mijn schatting van **15 minuten omvat het nakijken van de cijfers**, geholpen door de paginaverwijzingen van de tool. De risicoanalyse valt buiten deze tijd; ik volg daarvoor afzonderlijk het nieuws. Of de handmatige schatting van 60 minuten dezelfde afbakening heeft, is nog niet bevestigd. Nieuws volgen is bovendien niet dezelfde taak als risico’s met bronbewijs uit een kwartaalrapport halen. De voorlopige tijdwinst moet dus nog op gelijke taakafbakening worden gecontroleerd.

Ik wil de kwartaalopvolging **automatisch in een Excel-document laten opnemen**, zodat ik historische cijfers kan bewaren en grafieken kan maken. Dit is een gewenste uitbreiding, nog geen gerealiseerde functie. Voor de opzet moet nog worden gekozen of één run twee bedrijven vergelijkt of één bedrijf bijwerkt. Bewaar bij iedere waarde de bedrijfsnaam, metriek, begin- en einddatum of peildatum, valuta, eenheid, bronpagina, definitie en controlestatus. Een halfjaar-FCF mag niet als kwartaal-FCF in een grafiek terechtkomen.

### Definitieve volumeaanname voor de nieuwe werkwijze

Ik kies **één bedrijf per run**, omdat bedrijven op verschillende dagen rapporteren. De vergelijking gebeurt daarna in Excel. Mijn lijst: **NFLX, UBER, NVO, LLY, AMZN, GOOGL, SPGI, NVDA, AMD en CVX**.

Dit geeft ongeveer **10 runs per kwartaal**, **40 runs per volledig jaar** en gemiddeld **3,33 runs per maand**. Het werk zal rond rapportages gebundeld zijn, niet gelijk verdeeld over alle maanden.

De 60 en 15 minuten zijn inmiddels bevestigd als schattingen **per bedrijfsupdate**, met de hierboven vastgelegde afbakening. $0,3048908 is gemeten voor de eerdere sessie met twee bedrijven, niet voor één nieuwe bedrijfsupdate. De eerdere kostentabel blijft daarom een historisch scenario; de nieuwe workflow vereist nog een eigen kostenmeting.

Op 15 oktober is een eerste Excel-bestand gemaakt met een update-script en een nieuwe prompt voor één bedrijf. Er staan alleen zes bestaande, nog te controleren Netflix-/Uber-metingen in. De hele nieuwe extractie-naar-Excel-workflow moet nog met een echt nieuw rapport worden getest. Grafieken vergelijken bedrijven binnen gekozen perioden; trendgrafieken zijn nog een uitbreiding.

## Actuele tijdwinst per bedrijfsupdate

Bron voor de tijden en taakafbakening: mijn eigen inschatting en bevestiging op 15 oktober 2026. Bron voor het volume: mijn plan om 10 bedrijven elk kwartaal op te volgen, dus 40 updates per volledig jaar.

| Onderdeel | Per bedrijfsupdate | Per kwartaal (10 updates) | Gemiddeld per maand | Per volledig jaar (40 updates) |
|---|---:|---:|---:|---:|
| Handmatig verzamelen, noteren en controleren | 60 minuten | 10 uur | 3 uur 20 minuten | 40 uur |
| Met de tool verzamelen, noteren en controleren | 15 minuten | 2 uur 30 minuten | 50 minuten | 10 uur |
| Geschatte tijdwinst | 45 minuten | 7 uur 30 minuten | 2 uur 30 minuten | **30 uur** |

Berekening: `(60 - 15) × 40 / 60 = 30 uur tijdwinst per jaar`. Het maandgemiddelde is het jaartotaal gedeeld door twaalf; in werkelijkheid valt het werk rond de kwartaalrapportages. Er is nog geen werkschema om dit eerlijk naar een vast aantal taken per dag of week om te rekenen. De eenmalige voorbereiding van Excel is niet in deze terugkerende tijdwinst opgenomen. Eigen analyses en risicoanalyse blijven volledig buiten de berekening.

Nog nodig voor de jaarlijkse nettowaarde: een door mij gekozen uurwaarde met onderbouwing, de kost per nieuwe bedrijfsupdate en mijn keuze van de zwakste aanname met een gevoeligheidsberekening.

## Mijn uurwaarde en de waarde van de tijdwinst

Ik schat de waarde van mijn tijd op **€5 per uur**. Voor het handmatig verzamelen en noteren van de informatie kan ik eigenlijk geen tijd vrijmaken: dat zou ten koste gaan van mijn trainingen en familietijd. Met de tool kan ik wel ruimte maken voor mijn eigen analyses. Ik hoop dat die ook betere investeringen opleveren.

Bron: mijn eigen waardering en onderbouwing, opgegeven op 15 oktober 2026. €5 is een persoonlijke aanname, geen loon, gemeten opbrengst of bedrag dat ik daadwerkelijk ontvang.

- Geschatte terugkerende tijdwinst: **30 uur per volledig jaar**.
- Persoonlijke waarde daarvan: `30 × €5 = €150 per jaar`, **vóór toolkosten**.
- Netto op basis van het API-equivalent: `€150 − (40 × kost per bedrijfsupdate in euro)`. De kost van de nieuwe één-bedrijf-run moet nog worden gemeten; daarom is de netto-uitkomst nog niet ingevuld. Een eventuele toerekening van mijn abonnement is een afzonderlijke kostenkeuze en mag niet zonder toelichting bij het API-equivalent worden opgeteld.

Mijn eigen analyses blijven buiten de eerder geschatte 60 en 15 minuten. De waarde van hun inhoud en mogelijk betere beleggingsresultaten is **niet gemeten** en wordt niet bij de €150 opgeteld. Als ik het handmatige werk zonder tool niet zou doen, is 30 uur bovendien een vergelijking met een hypothetische handmatige werkwijze, geen aangetoonde besparing op mijn huidige agenda. De tool maakt de kwartaalopvolging dan vooral haalbaar binnen mijn beschikbare tijd.

Nog te kiezen: welke aanname ik het minst vertrouw, en wat er met de uitkomst gebeurt als die halveert.

## Mijn zwakste aanname: 40 updates per jaar

Ik vertrouw de schatting van **40 bedrijfsupdates per jaar** het minst. Ik heb periodes waarin ik de beurs meer volg dan in andere. In sommige periodes zou ik misschien meer dan tien bedrijven per kwartaal opvolgen, terwijl ik in andere periodes een kwartaal moet inhalen. Ik moet consistent blijven. Bron: mijn eigen toelichting op 15 oktober 2026. Het volume kan dus hoger of lager uitvallen, en het werk zal niet gelijkmatig over het jaar verdeeld zijn. Een kwartaal later inhalen verlaagt het jaartotaal niet automatisch; twintig updates hieronder is een afzonderlijk scenario voor een lager werkelijk volume.

Als het werkelijke volume de helft is, **20 updates per jaar**, blijven de geschatte 60 minuten handmatig, 15 minuten met de tool en €5 per uur voor deze gevoeligheidsberekening gelijk.

| Onderdeel | Basisschatting | Helft van het volume |
|---|---:|---:|
| Updates per volledig jaar | 40 | 20 |
| Handmatige verzameling, noteren en cijfercontrole | 40 uur | 20 uur |
| Dezelfde taak met de tool | 10 uur | 5 uur |
| Geschatte tijdwinst per jaar | 30 uur | 15 uur |
| Persoonlijke waarde vóór toolkosten | €150 | €75 |

Laat `c` de nog te meten API-equivalente kost per nieuwe bedrijfsupdate in euro zijn. De jaarlijkse nettowaarde wordt dan `€150 − 40 × c` bij 40 updates en `€75 − 20 × c` bij 20 updates. Zonder vaste kosten en bij gelijke kost per update halveert ook die berekende nettowaarde. Een vast abonnement halveert niet automatisch mee met het gebruik; eventuele toerekening daarvan moet apart worden verantwoord.

Alle eigen analyses blijven buiten de tijdsinschattingen. Mogelijk betere beleggingsresultaten zijn geen onderdeel van deze waardeberekening.

## Scenario bij indiening week 4 — geen nieuwe runmeting

De hierboven beschreven ontbrekende beginmeting is niet alsnog uitgevoerd. De nieuwe workflow heeft dus nog geen geïsoleerde kost per bedrijfsupdate. De volgende berekeningen gebruiken uitdrukkelijk de volledige oude sessiekost als vervangende scenarioaanname, niet als meting van v3.

Volume: 40 updates per jaar, gemiddeld 40 / 12 per maand. Sol-lesaanname: (82.073 × 2 + 725.248 × 0,10 + 6.822 × 10) / 1.000.000 = $0,3048908. Luna, uitsluitend dezelfde tokens herprijsd: (82.073 × 0,10 + 725.248 × 0,01 + 6.822 × 0,50) / 1.000.000 = $0,01887078. Geen Luna-kwaliteits- of verbruiksmeting uitgevoerd.

| Modelscenario | Per aangenomen update USD | Gemiddeld per maand USD | 10× USD | 1.000× USD |
|---|---:|---:|---:|---:|
| Sol | 0,3048908 | 1,02 | 10,16 | 1.016,30 |
| Luna | 0,01887078 | 0,06 | 0,63 | 62,90 |

Valutabron: ECB-dagbestand, https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml, opgehaald 15 oktober 2026, koersdatum 14 oktober 2026; lokaal bewijs excel/koersen/2026-10-14.json. EUR 1 = USD 1,1195, dus USD 1 = EUR 0,8932559178. Sol-sessie: EUR 0,2723455114. Jaarlijks scenario EUR 150 − 40 × 0,2723455114 = EUR 139,11; bij 20 updates EUR 75 − 20 × 0,2723455114 = EUR 69,55. Geen aangetoonde nettowaarde van v3 en geen abonnementstoerekening.

Tijdgemiddelden bij 30 uur per jaar: 30 / 12 = 2,5 uur per maand; 30 × 60 / 52 = circa 35 minuten per week; 30 × 60 / 365 = circa 5 minuten per kalenderdag. Dit is spreiding van een jaarplan, geen dagelijks uitgevoerde taak. De handmatige 60 minuten zijn door mij uitgesplitst: 5 minuten rapport zoeken, 45 minuten cijfers verzamelen, invoeren en berekenen, en 10 minuten controleren. Dit zijn eigen schattingen, opgegeven op 15 oktober 2026. De 15 minuten met de tool zijn eveneens door mij uitgesplitst: 8 minuten uitvoeren en 7 minuten controleren. Dit zijn eigen schattingen, opgegeven op 15 oktober 2026. Beide werkwijzen sluiten mijn eigen analyses uit.

Actuele uitvoering: twaalf metingen voor vier bedrijven in het lokale Excel-bestand, alle door de student bevestigd. Bronbedragen en inhoudelijke beperkingen blijven bewaard. Oudere passages hierboven blijven als voorgeschiedenis staan.

## Nieuwe meting: volledige AMZN-agentrun, 15 oktober 2026

Bron: sessielog 01a13fd7-9ffa-75f0-8673-fd7cad794390. Eén taak vanaf 14:00:35 UTC; laatste token_count 14:03:29 UTC. De eerste token_count bevat al de eerste modelstap en is dus geen nulmeting om af te trekken. Er staan geen eerdere taken in dit log. Het volledige cumulatieve verbruik betreft deze taak. Gedeelde uitvoer meldt 2m54s.

| Onderdeel | Tokens |
|---|---:|
| Input inclusief cache | 809.064 |
| Cache lezen | 754.944 |
| Niet-gecachete input | 54.120 |
| Output inclusief 148 reasoningtokens | 4.076 |
| Totaal | 813.140 |

Sol met lesprijzen: (54.120 × 2 + 754.944 × 0,10 + 4.076 × 10) / 1.000.000 = **$0,2244944 per volledige run**. Scope: lokale extractie, JSON-opslag, Excel-update, ECB-ophaling, inclusief agentcontext, skills, mislukte leespoging en installatie pdf-lezer. Rapport vooraf downloaden valt erbuiten. Dit is een meetpunt, geen gemiddelde of kale API-promptkost. Context en eigen deel zijn niet afzonderlijk vastgesteld. Plus factureert dit bedrag niet afzonderlijk.

| Modelscenario | Per run USD | Per maand 40/12 runs USD | 10× USD | 1.000× USD |
|---|---:|---:|---:|---:|
| Sol, gemeten tokens | 0,2244944 | 0,75 | 7,48 | 748,31 |
| Luna, alleen herprijsd | 0,01499944 | 0,05 | 0,50 | 50,00 |

Luna: (54.120 × 0,10 + 754.944 × 0,01 + 4.076 × 0,50) / 1.000.000. Geen kwaliteits- of tokenverbruiksmeting met Luna uitgevoerd.

ECB van 15 oktober 2026: EUR 1 = USD 1,1208, bron https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml, lokaal bewijs excel/koersen/2026-10-15.json. Per run $0,2244944 / 1,1208 = EUR 0,2002983583. Bij 40 updates: jaarlijkse toolkost EUR 8,01; geschatte persoonlijke nettowaarde 150 − 8,011934 = **EUR 141,99**. Bij 20 updates: 75 − 4,005967 = **EUR 70,99**. Deze scenario’s veronderstellen hetzelfde toekomstige verbruik per update, dezelfde tarieven en koers. Eénmalige installatie kan de meting beïnvloeden; andere rapporten en caching ook. Eigen analyses en eventuele beleggingsrendementen blijven uitgesloten.

De eerdere kostenpassages blijven als voorgeschiedenis staan. Deze volledige één-bedrijf-run vervangt de oude tweebedrijfssessie als basis voor het actuele schaal- en waardescenario. AMZN heeft drie records toegevoegd (15 totaal); inhoudelijke broncontrole door de student staat nog open.
