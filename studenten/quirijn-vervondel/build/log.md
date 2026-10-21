# Logboek

## 2026-10-13
- T01 is geen notitie uit de gsm van mijn broer. Ik heb ze zelf opgeschreven op basis van een echte klus waar ik bij was.
- T01 gedraaid met Claude, twee keer. Elke run in een apart nieuw gesprek dat alleen de prompt zag.
- T01, aansluitpunt voeding: F3 gemist, in beide runs. Verwacht "zekeringkast", de tool gaf "onbekend, na te vragen". In de notitie staat "voeding vanuit kast", en "kast" betekent bij ons de zekeringkast. Dat staat niet in de prompt.
- T02 is ook zelf opgeschreven op basis van een echte klus, niet uit de gsm van mijn broer.
- T02 gedraaid met Claude, twee keer. Elke run in een apart nieuw gesprek.
- T02, bevestigingsbeugels condensafvoer: F3 gemist, in beide runs. Ze staan in de notitie, maar niet in de vaste tabel van de prompt, en de tool liet ze weg.
- T02, bochten: F6 wisselend. Run 1 gaf "Bocht 0", Run 2 liet de rij bochten weg.
- T03 is ook zelf opgeschreven op basis van een echte klus, niet uit de gsm van mijn broer.
- T03 gedraaid met Claude, twee keer. Elke run in een apart nieuw gesprek.
- T03, kabelgoot: hergebruikte kabelgoot werd in beide runs volledig weggelaten in plaats van 0.
- T03, dakblokken en tape: F3 gemist, in beide runs. Ze staan in de notitie, maar de tool liet ze weg.
- T03, bochten en tussenstukken: F6 wisselend. Run 1 liet de rij weg, Run 2 gaf "onbekend, na te vragen".
- T03, communicatiekabel: de regel communicatiekabel = koelleiding is met T03 niet te testen: de koelleiding was onbekend, dus beide manieren geven onbekend.
- T04 is ook zelf opgeschreven op basis van een echte klus, niet uit de gsm van mijn broer.
- T04 gedraaid met Claude, twee keer. Elke run in een apart nieuw gesprek.
- T04, kabelgoot: de rekenregel werkt. 26 m werd in beide runs 13 stuks.
- T04, "verlopen": F2 verzonnen en F6 wisselend. Run 1 voegde een rij "Verloopstuk, onbekend" toe, Run 2 niet. De tool las "verlopen" als een onderdeel, maar bij ons betekent het de leiding wegwerken of omleiden.
- T04, werkwijze: het verwachte antwoord werd opgesteld voor de runs, maar samen met de runs in één bericht doorgegeven. Bij T05 doe ik het in twee stappen.
- T05 is ook zelf opgeschreven op basis van een echte klus, niet uit de gsm van mijn broer.
- T05 gedraaid met Claude, twee keer. Elke run in een apart nieuw gesprek. Beide runs gaven exact dezelfde tabel, zonder fouten.

