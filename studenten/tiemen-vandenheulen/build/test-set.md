# Testset — Review-sorteerder voor evenementen

Schrijf het juiste antwoord en waarom **vóór** je de tool test. De antwoorden zijn van de student, niet van de AI.

| Nr. | Review | Juiste labels | Waarom? | Run 1 | Foutklasse | Run 2 | Foutklasse |
|---|---|---|---|---|---|---|---|
| 1 | Leuke sfeer en alles was goed geregeld. We hebben ons de hele avond prima vermaakt. | organisatie, sfeer | De review zegt dat alles goed geregeld was en benoemt expliciet de leuke sfeer. | organisatie, sfeer — juist |  |  |  |
| 2 | Fijn evenement met een goede mix van activiteiten. De wachtrij bij de ingang duurde wel even. | organisatie, wachttijden | Organisatie omdat er een goede mix was van activiteiten, en wachttijden omdat de wachtrij aan de ingang even duurde. | organisatie, wachttijden — juist |  |  |  |
| 3 | Gezellige dag gehad! Vooral de optredens maakten het voor mij de moeite waard. | sfeer | De bezoeker zegt dat het gezellig was. |  |  |  |  |
| 4 | Goed georganiseerd en vriendelijk personeel. Ik kom volgend jaar graag weer. | organisatie | De review zegt dat het goed georganiseerd is en noemt het personeel. |  |  |  |  |
| 5 | Leuke locatie en genoeg te doen. Het was op sommige momenten wel erg druk. | locatie | De bezoeker noemt de locatie expliciet leuk. Drukte krijgt in deze v1 geen apart label. |  |  |  |  |
| 6 | Het was… anders dan verwacht. | andere | De review is te vaag: ik weet niet waarom het anders was dan verwacht of wat de verwachtingen waren. |  |  |  |  |
| 7 | Top. | andere | Het is niet duidelijk wat de bezoeker precies goed vond. |  |  |  |  |
| 8 | Really nice atmosphere, but the sound could have been better. | sfeer | “Nice atmosphere” wijst op sfeer. Geluid heeft in deze v1 geen aparte categorie. | sfeer, andere — fout | `andere` onterecht toegevoegd | sfeer — juist |  |
| 9 | De stoelen waren blauw. | andere | Het is geen echte beoordeling en noemt geen thema uit de categorieën. |  |  |  |  |
| 10 | Tijdens het evenement bedacht ik dat ik thuis nog de was in de machine had zitten. | andere | Het is geen beoordeling en noemt geen categorie uit de tool. |  |  |  |  |  |

## Resultaat

_Getest: review 2 was juist in v1. Review 8 was fout in v1 en juist na de aanpassing in v2._

## V2-test — 20 oktober 2026

| Nr. | Uitkomst v2 | Beoordeling | Foutklasse |
|---|---|---|---|
| 1 | `organisatie, sfeer` | juist | |
| 2 | `organisatie, sfeer, wachttijden` | fout: extra `sfeer` | F1 |
| 3 | `sfeer` | juist | |
| 4 | `organisatie` | juist | |
| 5 | `organisatie, locatie` | fout: extra `organisatie` | F1 |
| 6 | `andere` | juist | |
| 7 | `andere` | juist | |
| 8 | `sfeer` | juist | |
| 9 | `andere` | juist | |
| 10 | `andere` | juist | |

**Resultaat v2: 8 op 10 juist (n = 10, 1 run).** De twee F1-fouten zijn extra labels bij dubbelzinnige reviews.
