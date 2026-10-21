# Logboek

Elke run, elk resultaat, elke wijziging. Wis nooit een fout.

| Datum | Versie | Wat ik deed | Resultaat | Fout of opvallend | Volgende stap |
|---|---|---|---|---|---|
| 2026-10-17 | v1 | T01–T05 gedraaid, 2 runs per input | Label juist: 6 op 10 (n = 5, 2 runs) | T02: 2× `onzeker`, de tool twijfelde tussen `abonnement vergeten` en `abonnement vervallen`. T04: 2× `onzeker`. De reactie is te vaag: werd het ticket op de trein gekocht en moest er nog een tarief aan boord bij, of was het ticket zelf al een ticket met tarief aan boord? | Regel toevoegen voor vergeten of vervallen: kijk naar wat de treinbegeleider kon zien op dat moment. T04 laten liggen, want te vaag voor één label. |
| 2026-10-19 | v2 | Prompt aangepast (zie `prompt-v2.md`, "Wat veranderde") | – | Zeven wijzigingen tegelijk. T02 werd juist in v2, waarschijnlijk door regel 6 (de treinbegeleider kon alleen zien dat het abonnement niet bij was). Dat is een aanwijzing, geen bewijs, want ik veranderde meerdere dingen tegelijk. | Bij v3 elke wijziging apart testen, één per keer. |
| 2026-10-19 | v2 | T01–T05 gedraaid, 2 runs per input | Label juist: 8 op 10 (n = 5, 2 runs) | T02 en T03 hebben nu ook fouten in de velden (T02 Run 1: datum, T03 Run 1: abonnement). | Testset uitbreiden naar tien inputs (T06–T10). |
| 2026-10-19 | v2 | T06–T10 geschreven en gedraaid, 2 runs per input | Totaal T01–T10: label juist 16 op 20, label en alle velden juist 11 op 20 (n = 10, 2 runs) | Het label werkt beter dan de velden (16 op 20 tegenover 11 op 20). De meeste veldfouten zitten bij Online aankoop: `niet vermeld` in plaats van `nee`. De tool kiest `onzeker` wanneer een reactie bij twee labels past (T04, T08). Juiste antwoord T04 blijft `ticket te laat gekocht`: de klant stond al in de trein. | v3, één wijziging per keer: 1) regel "in de trein gekocht = te laat" (T04), 2) regel voor `nee` en `niet vermeld` bij de velden, 3) de tool laten kiezen tussen twee labels (T08). |
