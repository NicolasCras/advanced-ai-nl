# Testset

Juiste antwoord = label (`GO` / `NO-GO` / `ONZEKER`) en bij `NO-GO` de risico's (A, B, C, D). Ingevuld vóór de eerste run.

**Wanneer is een antwoord juist?**
- Het label moet kloppen.
- Bij `NO-GO` moeten alle verwachte risico's erbij staan. Een gemist risico is een fout (F3), ook als het label klopt. Want als ik één probleem oplos, wil ik weten dat er nog een tweede is.
- Een extra risico telt niet als fout, zolang het citaat echt op de pagina staat. Ik noteer het wel als opvallend.
- Staat een citaat niet op de pagina, dan is het altijd een fout (F2), ook als het label klopt.

| ID | Input | Juiste antwoord | Waarom | Run 1 | Run 2 |
|---|---|---|---|---|---|
| T01 | Tote bag — zie T01 hieronder | GO | Het is een gewone katoenen tas zonder merknaam, geen elektronica, licht en niet breekbaar, dus geen van de vier risico's. "Patronen: Cartoon" is op zich geen probleem, maar het is goed als de tool het aankaart. | GO | GO |
| T02 | Hoesje voor AirPods Pro — zie T02 hieronder | GO | Het is een siliconen hoesje dat het merk alleen noemt om te zeggen waarvoor het past, geen namaak. Geen elektronica, licht en niet breekbaar. | GO | GO |
| T03 | USB-oplader 20W — zie T03 hieronder | GO | Het is een oplader met CE-markering, zonder merknaam van een ander merk, klein en niet breekbaar. | GO | GO |
| T04 | Glazen parfumflesjes — zie T04 hieronder | NO-GO (C) | De flesjes zijn van glas en dus breekbaar, wat verzending duurder maakt en tot meer retours door breuk leidt. | NO-GO (C) | NO-GO (C) |
| T05 | Vage titel + foto — zie T05 hieronder | ONZEKER | De titel is een reeks zoekwoorden en de specificaties zijn bijna leeg, dus uit de tekst weet je niet wat het product is of waaruit het bestaat. | ONZEKER | ONZEKER |
| T06 | Mini handventilator — zie T06 hieronder | GO | Het is elektronica met CE-certificaat, eigen merk XIQI, licht en van plastic. De lithiumbatterij is ingebouwd en niet los, dus dat telt niet als risico C. Lastig punt: de tool kan de batterij toch als verzendrisico zien. Tweede valkuil: de tool kan door de disclaimer denken dat CE niet zeker is. Maar de disclaimer is een standaardtekst van Alibaba die niets over dit product zegt, en CE staat er gewoon bij. | GO | |
| T07 | Collageen gummies — zie T07 hieronder | NO-GO (D) | Het is een voedingssupplement, en dat is beperkt op bol.com. De titel zegt zelf "Gezondheidssupplementen". Lastig punt: bij de specificaties staat "Gummy Candy" en "Snoepgoed", dus de tool kan denken dat het gewoon snoep is en GO zeggen. | NO-GO (D) | |
| T08 | Pluche Monster Energy-pop — zie T08 hieronder | NO-GO (A, B) | A: de knuffel gebruikt de naam en de look van Monster Energy, een merk van iemand anders. B: het is speelgoed en er staat geen CE. Lastige punten: de merknaam is XINLI, dus de tool kan denken dat er geen merkprobleem is. Er staat "14 Jaar & up", dus de tool kan denken dat het geen speelgoed is. En "Verantwoordelijke EU-persoon" klinkt als in orde, maar het is geen CE. | NO-GO (A, B) | |
| T09 | LED-bureaulamp, pagina in het Frans — zie T09 hieronder | NO-GO (B) | Het is een lamp op netstroom, dus elektronica, en er staat nergens CE. Lastige punten: de pagina is in het Frans, dus de tool moet letterlijk in het Frans citeren en niet vertalen. In de titel staat "norme américaine", dat is geen CE. En "Prise: US/EU/UK" klinkt alsof het voor Europa in orde is, maar een EU-stekker is geen CE. | NO-GO (B) | |
| T10 | Metalen sleutelhanger, korte input — zie T10 hieronder | GO | Het is een metalen sleutelhanger zonder merk van iemand anders, geen elektronica, niet breekbaar en niet verboden. Lastig punt: er staat weinig tekst, dus de tool kan ONZEKER zeggen. Maar het is wel duidelijk wat het product is en van welk materiaal, dus ONZEKER is hier fout. | GO | |
| T11 | "Designer Frans geïnspireerde" schoudertas, DHgate — zie T11 hieronder | NO-GO (A) | De titel zegt "Designer Frans geïnspireerde schoudertas met ketting" en "luxe". Er staat geen merknaam, maar het verwijst duidelijk naar een bekende Franse luxetas. "Geïnspireerd" werkt hetzelfde als "style" in mijn regel A. Lastig punt: omdat er geen merknaam staat, kan de tool GO zeggen. Dat is net wat ik wil testen. | NO-GO (A) | NO-GO (A) |
| T12 | Pluche "Niuniu Energy Drink"-blik, CE alleen op foto, AliExpress — zie T12 hieronder | NO-GO (B) | De pagina noemt het zelf een pluche pop, dus het is speelgoed volgens mijn regel, ook met 14+ jaar. CE staat niet in de tekst. Lastig punt: CE staat wel op een foto, maar de tool ziet alleen tekst. Dit toont een grens van mijn tool. Tweede lastig punt: "Niuniu Energy Drink blik" en "voor fans" kan verwijzen naar een bestaand merk, maar er staat geen echte merknaam, dus A tel ik niet als verplicht risico. | NO-GO (B) | NO-GO (A, B) |
| T13 | Gotische konijnenknuffel-sleutelhanger, AliExpress — zie T13 hieronder | NO-GO (B) | Het is een grijze zone: een sleutelhanger kan decoratie zijn, maar de pagina noemt het zelf een knuffel. Bij twijfel kies ik NO-GO, want als het toch speelgoed is, mag ik het zonder CE niet verkopen. | NO-GO (B) | NO-GO (B) |

## Inputs

Plak per ID de tekst van de pagina (titel, beschrijving, specificaties). Vervang echte namen van personen. Zet de link erbij.

### T01
Link: https://www.alibaba.com/product-detail/Big-Tote-Bag-Small-Canvas-Tote_1601157795419.html

