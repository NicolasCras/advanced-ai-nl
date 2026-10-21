# Reflectie 1

## Wat kan mijn tool nu?

Hij haalt structuur uit spraak die niemand zou willen typen. "Dat is euh 3 op 4
denk ik, nee wacht 3 op 4 en een halve meter" wordt 13,5 m2, verdeeld over zeven
posten, met de verspreking erbij vermeld in plaats van stil weggewerkt.

En hij durft te zwijgen. Bij vier van mijn twaalf inputs is een lege postenlijst
het juiste antwoord, en die haalt hij alle vier. "Vierkante meter, kubieke
meter" levert geen post op, maar een vraag. Dat is het gedrag waar het hele
ontwerp om draait: het label `bron` bestaat om te verhinderen dat een gok
doorgaat voor een eigen prijs, en een lege lijst is de scherpste vorm daarvan.

## Wat kan hij niet?

Twee dingen.

Hij is niet stabiel in wat hij vraagt. De posten waren in alle twaalf inputs bij
beide runs identiek, tot op het aantal en het bronlabel. Het aantal vragen niet:
eerst een vraag en dan geen, of eerst twee en dan drie over dezelfde onbekende.
De harde uitvoer ligt vast, de zachte niet. Mijn eigen prompt zegt dat de
aannemer vragen die hij al beantwoord heeft wegklikt, dus dit is geen detail.

En hij is zo goed als de opname. De leidraad met voorbeeldantwoorden stuurt het
taalgebruik bij, waardoor mijn testinputs netter zijn dan een echte werf. Dat is
een bovengrens op mijn cijfer die ik niet weggemeten krijg met deze testset.

## Welk cijfer bewijst dat?

22 op 24 juist (n = 12, 2 runs) op promptversie v2b. Eén echte fout, twee keer
gemaakt, klasse F2: een post die niet had mogen bestaan. Twee keer F6, en alleen
in de vragen, nooit in de posten.

Dat cijfer is ouder dan mijn prompt. Na de wijziging draaide ik T02 twee keer en
T11 een keer op v3, alle drie juist, n = 2. Dat is te weinig om 24 op 24 te
claimen, en het is precies de reden waarom ik de twaalf inputs volledig opnieuw
moet draaien voor ik iets over v3 beweer.
