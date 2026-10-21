# NVO — extractie uit één rapport

Bron: `build/rapporten/NVO/NVO-2026-06-30.pdf`, Novo Nordisk A/S, Company announcement 48/2026 van 4 augustus 2026. Dit financiële halfjaarrapport bestrijkt 1 januari t/m 30 juni 2026 en bevat afzonderlijke cijfers voor Q2 (1 april t/m 30 juni). Het rapport is leesbaar. Alleen deze lokale pdf is als financiële bron gebruikt; geen web search of externe documenten.

## Controletabel vóór import

Bedragen in miljoen DKK; geen valutaconversie.

| Maatstaf | Hoofdwaarde | Periode | Methode | Gedrukte en pdf-pagina | Status |
|---|---:|---|---|---|---|
| FCF | 42.524 | 01-04-2026 t/m 30-06-2026 | Gerapporteerd | 37, Appendix 7 — Free cash flow; hoofdwaarde ook p. 3 | Nog te controleren |
| Schuld | 140.127 | 30-06-2026 | Berekend, inclusief leases | 28, Appendix 3 — Condensed balance sheet; 37, Appendix 7 — Net debt | Onzeker |
| Omzetgroei | 2,0% | Q2 2026 tegenover Q2 2025 | Gerapporteerd, in DKK | 1, Profit and loss; 26, Appendix 1; 34, Appendix 7 | Nog te controleren |

## Aansluitingen en beperkingen

- **FCF:** 55.199 operationele kasstroom − 12.675 aankopen materiële vaste activa = 42.524, gerapporteerd voor Q2. Beide componenten zijn miljoen DKK. De definitie is vanaf 2026 gewijzigd; de vergelijkende cijfers in dit rapport zijn herzien. P. 27 vermeldt ook de gewijzigde classificatie van betaalde en ontvangen rente vanaf 2026. Dat beperkt vergelijking met ongewijzigde oudere rapporten. Er is geen halfjaarbedrag als kwartaalbedrag gebruikt.
- **Schuld:** niet-kortlopende Borrowings 121.794 + kortlopende Borrowings 18.333 = 140.127 miljoen DKK, zonder aftrek van kasmiddelen of effecten. Dit omvat 8.622 miljoen DKK leases volgens de aansluiting op p. 37; exclusief alle leases bedraagt Borrowings 131.505. Het rapport splitst operationele en financiële leases niet afzonderlijk uit. P. 14 noemt obligaties in EUR en CHF, maar geeft geen volledige coupon-/boekwaarde-uitsplitsing. Eventuele renteloze obligaties kunnen niet apart worden geïdentificeerd; er is niets stilzwijgend verwijderd. Daarom is de afbakening van de hoofdwaarde als vergelijkbare financiële schuld **Onzeker**. De waarde is het berekenbare Borrowings-totaal, geen nettoschuld of totale verplichtingen.
- **Omzetgroei:** omzet Q2 2026 78.488 en Q2 2025 76.857 miljoen DKK. Controle: `(78.488 / 76.857 - 1) × 100 = 2,122122903574164%`, gepresenteerd als 2,1%. Berekend minus gerapporteerd is +0,122122903574164 procentpunt, gepresenteerd als +0,1 procentpunt. Het rapport stelt de oorzaak niet expliciet vast. Hoofdwaarde blijft gerapporteerd 2,0%, opgeslagen als `0.02`. Bij constante valuta is de gerapporteerde groei afzonderlijk 3%. Adjusted groei is een andere maatstaf en is niet overgenomen als hoofdwaarde. De 340B-provisievrijval beïnvloedt de vergelijkingsbasis, zoals in het rapport beschreven; dit verklaart niet automatisch het afrondingsverschil.

De gebruiker moet de drie metingen nog controleren; deze extractie is geen vooraf vastgelegd testantwoord en levert op zichzelf geen succespercentage op.

## Import

Nieuwe run: `NVO-2026-06-30.json`. Update via `node build/excel/werk-bij.mjs build/excel/runs/NVO-2026-06-30.json`.

Update geslaagd: drie records toegevoegd, negen totaal. Na opnieuw inlezen waren alle zes bestaande records inhoudelijk identiek, inclusief controlestatus en toelichting. De opgeslagen NVO-waarden en statussen zijn gecontroleerd en de drie Excel-tabbladen zijn visueel nagekeken. Dit verifieert de verwerking van de extractie; de financiële broncontrole door de gebruiker staat nog open.

De grafieken gebruiken standaard USD en halfjaar-FCF. NVO is in DKK opgeslagen en de FCF is een kwartaalbedrag. Voor NVO-FCF moet de grafiekfilter op DKK, Kwartaal, 01-04-2026 t/m 30-06-2026 staan. Omzetgroei is een percentage en blijft over valuta heen zichtbaar voor exact dezelfde kwartaalperiode. De grafieken hebben geen valutaconversie.