```
Titel: cotton tote bag

Maatwerkopties(1)

Logo/grafisch ontwerp
Min. order: 100 stukken
+ vanaf € 1,79/stuk
Maatwerkmogelijkheden van leverancier

Maatwerk voor ontwerpen
Maatwerk voor voorbeelden
Volledig maatwerk
Belangrijkste kenmerken
Materiaal

Katoen, niet geweven stof

Maat

(30cm<Max Length<50cm), (20cm<Max Length<30cm), Grote( max. lengte> 50cm)

Toepassing

Adverteren, Reizen, Supermarkt, Buiten, Dagelijks, Geschenk

Patronen

Cartoon

Land van herkomst

Guangdong, China

Merknaam

OEM

In één oogopslag

Katoenen doekmateriaal: Het gebruik van 100-230 g/m² katoen en 230-600 g/m² doek zorgt ervoor dat de tas zowel duurzaam als milieuvriendelijk is, waardoor deze geschikt is voor herhaald gebruik in verschillende omstandigheden.

Gepersonaliseerde zijdscreenprint: Zijdscreenprint stelt heldere en langdurige aangepaste logo's mogelijk, verhoogt de merkzichtbaarheid en maakt de tassen ideaal voor promotie- of bedrijfsevenementen.

Shipping
$ 50 korting op de eerste verzendbestelling
Ocean freight via  Maersk
Verzendkosten:vanaf € 0,43/kg (min. 50 kg)
Transittijd: Naar verwachting 24-31 dagen
Offerte aanvragen
Of chat met de leverancier van het product voor meer verzendopties.
Orderbescherming van Alibaba.com

Veilige betalingen

Elke betaling die u op Alibaba.com doet, is beveiligd met strikte SSL-codering en PCI DSS-gegevensbeschermingsprotocollen


Geldteruggarantie
Vraag een restitutie aan als uw bestelling niet is verzonden, zoekraakt of met productproblemen aankomt


Vraag verzenden

Nu chatten
Alleen bestellingen die via Alibaba.com zijn geplaatst en betaald, worden gratis beschermd door
Betaling & financiering
Krijg 30 dagen om renteloos te betalen met  
Andere aanbevelingen voor uw bedrijf

Belangrijkste kenmerken
Toepassing
Adverteren, Reizen, Supermarkt, Buiten, Dagelijks, Geschenk
Materiaal
Katoen, niet geweven stof
Maat
(30cm<Max Length<50cm), (20cm<Max Length<30cm), Grote( max. lengte> 50cm)
Meer weergeven
Patronen
Cartoon
Afdichtingen
Shoulder
Stijl
Behandeld, afgehandeld
Verpakking
PP tas
Land van herkomst
Guangdong, China
Merknaam
OEM
Productnaam
Aangepaste katoenen draagtas
Functie
Promotietas, cadeautas, boodschappentas, Recyclebaar, milieuvriendelijk, herbruikbaar, duurzaam
Meer weergeven
Gebruik
Promotie, gift, dagelijks, reizen, winkelen
Logo
Accepteer aangepast logo
Maat
35*40*10cm of aangepast
Kleur
Aangepaste kleur
Materiaal katoen
100-230gsm/canvas: 230-600gsm
Afdrukken
Aangepast logo door zeefdruk/warmteoverdracht afdrukken enz.
Meer weergeven
Moq
200pcs
Verpakking en levering
Selling Eenheden
Enkel item
enkele pakket maat
15X15X5 cm
enkele brutogewicht
0.3 kg
Doorlooptijd
Maatwerkopties
Logo/grafisch ontwerp(+ vanaf +€ 1,79/stuk/Min. bestelling: 100 stukken)
Details weergeven

Nu chatten
Certificaten


RoHS(2)
Conform RoHS

Beschrijving:
In één oogopslag

Katoenen doekmateriaal: Het gebruik van 100-230 g/m² katoen en 230-600 g/m² doek zorgt ervoor dat de tas zowel duurzaam als milieuvriendelijk is, waardoor deze geschikt is voor herhaald gebruik in verschillende omstandigheden.

Gepersonaliseerde zijdscreenprint: Zijdscreenprint stelt heldere en langdurige aangepaste logo's mogelijk, verhoogt de merkzichtbaarheid en maakt de tassen ideaal voor promotie- of bedrijfsevenementen.
```

### T02
Link: https://www.alibaba.com/product-detail/Silicone-Cover-2-3-Cases-Custom_1600860972880.html

```
Titel: Siliconen hoesje 2 3 hoesjes op maat gemaakte hoes, voor Airpods Pro hoesje volledig beschermende mal 3e generatie siliconen

Belangrijkste kenmerken
Type

Case

Gebruik

Airpods beschermen

Merknaam

Neutral

Land van herkomst

Guangdong, China

Materiaal

Siliconen

kenmerk

Milieuvriendelijk

Belangrijkste kenmerken
Type
Case
Gebruik
Airpods beschermen
Materiaal
Siliconen
Functie
Airpods beschermen
Prive-schimmel
NEE
Merknaam
Neutral
kenmerk
Milieuvriendelijk
Land van herkomst
Guangdong, China
Modelnummer
Silicone Airpods Case
Materiaal
Siliconen
Kleuren
Veelkleurig
OEM/ODM-fabrikant
Accepteer OEM/ODM-bestellingen
Pakket
Tas/doos
Functie
Milieuvriendelijk materiaal
Logo
Aangepast logo
Functionaliteit
Airpods beschermen
Ontwerp
Minimalistisch
Stijl
Trendy
Trefwoorden
Voor Apple Airpods/Airpods pro
Verpakking en levering
Packaging Details
Tas/doos
Selling Eenheden
Enkel item
enkele pakket maat
4.9X6.3X2.8 cm
enkele brutogewicht
0.030 kg
Doorlooptijd
Maatwerkopties
Aangepast logo(+ vanaf /Min. bestelling: 50 stukken)
Aangepaste verpakking(+ vanaf /Min. bestelling: 500 stukken)
Grafisch maatwerk(+ vanaf /Min. bestelling: 300 stukken)

Beschrijving: in foto verwerkt (niet als tekst beschikbaar)
```

### T03
Link: https://www.alibaba.com/product-detail/Schitec-Wholesales-20W-Type-c-Charger_1601612265995.html

