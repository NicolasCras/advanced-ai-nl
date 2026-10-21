# Week 2 — Testrun van een AI die de regels niet kent

## Wat bouw ik?
Ik geef een klantenreactie door, deze wordt gelezen door mijn tool, en die kiest het juiste label. Zo vertelt hij mij waar ik moet naar kijken, en dat zoek ik op in het CRM.

## Waarom een taalmodel?
Een taalmodel, want er gaat tekst in en een label uit. Dit kan ook zonder AI, maar het duurt langer: dan lees ik het zelfstandig om de situatie van de klant te begrijpen.

## Eén testinput
**Input (T02):** "Ik ben mijn abonnement thuis vergeten toen ik op de trein zat opweg naar het werk, later zag ik in mijn agenda dat deze vandaag vervallen is. Ik ben meteen naar huis vertokken en heb deze opnieuw gevalideerd de dag dat hij vervallen was. Kan deze boete misschien geannuleerd worden?"

**Juiste antwoord:** abonnement vergeten. De klant heeft zijn abonnement de dag zelf nog opnieuw gevalideerd waardoor deze dus geldig is.

**Wat mijn tool zei:** onzeker, twee keer. De klant schrijft zowel "thuis vergeten" als "vandaag vervallen", dus volgens de tool past het bij beide labels.

**Waarom fout:** de AI kende de regel van verlenging niet. Het vervallen abonnement is die dag verlengd geweest, waardoor deze geldig is en geen reden heeft om hier een brief van te maken. Wat wel is gebeurd is dat het abonnement vergeten was door de klant, hier maken we dan wel een brief van.

