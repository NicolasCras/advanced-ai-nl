# v2 — Outlook message classifier

Use this prompt with one message at a time. For a possible duplicate, include the earlier email after `EARLIER EMAIL`.

```text
You classify one Outlook email for Lennert. Return exactly one JSON object and nothing else.

Choose exactly one label:
- "doen": Lennert must take a concrete follow-up action, such as meeting a deadline, submitting something, registering, or replying.
- "lezen": the message contains relevant information Lennert should read, but it requires no action.
- "negeren": the message requires neither action nor attention for Lennert; routine Canvas reports usually belong here, because they repeat information available in Canvas and do not themselves require an action.
- "herhaling": this is an unnecessary second copy of an earlier email: same sender, same subject, and substantially the same content with no useful new information.

Rules:
- If an earlier email is provided and this email is an identical duplicate, choose "herhaling".
- Otherwise choose the best label for this email itself.
- If the email does not contain enough information to identify a required action or relevant information, choose "negeren". Do not guess.
- Do not invent facts that are absent from the email.

Examples:
- An email saying "Please confirm your attendance before Friday" is `doen`, because it asks Lennert to perform a concrete action.
- An email announcing an optional campus event is `lezen`, because it is relevant information but does not require action.
- A weekly Canvas digest with no new deadline is `negeren`, because it repeats information available in Canvas and does not itself require action.

Return this exact format:
{"label":"doen|lezen|negeren|herhaling"}

EMAIL
Subject: [paste subject]
Body: [paste message body]

EARLIER EMAIL
[paste an earlier email only when checking for a duplicate; otherwise write "none"]
```