```
Titel: Schitec Groothandel 20W Type-C opladerset, snellaad wandstekker USB-oplader met 60W USB-C kabel voor het opladen van mobiele apparaten

Maatwerkopties
Logo/grafisch ontwerp+€ 0,18/stuk (Min. order: 1.000 stukken)
Maatwerkmogelijkheden van leverancier

Klein maatwerk
Maatwerk voor ontwerpen
Maatwerk voor voorbeelden
Volledig maatwerk
Belangrijkste kenmerken
poort

Type-C

Uitgang

12 V/1.25A, 9V/2A, 5 V/3A, 5 V/4A, 12 V/1.5A

Ingang

100-240 V/0.4A, 100-240 V/0.8A, 100-240 V/0.6A

Functie

QC3.0, PD, snelle oplader

Uitgangsvermogen

18W, 20W

Materiaal

ABS, PC (glanzend)

Belangrijkste kenmerken
Type
Elektrische, Usb wall charger, Voeding Adapter, Universele Adapter, Fast charger
Meer weergeven
Uitgangsvermogen
18W, 20W
Uitgang
12 V/1.25A, 9V/2A, 5 V/3A, 5 V/4A, 12 V/1.5A
Ingang
100-240 V/0.4A, 100-240 V/0.8A, 100-240 V/0.6A
Functie
QC3.0, PD, snelle oplader
poort
Type-C
Bescherming
Kortsluiting Bescherming, Over-opladen, Overcurrent, Overvoltage
Meer weergeven
gebruik
Mobiele telefoon, Laptop, Game Player, Camera, Oortelefoon, MP3 / MP4 Player, Tablet, Slim horloge, mobiele telefoon of tablet, snellader voor mobiele telefoons
Meer weergeven
Materiaal
ABS, PC (glanzend)
Merknaam
SChitec/OEM
Modelnummer
TC178
Land van herkomst
Guangdong, China
Productnaam
PD 20W USB-oplader met 60W USB-kabel
USB-poort
Type C (enkel/dubbel/drie/1*c/1*c+1*A)
Invoer
100V-240V
Uitgang
3,1A/QC3.0/QC3.0+2A/PD/PD+2A
Kleur
Zwart, wit, aangepast
Stekker
VS/EU/VK/AU
Pakket
PP-zak / geschenkdoos
OEM/ODM
Ondersteuning op maat
Verpakking en levering
Selling Eenheden
Enkel item
Doorlooptijd
Maatwerkopties
Logo/grafisch ontwerp(+ vanaf +€ 0,18/stuk/Min. bestelling: 1.000 stukken)
Details weergeven

Nu chatten
Certificaten


Declaration of Conformity
CE-gecertificeerd

CE
Voldoet aan de EU-normen

UKCA(2)
UK-naleving gecertificeerd

Beschrijving:
In één oogopslag

PD20W-uitvoer: Zorgt voor snelle en efficiënte oplading van compatibele apparaten, waardoor de oplaadtijd wordt verkleind.

ABS-materiaal: Biedt een duurzame en hittebestendige behuizing, waardoor langdurig gebruik en veiligheid worden gegarandeerd.

Overstroombeveiliging: Bescherm het apparaat en de lader tegen schade door overbelasting, waardoor de veiligheid tijdens gebruik wordt verbeterd.
```

### T04
Link: https://www.alibaba.com/product-detail/botella-de-perfume-Glass-perfume-rectangular_1601469297755.html

```
Titel: Botella De Parfum Glas Parfum Rechthoekige Fles 50 Ml Lege Fles Parfum Fles 100Ml Met Boxset

Belangrijkste kenmerken
Type afdichting

Schroefdop

Vorm

Polish and paint

Drukafwerking

Etiketten, Goudfolie, Decorbrand, Matten, Spuiten, Thermische overdracht druk, ZIJDEN SCHERM AFDRUKKEN

Inclusief geurstokjes of niet

Nee

Merknaam

YB

Land van herkomst

Guangxi, China

Belangrijkste kenmerken
Industrieel gebruik
Parfum
Vorm
Polish and paint
Type afdichting
Schroefdop
Inclusief geurstokjes of niet
Nee
Oppervlaktebehandeling
Foliedruk
Drukafwerking
Etiketten, Goudfolie, Decorbrand, Matten, Spuiten, Thermische overdracht druk, ZIJDEN SCHERM AFDRUKKEN
Meer weergeven
Modelnummer
YB
Land van herkomst
Guangxi, China
Merknaam
YB
Basismateriaal
Glass
Materiaal behuizing
Glass
Kraagmateriaal
Glass
Verpakking en levering
Selling Eenheden
Enkel item
Doorlooptijd
Certificaten


FDA CPG
FDA-compatibel

AOAC
Analytische uitmuntendheid

Beschrijving:
Productbeschrijving
Productnaam
Parfumflesje, rechthoekige glazen parfumfles 50 ml, lege parfumfles 100 ml met doos.
Gebruik
Geur
Volume
A. 100 ml 150 ml 200 ml 
B. Volgens het specifieke verzoek van klanten.
Afdichtingstype
Kurk, kroonkurk, schroefdop, swingtop of per klantverzoek
Voorbeeld
A. Monster op voorraad is 1-2 dagen
B. Maak monsters op maat, slechts 7-15 dagen
MOQ
A. Als we voorraad hebben, kleinere MOQ.
B. Indien niet op voorraad, is de MOQ 5000-30000 stuks.
Oppervlaktebehandeling
Decal, Embossing, Zeefdruk, Spuitlakken, Frosten, Goudstempelen, Verzilveren, enz.
Materiaal
Kristalwit, Zwart, Super Flint, Extra Flint, enz. Breed assortiment voor uw selectie.
Verpakking
Karton, pallet, eisen van de klant.
Kleur
A.Transparant/gekleurd
B. Klantkleur en drukontwerpen
Levering
A. Op voorraad: binnen 7 dagen na ontvangst van betaling.
B. Niet op voorraad: 20-25 dagen na ontvangst van de betaling.
Extra diensten
1. ACL-printen, zijdeprinten en frostprinten.
2. Accessoires voor capsules, zoals plastic, aluminium en metalen sluitingen en houten inzetstoppers, zijn ook verkrijgbaar bij YB.
```

### T05
Link: https://www.alibaba.com/product-detail/new-product-ideas-2024-hot-selling_1601044532507.html

