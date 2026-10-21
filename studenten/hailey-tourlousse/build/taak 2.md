# Task: guest review sorter

1. **Task:** For each guest review of Hotel Cosmopolite (including Brasserie Carrousel and Bar Caprice), determine the main topic and whether it needs a reply, and how urgently.
2. **Input:** One review: the text and the score if there is one. Reviewer names removed.
3. **Output:** Two labels.
   - Topic: Food and drink, Bar, Service and staff, Room, Cleanliness, Booking and check-in, Noise, Parking, Price and value, General, or Unsure.
   - Reply: Reply within 24 hours, Reply this week, No reply needed, or Unsure.
   - Way out: Unsure. A person decides.
   - The department is not chosen by the AI. It follows from the topic via the fixed table below.
4. **Type of AI:** A language model. Both labels mean reading free text and judging what it is mainly about and how negative it is. Routing to a department is a fixed rule, so it needs no AI.
5. **Check:** For every test review, I write the correct topic and reply label in advance. Two people can compare the tool's labels with mine, separately: they match or they don't.

## Department table (fixed rule, no AI)

| Topic | Department |
|---|---|
| Food and drink (including breakfast) | Kitchen |
| Bar | Bar Caprice |
| Service and staff | Open point, see below |
| Room | Reception |
| Cleanliness | Housekeeping |
| Booking and check-in | Reception |
| Noise | Reception |
| Parking | Reception |
| Price and value | Management |
| General | Management |
| Unsure | A person decides |

Brasserie Carrousel is the restaurant inside Hotel Cosmopolite. "The restaurant" in a review means Carrousel.

Scope: only Hotel Cosmopolite. Restaurant Georges is a separate business, not connected to the hotel, and is not part of this Build.

Open point: "Service and staff" at Hotel Cosmopolite can mean reception, Carrousel or Bar Caprice. To settle when writing v1.

## Reply rule

We only reply to negative or mixed reviews.

| Label | When |
|---|---|
| Reply within 24 hours | Negative review, or a specific complaint other guests will read |
| Reply this week | Mixed review, a question, or a mild complaint |
| No reply needed | Positive, nothing to answer |
| Unsure | A person decides |

## Input ideas (five real reviews)

<!-- Real reviews, names removed. The correct answers go in build/test-set.md later, written by me. -->

### 1. Hotel Cosmopolite, 9/10

> We verbleven in het verleden al meermaals met onze hond in Hotel Cosmopolite en telkens opnieuw is het een zeer aangenaam verblijf. Deze keer was het de eerste keer met onze puppy en dat is ook enorm goed meegevallen. Heel fijn dat je met je hondje kan ontbijten in de bar ipv dat hij op de kamer moet blijven. Het personeel is steeds heel vriendelijk en behulpzaam, je voelt je welkom, kamers zijn verzorgd, ... Wij komen nog vaak terug!
> Niet veel, het zijn details: De kussens zijn veel te plat/zacht. Deze keer hadden we een kamer waarbij de deur niet volledig leek af te sluiten gezien het licht van de gang de hele nacht zichtbaar was.

### 2. Hotel Cosmopolite, 8,0/10

> **Leuk verblijf, zeker voor herhaling vatbaar!**
> Vriendelijk en behulpzaam personeel. Mooi hotel. Leuke bar en brasserie. Mooie grote kamer, nette badkamer met handdoeken en verzorgingsproducten (zeep, shampoo, etc). Rustig gelegen en toch dicht bij het strand. Groot tweepersoonsbed. Top ontbijt.
> Minibar was gratis maar weinig keuze, enkel water en wijn. Wellness was een optie maar vrij duur (niet in prijs inbegrepen). Eventueel een pakket aanbieden met wellness inclusief aan korting? De temperatuur op de kamer was moeilijk zelf te regelen dus misschien toch de airco/verwarming toegankelijk maken voor gasten of eventueel wat uitleg geven?

### 3. Hotel Cosmopolite, 4,0/10

> **Duur voor dit soort hotel**
> De kamer was niet zoals verwacht (tapijt in hotel vin ik verschrikkelijk) ik was verrast van mijn mama voor mijn 40 ste verjaardag en was heel weinig versierd op de kamer de kamer en de gang vin ik eerlijk gezegd wat oud... het ontbijt was super lekker echt perfect(wel von ik het erg er kwam een vrouw naar me toe en vroeg ben jij hier klant en ik zij ja voor 1 nacht en dan vroeg ze welke kamer echt ik von dat vreemd want voor we binnen gingen moesten wij ons aanmelden bij een heel vriendelijk meisje dus dat was inorde...
> De kamer was niet zoals verwacht (tapijt in hotel vin ik verschrikkelijk) ik was verrast van mijn mama voor mijn 40 ste verjaardag en was heel weinig versierd op de kamer de kamer en de gang vin ik eerlijk gezegd wat oud... het ontbijt was super lekker echt perfect(wel von ik het erg er kwam een vrouw naar me toe en vroeg ben jij hier klant en ik zij ja voor 1 nacht en dan vroeg ze welke kamer echt ik von dat vreemd want voor we binnen gingen moesten wij ons aanmelden bij een heel vriendelijk meisje dus dat was inorde...

### 4. Hotel Cosmopolite, 4,0/10

> **Teleurstellend**
> La chambre était très bien.
> Nous avons eu un problème avec le réceptionniste. En arrivant le jour de notre réservation, nous avons demandé qu'on nous réserve une table pour le soir. Problème, en arrivant au restaurant le soir, aucune réservation à notre nom et la cuisine était fermée. Nous voilà donc le soir à la recherche de quelques choses à manger dans les rues de nieuwpoort avec nos 3 enfants en bas âge. Très moyen pour un hôtel de ce standing... Nous ne reviendrons pas.

### 5. Hotel Cosmopolite, 8,0/10

> **Mooie vakantie in een prima hotel en aangename badstad**
> Prima ligging, ruime kamer, proper, supervriendelijke medewerkers, lekker ontbijt
> De kamer lag aan de achterkant met uitzicht op een heel park machines, ventilaties.... geen fraai zicht! En vooral de hele nacht lawaai van de ventilatoren en machines die continue aan staan. Bij mooi, zomers weer, absoluut geen aanrader om deze kamer te boeken

