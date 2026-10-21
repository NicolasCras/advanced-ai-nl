# Week 4 — de week waar ik veel moest prutsen om deze post te maken

## Mijn tool in cijfers
20 op 20 juist (n = 10, 2 runs). Er zijn geen fouten gemaakt. De moeilijkste inputs moeten nog getest worden, maar de tool wordt bijgestuurd indien mogelijk.

## Wat kost één run?
Om mijn tool te gebruiken, kost elke run $0,0099. De context bedraagt 33.600 tokens. Mijn eigen aandeel komt daarbovenop: 3.900 tokens. Ik schat dat de tool ongeveer 200 keer per werkdag gebruikt zal worden. Dit is een schatting die neerkomt op ongeveer 4.000 runs per maand en 52.000 runs per jaar. Op jaarbasis komt dit neer op een geschatte kost van ongeveer €463. Dit is gebaseerd op 260 werkdagen per jaar.

## Met de hand of met de tool?

**Met de hand**

| Stap | Wat doe je? | Geschatte tijd |
|---|---|---|
| 1 | Het bericht openen en lezen | 10 sec. |
| 2 | De naam van de powerlifter herkennen of noteren | 10 sec. |
| 3 | Het squatgewicht zoeken en noteren | 10 sec. |
| 4 | Het benchpressgewicht zoeken en noteren | 10 sec. |
| 5 | Het deadliftgewicht zoeken en noteren | 10 sec. |
| 6 | Controleren of de gewichten en eenheden correct zijn | 15 sec. |
| 7 | De gegevens in een vast formaat invoeren | 15 sec. |
| **Totaal** | | **80 sec.** |

De tijden zijn mijn eigen schattingen. Ik heb deze handmatige verwerking niet zelf met een stopwatch uitgevoerd en heb ook geen persoon geïnterviewd die dit werk dagelijks doet. De werkelijke tijd kan verschillen afhankelijk van de lengte en duidelijkheid van het bericht.

**Met de tool**

| Stap | Wat doe je? | Tijd | Herkomst |
|---|---|---|---|
| 1. Draaien | De tool uitvoeren en wachten op het resultaat | 10 sec. | Gemeten via /cost |
| 2. Nakijken | Alle vijf velden controleren tegenover het oorspronkelijke bericht | 25 sec. | Eigen schatting |
| **Totaal** | | **35 sec.** | Combinatie van meting en schatting |

De controletijd is 5 seconden per veld, bij vijf velden 25 seconden. Dat is een inschatting en geen tijdmeting. Volgens de README moet iemand het resultaat altijd nakijken, dus deze stap telt mee.

**Winst per taak:** 80 − 35 = 45 seconden, dat is 0,75 minuut.

**Uurkost:** het bruto maandloon bedraagt €3.207, volgens Indeed voor een Logistics Associate. Bij een werkweek van 38 uur en 52 weken per jaar komt dit neer op gemiddeld 164,7 werkuren per maand. De berekening is: €3.207 ÷ 164,7 = ongeveer €19,47 bruto per uur. De 38-urenweek is gebaseerd op informatie van Partena Professional. Dit is geen rechtstreekse verwijzing naar een officiële wettekst.

**Kost van de tool:** elke run kost $0,0099. Bij een geschat gebruik van 200 runs per werkdag en 260 werkdagen per jaar komt dit neer op 52.000 runs per jaar. De jaarlijkse API-kost bedraagt 52.000 × $0,0099 = $514,80. Omgerekend naar euro komt dit neer op ongeveer €463 per jaar, afhankelijk van de gebruikte wisselkoers. Zowel het gebruik als de omgerekende kost zijn schattingen.

**Tijdswinst en waarde:** bij 200 taken per werkdag en 260 werkdagen per jaar zijn dat 52.000 taken per jaar. 52.000 × 45 seconden = 2.340.000 seconden, ofwel 650 uur tijdswinst per jaar. 650 × €19,47 = €12.655,50 bruto per jaar.

**Netto theoretisch voordeel per jaar:** €12.655,50 − €463 = €12.192,50. Dit is de economische waarde van de vrijgekomen tijd, niet noodzakelijk een effectieve besparing in cash. Eventuele werkgeverskosten en andere bijkomende kosten zijn niet inbegrepen.

## Mijn zwakste cijfer
Het zwakste cijfer is de geschatte tijdswinst van 45 seconden per taak. Die tijd is niet gebaseerd op een uitgebreide praktijktest. Als de werkelijke tijdswinst de helft bedraagt, daalt die naar 22,5 seconden per taak.

Dan wordt de berekening:
- 52.000 × 22,5 seconden = 1.170.000 seconden, ofwel 325 uur tijdswinst per jaar.
- 325 × €19,47 = €6.327,75 bruto per jaar.
- €6.327,75 − €463 = €5.864,75 netto theoretisch voordeel per jaar.

Bij een halvering van de tijdswinst blijft er dus ongeveer €5.865 netto theoretisch voordeel per jaar over. Het volume van 200 taken per werkdag en de verwerkingstijden zijn nog niet uitgebreid in de praktijk getest. De API-duur van 10 seconden is wel gemeten. Vrijgekomen tijd betekent ook niet automatisch dat hetzelfde bedrag in geld wordt bespaard. Een praktijktest kan helpen om de aannames te controleren en de werkelijke impact nauwkeuriger te bepalen.