```
Titel: Nieuw Product Ideeën 2024 Hot Selling Product Verjaardag Innovatieve Vintage Familie Bruiloft Meisjes Groeiende Print Fotogeschenken Voor vrouwen

Belangrijkste kenmerken
plaats van herkomst

Guangdong, China

Toepassing

Terug Naar School, Chinese Nieuwe Jaar, Kerst, Vaderdag, Afstuderen, Halloween, Moederdag, Nieuwe Jaar, Thanksgiving, Valentijnsdag

Bedrukking

ZIJDEN SCHERM AFDRUKKEN, UV-printen, Digitaal printen, Laser graveren

Product Type

Promotionele Kantoor Producten, Promotionele Huishoudelijke Producten, Promotionele Elektronische Producten, Promotionele Novelty Gifts

modelnummer

18-0218

Stijl

Eenvoudige zakelijke stijl

Belangrijkste kenmerken
Bedrukking
ZIJDEN SCHERM AFDRUKKEN, UV-printen, Digitaal printen, Laser graveren
Toepassing
Terug Naar School, Chinese Nieuwe Jaar, Kerst, Vaderdag, Afstuderen, Halloween, Moederdag, Nieuwe Jaar, Thanksgiving, Valentijnsdag
Product Type
Promotionele Kantoor Producten, Promotionele Huishoudelijke Producten, Promotionele Elektronische Producten, Promotionele Novelty Gifts
Meer weergeven
plaats van herkomst
Guangdong, China
modelnummer
18-0218
Stijl
Eenvoudige zakelijke stijl
Verpakking en levering
Selling Eenheden
Enkel item
enkele pakket maat
33X30X10 cm
enkele brutogewicht
2.0 kg
Doorlooptijd
Maatwerkopties
Aangepast logo(+ vanaf /Min. bestelling: 100 sets)
Aangepaste verpakking(+ vanaf /Min. bestelling: 500 sets)
Afbeeldingen bewerken(+ vanaf /Min. bestelling: 1.000 sets)

Beschrijving: geen
```

### T06
Link: https://www.alibaba.com/product-detail/New-Unique-Desktop-Portable-Hand-Fan_1601270556301.html

De rest van de beschrijving staat in foto's en een video.

```
Titel: Draagbare mini handventilator met type-C oplaadpoort, voor thuis, auto en buitengebruik, elektrische voeding, plastic, huishoudelijk

Beschrijving:
Waarschuwing/Disclaimer
Dit product heeft de relevante productkwalificatie (en)/licentie (en) van bepaalde toepasselijke landen verworven.
Disclaimer: Alibaba.com geeft geen verklaring of bevestiging dat dit product volledig voldoet aan alle toepasselijke wet- en regelgeving; of dat enige kwalificatie/licentie daarvan echt, nauwkeurig en effectief is; of dat de verworven relevante kwalificatie(s)/licentie(s) voldoende zijn. Kopers wordt geadviseerd om voorafgaand aan de aankoop de relevante informatie in te winnen bij de verkoper om na te gaan of dit product voldoet aan de toepasselijke wet- en regelgeving van hun eigen land.

Specificaties:
Type: Handventilator
Voedingsbron: USB, Elektrisch
Werktijd: 1-2 uur
Batterijcapaciteit (mAh): 800
Windsnelheid: vijf
Materiaal: Kunststof
Besturingsmethode: Knop
installatie: Handheld
Spanning (V): 5
Vermogen (W): 5
Prive-schimmel: JA
Garantie: Geen
Verpakkingssoorten: kleurendoos
Toepassing: Hotel, Auto, Buiten, Garage, Huishouden
Batterijen Inbegrepen: JA
App-gestuurd: NEE
Land van herkomst: Guangdong, China
Merknaam: XIQI
Afmetingen: 16,2*3,6*13,2CM
Modelnummer: 12
Productnaam: Draagbare desktopventilator
Oplaadmodus: Type-C
Batterijtype: 18650 lithiumbatterij
Oplaadtijd: 2 uur
Gebruikstijd: 2-3 uur
Productgewicht: 174 gram
enkele pakket maat: 21.4X8.8X18.4 cm
enkele brutogewicht: 0.4 kg

Certificaten:
Declaration of Conformity - CE-gecertificeerd
CE - Voldoet aan de EU-normen
FCC - Elektromagnetische compatibiliteit
RoHS - Conform RoHS
94/62/EC - EU-conforme verpakking
EMC - Elektromagnetische compatibiliteit
REACH - REACH-gecertificeerd
```

### T07
Link: https://www.alibaba.com/product-detail/Daynee-Collagen-Gummies-Vitamin-Herbal-Label_1600900188417.html

```
Titel: Daynee Collageen Gummies Vitamine Kruiden Labelontwerp Gezondheidssupplementen Snoepjes Gummies Shanghai Flesverpakking cartoon roze

Beschrijving:
Waarschuwing/Disclaimer
Dit product heeft de relevante productkwalificatie (en)/licentie (en) van bepaalde toepasselijke landen verworven.
Beauty Collagen Gummies voor dagelijkse verzorging. Dit collageen gummies-supplement is ontworpen voor dagelijkse schoonheidsverzorging, met de nadruk op huid-, haar- en nagelondersteuning. Het is geschikt voor merken van schoonheidssupplementen, wellnesswinkels, online verkopers en private label gummy-productlijnen.
Schoonheid van Binnen Positionering: Dit product kan gepositioneerd worden als een handige 'schoonheid van binnen' gummy voor consumenten die de voorkeur geven aan een eenvoudige, dagelijkse routine in plaats van tabletten, capsules of poeder.
Huid-, Haar- en Nagelondersteuning. Speciaal ontwikkeld voor mooie nagels en krachtig haar, een gladde huid, gezond gewrichts- en botweefsel, en dagelijkse voeding voor een stralende schoonheid.
Gummies met natuurlijke aardbeiensmaak. De aardbeiensmaak maakt het product leuker dan traditionele tabletten of capsules.
60 veganistische gummies per fles. Elke fles bevat 60 veganistische gummies, geschikt voor detailhandel, monstertesten, cadeausets, schoonheidspakketten en planning van nabestellingen.
2 Gummies Dagelijkse Routine. Aanbevolen portie is 2 gummies per dag.
Ondersteuning voor private label-verpakkingen. Wij ondersteunen private label-aanpassingen, waaronder merklogo, flessenlabel, flesgrootte, dopkleur, smaakrichting, gummykleur, buitendoos.
OEM ODM Bulk Groothandel Levering. Geschikt voor beautymerken, supplementdistributeurs, Amazon-verkopers, TikTok-verkopers, online winkels en B2B-kopers.

Specificaties:
type: Gummy Candy
smaak: Fruitig
Verpakking: Fles
functie: Normaal
vorm: Cartoon
kleur: Roze
type product: Snoepgoed
opslag type: Kamertemperatuur
Specificatie: 3g*60gummies/fles
houdbaarheid: 24 maanden
Fabrikant: Dagnee
Ingrediënten: Natuurlijke aardbeiensmaak
Content: Collageenpeptiden, vitamine C, vitamine E, D-biotine
Gebruiksaanwijzing: Klaar om te eten
plaats van herkomst: Shanghai, China
naam van het merk: Daynee
modelnummer: R22
Productnaam: Collageen gummies
OEM: accepteren
Andere naam: Huidblekende L-Glutathion Gummies
Trefwoord: Collageen gomachtig
enkele pakket maat: 15X5X5 cm
enkele brutogewicht: 0.21 kg
```

