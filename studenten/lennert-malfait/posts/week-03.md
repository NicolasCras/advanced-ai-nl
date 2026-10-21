# Week 3 — Mijn e-mailsorteerder leren testen

## Wat ontbrak er in mijn context?

Mijn eerste prompt had de vier labels en een vaste JSON-uitvoer, maar nog te weinig uitleg over de grenzen tussen die labels. Vooral bij `doen` en `lezen` kon het model een aanbeveling verwarren met een verplichte actie. De e-mail over een laptop meenemen was daarvan een goed voorbeeld. Er stond dat het “handig” zou zijn om een laptop mee te brengen, maar ook dat studenten zonder laptop de oefening per twee konden doen. Ik verwachtte dus `lezen`: de mail is nuttig, maar ik moet niets verplicht doen. Toch antwoordde de tool `doen`.

Bij de audit zag ik ook dat mijn prompt voorbeelden en een duidelijke uitweg voor onduidelijke e-mails miste. Daarom maakte ik v2 met een reden bij de Canvas-regel, een regel om niet te gokken wanneer een e-mail te weinig informatie bevat, en voorbeelden van de verschillende labels.

## Mijn eerste cijfer

Ik testte tien inputs, telkens één keer in een nieuw ChatGPT-gesprek en zonder web search. Negen antwoorden waren juist: **9 op 10 juist (n = 10, 1 run)**. De enige fout was T01. Dit is F1: de tool gaf met overtuiging `doen`, terwijl het juiste label `lezen` was. Ik had geen F2-, F3-, F4-, F5- of F6-fouten in deze eerste run.

De testset bevat een duplicate, een routine Canvas-rapport, een Engelse mail, een zeer korte mail, een reclamebericht en schoolcommunicatie met een deadline. Zo test ik niet alleen makkelijke schoolmails. Alle tien inputs zijn echte e-mails, geanonimiseerd voor de publieke repository.

## Eén wijziging

Ik veranderde één onderdeel in v3: een mail met alleen een aanbeveling én een expliciet alternatief moet `lezen` krijgen. Ik zette er ook een voorbeeld bij. Het waarom is dat Lennert dan wel geïnformeerd wordt, maar niet verplicht is om te handelen.

Daarna draaide ik alleen de foute input T01 opnieuw in een nieuw gesprek. De tool antwoordde nu `lezen`: **1 op 1 juist (n = 1, 1 run)**. Dat is een goed teken, maar nog geen bewijs. Ik testte slechts één fout en slechts één nieuwe run. In week 4 moet ik meer echte voorbeelden en een tweede run gebruiken om te zien of de verbetering stabiel blijft.
