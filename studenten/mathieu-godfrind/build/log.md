# Logboek

Elke run, elk resultaat, elke wijziging. Wis nooit een fout.

| Datum | Versie | Wat ik deed | Resultaat | Fout of opvallend | Volgende stap |
|---|---|---|---|---|---|
| 2026-09-30 | v1 | Eerste prompt, vijf inputs in de testset, elk twee keer gedraaid | 10 op 10 juist (n = 5, 2 runs) | Geen fouten: testset te makkelijk? | Lastige inputs toevoegen |
| 2026-10-07 | v2 | Audit op de prompt: bouwsteen 4 (voorbeelden) ontbrak. Vier voorbeelden toegevoegd: GO, NO-GO (B + C), ONZEKER, NO-GO (A) | | | Testset naar tien |
| 2026-10-07 | v2 | Citatenregel aangepast: bij ontbrekende CE de lijst met certificaten citeren als die er is | | Voorbeeld 2 botste met de oude regel | |
| 2026-10-07 | v2 | Regel B herschreven met een "want": zonder CE mag je het niet verkopen in de EU, risico op blokkering en onverkoopbare stock | | | |
| 2026-10-07 | v2 | Telregel bovenaan de testset: label en juiste risico moeten kloppen, extra risico met echt citaat is geen fout, verzonnen citaat is altijd F2 | | T07 kan extra risico B uitlokken | |
| 2026-10-07 | v2 | Telregel aangevuld: bij `NO-GO` moeten alle verwachte risico's erbij, een gemist risico is F3 | | T08 is de eerste input met twee verwachte risico's (A, B) | |
| 2026-10-07 | v2 | Buurtest met Kobe op T07, T08, T10. Hij las alleen de prompt | 0 op 3 gelijk | T07: B i.p.v. D (zag geen supplement door "Snoepgoed"). T08: A, miste B (knuffel = speelgoed?). T10: ONZEKER door twijfel over nikkel, dat niet op de pagina staat | Mijn drie antwoorden blijven. Drie regels in de prompt |
| 2026-10-07 | v2 | Na de buurtest: beslisregel 4 (twee omschrijvingen → die met het meeste risico), speelgoedregel bij B, "want" bij beslisregel 3 (twijfel over een risico is geen ONZEKER) | | | Run 1: vijf inputs |
| 2026-10-07 | v2 | Run 1 op T06–T10, elk in een nieuw tijdelijk gesprek | 5 op 5 juist (n = 5, 1 run) | T07: twee keer risico D. T10: "licht" in de uitleg zonder gewicht in de input (aanname, geen citaat) | |
| 2026-10-07 | v3 | Eén wijziging (bouwsteen 2, regel): in de uitleg alleen wat op de pagina staat, geen "licht" of "klein" zonder gewicht of afmeting | | Aanleiding: T10 run 1 zei "licht" zonder gewicht in de input | T10 opnieuw draaien |
| 2026-10-07 | v3 | T10 opnieuw gedraaid in een nieuw tijdelijk gesprek | 1 op 1 juist (n = 1, 1 run) | "licht" is weg. De tool past de regel breder toe: "zonder vermelding van breekbaarheid" i.p.v. "niet breekbaar". Voorzichtiger, maar omslachtig | Thuis: alle tien met v3, twee runs |
| 2026-10-15 | v3 | 3 moeilijke inputs toegevoegd (T11–T13). Alle 13 twee keer gedraaid met `claude -p` (Haiku 5.5), elk in een apart gesprek | 24 op 26 juist (n = 13, 2 runs) | T05: 2 × F1. Regel 4 (meest riskante omschrijving) loste T07 op, maar breekt T05: de tool kiest "elektronisch" uit 4 producttypes. T12 run 2: extra risico A door "Niuniu Energy Drink" | |