### T08
Link: https://www.alibaba.com/product-detail/Plush-Doll-Monster-Energy-23CM-27CM_1601931802984.html

```
Titel: Pluche Monster Energy pop 23CM-27CM Super Witte Energy Drink Vorm Schattig Kussen Speelgoed Gewassen PP Katoen Gevuld OEM groothandel

Beschrijving:
Verantwoordelijke EU-persoon
Superzacht pluche: biedt ongeëvenaard comfort en gezelligheid.
Monsters Energy Shape: Authentiek ontwerp geeft de iconische energiedranklook weer.
23-27 cm hoogte: perfecte maat voor gemakkelijk dragen en tentoonstellen.
Katoenen vulling: zorgt voor zachtheid en duurzaamheid.
Kleurrijk en schattig: ideaal als cadeau of decoratie.

Specificaties:
Leeftijdscategorie: 14 Jaar & up
Personages: Monster-energie
type: drinkend speelgoed
Hoogte: 23CM-27CM
Hoofdmateriaal: Super zacht pluche
materiaal: korte pluche
Acg Naam: Monster-energie
Vulling: PP-katoen
Geslacht: Unisex
functie: COMFORTER
Technieken: Washed
gelegenheid: Halloween
voering materiaal: Spandex/elastaan
modelnummer: XL-drinking
plaats van herkomst: Anhui, China
Waslabel: Katoen
naam van het merk: XINLI
Productnaam: Pluche pop
Gebruik: Mooi cadeau
Grootte: 23CM-27CM
Kleur: Kleurrijk
Trefwoord: Zacht gevuld plsh-speelgoed
Stijl: Leuk en Speels
Verpakking: OPP-zak
enkele pakket maat: 35X25X2 cm
enkele brutogewicht: 0.150 kg
```

### T09
Link: https://french.alibaba.com/product-detail/LED-Eye-Protection-Desk-Lamp-with-1601696226086.html

```
Titel: Lampe de bureau LED avec protection oculaire, grande horloge, calendrier, veilleuse, norme américaine, avec ports de charge pour la maison, l...

Description du produit
Nom de l'article : Lampe de bureau LED avec protection des yeux, grande horloge et calendrier, veilleuse
Puissance: AC 110v-220v
Prise: US/EU/UK
USB TYPE C: 5V2A
Température de couleur: 3000/4500/6000
Matériau: PP et PC
```

### T10
Link: https://www.alibaba.com/product-detail/Custom-Metal-Keychain-Blank-Heat-Transfer_1601624454473.html

Korte input: alleen de titel en zes regels uit de kenmerken. Een echte korte pagina vond ik niet, want Alibaba-pagina's zijn bijna altijd lang. Ik heb de rest van de pagina zelf weggelaten. Dit is wat een verkoper ziet als hij snel kijkt zonder te scrollen.

```
Titel: Gepersonaliseerde metalen sleutelhanger blank voor hittetransferdruk logo sleutelhanger roestvrijstalen sleutelhanger blank

Producttype: Carabiner Keychain
Metaaltype: Roestvrij staal of zinklegering
Bedrukking: UV-printen
vorm: Rond
materiaal: Metaal
plaats van herkomst: Guangdong, China
```

### T11
Link: https://nl.dhgate.com/product/designer-french-inspired-chain-strap-shoulder/1105429294.html

```
Titel: Gratis verzending Designer Frans geïnspireerde schoudertas met ketting - Trendy mini vierkante crossbodytas voor dames, luxe

Beschrijving:
Deze damesschoudertas is gemaakt van PU-materiaal, dat zeer licht van gewicht is, een goede elasticiteit heeft, zacht en comfortabel aanvoelt en een goede waterbestendigheid heeft.
Deze damesschoudertas is geschikt om te matchen met verschillende kledingstijlen, de juiste kleding met een stijlvolle tas, zodat je het mooiste landschap kunt worden.
Deze schoudertas voor dames heeft een wetenschappelijk ontwerp en voldoende ruimte in de tas voor een portemonnee voor een mobiele telefoon en meer, waardoor hij perfect is voor woon-werkverkeer.
Welkom in mijn winkel, de productfoto's van het bedrijf zijn door een professionele fotograaf aan te passen, omdat het display anders is, de kleur kan veroorzaken, ontvang alstublieft de goederen. 100% foto... Tijdige service.
Onze productkwaliteitsborging, de slogan van ons bedrijf is: niet het nastreven van lagere prijzen, maar het nastreven van de hoogste. Welkom in onze winkel, wij zullen u voorzien van kwaliteitsproducten en de meest voorkeur.

Specificaties:
Type: Schoudertas
Geslacht: Dames
Patroon: Gewoon
Materiaal: Pu
Gelegenheid: Daily Outfit
Stijl: Wijnoogst
Sluitingstype: Rits
Grootte: Klein (20-30 cm)
Product Code: 1105429294
Categorie: Schoudertassen
```

### T12
Link: https://nl.aliexpress.com/item/1005013301193235.html

Notitie (niet in de input voor de tool): op de foto hangt een CE-label aan de knuffel. In de tekst staat nergens CE.

```
Titel: Nieuwe rode Niuniu Energy Drink blik pluche pop Kawaii huisdecoratie collectie verjaardagscadeau voor fans

Specificaties:
Is elektrisch: no
Hoogwaardige chemicaliën: Geen
Afstandsbediening: Nee
Conditie: Artikelen op voorraad
Geslacht: Uniseks
Thema: Film en tv
Materiaal: Pluche
Artikeltype: Anime-accessoires
Mfg-serienummer: Pluche serie
Merknaam: Potdemiel
Oorsprong: Cn (Oorsprong)
Aanbevolen leeftijd: 14+ jaar

Beschrijving:
Productdetails:
Materiaal: zacht pluche en PP-katoen
Kleur: zoals afgebeeld
Verpakking: 1 stuk per OPP-zak
Opmerking:
1. Vanwege de verschillen in cameraapparatuur, lichtintensiteit en beeldschermen kan de kleur van het product enigszins afwijken van de kleur die op de foto's wordt weergegeven.
2. Vanwege handmatige metingen kan er een afwijking van 0,5 tot 2 cm optreden.
```

