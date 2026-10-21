# Build — Trainingsnotities omzetten naar een overzicht

1. **Taak:** korte trainingsnotities omzetten naar vaste gegevens, zodat Cansu haar vorige gewicht bij een oefening kan terugvinden.
2. **Input:** één eigen notitie na een oefening, met wat Cansu heeft gedaan.
3. **Output:** oefening, gewicht, sets en herhalingen. Ontbrekende of onduidelijke gegevens krijgen **onbekend**.
4. **AI:** een taalmodel om verschillende formuleringen in de notities te begrijpen. Het bewaren van het overzicht en opzoeken van het laatste gewicht gebeurt met gewone software.
5. **Controle:** Cansu schrijft vooraf zelf op welke gegevens elke notitie bevat en controleert of de AI die correct overneemt, zonder gegevens te verzinnen.

## Reden voor de overstap — 7 oktober 2026

Cansu koos deze taak omdat ze in de gym vaak haar vorige gewicht niet meer weet en tijd verliest met zoeken naar een startgewicht. Ze noteert dit momenteel nergens, maar wil korte notities nemen. Deze keuze vervangt de horecareviews; het besproken macro-idee wordt niet verder uitgewerkt. De eerdere projectbestanden staan in `archief/horecareviews/`.

## Vijf echte inputs van Cansu

1. bulgarian split squat, 20kg, 4 sets, 12 reps
2. RDL, 40kg, 4 sets, 12 reps
3. cable kickbaks, 15kg, 4 sets, 12 reps
4. hip thrusts, 60kg, 4 x 12
5. seated hamstring curl, 20kg, 4 x 12

De vijf eigen trainingsnotities zijn verzameld. De juiste antwoorden schrijft Cansu zelf in `test-set.md`, vóór de AI wordt getest.

## Gewenst scherm tijdens de training — 14 oktober 2026

Cansu beschrijft haar gewenste gebruik:

> Ik wil dat ik tijdens mijn training gewoon op de oefening kan klikken en meteen mijn vorige gewicht, aantal sets en herhalingen zie. Het moet duidelijk en groot op mijn scherm staan, zodat ik niet moet zoeken of door oude notities scrollen.

Met ‘vorige’ bedoelt Cansu de laatste keer dat ze die oefening deed, ongeacht of dat bij Jims Lokeren, Dok-Noord of Overpoort was. Het scherm moet dus de meest recente registratie over alle locaties heen tonen.

Dit scherm is nog niet gebouwd. Het vraagt om bewaren van eerdere trainingsgegevens en ophalen van de laatste registratie per oefening, met gewone software. De AI blijft verantwoordelijk voor het omzetten van de notitie naar gegevens. Cansu vindt progressie volgen nuttig, maar wil daarnaast tijdwinst. Die tijdwinst moet in echt gebruik worden getoetst; de oorspronkelijke schatting van 30 seconden terugzoeken is geen meting van dit gewenste scherm.
