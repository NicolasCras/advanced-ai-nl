# Week 4

## Mijn tool in cijfers
In de laatste run (prompt v1.2) haalde mijn tool 79 op 80 velden juist uit tien KID's van ETF's (n = 10 inputs, 1 run). Negen inputs waren volledig juist. De ene fout zat bij T06: bij het ongunstige scenario gaf de tool 8.160 USD en -18,4% in plaats van 12.010 USD en 3,7% (klasse F1).

Ik vind 79 op 80 een goed resultaat, maar niet goed genoeg voor een AI: een AI moet dit gewoon kunnen aflezen. De fouten zaten in het scenario, door de verkeerde kolom of een verschoven rij in de pdf-tekst, niet door de taal. In eerdere runs gaf dezelfde input soms een ander resultaat. Mijn prompt is dus nog niet perfect, en er is altijd plaats voor verbetering.

## Wat kost één run?
Ik mat één run met T01 (Xtrackers NASDAQ 100) en `/cost`. Het totaal van de sessie was $0,098, maar daar zat Claude Code zelf in, niet alleen mijn prompt. Omdat de context bij de meting niet klopte, kon ik die twee niet exact scheiden. Mijn deel, de prompt met het KID erin, schat ik op ± 13.000 tokens in en ± 500 uit. Dat is **± $0,031 per run (± €0,028) met Sonnet 5.5**, en de helft met Haiku 4.5 (prijzen van Anthropic op 14 oktober 2026; ik rekende met 1 dollar = 0,90 euro, de koers van de dag was 0,89, een verschil van ± 1%).

Mijn volume is 2 onderzoeken per maand met 2 tot 4 ETF's, dus gemiddeld 6 runs (eigen schatting):

| | Per maand (6) | 10× (60) | 1.000× (6.000) |
|---|---:|---:|---:|
| Sonnet 5.5 | ± €0,17 | ± €1,67 | ± €167 |
| Haiku 4.5 | ± €0,08 | ± €0,84 | ± €84 |

De API-kost wordt pas een budgetpost rond €100 per maand, dat is 600 keer mijn volume. Let op: `/cost` toonde voor de Haiku-regel $0,0015, terwijl de prijslijst $0,0146 geeft. Dat verschil van een factor 10 heb ik nog niet uitgezocht.

## Met de hand of met de tool?
**Met de hand** duurt één ETF ± 12,5 minuten (tussen 10 en 15). Bron: eigen test (n = 2, dus weinig). Het KID zoeken met de ISIN-code is een kwestie van seconden (± 10 s). Daarna moet je de velden opzoeken (7 tot 10 minuten) en noteren (3 tot 5 minuten). Dat duurt zo lang omdat een KID meestal 2 tot 3 pagina's heeft, elk met een andere layout en kleine cijfers, en omdat je het moet begrijpen en niet snel kan lezen.

**Met de tool** is het ± 2,8 minuten: zoeken ± 10 s, draaien ± 40 s (gemeten, wall time), nakijken 2 minuten (geschat). Ik kijk altijd na, ook het scenario, maar selectief.

**Winst** per ETF: 12,5 − 2,8 = ± 9,7 minuten. Bij 6 ETF's per maand (72 per jaar) is dat ± 11,6 uur per jaar. Aan €15 per uur (aanname: een studentenjob-uurloon) is dat ± €174 waard. Min de kost van de tool (± €2 per jaar) blijft **± €172 netto per jaar**. Per dag of per week reken ik niet: ik doe twee onderzoeken per maand, geen dagtaak.

## Mijn zwakste cijfer
Mijn zwakste cijfer is de 2 minuten nakijken. Het is een gemiddelde: ik kijk selectief na voor de vergelijking, maar elk KID is anders en de cijfers staan telkens op een andere plaats, dus het kan ook 5 minuten zijn. Als je 5 minuten nodig hebt om na te kijken, bespaar je 6,7 minuten per ETF. Dat levert netto ongeveer €118 per jaar op. Pas vanaf 11,7 minuten nakijktijd verdwijnt het voordeel van de tool.