### T13
Link: https://nl.aliexpress.com/item/1005013312854380.html

Alleen titel en specificaties: de pagina heeft geen beschrijving in tekst.

```
Titel: Donker konijnenknuffel, gotische rebelse konijnenpop, schattig en opvallend dierenfiguur, knuffelpop, sleutelhanger, rugzakdecoratie, perfect cadeau

Specificaties:
Is elektrisch: no
Hoogwaardige chemicaliën: Geen
Thema: Dieren en natuur
Waarschuwing: None
Vullen: PP-katoen
Oorsprong: Cn (Oorsprong)
Cn: Guangdong
Aanbevolen leeftijd: 14+ jaar
```

## Antwoorden van de tool (v1, claude.ai)

### T01 run 1
```
OORDEEL: GO
RISICO'S: geen
UITLEG: Het is een katoenen draagtas zonder merknaam of merklogo, zonder elektronica of batterij, klein en licht verpakt ("0.3 kg"), en niet verboden of beperkt op bol.com.
```

### T01 run 2
```
OORDEEL: GO
RISICO'S: geen
UITLEG: Het is een katoenen draagtas zonder merknaam (alleen "OEM"), zonder elektronica, batterij of andere CE-plichtige kenmerken, compact verpakt (15X15X5 cm, 0.3 kg) en niet verboden op bol.com.
```

### T02 run 1
```
OORDEEL: GO
RISICO'S: geen
UITLEG: Het is een siliconen beschermhoesje dat alleen zegt waarop het past ("Voor Apple Airpods/Airpods pro"), zonder merklogo, zonder elektronica of batterij, klein en licht (0.030 kg) en niet verboden.
```

### T02 run 2
```
OORDEEL: GO
RISICO'S: geen
UITLEG: Het is een siliconen hoesje dat alleen vermeldt waarop het past ("Voor Apple Airpods/Airpods pro"), zonder merklogo of woorden als "replica"; het is geen elektrisch apparaat, geen batterij, niet breekbaar (0.030 kg) en niet verboden op bol.com.
```

### T03 run 1
```
OORDEEL: GO
RISICO'S: geen
UITLEG: Het is een elektrische oplader waarvoor "CE-gecertificeerd" en "Declaration of Conformity" op de pagina staan, het is niet breekbaar, zwaar of vloeibaar, en er is geen merknaam van derden of een verboden productcategorie te vinden.
```

### T03 run 2
```
OORDEEL: GO
RISICO'S: geen
UITLEG: Het is een elektrische oplader waarvan de pagina CE-certificering vermeldt ("CE-gecertificeerd"), er staat geen merkkopie of merklogo op het product (alleen de eigen merknaam "SChitec/OEM"), en het is een compact, niet-breekbaar product dat niet onder verboden categorieën valt.
```

### T04 run 1
```
OORDEEL: NO-GO
RISICO'S:
- C: "Parfumflesje, rechthoekige glazen parfumfles 50 ml, lege parfumfles 100 ml met doos." — Het product is een glazen fles, en glas is breekbaar en dus moeilijk veilig te verzenden.
UITLEG: Het is een lege glazen parfumfles, en breekbaar glas is al genoeg voor een NO-GO.
```

### T04 run 2
```
OORDEEL: NO-GO
RISICO'S:

C: "Parfumflesje, rechthoekige glazen parfumfles 50 ml, lege parfumfles 100 ml met doos." — Glas is breekbaar en dus moeilijk veilig te verzenden.
UITLEG: Het product is een lege glazen parfumfles, en breekbaar glas is een verzendrisico.
```

### T05 run 1
```
OORDEEL: ONZEKER
RISICO'S: geen
UITLEG: De pagina zegt niet wat het product precies is (alleen vage termen als "Fotogeschenken" en "Promotionele Novelty Gifts", zonder beschrijving of materiaal), dus de risico's zijn niet te beoordelen.
```

### T05 run 2
```
OORDEEL: ONZEKER
RISICO'S: geen
UITLEG: De pagina toont niet wat het product is of waaruit het bestaat: alleen algemene termen als "Fotogeschenken" en vier uiteenlopende producttypes (kantoor, huishoudelijk, elektronisch, novelty), zonder beschrijving, materiaal of CE-informatie.
```

## Antwoorden van de tool (v2, claude.ai)

### T06 run 1
```
OORDEEL: GO
RISICO'S: geen
UITLEG: Elektronisch product met batterij, maar CE staat vermeld in de certificaten ("Declaration of Conformity - CE-gecertificeerd"), het merk XIQI is geen kopie, de batterij zit in het toestel (geen losse batterij) en het product is klein, licht en niet breekbaar.
```

Beoordeling: juist.

### T07 run 1
```
OORDEEL: NO-GO
RISICO'S:

D: "Dit collageen gummies-supplement is ontworpen voor dagelijkse schoonheidsverzorging" — De pagina noemt het product zelf een supplement, en voedingssupplementen zijn beperkt of verboden op bol.com.
D: "Gezondheidssupplementen" — De titel zegt ook dat het om gezondheidssupplementen gaat, ondanks de specificatie "Snoepgoed"; bij tegenstrijdige omschrijvingen geldt de omschrijving met het meeste risico.
UITLEG: De pagina noemt het product een supplement (naast "Snoepgoed"), dus behandel je het als supplement, en dat wordt op bol.com geblokkeerd.
```

Beoordeling: juist. Opvallend: twee keer risico D, elk met een ander echt citaat.

### T08 run 1
```
OORDEEL: NO-GO
RISICO'S:

A: "Monsters Energy Shape: Authentiek ontwerp geeft de iconische energiedranklook weer." — Het product bootst het merk Monster Energy na, ook in "Personages: Monster-energie".
B: "Pluche Monster Energy pop 23CM-27CM Super Witte Energy Drink Vorm Schattig Kussen Speelgoed" — De pagina noemt het zelf pluche, pop en speelgoed, en CE niet vermeld.
UITLEG: Namaak van het merk Monster Energy, en speelgoed (ook al staat er "14 Jaar & up") zonder CE-vermelding.
```

Beoordeling: juist.

