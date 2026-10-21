# Week 4 — Twee uur met de hand, een cent met de tool

## Mijn tool in cijfers
Mijn tool is nu 1 op 10 volledig juist (n = 10, 1 run). Dat is mijn strengste cijfer, want bij een stuklijst telt alleen of alles klopt. Per onderdeel haal ik bij T06 tot T10 20 op 30 met prompt v1. In 9 op 10 runs werd niets verzonnen.

Bijna alle fouten zijn F3, iets ontbreekt. De units zelf, steunblokken, beugels en de condensbuis staan niet in de prompt, en de tool las "aansluitingen al aanwezig" niet als "geen nieuwe voeding". Eén keer was er een F2: bij T04 verzon de tool een verloopstuk dat in de notitie niet stond.

De tool geeft ook niet elke keer hetzelfde antwoord. Bij T06 gaf hij één keer zekeringkast en één keer onbekend.

## Wat kost één run
Eén run kost volgens /cost $0,0089, ruwweg € 0,008. Het grootste deel is de context die Claude Code meestuurt: 62,5k tokens, $0,0070. Mijn eigen deel is 2,5k input en 3,3k output, samen 5,8k tokens, of $0,0019 (€ 0,0017).

Waarom is de context zo duur? Bij de eerste vraag wordt de context in de cache geschreven: 33,6k tokens aan $0,20 per miljoen. Daarna wordt die cache gelezen, aan $0,01 per miljoen. Cache lezen is goedkoop, maar het gebeurt bij elke vraag, en daardoor kost de context ($0,0070) toch meer dan mijn deel ($0,0019).

Een bedrijf dat de tool via de API gebruikt, stuurt die context niet mee. Dan betaalt het alleen de prompt en het antwoord, dus mijn deel. Output kost ook meer dan input, want Haiku denkt eerst, en die tokens betaal je.

Zelf betaal ik dit niet echt. Ik heb Claude Pro, een abonnement. Een bedrijf als JAVE betaalt per token, en bij 10 runs per maand is dat € 0,017 per maand.

Het model maakt wel verschil. Met Sonnet 5.5 kost mijn deel € 0,034 per run, twintig keer meer dan Haiku 5.5. Bij 1.000× volume (10.000 runs per maand) is dat € 340 per maand tegen € 17. Bij het huidige volume maakt het niets uit.

## Met de hand of met de tool
Met de hand kost een stuklijst ± 2 u per plaatsbezoek (schatting). Met de tool draait de run 16 seconden, plus ± 5 minuten nakijken. Dat is ± 1 u 55 min winst per plaatsbezoek.

Bij 10 plaatsbezoeken per maand is dat 120 per jaar, ± 230 uur per jaar. Tegen € 40 per uur is dat ± € 9.200. Daar gaat ± € 0,20 aan tool af. Netto is dat ± € 9.200 per jaar.

Nakijken moet altijd. Jasper blijft verantwoordelijk voor de stuklijst, ook als de tool hem maakt.

## Mijn zwakste cijfer
De 2 uur. Ik weet niet hoeveel daarvan het uitschrijven is, en hoeveel het rondgaan, want dat vervangt de tool niet. Is het uitschrijven 1 uur, dan is de winst ± € 4.400 per jaar. Is het maar 30 minuten, dan ± € 2.000.

Wat een fout kost is het andere deel van het verhaal. Een vergeten onderdeel betekent een extra rit van ± een half uur, aan € 40 per uur (± € 20), plus personeel dat wacht. Een tool die een onderdeel vergeet, kan dus duurder zijn dan hij oplevert. Daarom telt mijn strenge cijfer van 1 op 10.

Zelfs met de besparing is de tool de moeite waard, maar alleen als hij vollediger wordt. Nu moet Jasper de units, steunblokken en beugels nog zelf toevoegen.
