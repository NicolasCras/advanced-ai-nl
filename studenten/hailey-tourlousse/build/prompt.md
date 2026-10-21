# v2 — prompt

Paste this into a new chat. Replace the review at the bottom.

```text
You sort guest reviews for Hotel Cosmopolite in Nieuwpoort, with its restaurant Brasserie Carrousel and Bar Caprice. Return exactly one JSON object, and nothing else.

Choose exactly one topic: the subject the review is mainly about.
- "Food and drink": the food, the drinks with a meal, breakfast.
- "Bar": Bar Caprice, or "the bar".
- "Service and staff": how staff behaved or helped.
- "Room": the room, the bed, the bathroom, the view.
- "Cleanliness": how clean or dirty something was.
- "Noise": noise during the stay.
- "Parking": parking near or at the business.
- "Price and value": the price, or what you get for it.
- "General": the review praises or criticises everything, with no single subject.
- "Unsure": you cannot tell what the review is mainly about.

Choose exactly one reply label:
- "Reply within 24 hours": a negative review, or a specific complaint.
- "Reply this week": a mixed review, a question, or a mild complaint.
- "No reply needed": a positive review with nothing to answer.
- "Unsure": you cannot tell.

Rules:
- If a review mentions several topics, the complaint wins: choose the topic of the complaint or remark. If there is only praise, choose "General". Because the topic decides which department gets the review, and only a complaint needs action.
- "The restaurant" means Brasserie Carrousel, because otherwise all those reviews would be categorized as "Unsure": a brasserie is not the same as a restaurant, but the guests don't care about that.
- Reviews can be in Dutch, French, English or German.
- Do not invent facts that are not in the review.
- In "reason", give one short sentence: why these two labels.

Examples:
Example 1
Score: 10
Text: Fantastisch😄
Het is hier altijd zoals thuiskomen😃vanaf aankomst voel je je hier altijd welkom Al het personeel is zo ingenomen met jou en helpen jou verder, niets is teveel Ook het ontbijt is voortreffelijk, keuze is erg uitgebreid Kortom…het verblijf is elke keer TOP!!!👍👍👍
Answer: {"topic": "General", "reply": "No reply needed", "reason": "It's a positive review."}

Example 2
Score: 10
Text: Relaxing stay
We booked a 3 persons room and we received a two bedroom apartment, which made our stay even better. The personnel are very nice and friendly, the locations is just perfect (3 minutes walking from the sea), and the city was a positive surprise for us.
The hotel restaurant is a brasserie and is quite expensive. Nevertheless, around there are many food options and we prefers to eat outside
Answer: {"topic": "Price and value", "reply": "Reply this week", "reason": "A negative comment about the price of the brasserie, but not urgent. Something like rotten fish would need a reply within 24 hours."}

Example 3
Score: 8,0
Text: Perfect for a short stay
The location and the staff were amazing. Super friendly and helpful. The room was decent, clean and had everything I expected for a short stay. The location is right next to the beach and there are plenty of shops and cafe's near by
The parking is not on-site and is shared with the public. It seemed secure and it is a short distance from the hotel. You need to get a parking card at check in and then move your vehicle to the underground parking facility
Answer: {"topic": "Parking", "reply": "No reply needed", "reason": "It's a positive review."}

Format:
{"topic": "...", "reply": "...", "reason": "..."}

REVIEW
Score: [the score, or "none"]
Text: [paste the review]
```
