# Week 4 — Trainingsnotities, twijfel en tijdwinst

Mijn belangrijkste conclusie deze week is dat de tool de meeste trainingsnotities correct omzet, maar dat duidelijke regels nodig zijn bij onduidelijke notities. Ik heb de prompt verbeterd zodat de tool bij twijfel niets invult dat niet zeker is. Ik zie ook dat de tool pas echt nuttig is als hij me later sneller mijn vorige gewicht laat terugvinden.

## Mijn tool in cijfers

Mijn tool zet trainingsnotities om naar oefening, gewicht, sets en herhalingen. Ik heb versie 4 getest met tien notities, telkens twee keer: 18 van de 20 antwoorden waren juist, dus 90% (n = 10, 2 runs). De twee fouten waren F1: bij dezelfde onduidelijke notitie koos de tool drie sets, terwijl ik vier bedoelde. Alle antwoorden waren per notitie identiek. Ik leer hieruit dat de tool consequent kan reageren en toch een notitie verkeerd kan interpreteren. Eén testnotitie staat ook als voorbeeld in de prompt; zonder die notitie was de score 16/18, dus 88,9%.

In versie 5 heb ik de regel over een onduidelijk aantal sets explicieter gemaakt. Vooraf koos ik onbekend als verwacht aantal sets. De twee hertests van die ene notitie waren correct (n = 1, 2 runs). Dat is geen volledige score voor versie 5 en ook de beoordelingsafspraak is veranderd. Ik vind onbekend bij twijfel beter dan een mogelijk fout aantal. Zo weet ik later dat ik die informatie niet duidelijk had genoteerd.

## Wat kost één run?

Ik had eigenlijk nooit bij de kosten stilgestaan. Deze berekening heeft mijn visie uitgebreid.

De gemeten Codex-run gebruikte 17.060 inputtokens, waarvan 12.160 uit de cache, en 43 outputtokens. Dat omvat ook de instructies van Codex. Voor v5 met één notitie telden we lokaal ongeveer 694 inputtokens. Die telling is een benadering voor dit model. Met GPT-6.1 Sol kost dat naar schatting €0,00162 per notitie, met 43 outputtokens als aanname. De [ECB-koers van 14 oktober](https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.ff.html) is €1 = $1,1195, dus $1 ≈ €0,8933.

Ik train ongeveer drie keer per week en noteer vijf à zes oefeningen. Dat geeft gemiddeld 65–78 notities per maand, met 52 trainingsweken per jaar als aanname. De losse-toolraming is €0,11–€0,13 per maand, €1,06–€1,27 bij tien keer dat volume en €106–€127 bij duizend keer dat volume. Voor mezelf vind ik dat heel weinig, maar bij duizend keer zoveel gebruik wordt het wel een groot bedrag. Efficiëntie is dus belangrijk als veel mensen de tool gebruiken.

Met Luna zou dezelfde aangenomen hoeveelheid tokens ongeveer €0,0053–€0,0063 per maand kosten, maar ik heb de kwaliteit en het verbruik van dat model niet getest. Mijn inhoudelijke tests deed ik met de instelling die ik kende als GPT 5.6 terra hoog. De Sol-raming voor v5 is geen kostenmeting van die Terra-tests. Bronnen en formules staan in [build/kosten.md](../build/kosten.md). Dit zijn geen extra afschrijvingen van mijn Plus-abonnement.

## Met de hand of met de tool?

Zonder overzicht begin ik met een gewicht dat logisch lijkt en verhoog ik het als het te licht is. Ik schat dat dit gemiddeld drie minuten extra uitproberen per training kost. Het gewone klaarzetten van materiaal tel ik niet mee. Ik moet bij minstens twee oefeningen mijn vorige gewicht opnieuw bepalen.

Een notitie typen schat ik op 10–15 seconden, het antwoord afwachten op 20 seconden en de tabel controleren op 18 seconden. Ik doe dat tijdens mijn gewone rustpauze en verwacht dat die niet langer wordt. Terugzoeken schat ik op 30 seconden per oefening. Als ik precies tweemaal terugzoek, kost dat één minuut. Drie minuten uitproberen min één minuut terugzoeken geeft twee minuten verwachte winst per trainingsdag: zes minuten per week, 26 minuten per gemiddelde maand en 5,2 uur per jaar. Dit veronderstelt drie trainingen per week en 52 weken per jaar.

Mijn eigen uurloon is €15–€17. Als vergelijking voor mijn vrije tijd is 5,2 uur €78–€88,40 waard. Na de voorlopige v5-modelkosten van €1,27–€1,52 per jaar blijft ongeveer €76–€87 aan vergelijkingswaarde over. Dit is geen geld dat ik daadwerkelijk verdien.

Op dit moment kan ik niet zeker zeggen dat de tool tijd bespaart. Het klikbare overzicht is nog niet gemaakt, terwijl dat het terugzoeken sneller moet maken.

## Mijn zwakste cijfer

Ik vertrouw alle tijdschattingen nog onvoldoende: het waren ruime schattingen. Als het uitproberen maar 1,5 minuut kost, blijft bij één minuut terugzoeken slechts 30 seconden winst per training over, of 1,3 uur per jaar. Dit toont dat mijn huidige berekening nog niet helemaal betrouwbaar is, omdat ze op schattingen gebaseerd is. Als het uitproberen minder lang duurt, is de tijdwinst veel kleiner. Ik moet de tijden daarom tijdens een echte training meten voor ik een duidelijke conclusie kan trekken.
