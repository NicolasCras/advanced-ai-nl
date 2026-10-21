# Week 3 — De regels zaten in mijn hoofd

## Wat ontbrak er in mijn context?
Mijn tool sorteert gastenreviews van Hotel Cosmopolite. Hij geeft elke review een onderwerp en zegt of we moeten antwoorden, en hoe snel. Eerst wilde ik ook Restaurant Georges erbij nemen, maar ik koos ervoor om alleen op het hotel te focussen.

Toen ik zelf de juiste antwoorden schreef, zag ik dat er regels in mijn hoofd zitten die niet in mijn prompt stonden. Een review gaat vaak over meerdere onderwerpen, maar mijn prompt zei niet welk onderwerp dan telt. Ik besliste: de klacht wint altijd. Dat staat nu in mijn prompt.

Ik maakte ook een fout bij een voorbeeld. Ik wilde antwoorden op een positieve review, terwijl mijn eigen regel zegt dat we niet antwoorden op positieve reviews. Als een voorbeeld en een regel botsen, weet het model niet welke het moet volgen.

Er ontbreekt nog één regel: een review met een score van 4 of lager heeft altijd een antwoord nodig. Dat weet ik, maar mijn model niet.

## Mijn eerste cijfer
Ik heb nog geen cijfer. Mijn testset is klaar: tien echte reviews van Hotel Cosmopolite, in het Nederlands, Frans en Duits. Bij elke review schreef ik zelf het juiste onderwerp en of we moeten antwoorden. Ik heb nog niets gedraaid: 0 runs. Dat doe ik morgen in de les.

Ik verwacht dat het model fouten maakt bij reviews met een hoge score maar een slechte inhoud. Zo'n review lijkt goed, maar de gast is niet tevreden en komt waarschijnlijk niet terug. Een voorbeeld is T05: een 8 op 10, maar de gast raadt de kamer af door het lawaai van de machines. Ik denk dat het model daar "antwoord deze week" kiest, terwijl ik "binnen 24 uur" zou antwoorden.

## Eén wijziging
Ik heb nog geen wijziging getest. Morgen voeg ik deze regel toe aan mijn prompt: een review met een score van 4 of lager heeft altijd een antwoord nodig. Dan draai ik de reviews met zo'n score opnieuw: T03, T04 en T06.

Ook als het model ze daarna alle drie juist heeft, is dat nog geen bewijs. Ik heb pas tien reviews, en ik heb nog geen enkele test gedraaid. Drie reviews zijn weinig, en het model geeft niet elke keer hetzelfde antwoord. Misschien had het ze ook zonder mijn regel juist.
