# Week 4 — Mijn tool mist niets, maar voegt soms te veel toe

## Mijn tool in cijfers
Mijn tool haalt opdrachten en deadlines uit de tekst van een Canvas-vakpagina. In mijn testset (prompt v2, run 1) is het resultaat **1 op 5 juist (n = 5, 1 run)**. Alleen T07 (het Teamcharter) was volledig goed. De andere vier hadden een fout:

- **F1 (fout), 1×, T09:** bij een modulepagina met alleen lesmateriaal nam de tool drie items op, onder andere "Exam information", terwijl dat een lege kop is.
- **F2 (verzonnen), 1×, T10:** de tool voegde een derde opdracht toe ("Groepsopdracht … case uitwerken") die niet in de tekst staat. Items 1 en 2 waren juist.
- **F4 (vorm), 2×, T06 en T08:** bij T06 klopten de opdracht en de inleverdatum, maar de tool zette er een extra datum bij ("beschikbaar tot"). Bij T08 kwam een lange beschrijving tussen haakjes met de opmerking dat de tekst geen nieuwe datum vermeldt, terwijl de titel zegt dat de deadline verlengd is.

Wat opvalt: in mijn 5 tests miste de tool geen enkele opdracht. De fouten zijn altijd te veel in de lijst, nooit te weinig. Dat past bij mijn prompt, want een opdracht te veel is minder erg dan een die ontbreekt. Het cijfer is wel klein: n = 5 en één run. Ik reken T06 nu als fout, terwijl ik het eerst als juist telde omdat mijn prompt om alle datums vraagt.

## Wat kost één run?
Ik mat met Haiku (`claude-haiku-5-5`) op 19 oktober 2026, in een nieuwe sessie in mijn eigen map, met mijn prompt en T01 in één bericht. `/cost` gaf **$0,0044**. Het transcript van die aanroep geeft 41.935 tokens input (waarvan 24.796 uit de cache) en 704 tokens output. Dat is de kost van één run, inclusief de context die Claude Code meestuurt. Dus een bovengrens van ongeveer **$0,004 per run** (± €0,004 met 1 dollar = 0,90 euro, een aanname).

Mijn eigen deel (prompt, input en antwoord) kan ik niet apart meten: `/context` is niet gelukt, dus ik ken de context niet. Een bedrijf dat mijn tool via de API gebruikt, betaalt alleen mijn deel, dus de bovengrens is ruim.

De prijs van Haiku 5.5 staat niet in de tabel van de cursus. Volgens derde partijen is die **$0,10 per miljoen input-tokens en $0,50 per miljoen output-tokens**, 90% goedkoper dan Haiku 4.5. Bronnen: [Artificial Analysis](https://artificialanalysis.ai/articles/claude-haiku-5-5), [VentureBeat](https://venturebeat.com/technology/anthropic-launches-claude-haiku-5-5-with-90-api-price-reduction-matching-gpt-6-luna) en [MarkTechPost](https://www.marktechpost.com/2026/10/07/anthropic-releases-claude-haiku-5-5-a-small-model-with-1m-context-priced-at-0-10-per-million-input-tokens/). Ik heb de officiële prijspagina nog niet gecontroleerd.

| Volume | Runs per maand | Haiku 5.5, bovengrens (sessiekost) |
|---|---:|---:|
| Mijn volume | 20 | $0,088 |
| 10× | 200 | $0,88 |
| 1.000× | 20.000 | $88 |

Dit zijn bovengrenzen, want de sessiekost bevat de context. Sonnet heb ik niet meer doorgerekend: dat getal hing af van de vervallen $0,0039. Een schone meting moet eerst laten zien wat één run kost.

## Met de hand of met de tool?
- **Met de hand:** Canvas openen, doorlezen en datums opschrijven kost ongeveer 5 minuten. Bron: schatting.
- **Met de tool:** draaien 1 minuut en nakijken 1 minuut, samen 2 minuten. Bron: schatting.
- **Winst per run:** 5 − 2 = 3 minuten.
- **Volume:** 1 per dag, 5 per week, 20 per maand en 180 per jaar. Aanname: 5 dagen per week, 4 weken per maand en 9 maanden (schooljaar).
- **Uren per jaar:** 180 × 3 minuten = 540 minuten = 9 uur.
- **Uurkost:** €17. Bron: mijn loon bij Deboever Ramen en Deuren.
- **Waarde:** 9 × €17 = €153 per jaar.
- **Kost van de tool:** 180 × $0,0044 = $0,79, ongeveer €0,71 per jaar (bovengrens, met context).
- **Netto:** ongeveer **€152,29 per jaar**.

De kost van de tool is bijna niets. Het getal hangt vooral af van de minuten, en die zijn geschat.

## Mijn zwakste cijfer
Mijn zwakste cijfer is de **20 runs per maand**. Als ik de deadlines van de dag ervoor al genoteerd heb, hoef ik de volgende dag niet opnieuw te runnen. Bij de helft (10 per maand) wint de tool 4,5 uur per jaar. Dat is €76,50 waarde, min ongeveer €0,36 kost, dus ongeveer **€76,14 netto per jaar** in plaats van €152,29. Mijn conclusie blijft dan dezelfde: de tool is de moeite, zolang ik de lijst nakijk op te veel.
