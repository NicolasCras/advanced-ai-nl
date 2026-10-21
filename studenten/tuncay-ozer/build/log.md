# Logboek

| Datum | Wat | Waarom |
|---|---|---|
| 2026-10-06 | v1 gemaakt (`prompt.md`), testset van 5 inputs, 2 runs | week 2 |
| 2026-10-07 | Audit week 3 gestart. Bouwstenen gevonden: 1 (rol), 2 (regels), 3 (vorm), 5 (uitweg), 6 (input). **Mist: 4, voorbeelden.** | week 3 |
| 2026-10-07 | Besluit: bericht niet over een training blijft `geen training`, want Excel mag enkel trainingen bevatten. Komt zelden voor, ik geef zelf de input. | |

| 2026-10-07 | *want* bij `geen training` gezet. 3 voorbeelden toegevoegd (squat 100, "alles voelde zwaar", gewogen 78,4). Audit klaar: alle zes bouwstenen. | |
| 2026-10-07 | Besluit: `notitie` wordt samengevat (regel 18 aangepast, want-reden voorgesteld door Claude, nog bevestigen). Sets = `?` als ze niet in het bericht staan. Lichaamsgewicht blijft buiten deze Excel (`geen training`). | |
| 2026-10-07 | Regel 18 aangepast naar samenvatten. Testset uitgebreid met T06 (bench 80), T07 (deadlift 140x3), T08 (pull ups 8). Run 1 en Run 2 voor T06-T08 nog leeg. | |
| 2026-10-13 | Buurtest: 3 van 3 gelijk (T09, T10, T06), niets extra gezegd in de uitleg, geen wijziging. Kanttekening: mijn broertje deed het en kent me goed, dus hij vult gaten misschien zelf op. | week 3 |
| 2026-10-13 | Run 1 (T03, T05, T06, T09, T10): 4 op 5 juist (n = 5, 1 run). Fout: T10 = F3 (gemist), `12X12` niet gelezen als 12 kg x 12 reps. | week 3 |
| 2026-10-13 | Eén wijziging (bouwsteen 2, regel): `A x B` zonder apart gewicht in kg = gewicht x reps; zijn A en B gelijk (`12X12`), neem ze allebei over. Reden: T10 faalde met F3. Oude prompt bewaard als `prompt-v1.md`. Nog te draaien: T10 en T06 (kan raken). | week 3 |
| 2026-10-13 | Na de wijziging T10 en T06 opnieuw gedraaid (nieuw gesprek). T10: `spidercurl \| 3 \| 12 \| 12 \| ? \| ? \| armday`, juist (reps en gewicht goed, `armday` in notitie vind ik niet erg). T06: zelfde als Run 1, juist (de voorwaarde "zonder apart gewicht in kg" houdt hem heel). T03, T05, T09 niet opnieuw gedraaid. Eén run, dus nog geen bewijs. | week 3 |
| 2026-10-20 | Kostenmeting: één run (prompt + T01) met Haiku 5.5. Hele run $0,0061, mijn deel $0,00096. Zie `kosten.md`. `/context` startte de skill `context`, dus context benaderd met `/cost`. | week 4 |
| 2026-10-20 | Run 3: alle tien inputs met v2, Haiku 5.5 (`claude -p --model haiku`), elke input een eigen run. 9 op 10 juist (n = 10, 1 run). Fout: T02 = F3 (lopen niet herkend, 5 en 36 in notitie). T10 slaagt nu. | week 4 |
| 2026-10-20 | `build/README.md` gemaakt. | week 4 |

## Nog te doen
- [x] Het *want* bij de regel `geen training` in `prompt.md` zetten.
- [x] 3 tot 5 voorbeelden toevoegen (bouwsteen 4), zelf verzonnen, niet uit testset T01-T05.
- [ ] Bevestig het *want* bij regel 18 ("want ik wil snel zien hoe de training ging") of vervang door je eigen reden.
- [ ] **START HIER:** testset heeft 8 van 10 inputs (T01-T08). Schrijf zelf 2 echte berichten die je zou sturen (liefst een loopbericht en een heel korte) en geef het juiste antwoord met waarom. Daarna: `hulp/3-buurtest.md`.
- [ ] Testset: noteer bovenaan dat `notitie` na nakijken goed is als de betekenis klopt, niet de tekst. T03 en T04 staan nog op letterlijk, en dat past niet meer bij regel 18 (samenvatten).
- [ ] `cardio`: lopen of niet? Regel schrijven, met *want*.
- [ ] T05 is gereconstrueerd, niet echt. Vervang hem eventueel door een echt bericht.
- [ ] Afgevallen als testinput, want ik zou ze niet sturen: OHP-bericht, rack-bericht, "leg day geskipt".
- [ ] Testset naar tien inputs, door een klasgenoot laten nakijken (buurtest).
- [ ] Run 1: vijf inputs, fouten classificeren, succespercentage.
- [ ] Eén wijziging (idee: lijst met mijn oefeningen en afkortingen, bv. `inc db` = incline dumbbell press, met uitweg voor onbekende), fouten opnieuw draaien.
- [ ] Post week 3 en pull request.

## Oefeningenlijst (bewaard voor de ene wijziging om 13:10, niet in v1)
Zo typ ik het (nog aan te vullen met de naam in Excel): db press, inc db, flies, lat pulldown, squat, benchpress, flys, rows, machine rows, rrear delt flys, spider curl, hammer curl, skull crusher, triceps machine, rear delt, front delt.

Open vragen: `flies` = `flys`? `rrear delt flys` = typfout? `rear delt` = `rear delt flys`? Volledige naam bij elke afkorting invullen. Regel erbij: staat een oefening niet in de lijst, dan de afkorting letterlijk in `oefening` en "onzeker" in `notitie`.

## Ideeën voor later
- Resultaat automatisch in Excel krijgen (CSV). Pas nadat de testset bewijst dat de uitkomst klopt.
- Aparte kolom `tempo` (min/km), want het tempo toont mijn progressie. Verandert prompt, voorbeelden en testset. Eerst de baseline meten met 7 kolommen (T09 heeft `6:28/km` in het bericht, het valt nu weg).