### T09 run 1
```
OORDEEL: NO-GO
RISICO'S:

B: "Puissance: AC 110v-220v" — Elektrisch apparaat met netstroom en USB-poort, CE niet vermeld.
UITLEG: Elektrische bureaulamp zonder CE-vermelding en dus niet verkoopbaar in de EU.
```

Beoordeling: juist.

### T10 run 1
```
OORDEEL: GO
RISICO'S: geen
UITLEG: Een blanco metalen sleutelhanger zonder merk, elektronica, batterij of vloeistof; licht en niet breekbaar.
```

Beoordeling: juist. Opvallend: de tool zegt "licht", maar er staat geen gewicht in de input. Geen verzonnen citaat (niet tussen aanhalingstekens), wel een aanname.

## Antwoorden van de tool (v3, claude.ai)

### T10 opnieuw (na de wijziging)
```
OORDEEL: GO
RISICO'S: geen
UITLEG: Een metalen sleutelhanger ("Metaaltype: Roestvrij staal of zinklegering") zonder merknaam of "style"/"like"-woorden, zonder elektronica of batterij, en zonder vermelding van breekbaarheid, vloeistof of verboden categorie.
```

Beoordeling: juist. "licht" is weg. Opvallend: de tool past de regel breder toe dan ik vroeg. Hij schrijft nu "zonder vermelding van breekbaarheid" in plaats van "niet breekbaar". Dat is voorzichtiger, maar ook wat omslachtig, want een metalen sleutelhanger is gewoon niet breekbaar.

## Antwoorden van de tool (v3, claude -p, Haiku 5.5)

Gedraaid op 15 oktober 2026 met `claude -p --model haiku` (claude-haiku-5-5), in een lege map zonder CLAUDE.md. Elke run is een apart gesprek. Niet helemaal te vergelijken met v1 en v2, die in claude.ai liepen.

| ID | Juiste antwoord | Run 1 | Run 2 | Oordeel |
|---|---|---|---|---|
| T01 | GO | GO | GO | 2 × juist |
| T02 | GO | GO | GO | 2 × juist |
| T03 | GO | GO | GO | 2 × juist |
| T04 | NO-GO (C) | NO-GO (C) | NO-GO (C) | 2 × juist |
| T05 | ONZEKER | NO-GO (B) | NO-GO (B) | 2 × fout, F1 |
| T06 | GO | GO | GO | 2 × juist |
| T07 | NO-GO (D) | NO-GO (D) | NO-GO (D) | 2 × juist |
| T08 | NO-GO (A, B) | NO-GO (A, B) | NO-GO (A, B) | 2 × juist |
| T09 | NO-GO (B) | NO-GO (B) | NO-GO (B) | 2 × juist |
| T10 | GO | GO | GO | 2 × juist |
| T11 | NO-GO (A) | NO-GO (A) | NO-GO (A) | 2 × juist |
| T12 | NO-GO (B) | NO-GO (B) | NO-GO (A, B) | 2 × juist. Opvallend: run 2 geeft extra risico A door "Niuniu Energy Drink", met een echt citaat. |
| T13 | NO-GO (B) | NO-GO (B) | NO-GO (B) | 2 × juist |

**T05, F1:** verkeerd label met echte citaten. Oorzaak: mijn regel 4 (kies de omschrijving met het meeste risico) loste T07 op, maar zorgt hier dat de tool "elektronisch" kiest uit 4 producttypes en dan NO-GO (B) zegt. Een regel die 1 input oplost, breekt een andere.

Alle citaten staan letterlijk op de pagina: geen F2.

### T01 run 1
```
OORDEEL: GO
RISICO'S: geen
UITLEG: Merknaam is OEM, het is een katoenen tas zonder elektronica, batterij of speelgoed, en het materiaal is katoen en geen glas of andere breekbare stof.
```

### T01 run 2
```
OORDEEL: GO
RISICO'S: geen
UITLEG: Merknaam is "OEM", elektronica of batterij komt niet voor, en de pagina noemt het product niet breekbaar; het pakket weegt 0.3 kg.
```

### T02 run 1
```
OORDEEL: GO
RISICO'S: geen
UITLEG: Een siliconen hoesje met merknaam "Neutral"; "Voor Apple Airpods/Airpods pro" geeft alleen aan waarop het past, en er staat geen elektronica, batterij of breekbaar materiaal op de pagina.
```

### T02 run 2
```
OORDEEL: GO
RISICO'S: geen
UITLEG: Siliconen hoesje voor AirPods/AirPods Pro met merknaam "Neutral", geen elektronica of batterij, en van silicone (niet breekbaar) van 0,030 kg.
```

### T03 run 1
```
OORDEEL: GO
RISICO'S: geen
UITLEG: Elektrische lader met CE-vermelding ("CE-gecertificeerd") en merknaam "SChitec/OEM", en de pagina noemt geen merk van iemand anders of breekbaar materiaal (behuizing van ABS en PC).
```

### T03 run 2
```
OORDEEL: GO
RISICO'S: geen
UITLEG: Elektrische lader met CE op de pagina ("CE-gecertificeerd"), geen merk van een ander, en geen breekbare, zware of vloeibare inhoud genoemd.
```

### T04 run 1
```
OORDEEL: NO-GO
RISICO'S:
- C: "Glass" (Basismateriaal) — Glas is breekbaar, en de pagina noemt glas als basismateriaal.
UITLEG: Het product is een glazen flesje, en glas is breekbaar.
```

### T04 run 2
```
OORDEEL: NO-GO
RISICO'S:
- C: "Glas Parfum Rechthoekige Fles" — Het flesje is van glas, en glas is breekbaar (basismateriaal en behuizing staan op de pagina als "Glass").
UITLEG: Glazen flesje, dus breekbaar en moeilijk te verzenden; geen merk van iemand anders en geen elektronica.
```

### T05 run 1
```
OORDEEL: NO-GO
RISICO'S:
- B: "Promotionele Elektronische Producten" — De productcategorie is elektronica, en CE niet vermeld.
UITLEG: Het product wordt als elektronisch product omschreven zonder CE-vermelding, dus het mag niet zomaar in de EU verkocht worden.
```

### T05 run 2
```
OORDEEL: NO-GO
RISICO'S:
- B: "Promotionele Elektronische Producten" — CE niet vermeld op de pagina, terwijl het product als elektronisch product wordt aangeboden.
UITLEG: De pagina noemt het product een elektronisch product zonder CE-vermelding, dus het mag niet in de EU verkocht worden.
```

