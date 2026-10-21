# Excel-opvolging

Bestand: `../../outputs/kwartaalopvolging/kwartaalopvolging.xlsx`.

## Werkwijze

1. Geef één nieuw rapport met ticker aan de AI en gebruik `../prompt-v3-enkel-bedrijf.md`.
2. De AI extraheert drie maatstaven, schrijft een JSON-run en voert `werk-bij.mjs` uit. Sluit het Excel-bestand tijdens de update.
3. Open Excel en controleer de cijfers op de genoemde bronpagina’s. Zet de status per meting op `Gecontroleerd` in **Historiek**. Sla het bestand op vóór de volgende update.
4. Bekijk **Vergelijking** voor de laatst aangeleverde periode per bedrijf en maatstaf in miljoen USD. Kies in **Grafieken** het FCF-periodetype (B6), jaar (B7) en kwartaal Q1–Q4 (B8). De datums in F5:F8 worden automatisch berekend. Schuld gebruikt het einde van het gekozen kwartaal; omzetgroei het gekozen kwartaal. Handmatig datums invullen is niet nodig.

De kwartaalkeuze gebruikt kalenderkwartalen. Rapporten met afwijkende fiscale begin- of einddatums blijven correct gedateerd in Historiek en worden niet ongemerkt aan een ander kalenderkwartaal toegewezen. Alleen exact passende perioden verschijnen. Halfjaar-FCF kan bij Q2 (januari–juni) of Q4 (juli–december); negen maanden bij Q3 en jaar bij Q4. Een ongeldige combinatie krijgt een zichtbare melding en toont geen FCF, terwijl schuld en kwartaalgroei hun eigen kwartaal blijven volgen. Jaar en kwartaal blijven behouden bij volgende imports.

## Automatisering

```sh
node build/excel/werk-bij.mjs build/excel/runs/<nieuwe-run>.json
```

De bestaande historiek en controlestatussen worden ingelezen. De sleutel is ticker + maatstaf + einddatum. Nieuwe sleutels worden toegevoegd; conflicten worden geweigerd zonder het Excel-bestand te vervangen. Het script bewaart tijdelijk een vorige versie in de systeem-tmpmap. De huidige versie kan niet twee alternatieve FCF-definities voor dezelfde ticker en einddatum opslaan; leg de gekozen definitie vast en corrigeer bestaande rijen bewust.

De grafieken reageren op bestaande waarden en periodefilters; het script bouwt de tabellen opnieuw na een nieuwe run. Nieuwe rijen handmatig onderaan Historiek invoegen vernieuwt de laatstebedrijfsselectie niet vanzelf: voer dan `node build/excel/werk-bij.mjs` uit. De bronbereiken voor grafieken hebben plaats voor minstens 2.000 metingen en worden door het script verder vergroot als dat nodig is.

De drie grafieken vergelijken bedrijven. Trendgrafieken over meerdere kwartalen zijn een volgende uitbreiding zodra er meerdere perioden beschikbaar zijn. Er is geen achtergrondtaak die rapporten zelf ophaalt. Het oorspronkelijke startbestand bevat zes gedeelde Netflix-/Uber-metingen; daarna zijn drie NVO- en drie LLY-metingen toegevoegd. De gebruiker heeft deze bronnen bevestigd. Andere bedrijven blijven leeg tot een rapport is verwerkt.

## Automatisch naar USD

Iedere update haalt via HTTPS de recentste ECB-referentiekoersen op. De ECB noteert valuta per EUR. Omrekening: `USD per bronvaluta = USD per EUR / bronvaluta per EUR`. USD naar USD is dus 1. De omrekening in Excel is een formule: `bronbedrag × USD per bronvaluta`. Alle geldbedragen blijven in miljoenen; groeipercentages worden niet omgerekend.

- **Historiek:** originele bedragen en bronvaluta blijven in G en H. Q bevat de USD-koers, R de koersdatum en S het omgerekende bedrag of ongewijzigde groei.
- **Wisselkoersen:** ECB-koersen, berekende USD-koersen, koersdatum, ophaaltijd en bron.
- **Vergelijking en Grafieken:** geld in USD; kwartaal-/halfjaarfilters blijven van toepassing.
- `koersen/JJJJ-MM-DD.json` bewaart de opgehaalde koersen per koersdatum; `koersen/laatste.json` bevat de recentste ophaalgegevens.

Alle bestaande perioden worden bij een update opnieuw gewaardeerd met dezelfde recentste referentiekoers. Dit is een actuele weergave, geen omrekening met de historische kwartaalgemiddelde of balanskoers. Oudere USD-weergaven kunnen daardoor veranderen terwijl de originele cijfers gelijk blijven.

Alleen de koersen en USD-weergave vernieuwen:

```sh
node build/excel/werk-bij.mjs
```

Sluit Excel tijdens het bijwerken. Alleen openen vernieuwt de koersen niet. De ECB publiceert op werkdagen; de werkelijk gepubliceerde koersdatum is zichtbaar. Bij een netwerkfout, een ontbrekende valuta, een koers ouder dan zeven kalenderdagen of een afwijkende koers voor dezelfde gearchiveerde datum stopt de update zonder Excel te vervangen. Er is geen stille terugval op oude of geschatte koersen.

Voor reproduceerbare softwaretests bestaat `--koersenbestand <lokaal-ECB-XML>`. Normale updates gebruiken dit argument niet. Bronbevestiging kan expliciet via `--bevestig <ticker>` worden geregistreerd, uitsluitend na controle door de gebruiker; bronnotities en beperkingen blijven behouden.

## Runtime

Het script gebruikt de lokaal meegeleverde `@oai/artifact-tool`-runtime. Op een andere computer moet die beschikbaar zijn, eventueel via `ARTIFACT_NODE_MODULES`. Er zijn geen API-sleutels nodig voor de Excel-update zelf.
