# Testset — Kwartaalrapporten vergelijken

## Eindoverzicht van de bestaande beoordelingen — 15 oktober 2026

Dit overzicht brengt uitsluitend eerder vastgelegde studentbeoordelingen samen. Er zijn geen nieuwe runs uitgevoerd en geen ontbrekende beoordelingen ingevuld. Per input zijn twee runs geselecteerd; voor T01 het expliciet beoordeelde lokale testpaar met `prompt-v2-week02.md`, voor T03 de twee PDF-runs die de student met beperkingen afsloot. Oudere historische pogingen, gestopte linkruns en de afzonderlijke keuzevraagtest tellen niet nogmaals mee.

| Input | Beoordeelde scope | Geslaagd | Niet geslaagd | Bruikbaar, beoordeling onvolledig |
|---|---|---:|---:|---:|
| T01 Netflix/Uber | Financiële kerncijfers, lokaal testpaar oudere v2 | 2 | 0 | 0 |
| T02 Amazon/Alphabet | Financiële kerncijfers; student keurt beide niet volledig goed | 0 | 2 | 0 |
| T03 S&P/Moody’s | PDF-runs; FCF-instructie niet meer vast te stellen | 0 | 0 | 2 |
| T04 Novo/Lilly | Financiële kerncijfers | 2 | 0 | 0 |
| T05 NVIDIA/AMD | Besproken omzetgroeicontrolepunt | 1 | 1 | 0 |
| T06 Vistra/Constellation | Omzetgroei | 2 | 0 | 0 |
| T07 JLR/Ferrari | Omzetgroei | 2 | 0 | 0 |
| T08 PepsiCo/Coca-Cola | Omzetgroei | 2 | 0 | 0 |
| T09 Rheinmetall/Lockheed Martin | Omzetgroei | 2 | 0 | 0 |
| T10 LVMH/Hermès | Omzetgroei | 2 | 0 | 0 |
| **Totaal** | **Verschillende scopes en promptversies** | **15** | **3** | **2** |

**15 op 20 geselecteerde runs expliciet geslaagd beoordeeld: 75% (n = 10 inputs, 2 runs per input).** Dit is het aandeel bevestigde geslaagde beoordelingen, geen uniforme nauwkeurigheidsmeting: T01, T02 en T04 betreffen financiële kerncijfers, T05 één omzetgroeicontrolepunt, T06–T10 omzetgroei en T03 blijft onvolledig beoordeeld. De twee onvolledig beoordeelde runs zijn geen bewezen fouten en worden niet als geslaagd ingevuld. Risico’s en aanvullende bronclaims zijn niet volledig gevalideerd. De 100% voor T06–T10 blijft afzonderlijk geldig binnen die omzetgroeiscope. De telling valideert v3 en de Excel-update niet.

Vastgelegde foutklassen: **F3 één geval** (T05 Run 1 mist AMD’s gerapporteerde groei), **F6 twee gevallen van wisselend gedrag tussen runparen** (T05 gerapporteerd/berekend en T02 onzekerheidslabel). Dezelfde T05-afwijking heeft twee labels; deze aantallen zijn dus geen vier onafhankelijke foutieve runs. T02 telt volgens de student als twee niet volledig geslaagde runs. T03 heeft geen definitieve foutklasse omdat de precieze aanvullende instructie ontbreekt. Voor F1, F2, F4 en F5 is binnen dit eindoverzicht geen definitieve fout vastgesteld; dat bewijst niet dat alle ongecontroleerde bronclaims foutloos zijn.

De oudere passages hieronder blijven als voorgeschiedenis staan. Dit overzicht vervangt de eerdere melding dat er nog geen telling over alle tien inputs is, maar heft de verschillen in meetopzet niet op. Een uniforme hertest met één vaste prompt en gelijke controles zou een afzonderlijke meting zijn. De buurtest/peerreview is hiermee niet uitgevoerd.

## T01 — Netflix en Uber, Q2 2026

- Netflix: https://www.sec.gov/Archives/edgar/data/1065280/000106528026000212/nflx-20260630.htm
- Uber: https://www.sec.gov/Archives/edgar/data/1543151/000154315126000032/uber-20260630.htm
- Verslagperiode: kwartaal eindigend op 30 juni 2026.
- Prompt: `prompt-v1.md`.
- Status: financiële controlepunten en risicocriteria vooraf ingevuld; twee runs met v1 ontvangen en hieronder vastgelegd. Mijn verbeterpunten zijn verwerkt in prompt-v2.md; v2 is nog niet getest.

Vul eerst zelf de verwachte antwoorden en bronnen in. "Niet gevonden" of "onzeker" kan ook een verwacht antwoord zijn. Bij risico’s: noteer concrete risico’s met bronbewijs die je wilt controleren; de tool kan ook andere expliciet onderbouwde risico’s vinden. Laat daarna dezelfde input twee keer draaien in twee nieuwe gesprekken, zonder dit bestand mee te geven.

| Controlepunt | Verwacht antwoord (zelf invullen) | Waarom / bron | Run 1 | Run 2 |
|---|---|---|---|---|
| Netflix — FCF, definitie en periode | Berekende FCF: 1,525,168 duizend USD voor Q2 2026 (drie maanden eindigend op 30 juni 2026). Operationele kasstroom minus uitgaven voor materiële vaste activa: 1,743,812 − 218,644. | Zelf opgezocht: p. 5, Consolidated Statements of Cash Flows, kolom Three Months Ended June 30, 2026; regels Net cash provided by operating activities en Purchases of property and equipment. | | |
| Uber — FCF, definitie en periode | Halfjaar-FCF: 5,078 miljoen USD voor de zes maanden eindigend op 30 juni 2026. Operationele kasstroom minus uitgaven voor materiële vaste activa: 5,213 − 135. Dit is geen afzonderlijke Q2-FCF. | Zelf opgezocht: p. 9, Condensed Consolidated Statements of Cash Flows, kolom Six Months Ended June 30, 2026; Net cash provided by operating activities en Purchases of property and equipment. | | |
| Netflix — totale schuld en componenten | 14,309,306 duizend USD op 30 juni 2026: kortlopende schuld 2,483,758 + langlopende schuld 11,825,548. Boekwaarde van de twee schuldposten; kasmiddelen niet afgetrokken. | Zelf opgezocht en gecontroleerd: p. 6, Consolidated Balance Sheets, kolom June 30, 2026; Short-term debt en Long-term debt. | | |
| Uber — totale schuld en componenten | 12,723 miljoen USD op 30 juni 2026: kortlopende schuld 1,997 + langlopende schuld 10,726. Boekwaarde van de twee schuldposten; kasmiddelen niet afgetrokken. Long-term debt, net of current portion sluit het kortlopende deel uit, zodat dit apart wordt opgeteld. | Zelf opgezocht en gecontroleerd: p. 4, Condensed Consolidated Balance Sheets; Short-term debt en Long-term debt, net of current portion, kolom June 30, 2026. | | |
| Netflix — omzetgroei tegenover Q2 2025 | Berekende omzetgroei: 13,4%. Omzet Q2 2026: 12,559,938 duizend USD; Q2 2025: 11,079,166 duizend USD. Formule: (12,559,938 / 11,079,166 − 1) × 100, afgerond op één decimaal. | Zelf opgezocht: p. 3, Consolidated Statements of Operations, regel Revenues, kolommen Three Months Ended June 30, 2026 en June 30, 2025. | | |
| Uber — omzetgroei tegenover Q2 2025 | Berekende omzetgroei: 12,2%. Omzet Q2 2026: 14,191 miljoen USD; Q2 2025: 12,651 miljoen USD. Formule: (14,191 / 12,651 − 1) × 100, afgerond op één decimaal. Een gerapporteerd afgerond percentage moet als zodanig worden onderscheiden van deze berekening. | Zelf opgezocht: p. 5, Condensed Consolidated Statements of Operations, regel Revenue, kolommen Three Months Ended June 30, 2026 en 2025. | | |
| Netflix — expliciet genoemde risico’s met bewijs | Item 1A meldt geen materiële wijzigingen in de eerder beschreven risicofactoren en verwijst naar het Form 10-K over het jaar eindigend op 31 december 2025. De risico’s uit dat jaarverslag zijn niet aangeleverd en mogen niet worden ingevuld uit geheugen. Dit betekent niet dat Netflix geen risico’s heeft. Eventuele risico’s elders in het kwartaalrapport moeten afzonderlijk met bronbewijs worden gecontroleerd. | Zelf gevonden: Item 1A. Risk Factors; verwijzing naar de Risk Factors in het Annual Report on Form 10-K over 2025. | | |
| Uber — expliciet genoemde risico’s met bewijs | Drie door mij gekozen risico’s: (1) autonome voertuigtechnologie mogelijk niet tijdig, op concurrerende schaal of met voldoende kwaliteit/veiligheid aanbieden ten opzichte van concurrenten; (2) omvangrijke investeringen in nieuwe producten en technologieën leveren mogelijk niet de verwachte voordelen op; (3) extra kapitaal voor groei is mogelijk niet beschikbaar of niet tegen redelijke voorwaarden. Het rapport stelt niet dat autonome technologie volledig ontbreekt of dat het extra kapitaal specifiek op korte termijn nodig is. | Door mij aangeleverd: Item 1A. Risk Factors. (1) p. 56, toelichting autonome voertuigen; (2) p. 58, investeringen in nieuwe producten en technologieën; (3) p. 70, Financing and Transactional Risks, extra kapitaal voor groei. | | |
| Verschillen in definities, periodes of ontbrekende informatie | De opgezochte Netflix-FCF betreft drie maanden (Q2 2026); de opgezochte Uber-FCF betreft zes maanden (eerste halfjaar 2026). Deze bedragen mogen niet rechtstreeks als kwartaal-FCF worden vergeleken. Netflix rapporteert deze bedragen in duizenden USD, Uber in miljoenen USD; eenheden moeten worden gelijkgetrokken. Overige beperkingen nog zelf aanvullen. | Netflix p. 5 en Uber p. 9, koppen van de kasstroomtabellen. | | |

Dit is één testinput met meerdere controlepunten. Vier extra testinputs worden later gekozen.

## Risico’s beoordelen — vooraf vastgelegd

Andere risico’s dan mijn drie voorbeelden zijn toegestaan. Een risico telt als correct wanneer het expliciet in het aangeleverde rapport staat, de pagina/sectie of het citaat klopt en de tool duidelijk uitlegt wat het mogelijke gevolg voor het bedrijf is. Die uitleg moet door de bron worden ondersteund en mag een mogelijkheid niet als vaststaand feit weergeven. Mijn drie voorbeelden zijn geen verplichte selectie. Ik controleer ieder gekozen risico zelf in het rapport. Maximaal vijf risico’s per bedrijf; een verwijzing naar een niet-aangeleverd jaarverslag wordt als beperking gemeld.

## Run 1 — ontvangen uitvoer

Onderstaande resultaten zijn overgenomen uit de door mij gedeelde tooluitvoer. Dit zijn de antwoorden van de tool, nog geen beoordeling door mij. De tool gaf alle bedragen in miljoenen USD.

| Controlepunt | Uitvoer Run 1 | Mijn beoordeling |
|---|---|---|
| Netflix — FCF | Berekend: 1.525,168 miljoen USD voor Q2 2026; operationele kasstroom 1.743,812 minus investeringen 218,644. Bron p. 5. Eigen gerapporteerde FCF-definitie niet gevonden. | |
| Uber — FCF | Gerapporteerd: 5.078 miljoen USD voor januari–juni 2026; 5.213 minus 135. Bron p. 44. Kwartaal-FCF niet gevonden. | |
| Netflix — schuld | 14.309,306 miljoen USD: kortlopend 2.483,758 plus langlopend 11.825,548. Operationele leases apart: 2.330,421 miljoen USD. Bronnen p. 6 en 13. | |
| Uber — schuld | 12.723 miljoen USD: kortlopend 1.997 plus langlopend 10.726; na 76 miljoen korting/emissiekosten. Operationele leases apart: 2.008 miljoen USD. Tool noemt onzekerheid bij strikt rentedragende schuld door 1.324 miljoen aan 0%-notes; financiële leases afzonderlijk niet gevonden. Bronnen p. 4 en 19. | |
| Netflix — omzetgroei | Gerapporteerd 13%, constante wisselkoersen 12%; omzetbedragen 12.559,938 en 11.079,166 miljoen USD. Bron p. 27. Geen extra precisie berekend. | |
| Uber — omzetgroei | Gerapporteerd 12%, constante wisselkoersen 11%; omzetbedragen 14.191 en 12.651 miljoen USD. Bron p. 34. Geen extra precisie berekend. | |
| Netflix — risico’s | Wisselkoersen kunnen omzet en bedrijfsresultaat in USD verlagen; rente/SOFR kan rentelasten verhogen. Bron p. 37. Tool meldt daarnaast de verwijzing naar het niet-geraadpleegde jaarverslag 2025. | |
| Uber — risico’s | Chauffeursclassificatie kan kosten verhogen en aanbod verminderen (p. 33); concurrentie kan omzet, gebruik en marges verminderen (Part II, Item 1A, zonder precieze pagina). | |
| Vergelijkbaarheid | Tool houdt Uber-halfjaar-FCF apart van Netflix-kwartaal-FCF, rekent eenheden om naar miljoenen USD en meldt Ubers wijziging van omzetpresentatie in bepaalde Britse markten. | |

De genoemde duur in de gedeelde uitvoer was 2 minuten en 9 seconden. Het zichtbare activiteitenoverzicht vermeldt ook het lezen van `context.md` en webzoekacties. Voor de bronbeperking moet worden gecontroleerd of de uiteindelijke feitelijke antwoorden uitsluitend uit de twee rapporten kwamen.

## Run 2 — ontvangen uitvoer

Overgenomen uit mijn gedeelde tweede toolantwoord; aanvullende bronclaims zijn nog niet automatisch gecontroleerd.

| Controlepunt | Uitvoer Run 2 |
|---|---|
| Netflix — FCF | Berekend 1.525.168 duizend USD voor Q2 2026, uit 1.743.812 − 218.644; p. 5. Gerapporteerde FCF en bedrijfsdefinitie niet gevonden. |
| Uber — FCF | 5.078 miljoen USD voor januari–juni 2026, uit 5.213 − 135; p. 44. Kwartaal-FCF niet gevonden. |
| Netflix — schuld | 14.309.306 duizend USD, uit 2.483.758 + 11.825.548. Operationele leases apart: 2.330.421 duizend USD. Bron p. 6 en Notes 5 en 7. |
| Uber — schuld | 12.723 miljoen USD, uit 1.997 + 10.726; na 76 miljoen korting/emissiekosten. Operationele leases apart: 2.008 miljoen USD. Bron p. 4 en schuldtabel. |
| Netflix — omzetgroei | Gerapporteerd 13%; constante wisselkoersen 12%. Zelfde omzetbedragen als Run 1; p. 27. |
| Uber — omzetgroei | Gerapporteerd 12%; constante wisselkoersen 11%. Zelfde omzetbedragen als Run 1; p. 34. |
| Netflix — risico’s | Eén risico: wisselkoersen kunnen omzet en operationeel resultaat verlagen; p. 37. Verwijzing naar jaarverslag 2025 afzonderlijk gemeld. |
| Uber — risico’s | Eén risico: chauffeursclassificatie kan extra kosten veroorzaken en aanbod verminderen; p. 33. |
| Vergelijkbaarheid | Periodeverschil FCF gemeld. Netflix-bedragen in duizenden USD, Uber-bedragen in miljoenen USD; eenheden niet gelijkgetrokken. |

### Vergelijking en mijn verbeterpunten

Financiële kernbedragen en gerapporteerde groeipercentages zijn gelijk. Presentatie en risicoselectie wisselen: Run 1 noemt twee risico’s per bedrijf, Run 2 één. Andere onderbouwde selecties waren toegestaan; dit verschil is niet automatisch een fout. Run 1 meldt daarnaast onzekerheid over Ubers 0%-notes en financiële leases; Run 2 niet. Deze aanvullende claims vragen nog eigen broncontrole.

Ik wil voor beide bedrijven dezelfde halfjaar-FCF gebruiken wanneer kwartaal-FCF bij één ontbreekt, en een duidelijke vergelijkingstabel met één eenheid (miljoenen USD). Dit is verwerkt in v2.

## Verwachte antwoorden voor v2 — vóór de run vastgelegd

De financiële verwachtingen voor schuld en omzetgroei blijven gelijk aan v1. De risicocriteria blijven gelijk. Voor FCF verwacht ik nu dezelfde halfjaarperiode bij beide bedrijven en presentatie in miljoenen USD, afgerond op één decimaal.