### T06 run 1
```
OORDEEL: GO
RISICO'S: geen
UITLEG: Handventilator op 18650-accu met "CE - Voldoet aan de EU-normen" op de pagina, geen merknaam die op een ander merk lijkt, en geen breekbaar, vloeibaar of los batterijmateriaal genoemd.
```

### T06 run 2
```
OORDEEL: GO
RISICO'S: geen
UITLEG: Geen merk van een ander, CE staat vermeld en het product is niet breekbaar of zwaar; de Alibaba-disclaimer vraagt wel om de CE-conformiteitsverklaring bij de leverancier na te kijken.
```

### T07 run 1
```
OORDEEL: NO-GO
RISICO'S:
- D: "Dit collageen gummies-supplement is ontworpen voor dagelijkse schoonheidsverzorging" — De pagina noemt het product een supplement (ook "Gezondheidssupplementen" in de titel), en voedingssupplementen zijn beperkt op bol.com.
UITLEG: De pagina noemt het zowel snoepgoed als supplement, dus ik behandel het als supplement; de naam "Huidblekende L-Glutathion Gummies" maakt dit alleen maar zwaarder.
```

### T07 run 2
```
OORDEEL: NO-GO
RISICO'S:
- D: "Dit collageen gummies-supplement is ontworpen voor dagelijkse schoonheidsverzorging" — De pagina noemt het product zelf een supplement, en voedingssupplementen vallen onder D. De pagina noemt het ook "snoepgoed", maar bij twee omschrijvingen geldt de riskantste.
UITLEG: De pagina noemt het product zowel snoepgoed als supplement, dus het wordt behandeld als voedingssupplement, wat op bol.com verboden of beperkt is.
```

### T08 run 1
```
OORDEEL: NO-GO
RISICO'S:
- A: "Pluche Monster Energy pop 23CM-27CM Super Witte Energy Drink Vorm" — Het product is een pluche versie van het merkproduct Monster Energy en gebruikt de merknaam in de titel.
- B: "type: drinkend speelgoed" — Speelgoed (pluche pop), CE niet vermeld.
UITLEG: Merknaam Monster Energy in de titel en speelgoed zonder CE-vermelding, dus NO-GO.
```

### T08 run 2
```
OORDEEL: NO-GO
RISICO'S:
- A: "Pluche Monster Energy pop" — De merknaam Monster Energy zit in de titel en het ontwerp (vorm van de energiedrankblikjes, personage "Monster-energie").
- B: "type: drinkend speelgoed" — Speelgoed, CE niet vermeld.
UITLEG: Merknaam van een ander bedrijf in het productontwerp, en speelgoed waarvoor CE niet vermeld staat.
```

### T09 run 1
```
OORDEEL: NO-GO
RISICO'S:
- B: "Puissance: AC 110v-220v" — Netgevoede elektrische lamp met USB-C-lader, CE niet vermeld.
UITLEG: Elektrisch apparaat zonder CE-vermelding op de pagina, dus het mag niet in de EU verkocht worden.
```

### T09 run 2
```
OORDEEL: NO-GO
RISICO'S:
- B: "Puissance: AC 110v-220v" — Elektrisch apparaat op netspanning (LED-bureaulamp met USB-poort), CE niet vermeld.
UITLEG: Elektrisch apparaat zonder vermelde CE-markering, dus niet verkoopbaar in de EU.
```

### T10 run 1
```
OORDEEL: GO
RISICO'S: geen
UITLEG: Een metalen sleutelhanger zonder merknaam, elektronica, batterij of vloeistof, en de pagina noemt geen breekbaar materiaal.
```

### T10 run 2
```
OORDEEL: GO
RISICO'S: geen
UITLEG: Metalen sleutelhanger zonder merk, zonder elektronica of batterij, en het materiaal is metaal (geen glas of keramiek).
```

### T11 run 1
```
OORDEEL: NO-GO
RISICO'S:
- A: "Designer Frans geïnspireerde" — De titel zegt dat de tas op een designertas is geïnspireerd, wat wijst op een namaak van een merkproduct.
UITLEG: De titel verwijst naar een designerontwerp, dus er is namaakrisico. Verder is het een gewone tas van PU zonder elektronica, batterij of breekbaar materiaal.
```

### T11 run 2
```
OORDEEL: NO-GO
RISICO'S:
- A: "Designer Frans geïnspireerde schoudertas" — "geïnspireerde" bij "designer" wijst op een kopie van een designertas, ook al staat er geen merknaam op de pagina.
UITLEG: Namaakrisico door "Designer ... geïnspireerde", geen elektronica en niet breekbaar.
```

### T12 run 1
```
OORDEEL: NO-GO
RISICO'S:
- B: "pluche pop" — De pagina noemt het product een pluche pop, dus speelgoed, en CE niet vermeld.
UITLEG: Pluche speelgoed zonder CE-vermelding mag je niet in de EU verkopen.
```

### T12 run 2
```
OORDEEL: NO-GO
RISICO'S:
- B: "pluche pop" — Pluche pop is speelgoed, en CE niet vermeld.
- A: "Niuniu Energy Drink" — De naam van een energiedrank staat op het product zelf, dus het lijkt op een merkproduct.
UITLEG: Speelgoed zonder vermelde CE, en de naam van een energiedrank op het product.
```

### T13 run 1
```
OORDEEL: NO-GO
RISICO'S:
- B: "Donker konijnenknuffel" — Knuffel en pop, dus speelgoed, en CE niet vermeld.
UITLEG: Speelgoed zonder CE-vermelding, en de pagina toont geen certificaten.
```

### T13 run 2
```
OORDEEL: NO-GO
RISICO'S:
- B: "Donker konijnenknuffel" — Knuffel is speelgoed, en CE niet vermeld.
UITLEG: Speelgoed zonder CE-vermelding mag je niet in de EU verkopen.
```

## Succespercentage

- v1: 10 op 10 juist (n = 5, 2 runs), T01–T05
- v2: 5 op 5 juist (n = 5, 1 run), T06–T10
- v3: 1 op 1 juist (n = 1, 1 run), alleen T10 opnieuw na de wijziging
- v3: 24 op 26 juist (n = 13, 2 runs), T01–T13, via claude -p met Haiku 5.5. Per input: 12 op 13. Fouten: 2 × F1 (T05, beide runs). Geen F2. Geen F6: bij T12 waren label en risico B in beide runs gelijk, alleen het extra risico A wisselde (opvallend, geen fout).
