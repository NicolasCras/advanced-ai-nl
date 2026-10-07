# Week 2 — Van niets naar iets

## Wat bouw ik?
Mijn Build geeft advies aan sporters die geen tijd hebben of niet weten hoe ze hun trainingen moeten plannen. De sporter geeft na elke training het type training in en hoe het ging, en vooraf een doel. Op basis van dat doel geeft de Build advies voor de volgende week.

Voor de cursus bouw ik de eerste laag. De Build leest de notities van één week en geeft een oordeel (belasting en herstel) en een advies in vier velden: volume, aantal harde trainingen, focus en soort trainingen. Een volledig schema komt later in de app.

## Waarom een taalmodel?
Ik gebruik een taalmodel omdat mijn notities vrije tekst zijn. Cijfers hebben we nog niet, dus die zijn niet nodig. Later kan dat wel, bijvoorbeeld door te koppelen met de Garmin Connect-app om zo beter advies te geven.

## Eén testinput
Ik kies week 1 (doel: aerobe basis). Mijn antwoord was zwaar. De tool zei eerst normaal. Ik merkte dat de tool niet veel weet als je hem geen of weinig context geeft, waardoor hij soms verkeerd interpreteert.

Wanneer de tool iets verkeerd interpreteerde, bijvoorbeeld een training normaal noemen in plaats van hard, heb ik de prompt aangepast door erbij te zetten waarom die training hard is. Ik hoop dat hij daardoor ook andere situaties die hierop lijken goed leest.

## Een gat in mijn eigen regels
Bij week 3 klopte het antwoord van de tool met het mijne (normaal), maar niet met mijn eigen regels. Die week had maar één harde training, de beentraining, en volgens mijn regels was normaal twee harde trainingen. De tool kwam op normaal uit omdat hij de zwem-intervallen als hard telde, terwijl ik die niet hard vind. Mijn antwoord klopte dus, maar mijn regel niet.

Ik heb een nieuwe regel toegevoegd: een week met 1 harde training en 3 of meer krachttrainingen is normaal. Mijn reden is dat de spiergroepen gesplitst worden, waardoor de spieren hersteld zijn voor ze weer nodig zijn. Ik heb er ook bij gezet dat een technische zwemtraining met korte intervallen niet hard is. Daarna gaf de tool in twee van twee runs normaal, nu om de juiste reden.

## Cijfers
Mijn testset heeft vijf weken, elke input draaide ik twee keer:
- Eerste versie: 9 van 10 runs gaven mijn antwoord.
- Na een aanpassing van de prompt: 11 van 11 runs.

## Wat nog niet getest is
De tests waren vooral gericht op zware weken. Op lichte weken heb ik nog niet getest, en ik weet dus niet zeker hoe de tool daarop reageert en wat de output wordt. Dat test ik in latere versies.
