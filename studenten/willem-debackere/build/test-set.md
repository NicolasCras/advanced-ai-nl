# Testset

Input = de tekst van de homepage, opgehaald op 8 oktober 2026. Volledige tekst per test in `inputs/T0X.txt`.
Juiste antwoord ingevuld **voor** de tool draait. Elke input twee keer, telkens in een nieuw gesprek.

| ID | Input | Juiste antwoord | Waarom | Run 1 | Run 2 |
|---|---|---|---|---|---|
| T01 | Stebaro, Lochristi — stebaro.be | doelgroep `ja`, lead `ja`. E-mail info@stebaro.be, tel 09 345 93 99, Groenstraat 2, 9185 Lochristi, btw BE0451427211 | Trappenmakerij, houten trappen op maat. E-mail staat letterlijk op de site. | ja · ja · info@stebaro.be ✅ | ja · ja · info@stebaro.be ✅ |
| T02 | Trappen Smet, Zulte — trappensmet.be | doelgroep `ja`, lead `geen e-mail`. Tel +32 (0)56 61 34 39, Staatsbaan 289, 9870 Zulte, btw BE 0441.080.477 | Maakt houten trappen. Het e-mailadres is verborgen: in de tekst staat alleen "[email protected]". Raden (info@trappensmet.be) = verzonnen. | ja · geen e-mail · onbekend ✅ | ja · geen e-mail · onbekend ✅ |
| T03 | Deram Systems, Temse — deramsystems.be | doelgroep `nee`, lead `nee` | Plaatst PVC- en aluminium ramen (Deceuninck, Aliplast). Werkt niet zelf met hout. E-mail info@deramsystems.be staat er wel. | nee · nee ✅ | nee · nee ✅ (adres zonder postcode, F6 klein) |
| T04 | Menuiserie Richard, Jodoigne — menuiserie-richard.be (Frans) | doelgroep `ja`, lead `geen e-mail`. Tel 0495 63 79 03, 1370 Jodoigne, btw BE 0571 897 449 | Maakt houten trappen en schrijnwerk. Alleen een knop "Envoyer un e-mail", geen adres in de tekst. | ja · geen e-mail · onbekend ✅ | ja · geen e-mail · onbekend ✅ |
| T05 | DL Interieur, Destelbergen — dl-interieur.be | doelgroep `ja`, lead `ja`. E-mail info@dl-interieur.be, tel +32 479 63 21 74, Burgstraat 78/C003, 9070 Destelbergen | Binnenschrijnwerk: keukens en kasten in MDF, laminaat, fineer **of** massief hout. Maakt keukens en kasten, ook in massief hout: rubberwood past erin. Was een twijfelgeval; beslist op 8 oktober. | ja · ja · info@dl-interieur.be ✅ | ja · ja · info@dl-interieur.be ✅ |
| T06 | Hendrickx Hout, Leest — hendrickx-hout.be (houthandel) | doelgroep `nee`, lead `nee` | Houthandel. Aan een andere houthandel verkopen we niet. | nee · nee ✅ | nee · nee ✅ |
| T07 | Bautier, Brussel — bautier.com (Engels, 2 e-mails) | doelgroep `nee`, lead `nee` | Laat meubels maken in Duitsland, koopt zelf geen hout. | ja · ja · info@bautier.com ❌ F1 | onzeker · nee ❌ F6 |
| T08 | ER-Bouw — er-bouw.be (renovatie-aannemer, 2 e-mails) | doelgroep `nee`, lead `nee` | Plaatst keukens, maakt ze niet. Plaatsen is geen maken. | nee · nee ✅ | nee · nee ✅ |
| T09 | Woontheater — woontheater.be/en (Engels, kort, geen e-mail) | doelgroep `ja`, lead `geen e-mail` | Maakt massieve meubels en keukens, maar geen e-mail: geen klant, er zijn betere alternatieven. | ja · geen e-mail ✅ | ja · geen e-mail ✅ |
| T10 | Victor Renoveert — victorrenoveert.be (totaalrenovatie) | doelgroep `nee`, lead `nee` | Totaalaannemer, coördineert. We willen enkel bedrijven die zelf in hout werken. | nee · nee ✅ | nee · nee ✅ |

