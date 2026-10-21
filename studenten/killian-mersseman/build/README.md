# Kwartaalrapporten vergelijken

Deze tool helpt mij als beginnende belegger die aan stockpicking doet om twee kwartaalrapporten overzichtelijk te vergelijken. De uitvoer bevat FCF, totale rentedragende schuld, omzetgroei en expliciet genoemde risico’s, met bronverwijzingen. Ik beoordeel de gegevens zelf.

## Bestanden

- `taak.md`: mijn taak en oorspronkelijke inputideeën.
- `prompt-v1.md`: oorspronkelijke prompt.
- `prompt-v2.md`: huidige werkversie, met de auditlabels B1–B6. De omzetgroei- en vormregels zijn getest met T06–T10; de gewijzigde FCF-perioderegel is in één gerichte keuzevraagtest geslaagd (geen volledige financiële vergelijking).
- `test-set.md`: tien testinputs (T01–T10), verwachte antwoorden, ontvangen runs en resterende controles.
- `log.md`: wijzigingen, teststatus en volgende stappen.

## Gebruik

1. Open per test een nieuw tijdelijk gesprek zonder geheugen en zonder web search.
2. Kopieer uit `prompt-v2.md` alles vanaf “Instructies om te kopiëren”, inclusief de voorbeelden.
3. Voeg bij het inputonderdeel de twee rapporten als bestanden of volledige tekst toe. Geef `test-set.md` niet mee, want daarin staan de verwachte antwoorden.
4. De tool gebruikt bij voorkeur FCF over hetzelfde kwartaal. Lukt dat niet, dan toont hij beschikbare gemeenschappelijke perioden en wacht hij op mijn keuze. Noteer die keuze bij de run.
5. Controleer de uitvoer zelf aan de hand van de rapporten en mijn vooraf vastgelegde verwachtingen. Leg de uitvoer, fouten en gebruikte promptversie vast in `test-set.md` en `log.md`.

## Nog te doen voor week 3

- Tien inputs zijn aanwezig. Controleer of minstens drie als lastig geval zijn onderbouwd en of alle vooraf vastgelegde verwachtingen en beoordelingen compleet zijn.
- Buurtest uitvoeren met drie inputs en alleen de prompt als instructie.
- Resterende bronclaims controleren en fouten classificeren met F1–F6.
- T06–T10 zijn afgerond: 10/10 geslaagde omzetgroeiruns (n = 5 inputs, elk 2 runs). Controleer T01–T05 en hun testcondities voordat een totaalscore voor alle tien inputs wordt vastgesteld.
- Gekozen FCF-perioderegel: oude v2 kiest automatisch halfjaar, huidige v2 toont keuzes en wacht; één gerichte gedragstest geslaagd. Vermeld dat ook andere promptonderdelen gewijzigd zijn en dat één test geen algemeen bewijs vormt.
- Mijn eigen post schrijven in `posts/week-03.md` en indienen vóór dinsdag 13 oktober 2026, 23:59.

## Nieuwe werkwijze week 4: één bedrijf per run, vergelijken in Excel

Ik volg NFLX, UBER, NVO, LLY, AMZN, GOOGL, SPGI, NVDA, AMD en CVX elk kwartaal op: ongeveer 40 bedrijfsupdates per jaar. Ik kies één bedrijf per run vanwege verschillende rapportagedagen.

- `prompt-v3-enkel-bedrijf.md`: nieuwe werkversie voor cijferextractie en Excel-update; nog niet volledig getest. Risicoanalyse valt buiten deze update.
- `excel/README.md`: gebruik van het update-script.
- `../outputs/kwartaalopvolging/kwartaalopvolging.xlsx`: vergelijking, grafieken met periodefilters en historiek met bronverwijzingen en controlestatus.
- `kosten.md`: meting van de eerdere sessie en mijn volume- en tijdsaannames. Eén volledige AMZN-agentrun is inmiddels gemeten; eigen promptdeel en context zijn niet apart vastgesteld.

De oorspronkelijke promptversies en testset blijven bewaard. Het lokale Excel-bestand bevat nu vijftien metingen voor NFLX, UBER, NVO, LLY en AMZN. De student heeft de eerste twaalf metingen bevestigd; AMZN staat nog te controleren; de inhoudelijke schuldbeperkingen blijven in de notities bewaard. NVO en LLY zijn elk met één nieuw rapport verwerkt; dit is nog geen brede validatie van v3. Op verzoek zoekt en downloadt de agent het officiële rapport voor één bedrijf; er is geen geplande achtergrondtaak.

## Stand bij indiening week 4

Post: `../posts/week-04.md` (500–800 woorden); scenario: `../scenario.md`; reflectie: `../reflecties/reflectie-1.md`. De reflectie krijgt een aparte commit. Kosten en schaalberekeningen staan in `kosten.md`.

Eindoverzicht bestaande beoordelingen staat bovenaan test-set.md: 15/20 expliciet geslaagd (75%; n = 10 inputs, 2 runs), 3 niet geslaagd, 2 onvolledig beoordeeld. Dit combineert verschillende scopes en promptversies en is geen uniforme nauwkeurigheidsmeting of validatie van v3. Geen nieuwe oordelen of testantwoorden ingevuld. Vastgelegd: F3 één geval, F6 twee runpaarverschillen, met overlap.

Eén volledige AMZN-agentrun is gemeten: $0,2244944 met de lesprijzen. Context en eigen promptdeel zijn nog niet apart vastgesteld. Een uniforme testreeks en die afzonderlijke kostenafbakening blijven inhoudelijke beperkingen. Peerreview staat nog open. Bron-pdf’s en Excel-uitvoer blijven volgens de algemene gitignore lokaal; bronlinks, JSON-extracties en scripts worden wel ingediend.
