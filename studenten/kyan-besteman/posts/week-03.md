# Week 3 — Een AI die evolueert naar een werkende tool

## Wat ontbrak er in mijn context?
Wat vooral in de context van mijn prompt ontbrak, was kennis en ervaring. Dit weet ik uit mijn studentenjob bij de NMBS. Kijk naar T04: de tool had nog niet genoeg kennis om te beseffen dat je een geldig ticket moet kopen of bij hebben voor je de trein instapt. Een ander voorbeeld is T02, waar de tool niet kon kiezen tussen vervallen en vergeten. Hier ontbrak het inzicht van de tool. Dit probleem is waarschijnlijk opgelost door regel 6: kijken vanuit het perspectief van de treinbegeleider. Als de klant zijn abonnement niet op zak heeft, kan de treinbegeleider niet zien of het geldig of vervallen is. Het label blijft dus "abonnement vergeten".

## Mijn eerste cijfer
- Label juist: 16 op 20 (n = 10, 2 runs)
- Label en alle velden juist: 11 op 20 (n = 10, 2 runs)
- Fouten: 4× F3 (gemist), 4× F5 (geweigerd), 3× F6 (wisselend)

Het cijfer 16 op 20, het aantal juiste labels, is voor mij het belangrijkste, omdat het aangeeft welke standaardbrief je zal gebruiken. De labels moeten altijd kloppen, omdat ze je een inzicht geven in wat je precies moet opzoeken of controleren. De fout die mij het meest verraste, lag bij de velden. Ik had niet verwacht dat dat cijfer zo laag zou liggen (11 op 20). De oorzaak ligt in mijn prompt: die zegt niet wanneer een veld `nee` is en wanneer `niet vermeld`. Dat stond alleen in mijn voorbeelden. Dit is een werkpuntje dat in v3 zeker opgelost moet worden.

## Eén wijziging
Ik veranderde meerdere dingen tegelijk, waardoor er niet echt een bewijs is van welke verandering de oorzaak is. Het zijn eerder aanwijzingen die ik kan geven. Bij T02, zoals ik eerder al vermeldde, is de meest logische oplossing de zesde regel die ik aan mijn prompt toevoegde. Maar dit kan ik niet bewijzen, aangezien er nog andere veranderingen waren. In v1 gaf T02 twee keer `onzeker`, in v2 gaf hij twee keer het juiste label. Wat ik zeker meeneem naar v3: ik test best één verandering per testrun, zodat ik met zekerheid kan uitleggen welke oorzaak het resultaat vormde.