## 2026-10-20
- T06 tot T10 zijn zelf genoteerd op basis van echte klussen bij JAVE Klimatech, omdat er geen extra plaatsbezoek-notities beschikbaar waren.
- T06 tot T10 gedraaid met prompt v1, Run 1. Elke test in een apart, nieuw gesprek zonder context (gelijkwaardig aan een tijdelijke chat).
- T06: niet geslaagd. Bocht (over dak) en hoekstuk werden "onbekend" in plaats van 1 (F3 gemist). De notitie noemt ze zonder aantal, en de prompt zegt: geen aantal, dan onbekend. De tool volgde dus de prompt. De binnen- en buitenunits ontbreken: de prompt heeft daar geen rij voor (F3 gemist).
- T07: niet geslaagd. Voedingskabel werd "onbekend" in plaats van "geen" (F3 gemist). De tool koppelde "aansluitingen al aanwezig" niet aan de voeding.
- T08: niet geslaagd. Kabelgoot 3 stuks in plaats van 4: promptfout, de regel "per route apart aansnijden" staat niet in de prompt. Condensafvoer type "onbekend" in plaats van druk-PVC: promptfout, "condenspompje = druk-PVC" staat niet in de prompt. De 3 condenspompen ontbreken: geen rij in de prompt (F3 gemist).
- T09: niet geslaagd. Niets verzonnen, alles "onbekend". Maar de tool behandelde het kanaalsysteem als een split, en luchtkanalen en roosters ontbreken in de lijst om na te vragen (F3 gemist).
- T10: niet geslaagd. Koelleiding, communicatiekabel en kabelgoot juist. De units en de steunblokken ontbreken: geen rij in de prompt (F3 gemist).
- Tool: Claude. Elke test is gedraaid in een apart, nieuw gesprek zonder context of voorkennis van de juiste antwoorden.
- Succespercentage: 1 op 10 juist (n = 10, 1 run). Per onderdeel, T06 tot T10: 19 op 30 juist (n = 5, 1 run). Niets verzonnen, T06 tot T10: 5 op 5 runs. Over T01 tot T10: 9 op 10 runs, want in Run 1 van T04 werd een verloopstuk verzonnen.
- Eén wijziging: prompt v2. Twee regels erbij: kabelgoot per route apart naar boven afronden, en een condenspompje betekent condensafvoer druk-PVC. T06 tot T10 opnieuw gedraaid met v2, elk in een apart, nieuw gesprek zonder context.
- Resultaat v2, T08: kabelgoot nu 4 stuks (was 3), juist. Condensafvoer type nu druk-PVC voor de 3 units met condenspompje (was onbekend), juist. Voor de zolderunit gaf de tool "onbekend": daar staat geen condenspompje in de notitie. De condenspompen zelf ontbreken nog altijd (F3 gemist, geen rij in de prompt). T08 blijft dus niet geslaagd.
- Resultaat v2, T06, T07, T09 en T10: zelfde uitkomst als met v1. De nieuwe kabelgootregel maakte niets kapot: T06 en T10 gaven nog altijd 1 stuk.
- Succespercentage v2: 0 op 5 juist (n = 5, 1 run), zelfde als v1. Per onderdeel 21 op 30 (v1: 19 op 30). Niets verzonnen: 5 op 5. Nog geen bewijs: 5 inputs en 1 run per versie zijn te weinig.
- Juist antwoord T08 achteraf verduidelijkt: druk-PVC geldt alleen voor de 3 units met condenspompje, de zolderunit had geen pompje. De tool was hier preciezer dan mijn eerste antwoord.
- Correctie: v2 was gebaseerd op twee foute regels uit een AI-suggestie. Bij mijn eigen controle bleek dat de v1-kabelgootregel klopte en dat condenspompje niet druk-PVC betekent. v2 wordt teruggedraaid.
- Juist antwoord T08 gecorrigeerd. Kabelgoot: 3 stuks (0,5 + 5 = 5,5m), want je telt alle meters samen en deelt door 2, naar boven afgerond. Condensafvoer type: condensbuis (pompje) voor de 3 units met condenspompje, zolderunit onbekend. Een pompje gebruik je als het niet gravitair kan, het water gaat dan via een condensbuis. Druk-PVC is voor buiten of lange afstanden binnen. De eerdere regels over T08 hierboven ("promptfout", "druk-PVC") gelden niet meer.
- T08 herberekend. v1: kabelgoot 3 stuks is juist. Condensafvoer type "onbekend" is fout, want de prompt kent alleen gravitair en druk-PVC, geen condensbuis. Condenspompen ontbreken (F3). 5 op 7. v2: kabelgoot 4 stuks is fout en condensafvoer type druk-PVC is fout (F1, allebei door de foute regels). 4 op 7.
- Succespercentage herberekend, T06 tot T10 per onderdeel: v1 20 op 30, v2 19 op 30. Per input blijft het 0 op 5 voor allebei, en over T01 tot T10 1 op 10 juist (n = 10, 1 run). v2 maakte de tool dus slechter, niet beter.
