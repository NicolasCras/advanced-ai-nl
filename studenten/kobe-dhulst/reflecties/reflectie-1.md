# Reflectie 1

## Wat kan mijn tool nu?
Mijn tool sorteert schoolmails in vijf labels: dringend, later, info, negeren en onzeker. Hij kan nu de meeste mails juist klasseren: een lokaalwijziging, opdrachten met een datum, reclame, een betalingsbevestiging, een Engelse mail en een mail met alleen een bijlage. Die gingen in twee runs telkens juist.

## Wat kan hij niet?
Het enige probleem dat ik gemeten heb, is een mail met een verificatiecode. De tool geeft dan later, omdat er geen datum in de mail staat. Maar die mail is dringend, omdat ik er nu iets mee moet doen. Dringend heb ik ook maar één keer in mijn testset, dus ik weet nog niet of de tool andere dringende mails wel juist doet. En ik weet nog niet of de goedkopere Haiku van Claude even goed werkt: die had T01 al fout.

## Welk cijfer bewijst dat?
18 op 20 juist (n = 10, 2 runs, Opus 5.5, prompt v2). Dat is mooi. De twee fouten zijn allebei de verificatiecode (T07), twee keer met dezelfde reden. Het is dus geen toeval, er ontbreekt een regel in mijn prompt.
