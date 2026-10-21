# Week 4 — Goedkoop om te draaien, moeilijk om te bewijzen

## Mijn tool in cijfers

Mijn tool zet een bericht van een chauffeur om in een melding met voertuig, soort probleem en dringendheid. Ik testte hem met 10 echte berichten waarvan ik als baas vooraf het juiste antwoord had bepaald, en draaide de set twee keer. Dat geeft 20 antwoorden, en 12 daarvan zijn juist: 12 op 20 (n = 10 berichten, 2 runs).

Dat cijfer mengt twee versies van de prompt. Vijf antwoorden uit run 1 kwamen van v1, de rest van v2. Daarom noem ik ook de laatste run apart, met één prompt en alle tien de berichten: 5 op 10 (n = 10, 1 run, v2). Dat zegt hoe de huidige prompt het doet. 12 op 20 heeft meer antwoorden, maar is minder zuiver. Beide cijfers zijn klein: één bericht meer of minder verschuift 5 op 10 al met tien procentpunt.

De 8 fouten vallen in drie klassen:

- 4 keer een verkeerde dringendheid (F1).
- 3 keer hetzelfde bericht met een ander antwoord dan in run 1 (F6).
- 1 keer een stellige dringendheid terwijl de tool bij de soort twijfelde (F5).

De F6-fouten vind ik het vervelendst, want daar is de tool niet eens consequent met zichzelf.

## Wat kost één run?

Ik mat één run met Haiku, vanuit een lege map. Bij elke run leest het model eerst ± 27.300 tokens (stukjes tekst) die er altijd al zijn, nog voor mijn bericht erbij komt. Dat is de context. Mijn eigen deel is veel kleiner: 1.885 tokens erin (mijn prompt plus het bericht van de chauffeur) en 460 eruit, waarvan 353 denkwerk. Ik reken alleen mijn deel mee, want de context hoort bij de meetomgeving en niet bij mijn tool. Zo kost één run ± 0,0042 dollar, ongeveer 0,0038 euro.

Bij het transportbedrijf van mijn vader komen 4 à 5 meldingen per week binnen, dus ± 20 per maand. Dat kost ± 0,08 euro per maand. Met 10× zoveel (200 runs) is het ± 0,76 euro, en met 1.000× zoveel (20.000 runs) ± 76 euro. Bij dezelfde hoeveelheid tekst kost Sonnet 5.5 ± 0,17 dollar per maand, Opus 5.5 ± 0,33 en Fable 5.1 ± 0,84. Bij dit volume doet de prijs er dus niet toe: zelfs het duurste model kost minder dan een euro per maand.

## Met de hand of met de tool?

Met de hand duurt een melding ongeveer 7 minuten: de chauffeur geeft ze door (2 min) en mijn vader denkt na en beslist (5 min). Met de tool is het 3,5 minuten: dezelfde 2 minuten van de chauffeur, 0,5 minuut om de tool te openen en te draaien, en 1 minuut waarin mijn vader het resultaat nakijkt en beslist. Voor het nakijken nam ik 1 minuut, omdat mijn vader na 40 jaar ervaring volgens eigen zeggen binnen een minuut ziet of iets ernstig is. Dat is zijn eigen inschatting, niet gemeten. Al die tijden zijn mijn eigen schattingen, geen metingen. De winst is 3,5 minuten per melding, en alleen bij mijn vader, want de 2 minuten van de chauffeur blijven gelijk.

Bij 4 à 5 meldingen per week (± 240 per jaar, ook mijn schatting, nog na te vragen bij mijn vader) is dat 14 uur per jaar. Reken ik met 100 euro per uur (mijn vader bevestigde dat een uur van hem het bedrijf 100 euro kost), dan is dat 1.400 euro. De tool zelf kost ± 0,91 euro per jaar (gemeten, met de prijs van Haiku 4.5 uit de tabel). Netto komt dat op ± 1.399 euro per jaar, maar alleen als de tool de volledige 5 minuten van mijn vader vervangt.

## Mijn zwakste cijfer

Mijn zwakste getal is hoeveel van die 5 minuten de tool echt vervangt. De tool neemt het bepalen van de ernst over. Het regelen daarna (de chauffeur bellen, de garage inplannen, een takeldienst sturen) moet mijn vader met de tool net zo goed doen als met de hand. Alleen het ernst-deel levert dus tijd op, en dat deel heb ik niet gemeten. Het nakijken hoort erbij: de tool zat in mijn test 8 keer op 20 mis, dus mijn vader moet de ernst zelf nog eens controleren.

Als het ernst-deel 2 minuten is in plaats van 5, daalt de winst naar 0,5 minuut per melding: ± 2 uur en ± 200 euro per jaar. Bij 1,5 minuut is de winst nul. Bij 1 minuut kost de tool tijd (± −200 euro). Daarom geef ik een bereik van ± −200 tot ± 1.400 euro per jaar, tot ik aan mijn vader heb gevraagd hoe lang hij over de ernst doet en hoe lang over het beslissen.