| Controlepunt | Verwacht antwoord | Bron |
|---|---|---|
| Netflix — halfjaar-FCF | Zelf opgezochte operationele kasstroom 7,034,017 minus uitgaven voor materiële vaste activa 414,774 = 6,619,243 duizend USD, dus 6.619,243 miljoen USD. Presentatie: 6.619,2 miljoen USD. Berekend voor januari–juni 2026. | p. 5, Consolidated Statements of Cash Flows, kolom Six Months Ended June 30, 2026. |
| Uber — halfjaar-FCF | 5.078 miljoen USD voor januari–juni 2026, uit 5.213 − 135. Presentatie: 5.078,0 miljoen USD. | p. 9, kasstroomtabel; gerapporteerde FCF-aansluiting p. 44. |
| Presentatie | Bedrijfscijfers direct naast elkaar; alle geldbedragen in de compacte tabel in miljoenen USD met één decimaal; bronbewijs en berekeningen apart. Beide FCF-bedragen expliciet als halfjaar-FCF aangeduid. | Mijn verbeterpunten en prompt-v2.md. |

## V2 — Run 1, ontvangen uitvoer

| Controlepunt | Uitvoer | Vergelijking met vooraf vastgelegde verwachting |
|---|---|---|
| Netflix — halfjaar-FCF | Berekend 6.619,2 miljoen USD, januari–juni 2026; oorspronkelijke berekening 7.034.017 − 414.774 duizend USD; p. 5. | Komt overeen. |
| Uber — halfjaar-FCF | Gerapporteerd 5.078,0 miljoen USD, januari–juni 2026; 5.213 − 135 miljoen USD; p. 44. | Komt overeen. |
| Netflix — schuld | 14.309,3 miljoen USD op 30 juni 2026; componenten 2.483.758 + 11.825.548 duizend USD; p. 6 en 14. | Komt overeen met het vooraf opgezochte totaal, afgerond voor presentatie. |
| Uber — schuld | 12.723,0 miljoen USD op 30 juni 2026; componenten 1.997 + 10.726 miljoen USD; p. 4 en 19. Inclusief renteloze exchangeable note. | Komt overeen met het vooraf opgezochte totaal. |
| Omzetgroei | Netflix 13,0%, Uber 12,0%, gerapporteerde Q2-groei tegenover Q2 2025; constante valuta apart 12,0% en 11,0%. | Zelfde gerapporteerde percentages als beide runs van v1. |
| Presentatie | Compacte tabel met bedrijfskolommen direct naast elkaar; geldbedragen in miljoenen USD met één decimaal; onderbouwing in aparte tabel. | Beide verbeterpunten uitgevoerd: gemeenschappelijke FCF-periode en uniforme, compacte presentatie. |
| Risico’s | Netflix: valuta (p. 37) en beschikbaarheid financiering (p. 34). Uber: chauffeursclassificatie (p. 33). Per risico categorie, mogelijk gevolg en bronverwijzing. | Selectie toegestaan volgens vooraf vastgelegde criteria; nieuwe financieringsclaim bij Netflix nog zelf in de bron controleren. |
| Aanvullende gegevens | Operationele leases: Netflix 2.330,4 miljoen USD, Uber 2.008,0 miljoen USD. Tool meldt ontbrekende afzonderlijke boekwaarde financiële leases bij Uber en Netflix’ verwijzing naar jaarverslag 2025. | Aanvullende claims nog zelf controleren; geen onderdeel van de vooraf opgezochte kernbedragen. |

Deze run duurde volgens de gedeelde uitvoer 2 minuten en 55 seconden. V2 is één keer uitgevoerd; er is nog geen tweede run om de herhaalbaarheid van v2 te beoordelen. Dit blijft één testinput, geen nieuwe input.

## T02 — Amazon en Alphabet, Q2 2026

- Amazon (AMZN): https://www.sec.gov/Archives/edgar/data/1018724/000101872426000026/amzn-20260630.htm
- Alphabet (GOOGL): https://www.sec.gov/Archives/edgar/data/1652044/000165204426000071/goog-20260630.htm
- Verslagperiode: kwartaal eindigend op 30 juni 2026.
- Prompt: `prompt-v2.md`.
- Status: antwoorden door AI opgezocht op mijn verzoek en door mij aanvaard met "klopt" vóór Run 1. Twee runs met v2 geregistreerd. De oorspronkelijke verwachting blijft bewaard, inclusief de na Run 1 gevonden tekortkoming. Aanvullende bronclaims en het verschil in schuldzekerheid vragen nog eigen beoordeling.

