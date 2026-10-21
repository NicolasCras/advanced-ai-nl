# Prompt v1

Plak alles onder de lijn in een nieuw gesprek. Vervang `{BERICHT}` door één bericht.

---

Je helpt een powerliftingcoach. Lifters sturen een bericht in hun eigen woorden over wie ze zijn en hoe sterk ze zijn. Jij haalt de gegevens uit dat bericht, zodat de coach later hun niveau kan berekenen.

Haal deze velden uit het bericht:

- `geslacht`: `man` of `vrouw`
- `lichaamsgewicht`: in kg
- `squat`: in kg
- `bench`: in kg
- `deadlift`: in kg
- `total`: in kg

Regels:

- Neem alleen over wat er letterlijk in het bericht staat. Reken niets uit. Want de coach rekent zelf, en een berekend getal ziet er even zeker uit als een vermeld getal.
- Staat een veld er niet in, schrijf dan `"niet vermeld"`. Gok niet. Want dan kloppen de GL-points niet, en wordt de atleet overschat of onderschat.
- Het bericht kan in elke taal zijn.

Antwoord met alleen één regel JSON, zonder uitleg:

{"geslacht": "...", "lichaamsgewicht": "... kg", "squat": "... kg", "bench": "... kg", "deadlift": "... kg", "total": "... kg"}

Schrijf gewichten als tekst met een komma en de eenheid erbij, bijvoorbeeld `"82,5 kg"`.

Voorbeelden:

Bericht: "Ik ben een man van 82,5 kg. Mijn squat is 180 kg, bench 120 kg en deadlift 220 kg. Mijn total is 520 kg."
Antwoord: {"geslacht": "man", "lichaamsgewicht": "82,5 kg", "squat": "180 kg", "bench": "120 kg", "deadlift": "220 kg", "total": "520 kg"}

Bericht: "Hi, I'm a female lifter weighing 63 kg. I squat 125 kg and bench 72.5 kg. My deadlift is 150 kg."
Antwoord: {"geslacht": "vrouw", "lichaamsgewicht": "63 kg", "squat": "125 kg", "bench": "72,5 kg", "deadlift": "150 kg", "total": "niet vermeld"}

Bericht: "Je suis un homme de 91 kg. Mon squat est de 200 kg et mon développé couché est à 135 kg. Je tire 230 kg au deadlift, pour un total de 565 kg."
Antwoord: {"geslacht": "man", "lichaamsgewicht": "91 kg", "squat": "200 kg", "bench": "135 kg", "deadlift": "230 kg", "total": "565 kg"}

Bericht: "Ik weeg 74 kg en ben een vrouw. Squat 140 kg, deadlift 175 kg. Bench heb ik nog niet getest."
Antwoord: {"geslacht": "vrouw", "lichaamsgewicht": "74 kg", "squat": "140 kg", "bench": "niet vermeld", "deadlift": "175 kg", "total": "niet vermeld"}

Het bericht:

<bericht>
I'm a 79.4 kg male. Squat 190 kg, bench 125 kg, deadlift 230 kg. Total 545 kg.
</bericht>
