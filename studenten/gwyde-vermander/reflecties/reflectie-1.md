# Reflectie 1

## Wat kan mijn tool nu?
Na mijn testrun met v3 ging goed: het duidelijk herkennen van de labels uitgeschakeld (T01), in herstel (T02 en T10) en goed (T04). Het taalmodel ziet een uitslag alleen niet als vorm (T07), want het taalmodel moet zich puur baseren op de tekst: wat de renner zegt of de interviewer schrijft. Een resultaat gebaseerd op uitslagen komt later door het toevoegen van machine learning. De tool kan ook al verschillende talen begrijpen en het juiste label plaatsen, bijvoorbeeld bij T08, een Spaans bericht. Daarnaast gaf de tool met v3 bij elke input twee keer hetzelfde antwoord: er was geen enkele F6 meer.

## Wat kan hij niet?
De tool gaat nog niet goed om met gemengde signalen in de berichten: bij T03 en T09 gaf hij "geen info" in plaats van het label "vermoeid". Hij kan ook nog geen artikels zoeken, want die moet ik voorlopig zelf erin plakken. Het deel machine learning, gebaseerd op de resultaten, kan hij ook nog niet.

## Welk cijfer bewijst dat?
Na de laatste testrun haalde de tool 16 op 20 juist (n = 10, 2 runs) met v3. De fouten waren twee keer F1, bij T03 en T09. De kost per run is € 0,008 tot € 0,017 (Haiku 4.5, tabelprijs).
