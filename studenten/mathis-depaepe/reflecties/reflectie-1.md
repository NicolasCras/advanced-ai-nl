# Reflectie 1

## Wat kan mijn tool nu?

Mijn tool haalt uit een gewone verkoopadvertentie betrouwbaar het model, referentienummer, de staat, de munt en de servicegeschiedenis. Die velden waren in beide runs juist bij alle tien de inputs, ook in het Duits, Frans en Engels. Het merk was juist bij de negen echte verkoopadvertenties. Bij twee verschillende referentienummers zegt hij terecht "onbekend" in plaats van te gokken.

## Wat kan hij niet?

Mijn tool kiest de vraagprijs niet goed als er nog een ander bedrag staat, zoals een bod (T05) of een doorgestreepte prijs (T07). Dan zegt hij "onbekend". Bij "Baujahr / Kaufdatum: 2025" (T03) doet hij hetzelfde met het bouwjaar. Dat komt waarschijnlijk door mijn eigen regel uit v3: bij twee waarden "onbekend" invullen. Zeker weet ik het niet, want tegelijk veranderde ook het model, van ChatGPT naar Haiku 5.5. Die regel maakt hem te voorzichtig: drie van mijn vier F3-fouten komen daarvan. Hij mist ook een certificaat als papieren (T08). En hij herkent niet dat een advertentie van een opkoper geen verkoop is (T10): dan vult hij toch een merk en een verkoper in.

## Welk cijfer bewijst dat?

188 op 200 velden juist (n = 10, 2 runs, v4, Haiku 5.5). Het zwakste veld is de vraagprijs: 16 op 20.
