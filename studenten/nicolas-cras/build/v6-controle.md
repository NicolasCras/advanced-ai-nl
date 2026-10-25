# Controle: v5 en v6 op de oude testset (T01 tot T10)

Gedraaid op 2026-10-23. Vraag: breekt v6 iets op de inputs waarop v5 goed scoorde?

- **Inputs en verwachte antwoorden:** T01 tot T10 uit `test-set.md`, niet aangepast.
- **Model:** Claude Opus 5.5 (`claude-opus-5-5`), standaard niveau, voor beide versies.
- **Versies:** v5 = `prompt-v5.md`, v6 = `prompt.md`.
- **Hoe:** zelfde methode als `foutmarge.md`: elke run een nieuwe sessie zonder tools, vanuit een lege map, 3 runs per input per versie. Doel en notities zoals in de foutmargetest.
- **Scoring:** zoals in `foutmarge.md`.
- **Ruwe antwoorden:** `runs/opus-v5-t01-t10.md` en `runs/opus-v6-t01-t10.md`.

## Score

| Versie | Run 1 | Run 2 | Run 3 | Bereik (n = 10) |
|---|---:|---:|---:|---:|
| v5 | 10 | 10 | 10 | 10–10 |
| v6 | 7 | 8 | 7 | 7–8 |

De bereiken overlappen niet: **op deze inputs is v6 slechter dan v5.**

Kost: v5 gemiddeld 0,0353 dollar per run, v6 0,0291 dollar per run.

## Fouten van v6

| Input | Fout | Runs | Waarom |
|---|---|---|---|
| T01 | Herstel onvoldoende i.p.v. voldoende | 3 van 3 | do: "benen vermoeid", de loop werd lichter gedaan. Volgens de nieuwe v6-regel is een training die lichter gedaan wordt door vermoeidheid onvoldoende. |
| T04 | Herstel onvoldoende i.p.v. onzeker | 3 van 3 | wo: "minder energie". "Weinig energie" staat in de v6-lijst voor onvoldoende. |
| T03 | Herstel onvoldoende i.p.v. voldoende | 1 van 3 | "spieren volledig vermoeid" en "niet geweldig gevoel" wegen voor het model zwaarder dan de positieve signalen (regel "bij signalen voor allebei: onvoldoende"). |
| T07 | Belasting normaal i.p.v. zwaar | 1 van 3 | Zelfde wisselende fout als altijd bij T07 (F6), niet nieuw in v6. |

## Wat dit betekent

- **v6 lost de fouten op T11 tot T30 op, maar maakt nieuwe fouten op T01 tot T10.** De nieuwe herstelregels zijn strenger: één signaal van vermoeidheid geeft nu onvoldoende. Mijn verwachte antwoorden bij T01 en T04 schreef ik met de oude, mildere regels.
- **Dit is een teken van overfitting:** ik schreef de v6-regels op basis van T11 tot T30, en ze werken minder goed op inputs waarop ze niet gebaseerd zijn.
- **Ik pas de verwachte antwoorden van T01 tot T10 niet aan voor deze run.** Eerst beslissen: zijn de nieuwe herstelregels te streng, of waren mijn oude verwachte antwoorden fout?