Run: 8 oktober 2026, Claude Sonnet 5.5 via `claude -p`, elke run een nieuw gesprek zonder tools. Formaat Run-kolom: doelgroep · lead · e-mail.
Inputs gezocht door Claude op mijn vraag; de juiste antwoorden heb ik zelf goedgekeurd voor de runs.

**Resultaat v1:** 10/10 juist op doelgroep, lead en e-mail (n = 5, elk 2×). Geen verzonnen e-mail, ook niet bij T02 ("[email protected]").
Te makkelijk? Waarschijnlijk. Week 3: lastigere inputs (site die rubberwood/hevea vermeldt, handelaar die hout doorverkoopt, meerdere e-mailadressen, Engelstalige site).

## Week 3 — run met v1 (+ want-regel), alle tien

8 oktober 2026, Claude Sonnet 5.5 via `claude -p`, nieuw gesprek per run, geen tools. T01–T05 opnieuw gedraaid met de aangepaste prompt: zelfde resultaat als hierboven, 10/10.
T06–T10: juiste antwoorden zelf beslist vóór de run. Inputs gezocht door Claude.

**Resultaat: 18 op 20 juist (n = 10, 2 runs).**
- T07 Bautier, run 1: `ja` → F1 (fout, vol overtuiging). Zag "studio en workshop in Brussel" en miste dat de meubels in Duitsland gemaakt worden.
- T07 Bautier, run 2: `onzeker` → F6 (wisselend). Ander antwoord dan run 1 bij dezelfde input.
- Geen verzonnen e-mail (F2) in 20 runs.

## Wijziging v1 → v2

Regel toegevoegd: "Verkoopt of plaatst het bedrijf alleen producten die ergens anders gemaakt worden? Dan "nee", want het koopt zelf geen hout."
T07 opnieuw, 2 runs met v2: `nee` · `nee` ✅ ✅. Nog geen bewijs: 1 input, 2 runs, en de andere 9 nog niet opnieuw gedraaid met v2.

## Week 4 — run met v2, alle tien

14 oktober 2026, Claude Sonnet 5.5 via `claude -p --output-format json`, nieuw gesprek per run, geen tools. Formaat: doelgroep · lead.

| ID | Juist | Run 1 | Run 2 |
|---|---|---|---|
| T01 | ja · ja | ja · ja ✅ | ja · ja ✅ |
| T02 | ja · geen e-mail | ja · geen e-mail ✅ | ja · geen e-mail ✅ |
| T03 | nee · nee | nee · nee ✅ | nee · nee ✅ |
| T04 | ja · geen e-mail | ja · geen e-mail ✅ | ja · geen e-mail ✅ |
| T05 | ja · ja | ja · ja ✅ | ja · ja ✅ |
| T06 | nee · nee | nee · nee ✅ | nee · nee ✅ |
| T07 | nee · nee | ja · ja ❌ F1 | ja · ja ❌ F1 |
| T08 | nee · nee | nee · nee ✅ | nee · nee ✅ |
| T09 | ja · geen e-mail | ja · geen e-mail ✅ | ja · geen e-mail ✅ |
| T10 | nee · nee | nee · nee ✅ | nee · nee ✅ |

**Resultaat v2: 18 op 20 juist (n = 10, 2 runs).** F1: 2 (beide T07). F2: 0.
T07 met exact dezelfde v2-prompt: op 8 oktober 2× `nee`, op 14 oktober 2× `ja`. Dat is F6 over sessies heen: de wijziging van week 3 hield geen stand.
Reden van de tool beide keren: "eigen studio en workshop in Brussel". Precies wat de buurtest al zei: "workshop" bewijst niet dat ze zelf hout verwerken.
