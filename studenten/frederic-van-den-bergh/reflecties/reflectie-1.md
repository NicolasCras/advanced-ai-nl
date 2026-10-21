# Reflectie 1

## 1. Wat kan mijn tool nu?

Mijn tool sorteert berichten van chauffeurs op soort en dringendheid. Hij is goed in duidelijke berichten over gevaarlijke problemen. Bij T07 ("Rempedaal zakt door tot op de vloer en de vrachtwagen stopt amper") gaf hij in beide runs remmen / direct stilleggen, en dat is juist. Bij vage berichten zegt hij niet altijd "onzeker" als dat moet: bij T10 ("hij trilt raar") deed hij dat in run 1 wel (onzeker / onzeker), maar in run 2 gokte hij onzeker / direct terugkeren naar depot, en dat is fout.

## 2. Wat kan hij niet?

Het vaakst komt F1 voor (4 van de 8 fouten): de tool kiest een verkeerd dringendheidsniveau. Zo kreeg T01 (mistlicht vooraan links werkt niet) twee keer "snel nakijken", terwijl "kan wachten" juist is. Het gevaarlijkst voor mijn vader is F6, dat hetzelfde bericht bij een tweede run een ander antwoord geeft: T06 ("la benne paut pas monter", juist: direct terugkeren naar depot) kreeg in run 1 het juiste antwoord, maar in run 2 "onzeker / onzeker", en dan gebeurt er niets terwijl de remorque direct vervangen moet worden. Het echt dringende probleem dat als "kan wachten" gelabeld wordt, kwam niet voor in mijn 20 antwoorden, maar dat betekent weinig, want mijn testset heeft maar twee "kan wachten"-rijen (T01 en T02), allebei onschuldig, dus dat risico is eigenlijk niet getest.

## 3. Welk cijfer bewijst dat?

**Run 2 alleen: 5 op 10 juist (n = 10, 1 run, prompt v2).** Het is het enige cijfer waarbij alle tien de berichten door dezelfde versie van de prompt gingen. "12 op 20" mengt v1 en v2, en dan weet je niet welke prompt je eigenlijk meet. Het past ook bij mijn antwoorden op vraag 1 en 2: in run 2 zitten twee F1-fouten (T01, T05) en drie F6-fouten (T04, T06, T10). Dat zijn dus zowel de meest voorkomende fout als de gevaarlijke wisselvalligheid.
