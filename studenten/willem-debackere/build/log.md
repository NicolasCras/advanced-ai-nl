# Logboek

## 2026-10-08 — v1, 5 inputs (week 2)
- Prompt: `prompt-v1.md`. Model: Claude Sonnet 5.5 via `claude -p`, nieuw gesprek per run, geen tools.
- T01–T05, 2 runs elk: **10 op 10 juist (n = 5, 2 runs)**.
- Klein verschil: T03 run 2 gaf het adres zonder postcode (F6, ander veld dan doelgroep/lead/e-mail).
- Waarschijnlijk te makkelijk.

## 2026-10-08 — v1 + want-regel, 10 inputs (week 3)
- Audit van de prompt op de zes bouwstenen. Ontbrak: voorbeelden (4) en elk "want" (2).
- Eén want toegevoegd: "Raad nooit een e-mailadres, want een geraden adres bestaat misschien niet."
- Vijf lastige inputs erbij (T06–T10): houthandel, Engelstalige meubelwinkel, renovatie-aannemer met 2 e-mails, korte Engelse site zonder e-mail, totaalaannemer.
- Alle 10, 2 runs elk: **18 op 20 juist (n = 10, 2 runs)**.
- Fouten: T07 run 1 F1 (`ja` i.p.v. `nee`), T07 run 2 F6 (`onzeker`). Geen F2.
- Oorzaak: de prompt zegt niet wat te doen met een bedrijf dat meubels verkoopt maar ze elders laat maken.

## 2026-10-08 — v2: één wijziging
- Reden vooraf: T07 ging fout omdat "maakt zelf" niet duidelijk was bij een winkel met studio.
- Wijziging (bouwsteen 2, regel met want): "Verkoopt of plaatst het bedrijf alleen producten die ergens anders gemaakt worden? Dan nee, want het koopt zelf geen hout."
- T07 opnieuw, 2 runs: `nee`, `nee` ✅.
- Nog geen bewijs: één input, twee runs. De andere 9 nog niet opnieuw met v2.

## Open
- Alle 10 opnieuw met v2 (week 4).
- Uit mijn antwoorden: keukenbouwers kopen rubberwood enkel voor ondersteunende onderdelen. Staat nog niet in de prompt.
- Later: klantprofiel als invulveld, zodat de tool voor elk bedrijf werkt.

## 2026-10-10 — buurtest
- Buur: mijn papa. Las alleen de prompt (v2) en drie inputs: DL Interieur, Bautier, ER-Bouw.
- Doelgroep: 3 op 3 gelijk aan mijn antwoorden (ja, nee, nee).
- E-mail bij DL Interieur: "geen", omdat het buurtestblad elke site na 70 regels afkapte en het adres lager stond. Fout in het blad, niet in de prompt.
- Ik moest niets extra uitleggen.

## 2026-10-14 — v2, alle tien opnieuw (week 4)
- Sonnet 5.5, 2 runs per input: **18 op 20 juist (n = 10, 2 runs)**.
- T07 Bautier 2× `ja` (F1). In week 3 gaf dezelfde v2-prompt 2× `nee`. De wijziging hield geen stand: F6 over sessies.
- Volgende wijziging (week 5): de regel dat "workshop" of "studio" niet bewijst dat een bedrijf zelf hout verwerkt.
- Haiku 4.5 op T01 en T07, 1 run elk: allebei juist (ook T07). n = 2, zegt weinig.
