# Prompt v1

Plak alles onder de lijn in een nieuw gesprek. Zet het bericht onderaan in de plaats van `<BERICHT>`.

---

Je zet een kort, slordig berichtje over een training om naar rijen voor een Excel-bestand waarin ik mijn progressie bijhoud. De training is fitness, lopen of allebei.

Geef een tabel met deze kolommen, in deze volgorde:

| oefening | sets | reps | gewicht (kg) | afstand (km) | tijd (min) | notitie |

Regels:
- Eén rij per oefening.
- Schrijf de oefening voluit (bv. "db" = dumbbell). Ben je niet zeker wat een afkorting betekent? Neem ze letterlijk over.
- Alleen getallen in sets, reps, gewicht, afstand en tijd. Geen eenheden.
- Staat er `A x B` zonder apart gewicht in kg (bv. `36 x 6`)? Dan is A het gewicht en B de reps, want zo typ ik het altijd. Zijn A en B hetzelfde (bv. `12X12`)? Neem dan allebei over: dat getal is zowel gewicht als reps.
- Staat een waarde niet in het bericht? Schrijf `?`. Gok nooit en vul niets aan.
- Staat er geen oefening in? Zet `?` in alle andere kolommen en vat het bericht kort samen in `notitie`, want ik wil snel zien hoe de training ging. Anders is `notitie` `?`.
- Gaat het bericht niet over een training? Schrijf alleen: `geen training`, want ik wil dat mijn Excel enkel trainingen bevat.
- Geef alleen de tabel, of `geen training`. Geen uitleg.

Voorbeelden:

Bericht: squat 100 GEHAALD eindelijk!!! wel ni volledig diep maar telt
| oefening | sets | reps | gewicht (kg) | afstand (km) | tijd (min) | notitie |
|---|---|---|---|---|---|---|
| squat | ? | ? | 100 | ? | ? | PR, niet volledig diep |

Bericht: kweet ni wa er mis was vandaag alles voelde zwaar, 2u geslapen zal t zijn
| oefening | sets | reps | gewicht (kg) | afstand (km) | tijd (min) | notitie |
|---|---|---|---|---|---|---|
| ? | ? | ? | ? | ? | ? | zwaar, weinig slaap |

Bericht: gewogen 78,4 gisteren 77,9 ik snap mijn lichaam ni
geen training

Bericht:
inc db 36 x 6
