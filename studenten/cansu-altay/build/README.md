# Trainingsnotities omzetten naar een overzicht

Korte notities na een oefening omzetten naar oefening, gewicht, sets en herhalingen. Zo kan Cansu later haar laatst gebruikte gewicht terugvinden. Ontbrekende of onduidelijke gegevens krijgen `onbekend`.

## Status

De bewaarde prompt v4 (`prompt-v4.md`) is op 14 oktober 2026 getest op tien oorspronkelijke trainingsnotities, elk tweemaal: **18/20 runs correct (90%; n = 10, 2 runs)** volgens Cansu's beoordelingen. Twee F1-fouten bij input 6: de dubbelzinnige notitie is als drie sets geïnterpreteerd, terwijl Cansu vier bedoelde. Bij alle tien inputs waren beide antwoorden identiek; geen F6 waargenomen.

Input 7 staat met antwoord als voorbeeld in de prompt. Zonder deze input is de score **16/18 (88,9%; n = 9, 2 runs)**. De kleine testset is eerder gebruikt voor promptverbeteringen en is geen onafhankelijke test. Model/instelling door Cansu gerapporteerd als `GPT 5.6 terra hoog`; technische model-ID niet vastgesteld. Automatisch bewaren, terugzoeken en wekelijkse progressievergelijking zijn nog niet gebouwd. Tijdwinst is nog niet gemeten. V3 scoorde eerder 17/20 (85%); eerdere resultaten blijven bewaard.

De huidige prompt is v5 (`prompt.md` en `prompt-v5.md`). Alleen de regel voor een dubbelzinnig totaal aantal sets is verduidelijkt. Input 6 is apart tweemaal correct getest (2/2; n = 1, 2 runs) volgens de nieuwe vooraf vastgelegde uitvoerafspraak: Sets = onbekend. Beide antwoorden identiek. V5 heeft nog geen volledige testsetscore; de gewijzigde uitvoerafspraak verhindert een zuivere scorevergelijking met v4.

## Bestanden

- `promptaudit.md`: annotaties per regel van v4 op basis van de gezamenlijke bespreking; door Cansu nagelezen en goedgekeurd op 8 oktober.

- `taak.md`: de goedgekeurde taak en de reden voor de overstap.
- `prompt.md`: v5; zie de actuele status hierboven. De bewaarde v4 bevat drie door Cansu aangeleverde voorbeelden en haar regel met een waarom. Inputs 8 en 9 elk tweemaal correct hertest (4/4).
- `prompt-v3.md`: geteste v3, bewaard vóór het toevoegen van voorbeelden.
- `prompt-v2.md`: prompt met de failure-regel, vóór de wijziging voor spelfouten.
- `prompt-v1.md`: oorspronkelijke prompt, bewaard voor vergelijking met eerdere tests.
- `test-set.md`: tien echte inputs, vooraf vastgelegde antwoorden en de testresultaten.
- `log.md`: de geschiedenis van keuzes, tests en wijzigingen.
- `archief/horecareviews/`: de bestanden van de eerdere Build, bewaard als geschiedenis.

## De huidige versie gebruiken

1. Lees `prompt.md` en controleer de instructies zelf.
2. Kopieer de volledige prompt naar een nieuw tijdelijk gesprek in ChatGPT of een incognitogesprek in Claude. Gebruik geen web search.
3. Vervang de invultekst tussen `<notitie>` en `</notitie>` door één eigen trainingsnotitie.
4. Het model geeft een tabel terug. Vergelijk die met het juiste antwoord dat je zelf vooraf hebt vastgelegd.

Gebruik voor elke test een nieuw gesprek. Geef het model de juiste antwoorden en de volledige testset niet mee.

## Volgende stap

De gerichte hertest van 8 oktober is afgerond: v3 met alleen voorbeelden gaf 4/4 correcte antwoorden op inputs 8 en 9, elk tweemaal getest; oorspronkelijke v3 gaf 1/4 correct op dezelfde selectie. Alleen bouwsteen voorbeelden is gewijzigd en de verwachte antwoorden zijn gelijk gebleven. Dit is een kleine geselecteerde hertest, geen score op de volledige testset. Eerdere versies en resultaten blijven bewaard. Post bijwerken; schriftelijke promptannotaties en buurtest blijven open.

Op 8 oktober is een aparte versie `prompt-v3-met-voorbeelden.md` voorbereid: exact v3 plus alleen de drie voorbeelden. De waarom-zin van v4 is niet toegevoegd. Test inputs 9 en 8 elk tweemaal met deze versie en hetzelfde model; verwachte antwoorden blijven gelijk aan v3. Nog niet getest. V4 en eerdere resultaten blijven bewaard.

De hertests van inputs 8 en 9 zijn afgerond: v3 gaf 1/4 correcte runs op deze selectie, v4 4/4, met identieke antwoorden per input. Verwachte antwoorden zijn gelijk gebleven. V4 is niet op de volledige testset getest; de volledige v3-score blijft 17/20 (85%). Voorbeelden en waarom-zin zijn tegelijk toegevoegd, dus hun afzonderlijke effect is niet vastgesteld. Buurtest niet uitgevoerd omdat Cansu niet meer in de les was; die blijft open. Volgende stap: de week-3-post in Cansu's eigen woorden uitwerken en de nog ontbrekende schriftelijke annotaties per promptregel vastleggen.

V4 bevat nu alle zes bouwstenen, drie voorbeelden en een door Cansu geschreven waarom-zin. De buurtest en schriftelijke annotaties per promptregel zijn nog niet vastgelegd. Laat een klasgenoot alleen de prompt lezen en drie inputs beantwoorden zonder de verwachte antwoorden te zien. Noteer de verschillen. Test daarna de foute inputs opnieuw met de aangepaste context. Input 7 is een voorbeeld in v4; houd tests ervan apart van ongeziene inputs. De stand hieronder betreft v3.

Controleer de prompt met de zes bouwstenen van week 3. Bespreek daarna een gerichte verbetering voor het weglaten van failure, schrijf de reden vooraf op en test opnieuw met dezelfde inputs en beoordelingsregels.

## Versiegeschiedenis

- V1: letterlijke oefennamen, ontbrekende gegevens als onbekend. Inputs 1–6 elk tweemaal getest: 10/12 correct; input 6 dubbelzinnig.
- V2: failure behouden als tot failure (aantal onbekend). Inputs 1–5 en variant 6b elk tweemaal correct (12/12). Oorspronkelijke input 6 eenmaal getest, met een afwijking in de oefennaam; tweede run niet uitgevoerd.
- V3: duidelijke spelfouten in oefennamen verbeteren. Inputs 1–10 elk tweemaal getest: 17/20 correct (85%). Negen van tien inputs gaven identieke antwoorden; acht van tien waren in beide runs correct. Variant 6b niet getest met v3.

Alle eerdere runs en wijzigingen blijven bewaard in log.md en test-set.md.
