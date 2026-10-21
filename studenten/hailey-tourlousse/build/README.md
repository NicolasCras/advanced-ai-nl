# Guest review sorter

## The task

The tool gives one guest review of Hotel Cosmopolite two labels: the main topic, and whether it needs a reply.

## The output

One line of JSON:

```
{"topic": "Room", "reply": "Reply this week", "reason": "Positive stay, but a mild complaint about the pillows."}
```

Each label is right or wrong. Two people can decide that separately. That is why it is measurable.

The department is not decided by the AI. It follows from the topic via the fixed table in `taak.md`.

## Why "Unsure"?

A model without a way out guesses. It picks a label anyway, and it sounds sure. With "Unsure" it can say: I don't know. Then a person decides.

## How to run it

1. Open a new chat, in an incognito or temporary chat, without web search.
2. Paste the prompt from `prompt.md`. Fill in one review.
3. Read the labels. Compare with `test-set.md`.
4. Run each review in its own new chat.
5. Write the result in `log.md`.

## Versions

| Version | Date | What changed | Why |
|---|---|---|---|
| v1 | 2026-10-07 | First prompt with topic and reply labels | |
| v2 | 2026-10-20 | Removed the topic "Booking and check-in" | In T04 the AI chose it instead of "Service and staff"; I do not want it as a topic |
