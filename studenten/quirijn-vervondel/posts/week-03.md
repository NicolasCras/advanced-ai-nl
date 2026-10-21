# Week 3: Beter op papier, slechter op de werf

## Wat ontbrak er in mijn context?
In de uitvoer ontbraken rijen voor dingen die bij bijna elke klus voorkomen: de units zelf, steunblokken (op het dak of de grond) en beugels (aan de muur). Condenspompen zijn zeldzaam, luchtkanalen horen bij een ander soort installatie. Ook miste de tool vakkennis. "Aansluitingen al aanwezig" betekent geen nieuwe voeding nodig, niet onbekend. Dat wist de tool niet. Bij de condensafvoer kende de prompt alleen gravitair en druk-PVC, terwijl er met een pompje een condensbuis nodig is. T09 (FDA) was een ander soort installatie. Ik nam hem toch mee, omdat ik geen andere notitie meer had. Goed dat de tool daar niets verzon.

Mijn grootste les: een AI stelde twee regels voor die logisch klonken maar fout waren. Mijn testset scoorde daardoor beter op papier. Pas toen ik het zelf uitlegde, zag ik dat het niet klopte.

## Mijn eerste cijfer
Per input is 1 op 10 volledig juist (n = 10, 1 run), alleen T05. Per onderdeel haalde ik bij T06 tot T10 20 op 30 met v1. In 9 op 10 runs werd niets verzonnen. Alleen bij T04 werd een verloopstuk verzonnen.

Bijna alle fouten zijn F3, iets ontbreekt: units, steunblokken, beugels, condensbuis, en de voeding bij T07. Eén keer F2: het verzonnen verloopstuk bij T04.

Mijn foute v2 scoorde slechter (19 op 30). Een testset beschermt je alleen als je juiste antwoorden kloppen.

Het eerlijkste cijfer is 1 op 10: voor een stuklijst telt alleen of alles klopt, en dat is nog bijna nooit zo. Met 10 inputs en 1 run is dit nog geen bewijs.

## Eén wijziging
In v2 voegde ik twee regels toe: kabelgoot per route apart afronden, en condenspompje = druk-PVC. Die regels kwamen van een AI-suggestie, niet uit mijn eigen kennis. T08 leek eerst beter (21 op 30), omdat mijn juiste antwoord op dezelfde foute regels gebaseerd was. T06, T07, T09 en T10 bleven gelijk.

Toen ik het zelf moest uitleggen, zag ik dat beide regels fout zijn: je telt kabelgoot in totaal en deelt door 2, en een pompje gaat via een condensbuis, niet via druk-PVC. Na de correctie scoorde v2 slechter (19 op 30). Ik heb v2 teruggedraaid.

Dit is geen bewijs: maar 5 nieuwe inputs, 1 run per versie, en de wijziging raakte maar 1 input. Een model geeft ook niet elke keer hetzelfde antwoord.

Wat ik nu wel zou veranderen, uit mijn eigen vakkennis: rijen voor de units zelf, steunblokken en beugels, want die komen bij bijna elke klus voor. Condensbuis als derde type condensafvoer. En "aansluitingen al aanwezig" betekent geen nieuwe voeding.
