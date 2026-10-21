# Week 2 — Een tool die nieuws beoordeelt voor defensiebedrijven

## Wat bouw ik?
Ik bouw een tool die een nieuwsbericht leest en zegt wat het betekent voor de vraag naar defensiebedrijven. Erin gaat de kop en de eerste alinea van één nieuwsbericht. Eruit komt één label: positief, negatief, neutraal, niet over defensie of onzeker, met een korte reden. Ik wil dat omdat er elke dag veel nieuws is over oorlog, de NAVO en defensiebudgetten, en het veel tijd kost om zelf in te schatten welk bericht echt iets verandert voor die bedrijven. Met deze tool zie je dat in een paar seconden.

## Waarom een taalmodel?
Er gaat gewone tekst in, een nieuwsbericht, en er komt een oordeel uit. Om dat oordeel te geven moet je de betekenis van het bericht begrijpen, niet alleen de woorden. Een vaste regel zoals "zoek naar het woord budget" volstaat niet. Dat zie je in mijn testset. In T05 staat het woord "besparingen", dus een regel zou "negatief" zeggen. Het taalmodel zei twee keer "positief", omdat de besparingen elders gebeuren om meer geld aan defensie te geven. Volgens mijn testset was "onzeker" juist, dus dit telt als fout. Toch twijfel ik nu of mijn eigen label wel klopte. Dat neem ik mee naar volgende week. In T02 staat het woord "budget" helemaal niet, maar het gaat wel over defensie: een staakt-het-vuren wordt verlengd. Een regel zou dat missen, het taalmodel zei terecht "negatief". In totaal had het model 2 van de 5 inputs juist, en het gaf bij elke input in beide runs hetzelfde antwoord.

Klassieke machine learning past ook niet, want ik heb geen grote dataset met cijfers van vroeger, alleen losse berichten.

Het taalmodel heeft ook een grens: het oordeelt alleen op de tekst die het krijgt. In T01 staat het budget pas in de tweede alinea, dus het zei "onzeker" in plaats van "positief".

## Eén testinput
Ik kies T01. De input was de kop en de eerste alinea van een NOS-bericht: "NAVO-top met goed resultaat voor Rutte, Trump en Zelensky". De eerste alinea gaat over Rutte die terugkijkt op een geslaagde top. Mijn juiste antwoord was positief, want op die top spraken de landen af om hun defensiebudget sterk te verhogen.

Het model zei twee keer "onzeker", met als reden dat het bericht niet zegt wat het resultaat betekent voor defensiebudgetten. Ik denk dat het model eigenlijk gelijk had: de afspraak over het budget staat pas in de tweede alinea, en die kreeg het niet. Mijn juiste antwoord kwam dus uit mijn eigen voorkennis, niet uit de tekst. De fout zit niet in het model, maar in mijn keuze om alleen de kop en de eerste alinea te gebruiken. Dat wil ik later bekijken: misschien heb ik meer tekst nodig als input.