| Controlepunt | Verwacht antwoord (zelf invullen) | Waarom / bron | Run 1 | Run 2 |
|---|---|---|---|---|
| Amazon — FCF, definitie en periode | Concept: halfjaar, berekend 71.419 − 98.411 = −26.992 miljoen USD volgens de promptformule. Amazon-definitie trekt netto-investeringen af: met 2.101 verkoopopbrengsten/incentives wordt dit −24.891. Gerapporteerde −7.604 betreft twaalf maanden, niet halfjaar. | [Rapport](https://www.sec.gov/Archives/edgar/data/1018724/000101872426000026/amzn-20260630.htm), p. 3 en 33. | | |
| Alphabet — FCF, definitie en periode | Concept: halfjaar, berekend 84.859 − 80.598 = 4.261 miljoen USD. | [Rapport](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000071/goog-20260630.htm), p. 9. | | |
| Amazon — schuld en componenten | Concept: schuldboekwaarde 128.894 + 3.330 kortlopend + 325 kredietfaciliteiten = 132.549 miljoen USD. Leases apart. Aanvullende financieringsverplichtingen vragen scopecontrole: 415 kortlopend en circa 8.900 langlopend; niet stilzwijgend negeren of dubbel tellen. | Rapport, p. 17–18 (Note 5); p. 15 (financieringsverplichtingen). | | |
| Alphabet — schuld en componenten | Concept: 98.165 langlopend + 1.999 kortlopend = 100.164 miljoen USD; leases apart, geen commercial paper uitstaand. Kredietfaciliteiten niet zonder controle nogmaals optellen. | Rapport, p. 25–26, Note 6. | | |
| Amazon — omzetgroei tegenover Q2 2025 | Concept: gerapporteerd 20%; omzet 200.606 tegenover 167.702 miljoen USD. | Rapport, p. 4 en 29. | | |
| Alphabet — omzetgroei tegenover Q2 2025 | Concept: gerapporteerd 24%; omzet 119.796 tegenover 96.428 miljoen USD. | Rapport, p. 45. | | |
| Amazon — risico’s met bronbewijs | Conceptvoorbeelden: concurrentie kan omzet/winst verlagen; uitbreiding naar nieuwe activiteiten kan investeringen onvoldoende terugverdienen. | Rapport, Item 1A, secties We Face Intense Competition en Our Expansion into New Products…, p. 38–39. | | |
| Alphabet — risico’s met bronbewijs | Conceptvoorbeelden: nieuwe investeringen leveren mogelijk onvoldoende rendement; cloudconcurrentie en stijgende infrastructuurkosten kunnen doelstellingen belemmeren. | Rapport, p. 57, Item 1A. | | |
| Gemeenschappelijke FCF-periode en uniforme eenheden | Concept: januari–juni 2026 voor beide; miljoen USD. Amazon-definitie wijkt af door verkoopopbrengsten/incentives. Bedrijfs-FCF en uniforme berekening expliciet onderscheiden. | Prompt-v2 en bovenstaande bronnen. | | |

Dezelfde risicocriteria als T01 gelden: andere expliciet onderbouwde risico’s zijn toegestaan als de tool ze uitlegt. Let bij FCF op kwartaal, halfjaar en eventuele twaalfmaandsbedragen; vergelijk alleen een gemeenschappelijke periode.

### T02 — Run 1 met v2

| Controlepunt | Ontvangen uitvoer Run 1 | Controle / beperking |
|---|---|---|
| FCF | Amazon −8.821,0 miljoen USD, uit 45.387 − 54.208 (p. 3); Alphabet circa −5.800,0 miljoen USD, uit (39,1 − 44,9) miljard USD (p. 46). Beide Q2 2026. | Alphabets kwartaalcomponenten zijn na de run bevestigd op p. 46. Onze voorafgaande verwachting miste deze passage. V2 geeft voorrang aan kwartaal-FCF wanneer voor beide berekenbaar; dit is dus geen bewezen toolfout. Alphabet-inputs zijn afgerond; uitkomst is een benadering. |
| Amazon — schuld | 141.864,0 miljoen USD: 128.894 + 3.330 + 325 + 415 + circa 8.900. Leases apart. | Inclusief financieringsverplichtingen die vooraf als scopevraag waren vermeld. Geen exact totaal suggereren: langlopende component is afgerond. |
| Alphabet — schuld | Onzeker; schuldtabel 100.164,0 miljoen USD. Mogelijke dubbeltelling bij afzonderlijk optellen van 1,3 miljard opgenomen krediet. | Tool bewaart de vooraf benoemde onzekerheid; geen definitieve schuldvergelijking. |
| Omzetgroei | Amazon 20,0%, Alphabet 24,0%, Q2 tegenover Q2 2025. | Komt overeen met vooraf aanvaarde gerapporteerde percentages. |
| Leases | Amazon operationeel 96.320, financieel 13.451 miljoen USD; Alphabet operationeel 18.037, financieel 2.590 miljoen USD. | Aanvullende gegevens; niet vooraf volledig gecontroleerd. |
| Risico’s | Amazon: concurrentie (p. 38), juridische procedures (p. 16–17). Alphabet: niet-nakoming grote contracten en beperkte financieringstoegang (p. 58). | Andere selecties toegestaan. Nieuwe bronclaims nog zelf controleren. |
| Presentatie | Bedrijven direct naast elkaar; miljoenen USD; onderbouwing apart; afgeronde inputs en onzekerheid vermeld. | Gevraagde vorm aanwezig. |

Gedeelde uitvoer vermeldt 2 minuten en 42 seconden. Alleen Run 1 is uitgevoerd.

### Correctie voorbereiding, na Run 1

De AI-voorbereiding vond eerst alleen Alphabets halfjaarkasstroomtabel. Op p. 46 staan ook kwartaalbedragen: operationele kasstroom 39,1 miljard en kapitaaluitgaven 44,9 miljard USD. De oorspronkelijke halfjaarberekeningen blijven geldig, maar zijn niet de primaire verwachte FCF-periode volgens v2 nu kwartaalcomponenten voor beide beschikbaar blijken. Deze correctie is na Run 1 gedaan en wordt niet als vooraf bepaalde verwachting gepresenteerd. Run 2 moet dezelfde ongewijzigde v2 en rapporten gebruiken, zonder deze testset mee te geven.

### T02 — Run 2 met v2

| Controlepunt | Ontvangen uitvoer Run 2 |
|---|---|
| Amazon — FCF | Berekend −8.821,0 miljoen USD voor Q2 2026: 45.387 − 54.208; p. 3. Eigen definitie met verkoopopbrengsten/incentives en twaalfmaandsrapportage apart toegelicht. |
| Alphabet — FCF | Circa −5.800,0 miljoen USD voor Q2 2026: (39,1 − 44,9) miljard USD; p. 46. Afrondingsbeperking vermeld. |
| Amazon — schuld | Circa 141.864,0 miljoen USD: 128.894 + 3.330 + 325 + 415 + circa 8.900; leases apart. Bronnen p. 15 en 17–18. |
| Alphabet — schuld | 100.164,0 miljoen USD: 98.165 + 1.999; kredietfaciliteiten niet nogmaals toegevoegd. Geen onzekerheidslabel bij dit totaal; p. 26. |
| Omzetgroei | Amazon 20,0%, Alphabet 24,0%, gerapporteerd Q2 tegenover Q2 2025; p. 29 en 45. |
| Leases | Amazon operationeel 96.320, financieel 13.451; Alphabet operationeel 18.037, financieel 2.590 miljoen USD; p. 14 en 23. |
| Risico’s | Amazon: prijsdruk/concurrentie kan omzet en winst verlagen (p. 38). Alphabet: nieuwe investeringen kunnen onvoldoende rendement opleveren (p. 57). Eén risico per bedrijf. |
| Presentatie | Compacte tabel, bedrijfskolommen direct naast elkaar, miljoen USD; onderbouwing apart. |

### T02 — Vergelijking van de runs

- Beide runs gebruiken dezelfde kwartaal-FCF en gerapporteerde groeipercentages.
- Beide nemen Amazons financieringsverplichtingen mee. Run 2 noemt het totale schuldbedrag expliciet een benadering; Run 1 deed dat alleen in de voetnoot.
- Alphabet: Run 1 geeft "onzeker" bij totale schuld, met 100.164 als schuldtabelbedrag. Run 2 geeft 100.164 zonder onzekerheidslabel. De numerieke schuldtabel is gelijk, maar de zekerheid en daarmee de bruikbaarheid van de vergelijking wisselen. Nog zelf bepalen welke behandeling de bron ondersteunt.
- De risicoselectie wisselt: twee per bedrijf in Run 1, één per bedrijf in Run 2. Andere onderbouwde risico’s waren toegestaan; dit is niet automatisch een fout. De gevolgen en bronnen moeten wel afzonderlijk worden gecontroleerd.
- Onze aanvankelijke halfjaarverwachting was onvolledig; dit blijft als beperking van de voorbereiding zichtbaar.


## T03 — S&P Global en Moody’s, Q2 2026

- S&P Global (SPGI): https://www.sec.gov/Archives/edgar/data/64040/000006404026000045/spgi-20260630.htm
- Moody’s (MCO): https://www.sec.gov/Archives/edgar/data/1059556/000162828026049398/mco-20260630.htm
- Prompt: `prompt-v2.md`; twee onafhankelijke runs nog uit te voeren.
- Status: verwachtingen door AI opgezocht op mijn verzoek en door mij aanvaard vóór de runs met "ja ok de gegevens kloppen zo ik doe de runs". Ik koos voor CFO minus kapitaaluitgaven bij beide bedrijven, met de eigen gerapporteerde FCF afzonderlijk. Geen testresultaten geregistreerd.
- Toegang: Moody’s SEC-pagina overschrijdt de limiet van de weblezer; de identieke filing is gelezen via https://cdn.yahoofinance.com/prod/sec-filings/0001059556/000162828026049398/mco-20260630.htm . De resultatenpublicatie is niet gebruikt voor deze verwachtingen.

| Controlepunt | Conceptverwachting | Bron |
|---|---|---|
| Gemeenschappelijke FCF-periode | Januari–juni 2026. Kwartaal-FCF/componenten niet gevonden in de geraadpleegde passages. Als een run toch kwartaalcomponenten vindt, eerst de bron controleren zoals bij T02. | Beide kasstroomtabellen en FCF-aansluitingen. |
| S&P Global — FCF | Primair voor de vergelijking: berekend 2.411,0 miljoen USD = 2.476 operationele kasstroom − 65 kapitaaluitgaven. Afzonderlijk: gerapporteerd 2.249,0 = 2.411 − 162 uitkeringen aan minderheidsaandeelhouders. Capex omvat materiële activa én technologieprojecten; niet zonder toelichting als uitsluitend materiële activa aanduiden. | p. 55–56 en 58, FCF-definitie en aansluiting. |
| Moody’s — FCF | Gerapporteerd 1.532,0 miljoen USD = 1.718 operationele kasstroom − 186 capital additions. Definitie: CFO minus betaalde capital additions. | p. 9 en 80, kasstroomtabel en Non-GAAP Financial Measures. |
| FCF-vergelijkbaarheid | De student kiest dezelfde berekeningsformule CFO minus kapitaaluitgaven: S&P Global 2.411,0 tegenover Moody’s 1.532,0 miljoen USD. S&P Globals eigen gerapporteerde 2.249,0 apart vermelden en de aftrek van 162 aan minderheidsuitkeringen uitleggen. Capexcategorieën blijven bronafhankelijk; geen volledige economische gelijkheid suggereren. | Bovenstaande aansluitingen. |
| S&P Global — schuld | Boekwaarde 15.170,0 miljoen USD = 2.572 kortlopend + 12.598 langlopend; commercial paper 825 zit al in het totaal. Leases apart, geen kasaftrek. Omvat de schuld van Mobility Global op de peildatum; niet aanpassen naar de latere afsplitsing. | p. 14–15, Note 4 — Debt. |
| Moody’s — schuld | Boekwaarde 6.946,0 miljoen USD = 571 kortlopend + 6.375 langlopend. Nominaal 7.128, gecorrigeerd voor swaps −98, discount −46 en uitgiftekosten −38. Leases apart, geen kasaftrek. | p. 36, Note 13 — Indebtedness. |
| S&P Global — omzetgroei | Gerapporteerd 10,0%; Q2-omzet 4.146 tegenover 3.755 miljoen USD. | p. 36–38, Consolidated Review. |
| Moody’s — omzetgroei | Gerapporteerd 15,0%; Q2-omzet 2.185 tegenover 1.898 miljoen USD. Organische groei bij constante valuta 16% is een afzonderlijke maatstaf. | p. 44, Executive Summary; p. 81, reconciliatie. |
| S&P Global — risico’s | Voorbeelden: informatiebeveiligingsproblemen kunnen herstelkosten en boetes veroorzaken (p. 60); verlies van synergie door afsplitsing Mobility kan resultaten schaden (p. 61). Item 1A verwijst naar 10-K (p. 63); dat betekent niet dat er geen risico’s zijn. | Forward-looking statements p. 60–61; Item 1A p. 63. |
| Moody’s — risico’s | Valutarisico en juridische/regulatoire risico’s zijn expliciet vermeld. Volledige risicofactoren worden verwezen naar 10-K 2025 (p. 87). Andere expliciet onderbouwde selecties toegestaan; gevolg en precieze bron controleren. | Item 3 p. 86; Item 1A p. 87; forward-looking statements. |

Deze verwachting is voorbereiding, geen onafhankelijke modelrun. Geef bij de runs alleen v2-instructies en de twee rapporten mee, niet deze testset. Geldbedragen in miljoenen USD, één decimaal.

### T03 — Aanvaarding vóór de runs

De student heeft de gegevens aanvaard en kiest voor een uniforme FCF-berekening zonder aftrek van minderheidsuitkeringen. Deze keuze is na de voorbereiding maar vóór beide runs vastgelegd. Bij uitvoering moet dezelfde aanvullende instructie in beide nieuwe chats staan: "Vergelijk de FCF voor beide bedrijven met dezelfde formule: operationele kasstroom minus kapitaaluitgaven, zonder minderheidsuitkeringen af te trekken. Vermeld de eigen gerapporteerde FCF afzonderlijk als die hiervan afwijkt." De ongewijzigde v2 alleen schrijft deze nieuwe keuze niet expliciet voor.

### T03 — Run 1 met v2 en aanvullende FCF-instructie

De student deelde een uitvoer die bij de leesbaarheidscontrole stopte. S&P Global werd geïdentificeerd als S&P Global Inc., Form 10-Q, kwartaal eindigend op 30 juni 2026. De Moody’s SEC-link gaf volgens de uitvoer twee keer “Internal Error”. De tool vulde geen cijfers of risico’s aan en kon de verslagperiode van Moody’s niet verifiëren.

- Resultaat: technische toegangsbeperking; financiële vergelijking niet uitgevoerd.
- Geen beoordeling van cijferjuistheid mogelijk; geen ontbrekende output als nul of fout cijfer behandelen.
- De stop volgt de instructie voor onleesbare bronnen. De voorbereiding kon dezelfde Moody’s-filing wel via een kopie lezen; dit verschil in toegang blijft zichtbaar.
- Run 2 nog niet ontvangen. Voor een herhaling onder dezelfde voorwaarden dezelfde links gebruiken. Een latere run met een lokaal rapportbestand of andere bronlocatie afzonderlijk als aangepaste invoer registreren.

### T03 — Run 2 met v2 en aanvullende FCF-instructie

Ook de tweede gedeelde uitvoer stopte bij de leesbaarheidscontrole. S&P Global werd opnieuw geïdentificeerd als S&P Global Inc., Form 10-Q, kwartaal eindigend op 30 juni 2026. Moody’s gaf volgens de uitvoer bij twee pogingen een technische fout. Er zijn geen financiële cijfers of risico’s ingevuld. De tool vroeg een bestand of werkende link naar hetzelfde rapport.

### T03 — Vergelijking van de runs

Beide runs eindigen met dezelfde toegangsbeperking bij de oorspronkelijke Moody’s SEC-link. De stop bij een onleesbaar rapport is herhaalbaar en volgt de instructie; de gewenste financiële vergelijking lukt met deze invoer niet. Cijferjuistheid en risicoselectie zijn daardoor niet beoordeelbaar. T03 is tweemaal uitgevoerd, maar levert geen succesvolle financiële vergelijking op. Een aanvullende poging met een bestand of kopie van dezelfde filing moet als gewijzigde invoer worden geregistreerd en vervangt deze twee resultaten niet.


## T04 — Novo Nordisk en Eli Lilly, Q2 2026

- Novo Nordisk (NVO): https://www.sec.gov/Archives/edgar/data/353278/000035327826000023/caq22026.htm
- Eli Lilly (LLY): https://www.sec.gov/Archives/edgar/data/59478/000005947826000081/lly-20260630.htm
- Beide bronnen zijn bij de voorbereiding leesbaar. Novo: financieel halfjaarrapport volgens IAS 34, bijlage bij Form 6-K. Lilly: Form 10-Q volgens US GAAP. Beide eindigen op 30 juni 2026.
- Status: conceptverwachtingen door AI opgezocht op verzoek; nog door de student te controleren/aanvaarden. Geen runs ontvangen.
- Gebruik v2 met onderstaande identieke aanvulling in beide nieuwe chats. Deze variant voorkomt een verzonnen wisselkoers en behoudt de eerder gekozen FCF-formule.

> Vergelijk FCF met dezelfde formule: operationele kasstroom minus uitgaven voor materiële vaste activa. Vermeld afwijkende eigen bedrijfsdefinities afzonderlijk. Behoud voor deze test de oorspronkelijke rapportagevaluta: miljoenen DKK voor Novo Nordisk en miljoenen USD voor Lilly. Zet de valuta bij elke bedrijfskolom en vergelijk geldbedragen niet rechtstreeks tussen valuta. Gebruik geen externe of geschatte wisselkoers. Dit vervangt de instructie om alle geldbedragen in USD te presenteren.

| Controlepunt | Conceptverwachting | Bron |
|---|---|---|
| Gemeenschappelijke FCF-periode | Halfjaar januari–juni 2026: Lilly-kwartaal-CFO niet gevonden in geraadpleegde tabel/toelichting. Novo heeft ook kwartaal-FCF 42.524 miljoen DKK; dat niet naast Lilly-halfjaar zetten. | Novo p. 37; Lilly Consolidated Condensed Statements of Cash Flows, zesmaandskolom. |
| Novo — halfjaar-FCF | 79.283 − 23.986 = 55.297,0 miljoen DKK; ook gerapporteerd volgens dezelfde formule sinds 2026. | p. 37, FCF-aansluiting. |
| Lilly — halfjaar-FCF | Berekend 16.023 − 5.259 = 10.764,0 miljoen USD. Eigen FCF niet gevonden. Uitgaven voor verworven onderzoek/acquisities niet stilzwijgend als PP&E aftrekken. | Consolidated Condensed Statements of Cash Flows. |
| Novo — schuld exclusief leases | 121.794 lang + 18.333 kort − 8.622 leases = 131.505,0 miljoen DKK. Bruto borrowings 140.127 bevat leases; leases apart 8.622. Geen kasaftrek; net debt 86.523 is niet de gevraagde bruto financiële schuld. | p. 28 balans; p. 37 net-debtreconciliatie. |
| Lilly — schuld | Boekwaarde 7.050 kort + 47.858 lang = 54.908,0 miljoen USD; leases apart indien beschikbaar. | Consolidated Condensed Balance Sheets. |
| Novo — omzetgroei | Gerapporteerd Q2: 2% in DKK, 3% bij constante valuta afzonderlijk; omzet 78.488 miljoen DKK. Aangepaste groei 6% DKK/7% CER niet als gerapporteerde groei gebruiken. Vergelijkingsbasis bevat 340B-provisieterugname in Q2 2025. | p. 6, Reported Sales Development; p. 12 aangepaste cijfers. |
| Lilly — omzetgroei | Gerapporteerd 48%; Q2 omzet 22.974 tegenover 15.558 miljoen USD. | p. 24, Executive Overview. |
| Lilly — risicovoorbeelden | Belastingwijzigingen kunnen resultaten/kasstromen schaden; antitrusttoezicht kan acquisities vertragen, bedreigen of duurder maken. Andere expliciet onderbouwde selecties toegestaan. | p. 27, Tax Matters en Acquisitions; verwijzingen naar 10-K niet aanvullen. |
| Novo — risico’s | Selecteer expliciete risico’s uit Forward-looking statements of Legal matters; vermeld bron en mogelijk gevolg. Niet zonder bewijs afleiden uit het feit dat het een farmabedrijf is. | p. 23–26. |
| Valuta en verslaggeving | Miljoenen DKK tegenover miljoenen USD; geen directe vergelijking van omvang zonder onderbouwde omrekening. IAS 34/IFRS tegenover US GAAP expliciet melden als beperking. | Voorbladen en Novo p. 24. |

Deze voorbereiding is geen testresultaat. Dezelfde aanvullende instructie moet in beide runs staan; de testset zelf niet meegeven.

### T03 — Extra run met lokaal Moody’s-pdf

De student verduidelijkte dat deze uitvoer bij SPGI/Moody’s hoort, niet bij T04. Invoer gewijzigd: Moody’s als lokaal bestand `Documents/Sem 1 2026/AI/mco-20260630.pdf`, S&P Global via de oorspronkelijke SEC-link. De twee eerdere mislukte linkruns blijven bewaard. Volgens de uitvoer werd pypdf na toestemming geïnstalleerd en kon het pdf (122 pdf-pagina’s) worden gelezen. Gedeelde duur: 3 minuten en 34 seconden.

| Controlepunt | Ontvangen uitvoer | Beoordeling |
|---|---|---|
| Leesbaarheid/periode | Beide Form 10-Q, Q2 eindigend op 30 juni 2026. | Toegangsprobleem opgelost met aangepaste invoer. |
| FCF | Halfjaar: S&P Global gerapporteerd 2.249,0; Moody’s 1.532,0 miljoen USD. S&P-formule 2.476 − 65 − 162; definitieverschil toegelicht. | Bedrijfs-FCF klopt met voorbereiding, maar voldoet niet aan de gekozen uniforme formule: primaire S&P-vergelijkingswaarde verwacht 2.411,0. Niet vast te stellen uit gedeelde uitvoer of aanvullende instructie daadwerkelijk is meegegeven. Als ze is meegegeven, is dit een instructie-afwijking; anders invoerverschil. |
| Schuld | S&P 15.170,0 = 2.572 + 12.598; Moody’s 6.946,0 = 571 + 6.375. | Komt overeen met vooraf aanvaarde verwachtingen. |
| Omzetgroei | S&P 10,0%; Moody’s 15,0%. | Komt overeen met vooraf aanvaarde verwachtingen. |
| Leases | S&P 578 = 126 + 452; Moody’s operationeel 576 = 93 + 483; financiële leases niet materieel. | Aanvullende bronclaims, nog niet onafhankelijk gecontroleerd. |
| Risico’s | S&P juridische/toezichtsprocedures; Moody’s handel/tarieven, concurrentie/prijsdruk, rechtszaken en niet-naleving. | Andere onderbouwde selecties toegestaan; precieze claims nog zelfstandig beoordelen. |

T04 (NVO/LLY) heeft hiermee nog geen ontvangen run. Voor een volgende SPGI/Moody’s-run dezelfde gewijzigde invoer en de aanvullende uniforme-FCF-instructie gebruiken.

### T03 — Tweede extra run met lokaal Moody’s-pdf

Ontvangen uitvoer gebruikt opnieuw het lokale Moody’s-pdf en het S&P Global-rapport. Gedeelde duur: 3 minuten en 24 seconden. Beide documenten worden geïdentificeerd als Form 10-Q voor Q2 2026.

| Controlepunt | Ontvangen uitvoer |
|---|---|
| Halfjaar-FCF | S&P Global gerapporteerd 2.249,0 miljoen USD = 2.476 − 65 − 162; Moody’s 1.532,0 = 1.718 − 186. Bedrijfsdefinities worden onderscheiden. |
| Schuld | S&P Global 15.170,0 = 2.572 + 12.598; Moody’s 6.946,0 = 571 + 6.375 miljoen USD. |
| Omzetgroei | S&P Global 10,0%; Moody’s 15,0%. |
| Leases | S&P Global operationeel 578; Moody’s operationeel 576 miljoen USD; Moody’s financiële leases niet materieel, apart bedrag niet gevonden. |
| Risico’s | S&P Global systeem/databeveiliging en vervroegde opeisbaarheid bij kredietdefault; Moody’s handelsbeleid, prijsdruk, rechtszaken en cross-default. Bronclaims nog zelfstandig controleren. |

### T03 — Vergelijking van de twee pdf-runs

De financiële kerncijfers en halfjaarperiode komen overeen. Beide runs tonen echter de eigen gerapporteerde S&P-FCF van 2.249,0 in de hoofdtafel, terwijl de student vooraf koos voor CFO minus kapitaaluitgaven zonder minderheidsuitkeringen: 2.411,0. Dit verschil is in beide runs aanwezig. Uit alleen de gedeelde uitvoer blijkt niet of de aanvullende FCF-instructie in beide invoeren stond; daarom geen bewezen instructiefout claimen zonder invoercontrole. Risicoselecties verschillen, wat toegestaan was als ze expliciet worden onderbouwd. Twee oorspronkelijke linkruns stopten; twee extra runs met lokaal pdf leverden een vergelijking op. Deze bronwijziging wordt niet weggewerkt. NVO/LLY (T04) heeft nog geen ontvangen runs.

### T04 — Run 1 met v2 en aanvullende FCF/valuta-instructie

De student reageerde vóór de run met “ok komt in orde” en deelde daarna onderstaande uitvoer. De uitvoer vermeldt expliciet oorspronkelijke valuta en de laatste FCF-instructie.

| Controlepunt | Ontvangen uitvoer | Vergelijking |
|---|---|---|
| Identificatie | Novo financieel halfjaarrapport bij Form 6-K; Lilly Form 10-Q; beide einddatum 30 juni 2026. | Komt overeen. |
| Halfjaar-FCF | Novo 55.297,0 miljoen DKK = 79.283 − 23.986; Lilly 10.764,0 miljoen USD = 16.023 − 5.259. | Komt overeen; gemeenschappelijk halfjaar, uniforme formule. Novo eigen gerapporteerde FCF gelijk; Lilly-definitie niet gevonden. |
| Schuld | Novo 131.505,0 miljoen DKK = 121.794 + 18.333 − 8.622 leases; Lilly 54.908,0 miljoen USD = 7.050 + 47.858. | Komt overeen. Lilly-controle met commercial paper 5.284 + 49.624 is aanvullende bronclaim. |
| Omzetgroei | Novo gerapporteerd 2,0%, CER apart 3%; Lilly 48,0%, omzet 22.974 versus 15.558. | Komt overeen; aangepaste Novo-groei niet als gerapporteerde groei gebruikt. |
| Valuta | Kolomkoppen miljoen DKK versus miljoen USD; geen wisselkoers of directe omvangvergelijking. | Aanvullende instructie uitgevoerd. |
| Risico’s | Novo concurrerende producten en aanvoer/productieonderbrekingen; Lilly prijsbeleid en valuta. | Toegestane selectie. Gevolgen en precieze bronverwijzingen nog zelfstandig controleren. |
| Beperkingen | Lilly kwartaal-FCF, eigen FCF-definitie, leases en CER-groei niet gevonden; verwijzingen naar jaarverslagen niet aangevuld. | Ontbrekende gegevens zichtbaar. Verschil IAS 34/IFRS versus US GAAP niet expliciet toegelicht in deze uitvoer. |

De numerieke kernuitvoer voldoet aan de vastgelegde verwachtingen. Een aantal paginaverwijzingen verschilt van de voorbereiding (bijvoorbeeld Novo omzetgroei p. 4 versus p. 6); meerdere passages kunnen hetzelfde gegeven bevatten. Die verwijzingen zijn nog niet afzonderlijk gecontroleerd en worden niet als bewezen correct of fout aangemerkt. Run 2 nog niet ontvangen.

### T04 — Run 2 met v2 en aanvullende FCF/valuta-instructie

Gedeelde duur: 1 minuut en 51 seconden. Beide rapporten leesbaar, gemeenschappelijke einddatum 30 juni 2026. De uitvoer vermeldt de aanvullende FCF-formule en oorspronkelijke valuta expliciet.

| Controlepunt | Ontvangen uitvoer |
|---|---|
| Halfjaar-FCF | Novo 55.297,0 miljoen DKK = 79.283 − 23.986; Lilly 10.764,0 miljoen USD = 16.023 − 5.259. |
| Schuld | Novo 131.505,0 miljoen DKK = 121.794 + 18.333 − 8.622 leases; Lilly 54.908,0 miljoen USD = 7.050 + 47.858. |
| Omzetgroei | Novo 2,0%, CER apart 3%; Lilly 48,0%, omzet 22.974 tegenover 15.558. |
| Risico’s | Novo bevoorrading/productieonderbrekingen en concurrerende producten; Lilly intense concurrentie en productieproblemen. |
| Beperkingen | Valuta verschillen; geen wisselkoers. IFRS bij Novo versus US GAAP bij Lilly expliciet vermeld. Lilly kwartaal-FCF, eigen definitie en leases niet gevonden; Novo looptijdverdeling leases niet gevonden. |

### T04 — Vergelijking van de runs

Beide runs gebruiken dezelfde halfjaarperiode, uniforme FCF-formule en oorspronkelijke valuta. Alle vooraf vastgelegde financiële kerncijfers komen overeen, zowel tussen runs als met de voorbereiding. Run 2 benoemt ook het verschil IFRS/US GAAP; Run 1 deed dat niet expliciet. Novo-risico’s zijn inhoudelijk gelijk, in een andere volgorde. Lilly-risico’s verschillen: prijsbeleid en valuta in Run 1, concurrentie en productieproblemen in Run 2. Andere onderbouwde selecties waren toegestaan; dit verschil is niet automatisch een fout. Bronpagina’s en risicogevolgen blijven afzonderlijk te controleren; geen volledige bronvalidatie claimen. T04 is tweemaal uitgevoerd. T05 moet nog gekozen en tweemaal uitgevoerd worden.


## T05 — NVIDIA en AMD, afwijkende tweede kwartaalperioden

- NVIDIA (NVDA): https://www.sec.gov/Archives/edgar/data/1045810/000104581026000075/nvda-20260726.htm
- AMD: https://www.sec.gov/Archives/edgar/data/2488/000000248826000123/amd-20260627.htm
- Beide documenten zijn bij de voorbereiding leesbare Form 10-Q’s. NVIDIA kwartaal eindigend op 26 juli 2026 (Q2 boekjaar 2027); AMD kwartaal eindigend op 27 juni 2026 (Q2 2026). Einddata liggen 29 dagen uiteen.
- Status: conceptcijfers door AI opgezocht op verzoek en vóór de runs door de student goedgekeurd met “cijfer kloppen”. De bronverwijzingen en risicoselecties blijven afzonderlijk te controleren. Geen runs ontvangen.
- Gebruik dezelfde v2 in twee nieuwe chats met de aanvullende uniforme-FCF-instructie: “Bereken FCF als operationele kasstroom minus uitgaven voor materiële vaste activa. Vermeld afwijkende eigen bedrijfsdefinities afzonderlijk.” De valuta-instructie voor NVO/LLY is hier niet nodig: beide rapporteren in USD.

| Controlepunt | Conceptverwachting | Bron |
|---|---|---|
| Periodevergelijkbaarheid | Geen exact gemeenschappelijk halfjaar in deze rapporten: NVIDIA zes maanden tot 26 juli, AMD zes maanden tot 27 juni. Niet als januari–juni voor beide presenteren, niet halve/kwartaalbedragen schatten. Geldbedragen hoogstens afzonderlijk met hun eigen perioden; geen directe FCF-vergelijking claimen. | Voorbladen en kasstroomtabellen. |
| AMD — FCF-componenten | Zes maanden tot 27 juni: CFO 5.321 − PP&E 1.197 = berekend 4.124,0 miljoen USD. Geen CFO uit discontinued operations in 2026; 421 aan accrued but unpaid PP&E niet nogmaals aftrekken. Kwartaal-CFO/FCF niet gevonden in geraadpleegde passages. | Consolidated Statements of Cash Flows en supplement. |
| NVIDIA — FCF-componenten | Zes maanden tot 26 juli: CFO 74.421; gecombineerde aankopen PP&E én intangible assets 4.434. Rekenkundig verschil 69.987,0 miljoen USD, maar dit is niet aantoonbaar de gevraagde CFO-minus-uitsluitend-PP&E-maatstaf. Afzonderlijke PP&E-input niet gevonden in geraadpleegde passages; daarom onzeker/niet gevonden voor strikte uniforme FCF. Principal payments 92 niet stilzwijgend bij PP&E-aankopen optellen. | Condensed Consolidated Statements of Cash Flows. |
| NVIDIA — schuld | Boekwaarde 1.000 kort + 32.366 lang = 33.366,0 miljoen USD op 26 juli 2026; nominale maturiteiten 33.500 minus kosten/discount 134. Leases apart, geen kasaftrek. | Balans; Liquidity and Capital Resources, schuldtabel. |
| AMD — schuld | Boekwaarde 875 kort + 2.351 lang = 3.226,0 miljoen USD op 27 juni 2026; nominale hoofdsom 3.250 minus kosten/discount 24. Leases apart. | Note 6 — Debt, schuldentabel. |
| NVIDIA — omzetgroei | Gerapporteerd 106% YoY; kwartaalomzet 96.221 versus 46.743 miljoen USD. Niet verwarren met 18% QoQ. Eigen kwartaalperiode tot 26 juli versus 27 juli 2025. | p. 27, Results of Operations. |
| AMD — omzetgroei | Gerapporteerd 50% YoY; kwartaalomzet in overzicht afgerond 11,5 miljard USD. Niet data-centergroei 107% als totale omzetgroei gebruiken. Eigen kwartaalperiode tot 27 juni versus 28 juni 2025. | MD&A, Overview. |
| Risico’s | Alleen expliciet onderbouwde selecties; NVIDIA Item 1A bevat nieuwe risico’s en verwijst ook naar eerdere documenten. AMD bespreekt onder meer risico van uitgestelde/uitblijvende klantbetalingen en concentratie. Niet aanvullen uit externe jaarverslagen. | NVIDIA Part II Item 1A; AMD Risk Factors, betalingsrisico. |

Dit is een test van omgaan met beperkingen, niet alleen van cijfers vinden. Een duidelijke melding dat FCF niet rechtstreeks vergelijkbaar is, kan hier het correcte resultaat zijn. Bronclaims/paginanummers moeten door de student worden gecontroleerd vóór beoordeling. Deze testset niet meegeven bij de runs.

### T05 — Run 1 met v2 en aanvullende FCF-instructie

| Controlepunt | Ontvangen uitvoer | Beoordeling tegenover verwachting |
|---|---|---|
| Periode | NVIDIA 26 juli 2026 versus AMD 27 juni 2026, 29 dagen verschil; geen gemeenschappelijk halfjaar. | Komt overeen; verschillen expliciet gemeld. |
| NVIDIA FCF | CFO 74.421 en gecombineerde PP&E/intangibles 4.434; afzonderlijke PP&E niet gevonden; geen strikte FCF berekend. | Komt overeen; gecombineerde investeringen niet als uitsluitend materieel voorgesteld. |
| AMD FCF | Afzonderlijk halfjaar berekend 4.124,0 miljoen USD = 5.321 − 1.197; geen directe FCF-vergelijking. | Komt overeen. |
| Schuld | NVIDIA 33.366,0 = 1.000 + 32.366; AMD 3.226,0 = 875 + 2.351 miljoen USD, met eigen peildatums. | Komt overeen. |
| NVIDIA omzetgroei | Gerapporteerd 106,0%, omzet 96.221 tegenover 46.743. | Komt overeen. |
| AMD omzetgroei | Berekend 50,1% uit 11.536 / 7.685; zegt dat percentage niet gevonden is. | Afwijking: voorbereiding vond expliciet gerapporteerde 50% in MD&A Overview. Prompt geeft die voorrang. Rekenkundige uitkomst kan kloppen, maar de claim dat het percentage ontbreekt en de keuze voor eigen berekening voldoen niet aan de verwachting. |
| Leases | NVIDIA operationeel 5.494 = 509 + 4.985; AMD langlopend 1.050, kortlopend niet gevonden. | Aanvullende bronclaims nog afzonderlijk controleren. |
| Risico’s | NVIDIA herfinanciering; AMD klantenconcentratie. | Andere expliciet onderbouwde selecties toegestaan; precieze bronclaims nog controleren. |

Run 1 behandelt de belangrijkste FCF-beperkingen zoals verwacht. Er is een vastgelegde afwijking bij de keuze van AMD’s omzetgroeipercentage. Run 2 moet dezelfde invoer gebruiken zonder feedback of testset, zodat deze afwijking onafhankelijk kan worden beoordeeld. Bronpagina’s en aanvullende claims zijn niet volledig gevalideerd.

### T05 — Run 2 met v2 en aanvullende FCF-instructie

| Controlepunt | Ontvangen uitvoer | Vergelijking |
|---|---|---|
| Perioden/FCF | Geen gemeenschappelijke periode; NVIDIA geen strikte FCF wegens gecombineerde PP&E/intangibles; AMD afzonderlijk 4.124,0 miljoen USD. | Komt overeen met verwachting en Run 1. |
| Schuld | NVIDIA 33.366,0; AMD 3.226,0 miljoen USD, elk met eigen peildatum. | Komt overeen met verwachting en Run 1. |
| Omzetgroei | NVIDIA gerapporteerd 106,0%; AMD gerapporteerd 50,0%. | Komt overeen met verwachting. Run 1 miste AMD’s gerapporteerde 50% en berekende 50,1%. |
| Leases | NVIDIA 5.494,0; AMD langlopend 1.050,0, kortlopend niet gevonden/totaal onzeker. | Zelfde aanvullende bedragen als Run 1; bronnen nog zelfstandig controleren. |
| Risico’s | NVIDIA langlopende verplichtingen en herfinanciering; AMD exportbeperkingen en productieopbrengst. | Selectie verschilt van Run 1; toegestaan mits bronbewijs klopt. |

### T05 — Vergelijking van de runs

Beide runs behandelen het periodeverschil en NVIDIA’s gecombineerde investeringspost zoals vooraf verwacht. Schuld en AMD’s afzonderlijke FCF zijn stabiel. Bij AMD’s omzetgroei verschilt de keuze: Run 1 berekent 50,1% en zegt het percentage niet gevonden te hebben; Run 2 vindt en gebruikt de gerapporteerde 50,0%. Dat is een relevante inconsistentie bij het zoeken en volgen van de voorkeur voor gerapporteerde cijfers. Risicoselecties verschillen binnen de toegestane vrijheid. Paginaverwijzingen en aanvullende claims zijn nog niet volledig gevalideerd.

## Overzicht na vijf testinputs

| Input | Uitgevoerde runs | Belangrijkste bevinding |
|---|---|---|
| T01 Netflix/Uber | V1 tweemaal; V2 eenmaal | Kerncijfers stabiel; v2 verbetert periodekeuze en uniforme presentatie. |
| T02 Amazon/Alphabet | V2 tweemaal | Kerncijfers stabiel; schuldzekerheid en risicoselectie wisselen. Voorbereiding miste eerst Alphabets kwartaalpassage. |
| T03 S&P Global/Moody’s | Twee linkruns; twee extra pdf-runs | Linkruns stoppen bij toegangsfout; pdf maakt vergelijking mogelijk. Beide pdf-runs gebruiken gerapporteerde S&P-FCF in plaats van gekozen uniforme formule; aanvullende invoerinstructie nog te verifiëren. |
| T04 Novo/Lilly | V2 met aanvulling tweemaal | Kerncijfers stabiel; eigen valuta en uniforme formule toegepast; risicoselectie wisselt. |
| T05 NVIDIA/AMD | V2 met aanvulling tweemaal | Periode/definitiebeperkingen herkend; AMD gerapporteerde omzetgroei alleen in Run 2 gevonden. |

Alle vijf inputs zijn minstens tweemaal uitgevoerd. Dat betekent niet dat elke run succesvol was of dat alle bronclaims juist zijn. Varianten van prompt en bronvorm zijn expliciet bijgehouden. Nog te doen vóór afronding van de build: de student beoordeelt de resterende bronclaims en invoeronzekerheid en formuleert zelf de reflectie; waar nodig wordt de definitieve prompt aangescherpt. Er is niets ingediend of gepubliceerd.

## T06 — Vistra (VST) en Constellation Energy (CEG), Q2 2026

- Keuze van de student: VST en CEG, Q2 2026.
- Rapport Vistra: [Form 10-Q Q2 2026](https://app.quotemedia.com/data/downloadFiling?cdn=4b51198e2cb448f8a89452f92bd0c25d&companyName=Vistra+Corp.&dateFiled=2026-08-10&formType=10-Q&ref=320256373&symbol=VST&type=HTML&webmasterId=101533).
- Rapport Constellation Energy: [Form 10-Q Q2 2026](https://investors.constellationenergy.com/node/10191/html).
- Exacte begin- en einddatums: nog te controleren in de rapporten.
- Prompt: aangepaste `prompt-v2.md` van 8 oktober 2026.
- Focus gekozen door de student: omzetgroei; gerapporteerd percentage en controleberekening onderscheiden, totale omzet gebruiken en kwartaal- en halfjaarkolommen niet verwarren.
- Beoordelingsscope: alleen omzetgroei, op uitdrukkelijke keuze van de student. FCF, schuld en risico’s tellen niet mee in deze test. Een geslaagde T06 bewijst alleen dat de omzetgroeicontrole slaagt, niet dat de volledige vergelijking juist is.
- Aanvullende instructie voor beide runs: “Voer voor deze test alleen de omzetgroeivergelijking uit. Laat FCF, schuld en risico’s weg. Behoud de regels voor bronnen, kwartaalperioden, gerapporteerde percentages, controleberekeningen en uitvoervorm.”
- Status: omzetverwachtingen gecontroleerd en goedgekeurd vóór de runs. Omzetgegevens door AI opgezocht op verzoek, daarna door de student gecontroleerd en goedgekeurd met “ja gevonden alles klopt”, nadat de student CEG’s gerapporteerde 23.0% zelf in de tabel had gevonden. Eén mislukte linkpoging en daarna een vervolg met Vistra-PDF ontvangen; details hieronder. Run 2 nog niet ontvangen.

| Controlepunt | Verwacht antwoord (zelf invullen) | Waarom / bron | Run 1 | Run 2 | Foutklasse |
|---|---|---|---|---|---|
| Vistra — gerapporteerde en berekende omzetgroei | Q2 2026 omzet 4.017 miljoen USD; Q2 2025 omzet 4.250 miljoen USD. Berekend: (4.017 / 4.250 − 1) × 100 = −5,48235…%, presentatie −5,5%. Gerapporteerd groeipercentage niet gevonden in de geraadpleegde omzetpassage; label de uitkomst als berekend, tenzij elders in het rapport een expliciet percentage wordt gevonden. | Gedrukte p. 65, Disaggregated Consolidated Statement of Operations Results, rij Operating revenues, Three Months Ended June 30. Student heeft de gedeelde gegevens gecontroleerd en goedgekeurd. | | | |
| Constellation Energy — gerapporteerde en berekende omzetgroei | Q2 2026 omzet 7.504 miljoen USD; Q2 2025 omzet 6.101 miljoen USD. Gerapporteerd 23,0% als hoofdwaarde. Controleberekening: (7.504 / 6.101 − 1) × 100 = 22,99623…%, afgerond 23,0%. Verschil afgerond op één decimaal: 0,0 procentpunt. | Gedrukte p. 61, Operating revenues, rij Total Operating revenues, kwartaalkolom % Change: 23.0%. Student heeft dit percentage zelf teruggevonden en de gegevens goedgekeurd. | | | |

### Uitvoering en beoordeling

Gebruik voor beide runs dezelfde aangepaste v2, bovenstaande aanvullende instructie en beide rapporten. Begin elke run in een nieuw gesprek zonder web search en geef deze testset niet mee. Beoordeel per run of beide omzetgroeirijen voldoen aan de gecontroleerde verwachtingen, inclusief kwartaalperiode, eenheid, gerapporteerd/berekend label, controleberekening en juiste bronverwijzing. Leg afwijkingen vast met F1–F6. Houd de uitkomst als omzetgroeitest herkenbaar in het succesoverzicht.

### T06 — ontvangen Run 1 en bronwijziging

De eerste poging stopte omdat de Vistra-link niet toegankelijk was. De tool meldde dit en verzon geen vergelijking; dit volgt de stopregel van de prompt. Er was wel geen bruikbare omzetuitvoer. Dit is een toegangsprobleem, niet zonder meer een inhoudelijke F5-fout.

De student voegde daarna `/Users/killianmersseman/Downloads/vistra-20260630.pdf` toe in hetzelfde gesprek. Na technische problemen met PDF-lezers leverde de tool onderstaande vergelijking. Dit is een vervolg met gewijzigde bronvorm, geen onafhankelijke tweede run.

| Controlepunt | Ontvangen Run 1 na toevoegen PDF | Voorlopige beoordeling |
|---|---|---|
| Periode | Beide 1 april–30 juni 2026 tegenover 1 april–30 juni 2025. | Kwartaalvergelijking toegepast; identificatie uit de bronnen nog door student te controleren. |
| Vistra | Omzet 4.017 versus 4.250 miljoen USD; −5,5%, berekend; gerapporteerd percentage niet gevonden. | Numerieke uitvoer en labels komen overeen met de vooraf gecontroleerde verwachtingen. |
| Constellation Energy | Omzet 7.504 versus 6.101 miljoen USD; 23,0%, gerapporteerd; controleberekening afgerond 23,0%; verschil 0,0 procentpunt. | Numerieke uitvoer en labels komen overeen met de vooraf gecontroleerde verwachtingen. |
| Vistra-bronverwijzingen | Gedrukte p. 1, PDF-p. 8, voor bedragen; “afdrukpagina 73 van 92” voor toelichting. | Student bevestigde dat gedrukte p. 65 en PDF-/afdrukp. 73 naar dezelfde omzetpassage verwijzen. Het nummeringsverschil is daarmee verklaard. De aanvullende verwijzing naar gedrukte p. 1/PDF-p. 8 is nog niet afzonderlijk bevestigd. |
| CEG-bronverwijzingen | Gedrukte p. 61 voor tabel en percentage; p. 5 voor geconsolideerde bedragen en eenheid. | P. 61 sluit aan bij voorbereiding; aanvullende p. 5 nog controleren. |
| Vorm | Compacte omzetgroeitabel, onderbouwing en beperkingen; FCF, schuld en risico’s weggelaten. | Gevraagde scope gevolgd. |

**Testcondities:** het gedeelde transcript bevat meerdere webzoekacties naast het openen van het aangeleverde CEG-rapport. Daarmee is de afgesproken conditie “zonder web search” niet gevolgd. Uit dit transcript blijkt niet of externe informatie in de einduitvoer is gebruikt. De numerieke overeenkomst is vastgelegd, maar deze poging geldt nog niet als een volledig gecontroleerde run onder de afgesproken testcondities. Voor een nieuwe gecontroleerde run: beide rapporten als bestanden of volledige tekst aanleveren in een nieuw gesprek en web search uitschakelen.

**Nog te beoordelen door de student:** aanvullende bronverwijzingen (Vistra gedrukte p. 1/PDF-p. 8 en CEG p. 5) controleren en daarna beslissen over inhoudelijke foutklassen. De Vistra-toelichting op gedrukte p. 65/PDF-p. 73 is bevestigd. Nog geen definitieve succesbeoordeling of succespercentage voor T06.

### T06 — nieuwe run met uitsluitend lokale rapporten

De student deelde een nieuwe uitvoer (duur 2 minuten en 12 seconden). Het transcript toont lokale tekstextractie en visuele inspectie van rapportpagina’s, zonder webzoekacties. Bronnen: `vistra-20260630.pdf` en `SEC Filing | Constellation Energy Corporation.pdf` in Downloads. De oorspronkelijke linkpoging blijft afzonderlijk geregistreerd.

| Controlepunt | Ontvangen uitvoer | Vergelijking met verwachtingen |
|---|---|---|
| Periode en bedrijven | Beide kwartaal 1 april–30 juni 2026 versus 1 april–30 juni 2025; Vistra Corp. en geconsolideerde Constellation Energy Corporation. | Dezelfde kwartaalperioden gebruikt; Corporation onderscheiden van Generation, LLC. |
| Vistra | 4.017 tegenover 4.250 miljoen USD; −5,5%, berekend; gerapporteerd percentage niet gevonden. | Komt overeen met de gecontroleerde verwachting en de eerdere uitvoer. |
| Constellation Energy | 7.504 tegenover 6.101 miljoen USD; 23,0%, gerapporteerd; berekening afgerond 23,0%. | Komt overeen met de gecontroleerde verwachting en de eerdere uitvoer. |
| Verschil percentages | CEG 0,0 procentpunt afgerond; vóór afronding circa −0,003769874 procentpunt. Bij Vistra niet bepaalbaar zonder gerapporteerd percentage. | Rekenkundig consistent; afronding alleen als mogelijke verklaring genoemd. |
| Bronnen | Vistra gedrukte p. 65/PDF-p. 73 en aanvullend gedrukte p. 1/PDF-p. 8; CEG gedrukte p. 61/PDF-p. 84. | Hoofdvindplaatsen sluiten aan bij gecontroleerde verwachtingen. Aanvullende bronclaims nog door student te beoordelen. |
| Vorm | Alleen omzetgroei; compacte tabel, onderbouwing en beperkingen. | Gevraagde scope gevolgd. |

**Studentbeoordeling:** geslaagd voor de gekozen omzetgroeiscope; de student bevestigde dit met “ja”. Geen numerieke afwijking of verkeerd gerapporteerd/berekend label vastgesteld tegenover de goedgekeurde verwachtingen. Aanvullende claims over omzetdefinities, Vistra Note 3 p. 11–12 en ontbrekende groei bij constante wisselkoersen zijn niet afzonderlijk door de student bevestigd. Deze beoordeling geldt voor de gecontroleerde omzetgroei, niet als volledige validatie van alle aanvullende claims.

**T06-tussenstand voor lokale runs:** 1 op 1 juist (n = 1 input, 1 run), uitsluitend voor omzetgroei. Geen inhoudelijke foutklasse vastgesteld binnen deze scope. Dit is geen succespercentage voor de volledige testset.

**Aantal gecontroleerde runs:** één nieuwe run met lokale bestanden en zonder zichtbare webzoekacties ontvangen. De eerdere poging met webzoekacties telt niet als tweede run onder dezelfde testcondities. Voor twee vergelijkbare runs is nog een nieuw gesprek nodig met dezelfde lokale bestanden en dezelfde prompt.

### T06 — tweede lokale run

De student deelde een tweede lokale uitvoer (duur 2 minuten en 19 seconden). Het transcript toont lokale tekstextractie en visuele inspectie van beide omzetpagina’s, zonder webzoekacties.

| Controlepunt | Lokale Run 1 | Lokale Run 2 | Vergelijking |
|---|---|---|---|
| Vistra omzet | 4.017 tegenover 4.250 miljoen USD. | 4.017 tegenover 4.250 miljoen USD. | Gelijk; komt overeen met verwachting. |
| Vistra groei | −5,5%, berekend; gerapporteerd percentage niet gevonden. | −5,5%, berekend; gerapporteerd percentage niet gevonden. | Gelijk; komt overeen met verwachting. |
| CEG omzet | 7.504 tegenover 6.101 miljoen USD. | 7.504 tegenover 6.101 miljoen USD. | Gelijk; komt overeen met verwachting. |
| CEG groei | 23,0%, gerapporteerd; controleberekening afgerond 23,0%. | 23,0%, gerapporteerd; controleberekening afgerond 23,0%. | Gelijk; komt overeen met verwachting. |
| CEG verschil | 0,0 procentpunt afgerond; circa −0,003769874 vóór afronding. | 0,0 procentpunt afgerond; circa −0,003770 vóór afronding. | Zelfde uitkomst, anders gepresenteerde precisie. |
| Periode | Q2 2026 tegenover Q2 2025, april–juni. | Q2 2026 tegenover Q2 2025, april–juni. | Gelijk. |
| Hoofdbronnen | Vistra gedrukte p. 65/PDF-p. 73; CEG gedrukte p. 61/PDF-p. 84. | Vistra PDF-p. 73; CEG gedrukte p. 61/PDF-p. 84. | Zelfde passages. Run 2 noemt bij de Vistra-toelichting alleen PDF-nummering. |

Twee lokale runs ontvangen. Geen afwijking in de gecontroleerde omzetcijfers, labels, berekeningen of perioden vastgesteld; geen wisselende kernuitvoer (F6). De student heeft beide lokale runs als geslaagd beoordeeld, telkens met “ja”. Aanvullende bronclaims blijven afzonderlijk te controleren. De eerdere poging met webzoekacties blijft buiten deze twee lokale runs.

**T06-eindstand voor de gekozen omzetgroeiscope:** 2 op 2 juist, 100% (n = 1 input, 2 runs). Geen inhoudelijke fouten vastgesteld binnen deze scope. T06 is afgerond voor omzetgroei. Dit is geen succespercentage voor de volledige testset of een validatie van FCF, schuld en risico’s.

## T07 — Jaguar Land Rover als geheel en Ferrari, april–juni 2026

- Keuze van de student: Jaguar Land Rover als geheel tegenover Ferrari; alleen omzetgroei; april–juni 2026 tegenover april–juni 2025.
- JLR noemt deze verslagperiode Q1 FY27; Ferrari noemt deze Q2 2026. Controleer exacte datums, niet alleen kwartaalnummers.
- Officiële JLR-resultaten: https://media.jlr.com/news/2026/08/jlr-delivers-profitable-quarter-despite-supply-and-market-challenges
- JLR-downloadcentrum voor rapporten: https://www.jlr.com/download-centre
- Ferrari-resultaten, ingediend bij de SEC: https://www.sec.gov/Archives/edgar/data/1648416/000164841626000106/fnvq22026results.htm
- Bovenstaande resultaatpublicaties zijn geen twee Form 10-Q’s; leg vóór de runs vast welke documenten als lokale input worden gebruikt.
- Prompt: aangepaste `prompt-v2.md`, met dezelfde instructie voor alleen omzetgroei als T06.
- Status: omzetverwachtingen voorbereid vóór de runs. Ferrari’s omzetbedragen en gerapporteerde groei door AI opgezocht op verzoek en door de student gecontroleerd en bevestigd met “ferrari klopt”. Student bevestigde daarna JLR’s omzet van april–juni 2025 (6.604 miljoen GBP) in de officiële tabel en vervolgens ook de omzet van 2026 (5.973 miljoen GBP) en gerapporteerde groei (−9,6%), telkens met “ja”. Geen runs uitgevoerd. Lokale inputdocumenten nog vast te leggen.

| Controlepunt | Verwacht antwoord (student controleert vooraf) | Waarom / bron | Run 1 | Run 2 | Foutklasse |
|---|---|---|---|---|---|
| Exacte kwartaalperioden ondanks verschillende kwartaalnummers | JLR Q1 FY27 en Ferrari Q2 2026 betreffen beide april–juni 2026, vergeleken met april–juni 2025. Verschillende kwartaalnummers zijn geen periodeverschil. | Resultaatpublicaties: drie maanden eindigend op 30 juni 2026; bij JLR begint het boekjaar in april. Exacte datums blijven bij de runs uit de aangeleverde documenten te controleren. | | | |
| JLR als geheel — omzet, gerapporteerde groei en controleberekening | April–juni 2026: 5.973 miljoen GBP; april–juni 2025: 6.604 miljoen GBP. Gerapporteerd −9,6% als hoofdwaarde. Controleberekening: (5.973 / 6.604 − 1) × 100 = −9,554815…%, afgerond −9,6%. Berekend minus gerapporteerd: circa +0,045185 procentpunt, afgerond 0,0 procentpunt. | Omzet 2025: officieel Q1 FY26 Interim Report, PDF-p. 9, Condensed Consolidated Income Statement, rij Revenue; student bevestigde 6,604. https://static-assets.tatamotors.com/Production/www-tatamotors-com-NEW/wp-content/uploads/2025/08/Q1FY26-JLR-Interim-Report.pdf . Omzet 2026: https://www.jlr.com/results-centre , Q1 FY27 KEY METRICS. Groei: resultaatpublicatie van 13 augustus 2026, “down 9.6%”. Omzet 2026 en groeipercentage nog afzonderlijk door student te bevestigen. | | | |
| Ferrari — omzet, gerapporteerde groei en controleberekening | April–juni 2026: 1.938 miljoen EUR; april–juni 2025: 1.787 miljoen EUR. Gerapporteerd +8,0% als hoofdwaarde. Controleberekening: (1.938 / 1.787 − 1) × 100 = 8,449916…%, afgerond +8,4%. Berekend minus gerapporteerd: +0,4 procentpunt afgerond. Groei bij constante wisselkoersen +11% apart houden. | Resultaatpublicatie Q2 2026, p. 1 Net revenues en p. 3 Total net revenues, kwartaalkolommen. Student bevestigde bedragen en gerapporteerde groei; berekening uit die bedragen. Oorzaak van verschil niet zonder bronbewijs als vaststaand presenteren. | | | |
| Valuta, eenheden en eventuele verschillen tussen gerapporteerd en berekend percentage | JLR rapporteert in miljoen GBP, Ferrari in miljoen EUR. Bereken per bedrijf de groei in de eigen valuta; geen ongefundeerde USD-omrekening. Gerappporteerde groei als hoofdwaarde, controleberekening en verschil in procentpunten apart. Ferrari’s +11% bij constante wisselkoersen apart houden van +8% gerapporteerde groei. | Officiële omzetbronnen hierboven. Aanvullende valuta-instructie voor de runs hieronder; geen wisselkoers als input vastgelegd. | | | |

### Instructie en lokale bronnen voor T07

Lokale JLR-input: `../output/pdf/jlr-omzet-bronnen-april-juni-2026.pdf` (55 pagina’s). Bundel met ongewijzigde oorspronkelijke pagina’s en bladwijzers: resultatenpresentatie Q1 FY27 (bundelp. 1–21), persbericht Q1 FY27 (bundelp. 22–24), interimrapport Q1 FY26 (bundelp. 25–55). De oorspronkelijke gedrukte nummering blijft behouden. De resultatenpresentatie vervangt de eerder voorgestelde afdruk van het Results Centre; zij bevat de exacte omzetbedragen en periode-informatie.

Bronnen van de 2026-PDF’s, gevonden via de officiële Results Centre-pagina:
- Presentatie: https://media.production.jlrms.com/2026-08-13/pdf/e332e7b8-f2c1-431e-b76e-f76269ac5526/Q1%20FY27%20Results%20Deck%20vF.pdf?VersionId=hXdnjvS_Xq9k274bmeoZ_dPCM1pSN5Dq
- Persbericht: https://media.production.jlrms.com/2026-08-13/pdf/229c8e17-8f11-4d23-a3b9-057f13097040/Q1%20FY27%20Earnings%20Release%20vF.pdf?VersionId=zqo1kERYHcZKTGWIX4OrPTMMe7t0hn58

Gebruik de aangepaste v2 met de volgende aanvulling in beide nieuwe gesprekken:

> Voer alleen de omzetgroeivergelijking uit voor Jaguar Land Rover als geheel en Ferrari, april–juni 2026 tegenover april–juni 2025. Laat FCF, schuld en risico’s weg. Behoud de regels voor bronnen, perioden, gerapporteerde percentages en controleberekeningen. Behoud omzetbedragen in de oorspronkelijke rapportagevaluta (JLR: GBP; Ferrari: EUR), met eenheid erbij, en reken niet om naar USD. Gebruik uitsluitend de aangeleverde lokale bestanden; open geen websites en zoek niets op internet.

De aanvulling op valuta gaat voor de USD-regel in v2. Gebruik in beide runs precies dezelfde lokale documenten. Geef deze testset niet mee. JLR’s gecontroleerde cijfers komen uit meerdere officiële publicaties; zorg dat de lokale input zowel het bedrag van 2026, het bedrag van 2025 als de gerapporteerde groei bevat. Een lokale kopie van alleen de afgeronde JLR-perspublicatie bevat niet alle gecontroleerde exacte omzetbedragen.

### T07 — Run 1 met lokale bestanden

Ontvangen uitvoer: 1 minuut en 7 seconden. Lokale bronnen: JLR-bundel en `/Users/killianmersseman/Downloads/Document.pdf` (Ferrari-resultaatpublicatie). Het gedeelde transcript toont lokale PDF-verwerking en visuele inspectie, zonder webzoekacties.

| Controlepunt | Ontvangen Run 1 | Vergelijking met verwachting |
|---|---|---|
| Periode | Beide april–juni 2026 tegenover april–juni 2025; JLR Q1 FY27 versus Ferrari Q2 2026. | Komt overeen; afwijkende kwartaalnamen niet als periodeverschil behandeld. |
| JLR omzet en groei | 5.973 versus 6.604 miljoen GBP; −9,6% gerapporteerd; berekend −9,554815…% → −9,6%. | Komt overeen. |
| JLR verschil | Berekend minus gerapporteerd +0,045185… procentpunt → 0,0 op één decimaal. | Komt overeen. |
| Ferrari omzet en groei | 1.938 versus 1.787 miljoen EUR; +8,0% gerapporteerd; berekend 8,449916…% → +8,4%. | Komt overeen; gerapporteerd percentage blijft hoofdwaarde. |
| Ferrari verschil en constante valuta | +0,449916… procentpunt → +0,4; +11,0% bij constante wisselkoersen apart. | Komt overeen; afronding slechts als mogelijke verklaring genoemd. |
| Valuta en vorm | GBP en EUR behouden, geen omrekening; compacte vergelijking en onderbouwing; alleen omzetgroei. | Gevraagde scope en aanvulling gevolgd. |
| Bronnen | JLR Income statement bundelp. 19 en Q1 Performance bundelp. 5; Ferrari Total net revenues gedrukte p. 2/PDF-p. 3. | Exacte lokale bronverwijzingen nog door student te controleren. Ferrari's verwijzing wijkt af van de eerdere HTML-paginanummering; dit is nog geen bewezen fout. |

**Studentbeoordeling:** de student bevestigde met “ja” dat de bedragen en percentages op JLR-bundelp. 19 en 5 en Ferrari PDF-p. 3 correct staan. Kernuitvoer komt overeen met vooraf gecontroleerde verwachtingen; Run 1 geslaagd voor de gekozen omzetgroeiscope. Aanvullende claim over JLR’s Chinese joint venture en ontbrekende onderliggende precisie is niet afzonderlijk gevalideerd. Run 2 nog niet ontvangen.

**T07-tussenstand:** 1 op 1 juist (n = 1 input, 1 run), uitsluitend voor omzetgroei. Geen inhoudelijke fout vastgesteld binnen deze scope.

### T07 — Run 2 met dezelfde lokale bestanden

Ontvangen uitvoer: 1 minuut en 2 seconden. Het gedeelde transcript toont lokale PDF-verwerking en visuele inspectie, zonder webzoekacties. Dezelfde JLR-bundel en Ferrari `Document.pdf` gebruikt.

| Controlepunt | Run 2 | Vergelijking met Run 1 en verwachting |
|---|---|---|
| Periode | April–juni 2026 tegenover april–juni 2025; JLR Q1 FY27 en Ferrari Q2 2026. | Gelijk; juiste kalenderperioden ondanks verschillende kwartaalnamen. |
| JLR | 5.973 tegenover 6.604 miljoen GBP; −9,6% gerapporteerd; berekend −9,554815…% → −9,6%. Verschil +0,045185… → +0,0 procentpunt. | Numeriek gelijk; +0,0 is dezelfde afgeronde waarde als 0,0 in Run 1. |
| Ferrari | 1.938 tegenover 1.787 miljoen EUR; +8,0% gerapporteerd; berekend 8,449916…% → +8,4%. Verschil +0,449916… → +0,4 procentpunt. | Gelijk; gerapporteerd percentage blijft hoofdwaarde. |
| Valuta en constante wisselkoersen | Eigen valuta behouden; Ferrari +11,0% bij constante wisselkoersen apart. | Gelijk aan verwachting. |
| Hoofdbronnen | JLR bundelp. 19 en 5; Ferrari gedrukte p. 2/PDF-p. 3. | Dezelfde vindplaatsen als de door student gecontroleerde Run 1. |
| Vorm | Eerste tabel bevat ook omzetbedragen, controlepercentages en verschillen; aparte onderbouwing blijft aanwezig. | Uitgebreider dan Run 1. Nog door student te beoordelen of deze vorm bruikbaar is; geen automatische F4-classificatie. |

**Studentbeoordeling:** beide runs geslaagd voor omzetgroei. Bij Run 2 zei de student: “liever zoals run 1 enkel de belangrijkste info maar run 2 is ook geslaagd”. Geen verschil in gecontroleerde kerncijfers, perioden, labels of bronnen vastgesteld; geen wisselende kernuitvoer (F6). De uitgebreidere vorm van Run 2 is een verbeterpunt, door de student niet als mislukte run beoordeeld. Aanvullende claim over ontbrekende JLR-groei bij constante wisselkoersen is niet afzonderlijk door de student gecontroleerd.

**T07-eindstand voor omzetgroei:** 2 op 2 juist, 100% (n = 1 input, 2 runs). Beide runs blijven beoordeeld tegenover de prompt en verwachtingen van vóór de runs.

**Wijziging na T07:** op basis van de voorkeur van de student is in prompt-v2.md expliciet gemaakt dat bij alleen omzetgroei de eerste tabel één rij bevat. Omzetbedragen, controleberekeningen en verschillen staan alleen in de onderbouwing. Deze nieuwe vormregel is nog niet getest; de eerdere runs zijn niet met terugwerkende kracht uitgevoerd met deze regel.

## T08 — PepsiCo en The Coca-Cola Company, Q2 2026

- Keuze van de student: PepsiCo en Coca-Cola, Q2 2026, alleen omzetgroei.
- PepsiCo-bron: https://www.pepsico.com/docs/pepsico-5v9wci20/media/Files/investors/q2-2026-form-10q.pdf
- Coca-Cola-bron: https://investors.coca-colacompany.com/filings-reports/all-sec-filings/content/0001628280-26-049922/a2026q2earningsreleaseex-9.htm
- PepsiCo kwartaal eindigt op 13 juni 2026; Coca-Cola kwartaal eindigt op 3 juli 2026. Niet zonder meer beide als april–juni of als exact dezelfde periode voorstellen.
- Gebruik The Coca-Cola Company (KO), niet Coca-Cola Consolidated (COKE).
- Prompt: aangepaste v2 inclusief compacte vormregel na T07; aanvullende instructie voor alleen omzetgroei. Exacte lokale documenten en verwachtingen nog vast te leggen.
- Periodekeuze van de student: “pak de kwartaal maar vermeld het verschil er wel bij”. Toon per bedrijf de kwartaalomzetgroei tegenover zijn eigen vergelijkbare kwartaal van vorig jaar, met de eigen verslagperiode. Presenteer de twee kwartalen niet als exact dezelfde kalenderperiode.
- Status: verwachtingen vooraf gecontroleerd en goedgekeurd door de student op 8 oktober 2026 (“klopt”). Geen runs uitgevoerd.

| Controlepunt | Verwacht antwoord (student bepaalt en controleert vooraf) | Waarom / bron | Run 1 | Run 2 | Foutklasse |
|---|---|---|---|---|---|
| Verschillende kwartaalperioden en duur | PepsiCo: 12 weken tot 13 juni 2026, tegenover 12 weken tot 14 juni 2025. Coca-Cola: drie maanden tot 3 juli 2026, tegenover drie maanden tot 27 juni 2025. Beide kwartaalgroeipercentages tonen met afzonderlijke perioden. Expliciet melden dat einddatums en duur verschillen en dat dit geen vergelijking van exact dezelfde kalenderperiode is. Niet automatisch naar cumulatieve cijfers overschakelen. | Periodekeuze door student vooraf bepaald. Periodekoppen in officiële rapporten; bij de lokale runs opnieuw controleren. | | | |
| PepsiCo — omzetgroei, bedragen en controleberekening | 24.181 tegenover 22.726 miljoen USD; hoofdwaarde +6,4% gerapporteerd. Controle: (24.181 / 22.726 − 1) × 100 = 6,402358…% → +6,4%. Berekend minus gerapporteerd: +0,002358… → 0,0 procentpunt. Organische groei +2,4% apart houden. | Resultatenpersbericht Q2 2026, PDF-p. 1; kwartaalbedragen en perioden in de winst-en-verliesrekening op PDF-p. 6 (A-1). Student heeft cijfers bevestigd. | | | |
| Coca-Cola — gerapporteerde omzetgroei versus organische groei | 13.380 tegenover 12.535 miljoen USD GAAP-omzet; hoofdwaarde +7,0% gerapporteerd. Controle: (13.380 / 12.535 − 1) × 100 = 6,741124…% → +6,7%. Berekend minus gerapporteerd: −0,258875… → −0,3 procentpunt. Organische groei +6,0% apart houden. Gebruik niet de aangepaste non-GAAP-omzet 13.373. | Resultatenpersbericht Q2 2026: samenvatting en Consolidated Statements of Income, gedrukte p. 9. Student heeft cijfers bevestigd. | | | |
| Compacte eerste tabel en afzonderlijke onderbouwing | Eerste tabel alleen omzetgroei (+6,4% en +7,0%) en afzonderlijke kwartaalperioden. Bedragen, berekeningen en verschillen uitsluitend in onderbouwing; gerapporteerde percentages blijven hoofdwaarden. | Voorkeur student na T07 en aanvullende T08-instructie. | | | |

### Aanvullende instructie voor beide T08-runs

> Vergelijk alleen de kwartaalomzetgroei van PepsiCo en The Coca-Cola Company voor hun Q2 2026 tegenover hun eigen vergelijkbare kwartaal van 2025. Gebruik de kwartalen ondanks de verschillende verslagperioden: vermeld per bedrijf de exacte einddatum en duur uit het rapport en leg het verschil duidelijk uit. Stel ze niet voor als dezelfde kalenderperiode en schakel niet over naar halfjaarcijfers. Toon bovenaan alleen de hoofdgroeipercentages en de afzonderlijke perioden; zet omzetbedragen, controleberekeningen en verschillen in procentpunten in de onderbouwing. Houd organische groei apart van gerapporteerde omzetgroei. Gebruik uitsluitend de aangeleverde lokale bestanden, zonder internet.

Dit is de expliciete periodekeuze voor T08; geen nieuwe periodevraag nodig als de documenten de genoemde kwartalen bevatten. De bestaande FCF-perioderegel wordt voor deze omzetgroeitest niet toegepast. Gebruik in beide runs dezelfde bestanden en prompt; geef deze testset niet mee.

### T08 — Run 1 met lokale PDF’s

Ontvangen uitvoer: 1 minuut en 16 seconden. Het gedeelde transcript toont lokale PDF-verwerking en visuele controle, zonder zichtbare webzoekacties.

- Coca-Cola-bestand: `/Users/killianmersseman/Downloads/July 28, 2026 - EX-99.1 - 8-K: Current report | The Coca-Cola Company (KO).pdf`.
- PepsiCo-bestand: `/Users/killianmersseman/Downloads/q2-2026-earnings-release.pdf`.
- Kerncijfers komen overeen met de vooraf goedgekeurde verwachtingen: Coca-Cola 13.380 tegenover 12.535 miljoen USD, 7,0% gerapporteerd, 6,7% berekend, verschil −0,3 procentpunt; PepsiCo 24.181 tegenover 22.726 miljoen USD, 6,4% gerapporteerd en berekend, afgerond verschil 0,0 procentpunt.
- Afzonderlijke perioden correct vermeld: Coca-Cola drie maanden tot 3 juli 2026 tegenover 27 juni 2025; PepsiCo twaalf weken tot 13 juni 2026 tegenover 14 juni 2025. Verschil expliciet benoemd; geen halfjaarcijfers gebruikt.
- Eerste tabel bevat één rij met hoofdpercentages; exacte perioden staan in de tekst erboven, terwijl de periodecel verwijst naar eigen Q2 en verschillende perioden. Bedragen en controleberekeningen staan in de onderbouwing.
- Organische groei apart gehouden: Coca-Cola 6,0%, PepsiCo 2,4%.
- Aanvullende claims over groei bij constante wisselkoersen en bijbehorende bronnen zijn nog niet afzonderlijk gecontroleerd. Zij behoren niet tot de vooraf gecontroleerde kernverwachtingen.

**Studentbeoordeling Run 1:** geslaagd. De student: “zeer duidelijke tabel met de onderbouwing erronder”. Kerncijfers en periodevermelding stemmen overeen met de vooraf gecontroleerde verwachtingen; geen fout vastgesteld binnen deze scope. Aanvullende gegevens over constante wisselkoersen blijven niet afzonderlijk gecontroleerd.

**T08-tussenstand:** 1 op 1 geslaagd (n = 1 input, 1 run). Run 2 nog niet ontvangen; nog geen eindscore over twee runs.


### T08 — Run 2 met dezelfde lokale PDF’s

Ontvangen uitvoer toont lokale PDF-verwerking en visuele inspectie, zonder zichtbare webzoekacties. De genoemde bronbestanden zijn dezelfde als in Run 1.

| Controlepunt | Run 2 | Vergelijking met verwachting en Run 1 |
|---|---|---|
| Hoofdpercentages | Coca-Cola 7,0%; PepsiCo 6,4%, beide gerapporteerd | Gelijk en correct |
| Omzetbedragen, miljoenen USD | Coca-Cola 13.380 / 12.535; PepsiCo 24.181 / 22.726 | Gelijk en correct |
| Controle en verschil | Coca-Cola 6,7%, −0,3 procentpunt; PepsiCo 6,4%, 0,0 procentpunt | Gelijk en correct |
| Perioden | Coca-Cola drie maanden tot 3 juli 2026 / 27 juni 2025; PepsiCo twaalf weken tot 13 juni 2026 / 14 juni 2025 | Gelijk; verschil in duur en einddatum expliciet vermeld |
| Vorm en bronnen | Compacte eerste tabel; onderbouwing eronder. Coca-Cola gedrukte p. 9/PDF-p. 12; PepsiCo p. 1 en A-1/PDF-p. 6 | Gelijk aan de vooraf gecontroleerde kernverwachtingen |
| Aanvullende maatstaven | Organische groei en constante wisselkoersen alleen als niet-gebruikte hoofdwaarden benoemd; geen extra percentages | Kernuitvoer blijft gelijk; minder aanvullende informatie dan Run 1 |

**Studentbeoordeling Run 2:** geslaagd; “gelijklopend met run 1”. Kernuitvoer stemt overeen met de vooraf gecontroleerde verwachtingen. Geen wisselende kernuitvoer vastgesteld (F6).

**T08-eindstand voor omzetgroei:** 2 op 2 geslaagd, 100% (n = 1 input, 2 runs). Beide runs tonen de verschillende kwartaalperioden expliciet, conform de vooraf vastgelegde keuze van de student. Geen fout vastgesteld binnen de gecontroleerde kernscope.

## T09 — Rheinmetall en Lockheed Martin, Q2 2026

- Student kiest alleen omzetgroei.
- Periodekeuze vooraf goedgekeurd: de student accepteert de kwartalen ondanks het verschil van twee dagen in einddatum (Rheinmetall 30 juni 2026, Lockheed Martin 28 juni 2026).
- Motivatie student: “omdat het over een even lange periode is en maar 2 dagen verschil”. Dit is de motivatie van de student; exacte duur/startdatum van Lockheed Martins fiscale kwartaal nog controleren voordat gelijke duur als bronfeit wordt weergegeven.
- Gebruik afzonderlijke kwartaalperioden en eigen vergelijkende kwartaalcijfers van 2025; niet voorstellen als exact dezelfde kalenderperiode. Geen nieuwe toestemming voor dit einddatumverschil nodig.
- Rheinmetall-bron: https://ir.rheinmetall.com/media/document/1bbcaadf-0e67-45bc-80df-bba822823824/assets/DE0007030009-Q2-2026-EQ-E-00.pdf
- Lockheed Martin-bron: https://investors.lockheedmartin.com/node/53041/pdf
- Status: voorbereiding. Omzetbedragen, hoofdpercentages en controleberekeningen nog door student te controleren; geen runs uitgevoerd.

### T09 — Broncontrole vóór de runs

- Student bevestigt Rheinmetalls Q2-omzetbedragen 3.289 en 1.949 miljoen EUR met “rheinmetall klopt”. Dit bevestigt nog geen gerapporteerd groeipercentage.
- Lockheed Martin, concept ter controle: Q2 2026 20.063 miljoen USD tegenover Q2 2025 18.155 miljoen USD; gerapporteerde groei 11% (hoofdwaarde 11,0%). Controle: (20.063 / 18.155 − 1) × 100 = 10,5095015…% → 10,5%; berekend minus gerapporteerd −0,4904985… → −0,5 procentpunt. Bron: resultatenpersbericht, Summary Financial Results, rij Sales, kolommen Quarters Ended June 28, 2026 / June 29, 2025; 11% in de openingspunten en de toelichting Sales. Nog door student te bevestigen.

- Student bevestigt de bovenstaande Lockheed Martin-omzetbedragen en gerapporteerde groei vóór de runs met “klopt”. Hoofdwaarde 11,0%; controle 10,5%; verschil −0,5 procentpunt.
- Rheinmetall gerapporteerd kwartaalpercentage ter controle: +69% (hoofdwaarde +69,0%), Q2 2026 Conference Call van 6 augustus 2026, slide 3, Q2 2026 Group Highlights, tegel SALES. Bron: https://ir.rheinmetall.com/media/document/0ae45fdf-2da8-4394-9a77-95bd71ece8b6/assets/2026-08-06-Rheinmetall-Conference-Call-Q2-2026.pdf . Bedragen betreffen voortgezette activiteiten; 2025 vergelijkende cijfers zijn herzien. Controle op 3.289 / 1.949: circa 68,7532% → 68,8%; verschil met 69% circa −0,2468 → −0,2 procentpunt. Percentage nog door student te bevestigen. Voor lokale testinput presentatie en halfjaarrapport bundelen zodat zowel hoofdpercentage als bedragen beschikbaar zijn.

- Student bevestigt Rheinmetalls gerapporteerde +69% met “kloptklopt”. Beide bedrijven hebben nu vooraf gecontroleerde kernverwachtingen.
- Lokale Rheinmetall-bundel: `output/pdf/rheinmetall-omzet-bronnen-q2-2026.pdf`, 81 pagina’s: halfjaarrapport p. 1–47, presentatie p. 48–81. Omzetbedragen bundelp. 24; gerapporteerd +69% bundelp. 50 (slide 3). Representatieve bronpagina’s visueel gecontroleerd.
- Lockheed Martin-PDF automatisch downloaden mislukt met HTTP 403; gebruiker kan officiële rapportpagina als PDF opslaan. Exact lokaal bestand nog vast te leggen.

### Aanvullende instructie voor beide T09-runs

> Vergelijk alleen de kwartaalomzetgroei van Rheinmetall en Lockheed Martin voor Q2 2026 tegenover hun eigen vergelijkbare kwartaal van 2025. Ik accepteer het verschil in einddatum (30 juni tegenover 28 juni 2026): vermeld afzonderlijke perioden en de exacte duur als die in de rapporten staat. Stel gelijke duur niet zonder broncontrole vast. Gebruik geen halfjaargroei. Gebruik geconsolideerde omzet en leg uit als deze voortgezette activiteiten betreft of vergelijkende cijfers herzien zijn. Toon bovenaan alleen de hoofdgroeipercentages en perioden; plaats bedragen, controleberekeningen en verschillen in procentpunten in de onderbouwing. Gerapporteerde groei blijft de hoofdwaarde. Gebruik uitsluitend beide lokale PDF’s, zonder internet.

### T09 — Run 1 met lokale PDF’s

Ontvangen uitvoer: 1 minuut en 7 seconden. Transcript toont lokale PDF-verwerking en visuele inspectie, zonder zichtbare webzoekacties.

- Invoer: Rheinmetall-bundel `output/pdf/rheinmetall-omzet-bronnen-q2-2026.pdf` en `/Users/killianmersseman/Downloads/Lockheed Martin Reports Second Quarter 2026 Financial Results | Lockheed Martin Corp.pdf`.
- Kerncijfers komen overeen met de vooraf gecontroleerde verwachtingen: Rheinmetall 3.289 / 1.949 miljoen EUR, 69,0% gerapporteerd, 68,8% berekend, verschil −0,2 procentpunt; Lockheed Martin 20.063 / 18.155 miljoen USD, 11,0% gerapporteerd, 10,5% berekend, verschil −0,5 procentpunt.
- Perioden afzonderlijk vermeld, geen exact gelijke kalenderperioden geclaimd. Rheinmetall kalender-Q2; Lockheed Martin kwartaal tot 28 juni 2026 tegenover 29 juni 2025. Geen halfjaargroei gebruikt.
- Compacte hoofdtabel met onderbouwing eronder; gerapporteerde percentages blijven hoofdwaarden.
- Rheinmetalls voortgezette activiteiten en aangepaste vergelijkingscijfers expliciet benoemd.
- Alternatieve vindplaatsen in de uitvoer: Rheinmetall gedrukte p. 3 voor bedragen en presentatie p. 12/bundelp. 59 voor +69%; Lockheed Martin PDF-p. 8 voor bedragen en p. 9 voor 11%. Deze andere vindplaatsen zijn nog niet afzonderlijk gecontroleerd; numerieke overeenkomst alleen bewijst de bronverwijzingen niet.
- Aanvullende claims over afrondingsvoetnoten, fiscale afsluitingsregel en ontbrekende kwartaalgroei bij constante wisselkoersen nog niet afzonderlijk gecontroleerd.

**Studentbeoordeling T09 Run 1:** geslaagd. De gecontroleerde kerncijfers stemmen overeen met de verwachtingen. De eerder genoemde aanvullende bronclaims zijn hiermee niet afzonderlijk gevalideerd.

**T09-tussenstand:** 1 op 1 geslaagd (n = 1 input, 1 run), voor de omzetgroeiscope. Run 2 nog niet ontvangen; geen definitieve eindscore over twee runs.

### T09 — Run 2 met dezelfde lokale PDF’s

Het gedeelde transcript toont lokale PDF-verwerking en visuele inspectie, zonder zichtbare webzoekacties. Dezelfde Rheinmetall-bundel en hetzelfde lokale Lockheed Martin-resultatenbericht zijn gebruikt.

| Controlepunt | Run 2 | Vergelijking met verwachting en Run 1 |
|---|---|---|
| Hoofdpercentages | Lockheed Martin 11,0%; Rheinmetall 69,0%, gerapporteerd | Gelijk en correct; bedrijfsvolgorde omgekeerd |
| Omzetbedragen | Lockheed Martin 20.063 / 18.155 miljoen USD; Rheinmetall 3.289 / 1.949 miljoen EUR | Gelijk en correct |
| Controleberekeningen en verschillen | Lockheed Martin 10,5%, −0,5 procentpunt; Rheinmetall 68,8%, −0,2 procentpunt | Gelijk en correct |
| Perioden | Eigen Q2-perioden; einddatumverschil expliciet. Begindata Lockheed Martin niet gevonden in gebruikte overzichten | Geen onbewezen gelijke duur geclaimd; geen halfjaargroei |
| Definitie | Rheinmetall voortgezette activiteiten en aangepaste vergelijkingscijfers; Lockheed Martin geconsolideerde Sales | Gelijk aan verwachte afbakening |
| Vorm | Compacte eerste tabel met onderbouwing eronder | Gelijk aan gewenste vorm |
| Bronnen | Lockheed Martin PDF-p. 1–2; Rheinmetall gedrukte p. 24 en presentatie p. 12/bundelp. 59 | Andere Lockheed Martin-vindplaatsen dan Run 1; bedragen en percentages gelijk. Nieuwe verwijzingen en aanvullende afrondingsclaims niet afzonderlijk gecontroleerd |

De inleidende zin over geldbedragen in miljoenen USD is minder duidelijk doordat Rheinmetalls bedragen in de onderbouwing terecht in EUR blijven. Er is geen valutaomrekening uitgevoerd; voor de procentuele groeiberekening is die ook niet nodig. Dit is een mogelijk formuleringverbeterpunt, nog geen door student beoordeelde fout.

**Studentbeoordeling T09 Run 2:** geslaagd. Kernuitvoer stemt overeen met de vooraf gecontroleerde verwachtingen. Geen wisselende kerncijfers vastgesteld (F6). De minder duidelijke USD-inleidingszin is een formuleringverbeterpunt; student beoordeelt de run als geslaagd. Aanvullende bronclaims blijven niet afzonderlijk gecontroleerd.

**T09-eindstand voor omzetgroei:** 2 op 2 geslaagd, 100% (n = 1 input, 2 runs). Beide runs gebruiken de door de student geaccepteerde afzonderlijke kwartaalperioden en geven gerapporteerde percentages als hoofdwaarden.

## T10 — LVMH en Hermès, Q2 2026

- Student kiest alleen omzetgroei, LVMH en Hermès International.
- Voorbereiding: afzonderlijke Q2-cijfers april–juni 2026 tegenover april–juni 2025 beschikbaar in beide halfjaarpublicaties. Geen halfjaargroei gebruiken.
- LVMH concept: 19.524 / 19.499 miljoen EUR; berekende groei +0,128211…% → +0,1%. Expliciet gerapporteerd totaalpercentage voor Q2 tegen actuele wisselkoersen nog niet gevonden in het onderzochte persbericht; +3% betreft organische groei, niet deze hoofdmaatstaf.
- Hermès concept: 4.094 / 3.905 miljoen EUR; gerapporteerd +4,8% (Published); berekend +4,839949…% → +4,8%, verschil +0,039949… → 0,0 procentpunt. +6,7% betreft constante wisselkoersen en moet apart blijven.
- Bronnen: LVMH eigen persbericht via https://www.globenewswire.com/news-release/2026/07/27/3333733/0/en/LVMH-Accelerating-growth-in-the-second-quarter-solid-first-half-results.html , appendix Revenue by business group and by quarter; Hermès eigen persbericht via https://www.globenewswire.com/news-release/2026/07/29/3334976/0/en/herm%C3%A8s-international-2026-half-year-results.html , Revenue by geographical area, 2nd quarter, TOTAL.
- Status: conceptverwachtingen nog door student te controleren en goed te keuren. Lokale documenten nog te verzamelen; geen runs uitgevoerd.

### T10 — Goedkeuring en lokale input

- Student bevestigt de bovenstaande verwachtingen met “oke”, vóór de runs.
- Ongewijzigde originele PDF’s gedownload: `output/pdf/lvmh-q2-2026-bron.pdf` (11 pagina’s) en `output/pdf/hermes-q2-2026-bron.pdf` (12 pagina’s). Eén volledig bronbestand per bedrijf; geen bundeling nodig.
- LVMH kwartaalbedragen: PDF-p. 5, appendix Revenue by business group and by quarter. Hermès kwartaalbedragen en Published 4,8%: PDF-p. 6, Revenue by geographical area, 2nd quarter, TOTAL; ook PDF-p. 7 bij sectors. Relevante tabellen visueel gecontroleerd.

### Aanvullende instructie voor beide T10-runs

> Vergelijk uitsluitend de totale geconsolideerde omzetgroei van LVMH en Hermès International voor april–juni 2026 tegenover april–juni 2025. Gebruik afzonderlijke kwartaalcijfers uit de aangeleverde halfjaarpublicaties, geen halfjaargroei. Gebruik groei tegen actuele wisselkoersen als hoofdmaatstaf; houd organische groei en groei bij constante wisselkoersen apart. Gebruik bij voorkeur een expliciet gerapporteerd percentage voor deze hoofdmaatstaf. Als dat ontbreekt, bereken het uit kwartaalomzet en label het als berekend. Toon eerst één compacte rij met hoofdpercentages en periode, daarna onderbouwing met oorspronkelijke omzetbedragen, bronpagina’s, controleberekeningen en berekend-minus-gerapporteerd in procentpunten waar mogelijk. Gebruik uitsluitend de twee lokale PDF’s, zonder internet.

Gebruik in beide runs dezelfde prompt en bestanden. Geef de verwachte antwoorden en andere runs niet mee. Nog geen runs ontvangen.

### T10 — Run 1 met lokale PDF-afdrukken

Ontvangen uitvoer: 1 minuut en 3 seconden. Transcript toont lokale PDF-verwerking en visuele inspectie, zonder zichtbare webzoekacties.

**Werkelijk gebruikte bestanden:**
- `/Users/killianmersseman/Downloads/Hermès International: 2026 Half-year Results.pdf`
- `/Users/killianmersseman/Downloads/LVMH: Accelerating growth in the second quarter; solid.pdf`

Dit zijn PDF-afdrukken van de publicaties, niet de eerder gedownloade originele PDF’s onder output/pdf. De kerncijfers zijn gelijk aan de vooraf gecontroleerde verwachtingen. Gebruik in Run 2 exact deze afdrukken voor herhaalbaarheid; geef Run 1 of de verwachtingen niet mee. De andere paginanummering is op zichzelf geen fout.

| Controlepunt | Run 1 | Vergelijking met verwachting |
|---|---|---|
| Hermès | 4.094 / 3.905 miljoen EUR; 4,8% gerapporteerd; 4,839948…% berekend → 4,8%; verschil 0,0 procentpunt afgerond | Correct |
| LVMH | 19.524 / 19.499 miljoen EUR; 0,128211…% berekend → 0,1%; gerapporteerd kwartaalpercentage voor dezelfde maatstaf niet gevonden | Correct volgens vooraf onderzochte publicatie |
| Periode | April–juni 2026 tegenover april–juni 2025 bij beide | Correct; geen halfjaargroei gebruikt |
| Andere definities | Hermès 6,7% constante wisselkoersen; LVMH 3,0% organisch apart | Correct; niet als hoofdmaatstaf gebruikt |
| Vorm | Eén compacte rij; bedragen, controle en bronnen in onderbouwing | Zoals gewenst |
| Bronpagina’s | Hermès p. 8 en 6; LVMH p. 6 en 3 in afdrukken | Nieuwe paginanummering; exacte verwijzingen nog niet afzonderlijk gecontroleerd |

**Status:** kernuitvoer stemt overeen met de vooraf gecontroleerde verwachtingen. Studentbeoordeling van Run 1 nog gevraagd; Run 2 nog niet ontvangen. Aanvullende claims over ontbrekende precisie en EUR/USD-koers niet afzonderlijk gecontroleerd.

### T10 — Run 2 met dezelfde PDF-afdrukken

Ontvangen uitvoer: 1 minuut en 2 seconden. Het gedeelde transcript toont lokale PDF-verwerking en visuele inspectie, zonder zichtbare webzoekacties. De genoemde publicaties zijn dezelfde als in Run 1; de Hermès-bestandsnaam toont een andere Unicode-weergave van het accent, zonder aanwijzing voor gewijzigde inhoud.

- Hermès: 4.094 / 3.905 miljoen EUR; +4,8% gerapporteerd en afgerond berekend; verschil 0,0 procentpunt, vóór afronding circa +0,03995 procentpunt. Gelijk aan Run 1 en verwachting.
- LVMH: 19.524 / 19.499 miljoen EUR; +0,1% berekend; gerapporteerde Q2-groei op dezelfde basis niet gevonden. Gelijk aan Run 1 en verwachting.
- Beide: april–juni 2026 tegenover april–juni 2025; geen halfjaargroei gebruikt.
- Hermès +6,7% bij constante wisselkoersen en LVMH +3,0% organisch afzonderlijk gehouden, met verschillende definities benoemd.
- Compacte eerste tabel en onderbouwing eronder behouden; bronpagina’s gelijk aan Run 1 (Hermès p. 8 en 6; LVMH p. 6 en 3). Exacte afdrukverwijzingen nog niet afzonderlijk gecontroleerd.
- Geen wisselende kernuitvoer vastgesteld (F6). Verschillen in plusnotatie en weergave van ongeronde berekeningen veranderen de kernwaarden niet.

**Studentbeoordeling T10:** beide runs geslaagd. Beide stemmen in kernuitvoer overeen met de vooraf gecontroleerde verwachtingen; geen wisselende kernuitvoer vastgesteld (F6). Aanvullende ontbrekende-informatieclaims blijven niet afzonderlijk gecontroleerd.

**T10-eindstand voor omzetgroei:** 2 op 2 geslaagd, 100% (n = 1 input, 2 runs).

**T06–T10 gezamenlijk:** 10 op 10 runs door de student als geslaagd beoordeeld, 100% (n = 5 verschillende inputs, elk 2 runs), uitsluitend voor de gekozen omzetgroeiscope. Dit is geen eindscore voor de volledige testset T01–T10 of voor FCF, schuld en risico’s.

## Controle T01–T05 — huidige stand, 8 oktober 2026

Deze controle vergelijkt de bestaande vastgelegde verwachtingen, runs en promptversies. Geen nieuwe bronvalidatie of modelrun uitgevoerd. Historische runs blijven beoordeeld tegenover de toen gebruikte instructies; latere regels worden niet met terugwerkende kracht toegepast.

| Input | Wat vaststaat | Wat nog nodig is vóór definitieve beoordeling |
|---|---|---|
| T01 Netflix/Uber | Twee v1-runs, één oudere v2-run. Financiële kernbedragen gelijk; oude v2 gebruikt gemeenschappelijk halfjaar. V1-run 1 bevat zichtbare webzoekacties en context.md. | Testcondities van beide oorspronkelijke runs verduidelijken; risico’s en aanvullende bronclaims controleren; oordeel student vastleggen. Eén v2-run is geen paar. Huidige keuzevraagregel niet getest door deze oudere automatische halfjaarkeuze. Afwijkende eenheden niet automatisch F4 noemen: uniforme miljoenenpresentatie werd pas later explicieter. |
| T02 Amazon/Alphabet | Twee v2-runs; dezelfde kwartaal-FCF en omzetgroei. Voorbereiding miste eerst Alphabets kwartaalpassage; die is na Run 1 gecontroleerd. | Verschil in zekerheid over Alphabet-schuld beoordelen tegen de bron (mogelijke F6 in onzekerheidslabel, geen verschillend schuldbedrag). Risico’s/aanvullende bronnen en geen-web/lege-context-condities nog controleren; oordeel student vastleggen. Correctie voorbereiding niet als modelmisser tellen. |
| T03 S&P/Moody’s | Twee linkruns stoppen volgens leesbaarheidsregel; twee extra runs met lokale Moody’s-PDF leveren cijfers. Beide extra runs tonen S&P-bedrijfs-FCF 2.249 in plaats van gekozen uniforme 2.411. | Student moet aangeven of aanvullende uniforme-FCF-instructie werkelijk in beide PDF-runs stond. Zo ja: verwachte hoofdmaatstaf niet gevolgd; zo nee: invoerverschil. Linkruns apart bewaren als toegangsfalen; correcte stop niet automatisch F5. Bronclaims/risico’s en testcondities extra runs nog beoordelen. |
| T04 Novo/Lilly | Twee runs; financiële kerncijfers volgen de verwachtingen, uniforme FCF-formule en eigen valuta. | Studentbeoordeling beide runs; risico’s/gevolgen en bronpagina’s controleren; testcondities vastleggen. IFRS/US GAAP alleen in Run 2 expliciet genoemd; niet automatisch gehele Run 1 afkeuren zonder beoordeling van relevantie. |
| T05 NVIDIA/AMD | Twee runs; periode- en FCF-beperkingen herkend. Run 1 mist AMD’s expliciete 50% en gebruikt berekende 50,1%; Run 2 gebruikt gerapporteerde 50%. | Aantoonbare kernmisser Run 1: F3 (gerapporteerde groei gemist); verschil tussen beide runs: F6. Oordeel student over Run 1/2 nog vastleggen; aanvullende risico’s/bronclaims en testcondities nog controleren. |

**Geen totaalscore vastgesteld:** T06–T10 zijn 10/10 geslaagd binnen omzetgroei; de oudere T01–T05 hebben een bredere scope, verschillende promptversies en deels andere testcondities. Die resultaten niet zonder uitleg combineren tot één uniforme meting.

**Buurtest:** nog niet uitgevoerd. Student werkt thuis en kan wegens overlap met bachelorproef niet naar de les komen; geen vrijstelling of goedgekeurd alternatief vastgesteld.

### T03 — Verduidelijking door de student

Op 8 oktober 2026 antwoordt de student “weet ik niet meer” op de vraag of de aanvullende uniforme-FCF-instructie in beide PDF-runs stond.

- De exacte aanvullende invoer is niet meer vast te stellen. Beide PDF-runs tonen S&P-bedrijfs-FCF 2.249 miljoen USD, tegenover de vooraf gekozen uniforme berekening 2.411 miljoen USD.
- Dit blijft een zichtbare afwijking tegenover de gekozen verwachting, maar is geen bewezen instructiefout: mogelijk ontbrak de aanvullende instructie. Geen definitieve foutklasse of succesbeoordeling voor deze FCF-keuze vastgesteld.
- Voor een gecontroleerde nieuwe test: leg de exacte prompt en aanvullende instructie vooraf vast, gebruik dezelfde twee lokale rapporten in twee onafhankelijke lege sessies zonder websearch, en houd de nieuwe runs apart van de historische pogingen. De oorspronkelijke resultaten blijven bewaard.

### T05 — Studentbeoordeling en correctie van de instructietijdlijn

De student verduidelijkt: “ik had dit toen nog niet vermeld welke de tool moest gebruiken, dit heb ik pas vanaf T06 gedaan, dus Run 1 is niet geslaagd”.

- **Run 1: niet geslaagd**, volgens de student.
- De expliciete persoonlijke keuze voor het gerapporteerde bedrijfscijfer tegenover de eigen controleberekening is volgens de student pas vanaf T06 meegegeven. Die latere verduidelijking mag niet met terugwerkende kracht als werkelijk meegegeven T05-instructie worden behandeld.
- De opgeslagen eerdere promptteksten bevatten wel een voorkeur voor gerapporteerde omzetgroei. De exact gebruikte T05-invoer en de timing van tekstwijzigingen zijn hiermee niet volledig gereconstrueerd; geen bewezen overtreding van de later verduidelijkte keuze claimen.
- De feitelijke afwijking blijft: Run 1 meldt AMD’s gerapporteerde percentage niet gevonden en berekent 50,1%; Run 2 vermeldt gerapporteerd 50,0%. Tegenover de vooraf vastgelegde verwachting is het gerapporteerde percentage gemist (F3); de keuze en het label wisselen tussen runs (F6). Dit is geen rekenfout in 50,1%.
- **Run 2: studentbeoordeling nog niet expliciet ontvangen.** Geen definitieve eindscore voor T05 vastgesteld.

### T05 — Beoordeling Run 2

De student bevestigt met “ja” dat Run 2 geslaagd is voor het besproken omzetgroeicontrolepunt: AMD 50,0% gerapporteerd.

**T05-score voor dit omzetgroeicontrolepunt:** 1 op 2 geslaagd, 50% (n = 1 input, 2 runs). Run 1 niet geslaagd; Run 2 geslaagd. Dit is geen volledige validatie van FCF, schuld, risico’s of alle bronclaims in T05. De expliciete persoonlijke keuze voor bedrijfscijfers kwam volgens de student vanaf T06; historische runs blijven afzonderlijk beoordeeld.

### T04 — Studentbeoordeling financiële kerncijfers

De student antwoordt “geslaagd” op de vraag of beide T04-runs geslaagd zijn voor de financiële kerncijfers (FCF, schuld en omzetgroei), met duidelijk vermelde oorspronkelijke valuta.

**T04-score binnen deze scope:** 2 op 2 geslaagd, 100% (n = 1 input, 2 runs). Dit oordeel valideert niet automatisch de risicoselecties, alle aanvullende bronclaims of de nog niet volledig vastgelegde testcondities.

### T02 — Voorkeur bij onzekerheid

Student: “bij onzeker liefst ook vermelden waarom zodat ik kan beslissen”. Dit is een voorkeur, nog geen succesbeoordeling van beide T02-runs. Run 1 vermeldde als reden mogelijke dubbeltelling bij afzonderlijk optellen van 1,3 miljard opgenomen krediet naast de schuldtabel van 100.164 miljoen USD. Of die onzekerheid bronmatig noodzakelijk was, blijft nog te controleren. De B5-regel in prompt-v2 is na de bestaande runs concreter gemaakt; deze wijziging is nog niet getest.

### T02 — Definitieve studentbeoordeling binnen de financiële kernscope

Student: “de schuld is wel bruikbaar maar niet volledig geslaagd om die redenen beide runs dus”.

- Beide runs leveren bruikbare schuldinformatie, maar worden door de student niet volledig geslaagd beoordeeld wegens de onopgeloste schuldonzekerheid en het verschil in onzekerheidslabel.
- **Score volledig geslaagde financiële kernruns T02: 0 op 2, 0% (n = 1 input, 2 runs).** Dit betekent niet dat alle cijfers fout zijn: FCF en omzetgroei komen overeen en het schuldentabelbedrag is gelijk.
- **F6:** zekerheid/label over Alphabet-schuld wisselt tussen runs. Geen bewezen fout schuldentotaal (F1) vastgesteld; broncontrole over mogelijke dubbeltelling blijft open.
- Aanvullende risicobronnen en testcondities zijn niet volledig gevalideerd.

### T01 — Studentbeoordeling: gecorrigeerd naar v2

De eerdere interpretatie van “enkel run 2 bruikbaar en geslaagd” als oordeel over v1 Run 2 was onjuist. De student verduidelijkt: “ik bedoel enkel V2 niet V1”.

- **De enige ontvangen oudere v2-run is bruikbaar en geslaagd volgens de student.** Deze gebruikt voor beide bedrijven halfjaar-FCF en dezelfde eenheid.
- **T01-v2 tussenstand: 1 op 1 geslaagd (n = 1 input, 1 run).** Er is nog geen tweede onafhankelijke run met exact dezelfde oudere v2-instructies vastgelegd.
- **Geen definitieve studentbeoordeling van de twee v1-runs ontvangen.** De eerdere score 1/2 voor v1 vervalt; geen afkeuring of foutklasse voor v1 aan deze uitspraak verbinden.
- De beoordeling betreft de bruikbaarheid van de ontvangen oudere v2-uitvoer; aanvullende bronclaims blijven niet volledig gecontroleerd. Latere promptwijzigingen worden niet met terugwerkende kracht toegepast.

### T01 — Oudere v2 teruggevonden

De opgeslagen week-2-versie van prompt-v2.md is teruggevonden in commit b81ffb4 en ongewijzigd gekopieerd naar `build/prompt-v2-week02.md`. Deze schrijft bij ontbrekende kwartaal-FCF automatisch hetzelfde halfjaar voor beide bedrijven voor en gebruikt uniforme miljoenen USD; dat sluit aan bij de geregistreerde oudere v2-run. Dit bewijst niet de exacte destijds geplakte chatinvoer, maar levert een gedateerde, reproduceerbare promptversie op. De huidige prompt-v2.md is niet teruggedraaid.

Voor een herhaling deze oudere versie gebruiken, niet de huidige v2. Werkelijk gebruikte lokale rapportbestanden nog vastleggen; een wijziging van links naar PDF’s expliciet registreren en niet als identieke historische invoer voorstellen. Nieuw gesprek, zonder websearch en zonder test-set.md. Nog geen nieuwe run uitgevoerd.

### T01 — Nieuwe lokale run met opgeslagen oudere v2

Ontvangen uitvoer: 2 minuten en 44 seconden. Het transcript toont lokale PDF-verwerking en visuele inspectie, zonder zichtbare webzoekacties.

- Werkelijke bestanden: `/Users/killianmersseman/Documents/Sem 1 2026/AI/nflx-20260630.pdf` en `/Users/killianmersseman/Documents/Sem 1 2026/AI/uber-20260630.pdf`.
- Bedrijven/documenten: Netflix Inc. en Uber Technologies Inc., beide Form 10-Q tot 30 juni 2026.
- Financiële kerncijfers gelijk aan oudere v2-run en gecontroleerde verwachtingen: Netflix halfjaar-FCF 6.619,2 miljoen USD berekend; Uber 5.078,0 gerapporteerd; schuld 14.309,3 / 12.723,0 miljoen USD; gerapporteerde kwartaalomzetgroei 13,0% / 12,0%.
- Gemeenschappelijke FCF-periode januari–juni 2026, uniforme miljoenen USD, oorspronkelijke eenheden/formules in onderbouwing. Automatische halfjaarkeuze volgt de oudere v2, niet de huidige keuzevraagregel.
- Geen extra omzetgroeicontroleberekening: de opgeslagen oudere v2 vraagt die alleen bij ontbrekend gerapporteerd percentage; geen latere regel achteraf toepassen.
- Meer risico’s dan in oudere v2-run, binnen maximum van vijf per bedrijf; andere expliciet onderbouwde selecties waren toegestaan. Nieuwe risicobronnen, paginanummering en aanvullende claims zijn nog niet afzonderlijk gecontroleerd.
- De kwalificatie van Ubers totale schuld als strikt rentedragend is nog niet volledig gecontroleerd; eerdere registratie vermeldt renteloze notes binnen het schuldtotaal. Numerieke overeenkomst bewijst deze afbakening niet.
- Bronvorm gewijzigd naar twee lokale PDF’s; historische oude v2-invoer is niet volledig gereconstrueerd. Deze run niet zonder voorbehoud als identieke herhaling van historische invoer presenteren. Voor een paar onder volledig vastgelegde lokale condities nog een nieuwe run met exact dezelfde lokale bestanden en `prompt-v2-week02.md` nodig.

**Status:** financiële kernbedragen stemmen overeen. Studentbeoordeling van deze nieuwe lokale run nog gevraagd. De historische v2-run blijft 1/1 geslaagd; geen nieuwe definitieve gecombineerde score vastgesteld.

### T01 — Studentbeoordeling nieuwe lokale run

Student bevestigt met “geslaagd” dat de nieuwe lokale run met oudere v2 geslaagd is voor de financiële kerncijfers.

**T01 nieuwe lokale reeks: 1 op 1 geslaagd (n = 1 input, 1 run).** Nog één onafhankelijke lokale run met dezelfde twee PDF’s en `prompt-v2-week02.md` nodig voor een paar onder vastgelegde condities. De historische oudere v2-run blijft afzonderlijk geslaagd geregistreerd; niet zonder voorbehoud tot een identiek testpaar combineren. Risicobronnen en de rentedragende afbakening van Uber-schuld blijven niet volledig gecontroleerd.

### T01 — Tweede run onder vastgelegde lokale condities

Ontvangen uitvoer: 2 minuten en 44 seconden. Transcript toont lokale PDF-verwerking en visuele inspectie, zonder zichtbare webzoekacties. Dezelfde Netflix- en Uber-PDF’s in `Documents/Sem 1 2026/AI` worden genoemd; voorgeschreven prompt is `prompt-v2-week02.md`.

| Controlepunt | Lokale Run 2 | Vergelijking met lokale Run 1 |
|---|---|---|
| FCF | Netflix 6.619,2 berekend; Uber 5.078,0 gerapporteerd, miljoen USD, januari–juni 2026 | Gelijk en overeenkomstig verwachting |
| Schuldboekwaarde | Netflix 14.309,3; Uber 12.723,0 miljoen USD op 30 juni 2026 | Bedragen gelijk; Run 2 labelt financiële schuld en benoemt Ubers 0,00%-coupon-notes expliciet, waar Run 1 hoofdtafel strikt rentedragend noemde |
| Omzetgroei | Netflix 13,0%; Uber 12,0%, gerapporteerd Q2; constante wisselkoersen apart 12,0% / 11,0% | Gelijk en overeenkomstig oudere v2 |
| Vorm | Compacte bedrijfskolommen, uniforme miljoenen USD, onderbouwing en afzonderlijke risicotabel | Gelijk aan gevraagde vorm |
| Aanvullende toelichtingen | Netflix beëindigingsvergoeding in CFO; Uber Brits bedrijfsmodel; 0%-notes en leasebeperkingen | Nieuwe of uitgebreidere bronclaims, nog niet afzonderlijk gevalideerd |
| Risico’s en bronnen | Andere selecties binnen toegestane vrijheid; Netflix-leases p. 13 tegenover p. 12 in Run 1 | Geen automatisch F6 voor toegestane risicoselectie; verwijzingsverschil nog controleren |

**Status:** kernbedragen gelijk; studentbeoordeling lokale Run 2 nog gevraagd. Geen definitieve score voor dit lokale testpaar. Schuldafbakening en aanvullende bronclaims blijven afzonderlijk zichtbaar als beperking.

### T01 — Eindbeoordeling nieuwe lokale reeks

De student beoordeelt ook lokale Run 2 met “geslaagd”, voor de financiële kerncijfers.

**T01 lokale reeks met `prompt-v2-week02.md`: 2 op 2 geslaagd, 100% (n = 1 input, 2 runs).** Beide gebruiken dezelfde vastgelegde lokale PDF’s; transcript toont geen webzoekacties. De oudere historische v2-run blijft apart. Dit valideert niet automatisch alle risicobronnen, aanvullende claims of de strikt rentedragende afbakening uit lokale Run 1; verschil in schuldlabel blijft zichtbaar.

### T03 — Afsluiting met expliciete beperking

De student bevestigt met “ja” dat T03 wordt afgesloten als **bruikbaar, met beperking**, zonder nieuwe runs.

- De twee bestaande PDF-runs blijven bewaard met S&P-bedrijfs-FCF 2.249 miljoen USD. De gekozen uniforme berekening is 2.411 miljoen USD; verschil veroorzaakt door 162 miljoen aan minderheidsuitkeringen in de bedrijfsdefinitie.
- De aanvullende instructie is niet meer bekend; geen bewezen instructiefout vaststellen.
- Geen nieuwe test vereist voor deze door de student gekozen afsluiting. Beide PDF-runs tellen **niet als volledig gecontroleerd geslaagd**; dit is een onvolledige beoordeling, geen bewezen cijferfout.
- De eerdere linkruns blijven afzonderlijke toegangsproblemen. Geen volledige totaalscore voor T01–T10 suggereren zonder verschillen in scope, prompt en testcondities te melden.

## Gerichte hertest — nieuwe FCF-perioderegel, T01

Na de studentreflectie is een afzonderlijke test ontvangen met de huidige prompt-v2.md en dezelfde lokale Netflix/Uber-PDF’s, zonder vooraf meegegeven periodekeuze. Het transcript toont lokale verwerking en visuele inspectie, zonder zichtbare webzoekacties.

- Tool identificeert beide rapporten, meldt dat Netflix kwartaalcomponenten bevat maar Uber alleen halfjaarcomponenten/FCF.
- Tool toont twee beschikbare gemeenschappelijke perioden: januari–juni 2026 en januari–juni 2025, met bronverwijzingen.
- Tool vraagt “Welke periode kies je: 1 of 2?” en wacht. Geen FCF-vergelijking uitgevoerd vóór een keuze.
- Gedrag volgt de nieuwe periodekeuzeregel. De oudere lokale T01-v2-runs schakelden automatisch naar halfjaar 2026, zoals hun toenmalige instructie voorschreef.
- Deze test beoordeelt alleen het tonen van keuzes en wachten, niet de volledige financiële vergelijking. Andere promptonderdelen zijn sinds de oudere v2 ook gewijzigd; geen gecontroleerd causaal experiment waarbij uitsluitend één tekstregel verschilt claimen.
- Exacte bronverwijzingen niet opnieuw gecontroleerd. Uber FCF wordt nu “gedrukte p. 35, PDF-p. 71” genoemd, terwijl eerdere runs gedrukte p. 44 noemden. Het verschil blijft open; een correcte keuzevraag valideert niet automatisch deze verwijzing.

**Studentbeoordeling:** keuzevraagtest geslaagd. Verwacht keuzevraaggedrag waargenomen: beschikbare perioden tonen, keuze vragen en wachten. Score binnen deze gerichte gedragstest: 1 op 1 geslaagd (n = 1 input, 1 run). Geen volledige financiële vergelijking uitgevoerd en nog geen periode gekozen binnen deze hertest.
