# Leads-tool voor DBA Hardwoods

Leest de homepage van één bedrijf en zegt of het een mogelijke klant is (focus: rubberwood), met de contactgegevens erbij. Zonder e-mailadres op de site: `geen e-mail`, geen lead.

## Draaien
1. Zoek een bedrijf op Google Maps, kopieer de tekst van de homepage.
2. Open een **nieuw** gesprek, zonder web search en niet in je studentenmap.
3. Plak de prompt uit `prompt.md`, vul URL en tekst in.
4. Het antwoord is één JSON-object.

## Bestanden
- `taak.md` — de taak in vijf regels
- `prompt.md` — huidige versie (v2)
- `prompt-v1.md` — vorige versie
- `test-set.md` — tien inputs, juiste antwoorden, runs
- `inputs/` — de websitetekst per test
- `log.md` — elke run en elke wijziging
- `kosten.md` — tokens en kost per run, per maand
- `waarde.md` — tijdwinst en waarde per jaar

## Versies
- **v1** (week 2) — eerste prompt. 10/10 op 5 inputs, 18/20 op 10 inputs.
- **v2** (week 3) — regel erbij: wie alleen verkoopt of plaatst wat elders gemaakt wordt, is `nee`. Reden: fout bij T07. Week 4: 18/20 (n = 10, 2 runs), T07 weer fout.
