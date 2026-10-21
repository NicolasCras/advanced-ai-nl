# Build log

| Date | Version | What I did | Result | Errors or observations | Next step |
| --- | --- | --- | --- | --- | 
| 2026-09-24 | v1 | Created a fixed prompt for classifying Outlook emails. | Ready to run on T01–T05. | Not tested yet. | Run every input twice and record the labels. |
| 2026-09-24 | v1 | Ran T01 once in a fresh Codex conversation. | `lezen`, matching the expected label. | No error observed. | Run T01 a second time in a new conversation. |
| 2026-09-24 | v1 | Ran T01 a second time in a fresh Codex conversation. | `lezen`, matching the expected label again. | No variation between the two runs. | Run T02 with T01 as the earlier email. |
| 2026-09-24 | v1 | Ran T02 once in a fresh Codex conversation, with T01 supplied as the earlier email. | `herhaling`, matching the expected label. | No error observed. | Run T02 a second time in a new conversation. |
| 2026-09-24 | v1 | Ran T02 a second time in a fresh Codex conversation. | `herhaling`, matching the expected label again. | No variation between the two runs. | Run T03 twice. |
| 2026-09-24 | v1 | Ran T03 once in a fresh Codex conversation. | `doen`, matching the expected label. | No error observed. | Run T03 a second time in a new conversation. |
| 2026-09-24 | v1 | Ran T03 a second time in a fresh Codex conversation. | `doen`, matching the expected label again. | No variation between the two runs. | Run T04 twice. |
| 2026-09-24 | v1 | Ran T04 once in a fresh Codex conversation. | `negeren`, matching the expected label. | No error observed. | Run T04 a second time in a new conversation. |
| 2026-09-24 | v1 | Ran T04 a second time in a fresh Codex conversation. | `negeren`, matching the expected label again. | No variation between the two runs. | Run T05 twice. |
| 2026-09-24 | v1 | Ran T05 once in a fresh Codex conversation. | `lezen`, matching the expected label. | No error observed. | Run T05 a second time in a new conversation. |
| 2026-09-24 | v1 | Ran T05 a second time in a fresh Codex conversation. | `lezen`, matching the expected label again. | No variation between the two runs. | Summarise the first measurement. |
| 2026-09-24 | v1 | Completed the first measurement on T01–T05. | 10/10 correct runs; no variation observed. | Only five school-email inputs and one duplicate pair: too small to generalise. | Add five more varied inputs and test v2 in week 3. |
| 2026-10-14 | v2 | Audited the v1 context and created v2. | Added a reason to the Canvas rule, an explicit fallback for unclear messages, and three varied examples. | The new rules and examples still need to be tested in fresh conversations. | Expand the test set and run the selected inputs. |
| 2026-10-14 | v2 | Ran T01–T10 once, each in a fresh ChatGPT conversation. | 9/10 correct. T01 returned `doen` instead of expected `lezen`; T02–T10 matched their expected labels. | F1 on T01: the prompt did not distinguish an optional recommendation with an alternative from a required action. | Add one rule and one example, then rerun only T01. |
| 2026-10-14 | v3 | Added the optional-recommendation rule and matching example. | Ready to rerun T01 in a new conversation. | This one rerun can suggest an improvement, but cannot prove the rule works generally. | Record the rerun and write the post. |
| 2026-10-14 | v3 | Reran only T01 in a fresh ChatGPT conversation. | `lezen`, matching the expected label (1/1). | The change fixed this one error, but one input is too small a sample to prove the improvement generalises. | Replace constructed edge cases with real anonymised emails before submission. |
| 2026-10-14 | v2 | Replaced T06–T10 with five real, anonymised inbox emails and reran them in fresh ChatGPT conversations. | All five matched their expected labels. The full v2 Run 1 remains 9/10 because T01 was the single F1 error. | T01's v3 rerun is tracked separately; Run 2 for all inputs belongs to week 4. The planned buurtest was not possible because no classmate was available. | Submit week 3; complete Run 2 in week 4. |
