# Taak — Nicolas Cras

## De keuze in vijf regels

- **Taak:** de trainingsnotities van één week en het doel van de sporter lezen, en een oordeel (belasting, herstel) en een advies voor volgende week geven.
- **Input:** de korte notities van één week samen (wat de sporter na elke training noteerde over verloop en gevoel), plus een doel uit de lijst: aerobe basis, kracht en snelheid, of spiermassa opbouwen.
- **Uitvoer:** vaste velden, geen vrije tekst.
  - Belasting: licht, normaal of zwaar.
  - Herstel: voldoende, onvoldoende of onzeker.
  - Advies: volume volgende week (minder, gelijk, meer), aantal harde trainingen (0 tot 3) en focus (herstel, opbouw, onderhoud).
  - Soort trainingen (volgens het doel): lange lage hartslag, gym, hoge hartslag uithouding, of een combinatie van twee.
  - Uitweg: bij te vage notities of ontbrekende info over herstel staat er "onzeker" en geen gok. Het advies wordt dan ook "onzeker".
- **Soort AI:** een taalmodel, want vrije tekst gaat erin en kleine labels komen eruit.
- **Controle:** ik schrijf per input het juiste antwoord vooraf op, volgens een regeltabel die ik vooraf vastleg (belasting x herstel x doel geeft advies). Een andere sporter of coach zou in de meeste gevallen dezelfde richting kiezen.

## Bewust niet in v1

- Een volledig trainingsschema, techniektips, events en racedoelen.
- Geslacht, leeftijd en gewicht.
- Het doel vet verliezen (andere regels: voeding).
- Garmin Connect (cijfers, geen taal).

## Vijf inputideeën

Vijf weken trainingsnotities, aangeleverd door mij. Het juiste antwoord schrijf ik zelf later in `build/test-set.md`.

1. `inputs/t01.txt`: aerobe basis (zwemmen, fietsen, kracht)
2. `inputs/t02.txt`: krachtuithouding en snelheid (HYROX, kracht, intervallen), met een geschrapte rustdag
3. `inputs/t03.txt`: lean blijven, spiermassa opbouwen (veel kracht)
4. `inputs/t04.txt`: vage week zonder doel of details (test voor "onzeker")
5. `inputs/t05.txt`: hoge intensiteit met kracht (HYROX, intervallen)
