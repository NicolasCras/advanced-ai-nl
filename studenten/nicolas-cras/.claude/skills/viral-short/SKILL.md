---
name: viral-short
description: Make a finished 25–35 s YouTube Short in the paper-mascot style from one sentence (how something was built, a random fact, an urban legend), plus an upload kit with hook title, description and viral checklist.
---

# viral-short

The user gives one sentence ("the myth that you can see the Great Wall from space", "why flamingos are pink", "how the Eiffel Tower was built"). You deliver, without asking anything in between:

- a finished 9:16 MP4 (25–35 s) in the channel's cut-paper style: a terracotta box mascot with a different hat per scene, a screwed sign with a headline, hard cuts on every spoken line, word-by-word caption chips, a lo-fi bed with sound effects
- upload-kit.md: 3 hook titles, the description with hashtags, a pinned comment, the upload settings, a first-hour and 48-hour checklist, and the sources

Go straight to the finished video: no script approval step. If the sentence can be read two ways, pick one and say which in one line. The user has given a standing go-ahead to schedule the finished Short on their own YouTube channel (step 10 starts by itself, no question per video). Uploading is fully automatic: Claude pushes the MP4 to the user's own GitHub repo, vidIQ imports it from the link, and Claude sets the AI label in Studio (step 10). The user never has to pick a file. Never post or upload anywhere else without an explicit go-ahead. Tell the user at the start that it takes about 20–30 minutes.

Everything runs in the cloud workspace (Bash). The toolkit lives on the user's Mac in ~/reels/_kit and is staged in through the device bridge. Finished videos go back to ~/reels/<slug>/.

## 0. Setup (every session)

Cloud mode (preferred; works from a phone with the Mac off). The whole toolkit, the logs and the example pieces live in the user's private GitHub repo NicolasCras/reel-kit. Use it instead of the Mac unless add_repo is refused:

- Call add_repo for NicolasCras/reel-kit with access push, then run `git clone --depth 1 https://github.com/NicolasCras/reel-kit /home/claude/reel-kit` inline with a 10-minute timeout (skip if it already exists), then call register_repo_root.
- Rebuild the whisper model: `cat /home/claude/reel-kit/models/ggml-base.en.bin.part-* > /home/claude/reel-kit/models/ggml-base.en.bin`.
- Set KIT=/home/claude/reel-kit and skip setup steps 1–3 below (no Mac link, no ~/reels, no staging). Do setup steps 4 (voice engine) and 6 (the reel-uploads repo) as written.
- Where this skill says ~/reels/_kit/... or $KIT/..., use the repo path. Closest examples: $KIT/examples/legend (LEGEND), $KIT/examples/atomium and $KIT/examples/pisa (BUILT), $KIT/examples/dragons and $KIT/examples/basketball (FACT); copy their src/head.js, src/scenes.js, src/score.js straight from the repo.
- To avoid repeating a topic (step 5) read the Folder column of $KIT/hook-log.md and the slugs in $KIT/schedule.md instead of listing ~/reels.
- Step 9 in cloud mode: still send the MP4, upload-kit.md and contact.png with SendUserFile. Do not write to the Mac. Instead save upload-kit.md, src/*.js and voice/script.json to $KIT/pieces/<slug>/ (no wav or mp4), append the hook-log row to $KIT/hook-log.md, and commit and push reel-kit with `git -c push.negotiate=true push origin HEAD:main`.
- Step 10 in cloud mode: read the last slot from $KIT/schedule.md, append the new row there (commit and push it with the piece), and skip the device_bash commands. Setting the AI label (step 10.4b) still needs Claude in Chrome on the user's computer; if it isn't connected, say the label is still to be set.
- If add_repo for reel-kit is refused, fall back to the Mac steps below (the Mac must be linked and ~/reels/_kit staged).

1. The Mac must be linked. If no mcp__remote-devices__ tools exist (check ToolSearch for deferred ones), tell the user to open this chat in the Claude desktop app on their Mac and send a message, then stop.
2. Connect ~/reels. Call get_device_info. If ~/reels isn't in connectedFolders, call device_request_folder_access(["~/reels"]). If ~/reels/_kit is missing, say so and stop. Don't rebuild the kit from memory.
3. Stage the kit with one device_stage_files call. Use these paths; they land under /mnt/user-data/uploads/reels/_kit/: ~/reels/_kit/tools/voice.py, ~/reels/_kit/tools/build.mjs, ~/reels/_kit/tools/render.mjs, ~/reels/_kit/template/index.html, ~/reels/_kit/template/src/head.js, ~/reels/_kit/template/src/scenes.js, ~/reels/_kit/template/src/score.js, ~/reels/_kit/lib/fx.js, ~/reels/_kit/models/ggml-base.en.bin, ~/reels/_kit/hook-log.md, ~/reels/_kit/examples/legend/src/head.js, ~/reels/_kit/examples/legend/src/scenes.js, ~/reels/_kit/examples/legend/src/score.js, ~/reels/_kit/examples/legend/voice/script.json, ~/reels/_kit/examples/legend/upload-kit.md. From now on KIT=/mnt/user-data/uploads/reels/_kit. If a staged file isn't there yet, wait a second and look again.
4. Voice engine. Run these one after another in the foreground. Don't put a mkdir chain in the background.

```bash
pip install --break-system-packages -q kokoro-onnx soundfile pywhispercpp
mkdir -p /home/claude/models && cd /home/claude/models
for f in kokoro-v1.0.onnx voices-v1.0.bin; do for i in 1 2 3; do [ -f $f ] && [ $(stat -c %s $f) -gt 1000000 ] && break; curl -sSL -o $f https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.0/$f; done; done; ls -la
python3 -c "import kokoro_onnx, pywhispercpp, soundfile; print('py ok')"; node -e "require('playwright'); console.log('pw ok')"; ffmpeg -version | head -1
```

Hugging Face is blocked from the workspace, which is why the whisper model comes from the kit. If Playwright is missing, run `npm i -g playwright && npx playwright install chromium`.

5. Run device_list_dir ~/reels to see existing video folders. Don't repeat a topic, and use them as candidates for the "related video".
6. GitHub upload repo (once per session). Call add_repo for NicolasCras/reel-uploads with access push. Only ever use this repo: never touch advanced-ai-nl (that one is for school). Clone it once, inline, with a 10-minute timeout, unless /home/claude/reel-uploads already exists: `git clone --depth 1 https://github.com/NicolasCras/reel-uploads /home/claude/reel-uploads`, then call register_repo_root. If add_repo answers push_check: refused, the Claude GitHub App is not installed on that repo: tell the user to install it at https://github.com/apps/claude/installations/select_target (only for reel-uploads), and use the picker fallback in step 10.2 meanwhile. If the user declines the access prompt, don't ask again this session and use the fallback.

## 1. Pick the format

| Format | Use for | Sign kicker | Worked example |
|---|---|---|---|
| BUILT | how a place or thing was built or made | HOW IT WAS BUILT | ~/reels/atomium, ~/reels/pisa |
| FACT | a surprising fact, "why does X…", how something works | FUN FACT | ~/reels/dragons (older script style) |
| LEGEND | urban legends, myths, "is it true that…", mysteries | URBAN LEGEND | $KIT/examples/legend |

Read $KIT/hook-log.md. Once rows have numbers, favour the formats and hook styles with the best "viewed vs swiped" and average % viewed.

## 2. Research: no mistakes

- Two sources for every fact. Every number, date, name and claim in the voice, on screen and in the description must be confirmed by at least 2 independent reliable sources: an official site, museum, space agency, encyclopedia, major newspaper or peer-reviewed paper. Use WebSearch, then WebFetch the best pages.
- When sources disagree, use the safe wording ("about", "more than", "at least") or drop the claim.
- LEGEND verdicts must follow the evidence: TRUE, FALSE, MYTH, PARTLY TRUE, UNPROVEN or UNSOLVED. Never present a legend as true. Thin evidence means UNPROVEN. Health and safety myths always get a clear verdict.
- Brands and characters. Drawings stay generic: no logos, brand names or copyrighted characters on screen. The voice may name a source factually ("a famous cartoon"); the description can name it in full.
- Serious topics (deaths, disasters, crimes, tragedies) get a factual, respectful line: no stamp slam, confetti, party hat or joke on it. Use hat 'none' and soften the music, as the 9/11 and Berlin Wall reels did.
- Keep the source list for the upload kit.
- Re-read the final script against the sources before recording.

## 3. Hook and script (25–35 s, 7–9 lines, about 85–115 words)

The hook is line 1. It's the most surprising true claim, specific and concrete (a number, a name, a contrast), said within about 2 s, in 15 words or fewer. No greeting, no "in this video". Patterns:

- "[Famous thing] is [surprising comparison]." (The Statue of Liberty is thinner than two pennies.)
- "Everyone says [legend]. [People who'd know] disagree."
- "[Thing] shouldn't be able to [X]. Here's why it can."
- "They [did something unexpected] to build [thing]."
- "[Number] [things] went into [thing]. Here's how."

The title is the hook claim in Title Case: 60 characters or fewer (the feed cuts at about 50), no hashtags, no ALL CAPS, nothing untrue.

Arcs (one line = one scene; a line may get a second cut on a word):

- BUILT: hook → 3 steps, one concrete step each → "The catch?" (an honest limit or twist) → "And get this." kicker → CTA
- FACT: hook claim → why it's true (2–3 lines with the mechanism or number) → a twist that's even more surprising → CTA
- LEGEND: hook (the legend plus doubt) → where it came from (1–2 lines) → the test or evidence (1–2) → why → "Verdict? [X]." plus one line of nuance → CTA

The CTA is always a comment question with an easy answer. Never "comment KEYWORD": YouTube can't DM. Examples: "Did you believe it? Comment yes or no." / "Would you climb it? Yes or no?" / "Which should I explain next: A or B?" Keep it about 8 words.

Writing rules:

- Write numbers as they're spoken ("seventeen fifty-four").
- Aim for about 3.3–3.6 words per second.
- Use "say" for spoken spellings, e.g. Manneken Pis → Mannuh-kun Pis, Atomium → Atom-ium.
- Line ids are short lowercase words and never `voice`.

Write <piece>/voice/script.json:

```json
{ "lead": 0.15, "tail": 0.6, "lines": [
  { "id": "hook", "text": "…", "after": 0.12, "speed": 1.3 },
  { "id": "cta", "text": "Did you believe it? Comment yes or no.", "after": 0.1, "speed": 1.2 } ] }
```

## 4. Voice and timing

Set up the piece, using the topic's kebab-case slug, e.g. great-wall-from-space-myth:

```bash
P=/home/claude/<slug> && mkdir -p $P/src $P/tools $P/voice && cp $KIT/tools/*.py $KIT/tools/*.mjs $P/tools/
cd $P && python3 tools/voice.py . 2>&1 | grep -v -i warning | grep -E "take|align|CHECK|pin|voice.wav"
```

Then check four things:

- Length: voice.wav must be 25–35 s. Adjust each line's "speed" (1.2–1.36) or cut words, then rerun.
- Pronunciation: read every align line's heard text. Words written as digits are fine. For a misheard word, reword it or add "say", then rerun with `--only <id>`.
- Merged words: a CHECK line means the aligner merged a short word, typically after "?" or "." ("Verdict? Myth."). Add the suggested "pin": {"word": seconds} to that line and rerun with `--only <id>`.
- Cue words: print the word times and plan the cuts from them:

```bash
python3 -c "import json; [print(L['id'], ' '.join(f\"{w['w']}@{w['t0']:.2f}\" for w in L['words'])) for L in json.load(open('voice.json'))['lines']]"
```

## 5. Scenes, music, sound

Copy the three src/*.js files from the closest example, then rewrite them for this piece. For LEGEND use $KIT/examples/legend/src/. For BUILT or FACT, stage ~/reels/atomium/src/head.js, ~/reels/atomium/src/scenes.js and ~/reels/atomium/src/score.js (or the same three from pisa or dragons); device_stage_files takes file paths, not globs.

### src/head.js

- Keep the boilerplate as is.
- Change the header comment, SHOT_LIST, SCENE and acts.
- SHOT_LIST gets one entry per line at CUT('<id>'), starting with [0.0, '<first>']. An extra cut inside a line sits at VW('<id>', '<word>').t0 - 0.08.

### src/scenes.js

- Start with `const CLAWD_X = 880, CLAWD_Y = 1640; CLAWD_SCALE = 1.12; const KICK = '<kicker>';`.
- Write one function sceneX() per shot.
- Prefix your own helpers with a 2-letter piece prefix (gw…), because the kit already owns many short names (camera, screen, ink, smooth, W, H, F…).
- End with these three lines:

```js
const ERA_BG = ERA_LIST.map(() => '#869997');
function pieceCam() { return null; }
const BRIDGES = [];
```

### src/score.js

- Start with `const E_ = (sc) => SHOT_LIST.find((s) => s[1] === sc)[0];`.
- Write a bed with `to = 'm'`: pick a progression that fits the mood (e.g. A minor for mystery, D major for upbeat).
- Then `to = 's'` for the effects: a whoosh into every cut, and one effect per hero prop on its spoken word (stamp thud, counter ticks, cross buzz, chimes, typing).
- Every E_('x') must name a scene in SHOT_LIST, and every VW('id', …) an existing line id. Otherwise the check reports score: ERROR and the export crashes.

### Every scene needs (the style's fingerprint)

- a full-bleed world in its own colour with one visual metaphor for the line, never a prop floating on blank paper
- prSign('2–5 WORDS', { kicker: KICK }), a different headline per scene
- one hero prop that acts on a spoken word at VW(id, word).t0: a stamp, a counter, a tick or cross, a verdict, a write-on, a card pop
- clawd(CLAWD_X, CLAWD_Y, { hat, mood, look: -18 }) with a different hat per scene, and a mood change on the payoff word (neutral → wow, happy or flat)
- at least 3 details of background life: stars, clouds, birds, steam, a candle, blinking lights, a drifting satellite
- prChips() as the very last call

The hook scene also gets prTerm('/<topic as a short command>', ev(E0 + 0.05, 1.0)). Its first frame must already show the subject.

The CTA scene:

- fxAskCard(question, 540, 560, E0 + 0.05, { size: 66 })
- fxChoices(['YES', 'NO'], 540, 860, VW('cta', 'comment').t0, { size: 66 })
- prCommentBox(440, 1080, '<a short sample answer>', VW('cta', 'comment').t0 + 0.35, { s: 0.82 * popS(VW('cta', 'comment').t0 + 0.1) })
- party hat ('none' on serious topics). Ideally reuse the hook's world so the Short loops.

### Layout

| Zone | Where | Rule |
|---|---|---|
| Sign | y 140–300 | always |
| Terminal bar | y 322–400 | hook scene only |
| Main action | y 420–1300 | everything else goes here |
| Captions band | y 1450–1600, x 70–930 | keep empty |
| Mascot and hat | about x > 550 and y > 1100 | no text or stamps here: they get hidden |

### Kit API (template engine plus lib/fx.js, which is built in front of every scenes.js)

- Shapes: pp(path, fill, { key, shadow, sb, sy, tex, rim, rw, shc }) with paths pR(x,y,w,h,r), pE(cx,cy,rx,ry,rot), pG(points), pA(cx,cy,r,a0,a1). withT(x,y,rot,scale,fn) transforms. Colours are in PR.* (clawd, slate, navy, ink, char, cream, creamL, paperW, mustard, yellow, green, greenK, red, redD, wood, woodD, woodL, board, teal, purple, plum, sky, grey, greyD, orange, brown, tan, blue, pink).
- Text: txt(str,x,y,size,color,{ weight, font, align, frac }) returns the width. Also txtW(str,size), fitSize(str,maxW,s0), and the fonts F_HEAD, F_CHIP, F_CHALK, F_MONO.
- World: prWall(c,{ gap, panel }), prFloor(y,c,{ trim }), prBunting(y), prClock(x,y,r,h,m,key) (r ≥ 60; smaller looks like a button), prCorkboard(x,y,w,h), prNote(x,y,w,h,fill,rot,key), prStar(x,y,r,c), prBoard(x,y,w,h), chalk(str,x,y,size,frac,{ color }), chalkLine(points,frac,{ color,w,dash }).
- Props: prSign, prTerm(str,frac), prCounter(label,val,x,y,{ w,h,rot,s,big }) with countUp(t0,d,a,b), prStamp(str,x,y,color,t0,{ rot,size,from }), prBurst(x,y,t0,{ n,cols }), prCheck / prCross(x,y,t,r), prChecklist(x,y,w,title,items,t0,dt), prCommentBox(x,y,text,t,{ s }), prReceipt(x,y,rows,total), propStick(a) / propPencil(a) for clawd({ hold }).
- fx:
  - drawing: fxStroke(points,col,w), fxGlow(x,y,r,a), fxWrap(str,size,maxW)
  - world: fxSky(c,key), fxCloud(x,y,s,c,key), fxStars(key,n,y0,y1), fxBirds(key,n,y0), fxTree(x,yb,s,key), fxMoon(x,y,r,bg,key), fxPerson(x,yb,s,key,shirt,{ bob,arm })
  - story props: fxVerdict(verdict,x,y,t0,{ size }), fxAskCard(text,x,y,t,{ size,w }), fxChoices(labels,x,y,t,{ size })
- Mascot: clawd(x,y,{ hat, mood, look, view:'side', walk, hold, key }).
- Hats: guard, mortar, boater, ranger, cap, phones, beret, tophat, flatcap, hardhat, bowler, party, detective, wizard, crown, chef, none.
- Moods: neutral, happy, wow, flat.
- Time: TT is now and E0 the scene start. Also ev(t,d) (0 → 1), popS(t), springMove(t0,a,b,SPRING.playful), seg(t,a,b), EZ.o3/io/back, lerp, clamp, VL(id), VW(id,word,n) (word lowercased with punctuation stripped, apostrophes kept: VW('x', "couldn't")) and CUT(id).
- Randomness: only seeded RNG(key) with .r(a,b), .n(amt), .i(a,b). Never Math.random() or the clock: the check verifies determinism.
- Score helpers: pad(t0,t1,notes,peak,{ type,cut,att,rel,send }), bass(t,f,vel), pluck(t,f,vel,pan,dur,bright,send), sub(t,vel), noiseHit(t,dur,type,freq,q,vel,pan,send,sweepTo), sweep(t0,t1,vel,f0,f1), riser(t0,t1,vel), chime(t,[freqs],vel), blip(t,f0,f1,dur,vel), drone(t0,t1,f,peak), nz('A3').

## 6. Build, look, check

```bash
cd $P && node tools/build.mjs . $KIT "<Title>"
node tools/render.mjs still . <one time per scene, just after its cue word, comma separated> $P/look.png --scale 0.4 --cols 5
node tools/render.mjs check .
```

Look at the stills with Read (5 per strip; make two strips for 10 scenes). Fix text hidden by the mascot or the hat, empty-looking scenes, props landing on the wrong word, and anything unreadable.

The check must say page errors: none, score: ok, deterministic: true and text: PASS. Fix overlaps by moving props, not captions.

## 7. Export

Run this with a 600000 ms timeout; it takes about 3–4 min for 30 s:

```bash
node tools/render.mjs export . <slug>.mp4 2>&1 | grep -E "stem|export:|ERROR"
ffmpeg -hide_banner -i <slug>.mp4 -af ebur128=peak=true -f null - 2>&1 | grep -E "^\s+(I|Peak):"
ffprobe -v error -show_entries format=duration:stream=width,height,r_frame_rate -of compact <slug>.mp4
node tools/render.mjs still . <10 times> contact.png --scale 0.25 --cols 10
```

Required: I ≈ −14 LUFS, peak ≤ −1.5 dBFS, 1080×1920, 30 fps, 25–35 s.

## 8. Upload kit ($P/upload-kit.md)

Use exactly these sections. $KIT/examples/legend/upload-kit.md is a filled-in example.

- Header: file name, length, format, and the verdict (LEGEND only).
- Title: 3 options in Title Case, ≤ 60 chars, no hashtags, the recommended one first and marked.
- Description (one code block):
  - line 1 repeats the hook (the first ~100 characters show before "more")
  - 3–4 numbered facts from the research
  - the verdict or twist
  - the CTA question
  - a blank line, then 3–5 hashtags: topic tags first, then #Shorts. Never more than 15, because YouTube then ignores them all. The first three show above the title. Each hashtag is # plus letters, digits or underscores only, starting with a letter, with no spaces, dashes or accents (#SagradaFamilia), or it won't work as a link.
- Pinned comment: the CTA question, plus "Next: A) … or B) …?" with two real future topics. Check that neither topic already exists: look at the folder names in ~/reels and, when the user's credits allow, the titles from vidiq_user_videos. Suggest only topics that are not on the channel yet. For the related video, pick the most related Short from that same list.
- Upload settings:
  - Audience: choose honestly; general audience means "not made for kids".
  - Altered or synthetic content / AI usage: Yes (the voice is AI-generated). This is the user's choice and is set automatically in step 10.4b.
  - Related video: Studio on desktop → Content → the Short → Related video. Pick the most related existing Short. Links typed in a Short's description or comments aren't clickable.
- First hour: pin the comment, reply to every comment, and don't delete and re-upload a slow Short.
- After 24–48 h in Studio → Analytics: "viewed vs. swiped away" (does the hook work?), average % viewed (a rough rule of thumb: about 70%+ is good; under 50% means the hook or the middle loses people) and subscribers gained. Then fill in the hook-log row.
- Sources: every source used, with what it confirmed.

## 9. Save and deliver

1. Copy the piece to /mnt/user-data/outputs/<slug>/, keeping its folders: the MP4, contact.png, upload-kit.md, index.html, voice.json, voice/*.wav, voice/script.json, src/*.js and tools/*.mjs tools/*.py (copy the files, not __pycache__ or look.png).
2. Send the MP4, upload-kit.md and contact.png with SendUserFile (display attach).
3. Write the folder to the Mac with device_commit_files: each file's stagedPath under /mnt/user-data/outputs/<slug>/… goes to devicePath ~/reels/<slug>/…. The Mac copy of the MP4 gains a small content-credentials box, so its checksum differs; that's expected.
4. Append the hook-log row on the Mac with device_bash. The closing EOF must start at the beginning of its line:

```bash
cat >> "$HOME/mnt/reels/_kit/hook-log.md" <<'EOF'
| <date> | <slug> | <FORMAT> | <hook style> | <title> | | | | |
EOF
```

5. Reply briefly:
   - one line with the length, format and verdict
   - the weakest shot
   - the title, description and pinned comment in code blocks, ready to paste
   - "listen to the mix before posting"
   - when step 10 runs next, say "scheduling it now"; otherwise "not posted anywhere"
   - the next free slot from the schedule (step 10), with an offer to schedule it there
   - the Sources list

## 10. Schedule on YouTube (starts by itself as soon as step 9 is done)

When the video is finished and delivered, start this step without asking, unless the user says not to schedule this one (for example "just make the video" or "don't post this"). It needs the vidIQ connector with a connected YouTube channel: call vidiq_social_account_list with platform YOUTUBE and check canPublish. If there is no channel, call vidiq_connect_youtube_channel, show the user the link, and wait for them to finish. Uploading, drafting and publishing cost 0 credits; vidiq_user_videos and vidiq_get_videos_by_ids cost 5 credits each and the Free plan has only 150 a month, so don't use them to find a slot.

The fixed schedule (Europe/Brussels): every day at 10:00, 14:00 and 18:00. One Short per slot. After the 18:00 slot the next Short goes to 10:00 the next day. Slots up to and including 19 November 2026 are already taken, so the first free slot is 20 November 2026 at 10:00.

1. Find the next slot from the log, not from YouTube. Keep ~/reels/_kit/schedule.md on the Mac, one line per scheduled Short: `| YYYY-MM-DD HH:MM | slug | title |`. Read it with device_bash (`cat "$HOME/mnt/reels/_kit/schedule.md"`). If it doesn't exist yet, create it with a header and treat 2026-11-19 18:00 as the last taken slot. Next slot = the first slot (10:00, 14:00, 18:00) after the latest time in the log, and also at least 1 hour from now (skip to the following slot if it is closer). Write it as an ISO time with the Brussels offset: +01:00 in winter, +02:00 in summer time (clocks change on the last Sunday of March and October). If the user names their own time, use that one instead. Always tell the user which slot you took. If the Mac isn't linked, ask the user for the last scheduled time instead.
2. Get the video into vidIQ yourself (the user picks nothing). Push the full-quality MP4 to the public repo NicolasCras/reel-uploads (set up in step 0) and let vidIQ import it from the raw link:

```bash
cd /home/claude/reel-uploads && git pull -q --depth 1 origin main; mkdir -p videos && cp $P/<slug>.mp4 videos/ && git add videos && git -c user.name="Claude" -c user.email="noreply@anthropic.com" commit -q -m "Add <slug>" && git -c push.negotiate=true push origin main && git rev-parse HEAD
```

End the commit message with the attribution lines the session asks for. Use the commit hash in the link, because the plain main link can answer 404 for a while: `https://raw.githubusercontent.com/NicolasCras/reel-uploads/<hash>/videos/<slug>.mp4`. Check it with `curl -sI` (HTTP 200 and the right content-length), then call vidiq_video_upload with url set to that link. It returns an uploadId with status ready (0 credits). Fallback, only if the push is refused or the import fails: copy the MP4 to ~/Documents/AI/ai video's/ with device_bash, call vidiq_file_upload, tell the user in one line to pick <slug>.mp4 there, and say plainly that the automatic route failed and why. Do not try Claude in Chrome file_upload, the Drive connector or the built-in browser for the file: all were tried and refused.

3. Check the hashtags, then draft it. Hashtags only work as links when they are written correctly, so check the last line of the description before sending: 3–5 hashtags (never more than 15), separated by single spaces, on their own line after a blank line; each is # directly followed by letters, digits or underscores only, starting with a letter (plain ASCII: no spaces, dashes, dots, apostrophes or emoji, so #SagradaFamilia, not #Sagrada-Família); #Shorts is included and the first three are the ones that show above the title. Fix any that don't match and keep hashtags out of the title. Then call vidiq_social_post_draft_create with the YouTube account id, the recommended title, the description code block from upload-kit.md as text, the topic hashtags as tags (without #), the uploadId as video media and publishAt. Use privacyStatus public unless the user says otherwise; a scheduled public video uploads as private and goes public by itself at the chosen time.
4. Publish without asking again. The user has said no approval is needed per video: they check YouTube themselves and delete the video if it isn't right. As soon as the draft is ready (fix a refused draft with vidiq_social_post_draft_update), call vidiq_social_post_publish with the postId and the revision. Afterwards tell the user the channel, title, slot and visibility in one or two lines.
   - 4b. Set the AI label in Studio (vidIQ can't). Once the publish status is completed, take the video id from the postUrl and use Claude in Chrome (load the tools in one ToolSearch call; use a tab on https://studio.youtube.com/video/<id>/edit, signed in to the channel Funniestfacts, UCzeoFOj1TgHn-yaSkdvwIkw). Use find to get refs: click Geavanceerde instellingen tonen, then the radio Ja, er is AI gebruikt (AI-gebruik), then Opslaan. Studio's title and description fields are not form inputs: click them and type if they ever need a change. Check that Zichtbaarheid says Gepland and open it to confirm the date and time; close it with Escape without changing anything. If Chrome isn't connected or the Studio page shows another channel, switch via the account menu → Ander account → Funniestfacts, or tell the user the label is still to be set.
5. Log it. Append the slot to schedule.md with device_bash (closing EOF at the start of its line):

```bash
cat >> "$HOME/mnt/reels/_kit/schedule.md" <<'EOF'
| <YYYY-MM-DD HH:MM> | <slug> | <title> |
EOF
```

- Verify, only if credits allow. vidiq_balance is free; if at least 5 credits are left, call vidiq_user_videos and check that the new Short is private with scheduledPublishAt equal to the chosen time in UTC. Otherwise ask the user to check YouTube Studio → Content. vidiq_social_post_status may show scheduledFor: null even when it worked, so don't rely on it.
- Clean up. Only once the Short is scheduled (the publish call succeeded and the status is completed), remove the video from the GitHub repo so it only holds videos still to import: `git rm -q videos/<slug>.mp4`, commit and push. If the fallback copy was made, also remove ~/Documents/AI/ai video's/<slug>.mp4 (if rm fails with 'Operation not permitted', call device_request_delete_permission once for ~/Documents; if refused, move it into _to_delete/ and tell the user). Never delete the original in ~/reels/<slug>/. If scheduling failed or is unfinished, leave the files where they are and say so.
- Say what stays manual: pin the comment after it goes live, set the related video in Studio, and any later change or cancel happens in YouTube Studio, not here.

## Gotchas

- Old tools: a piece's tools must come from $KIT/tools. Old folders' build.mjs point at the wine reel and old temp paths.
- Late cue words: whisper merges a short word after "?" or "." and times it late. The CHECK line tells you. Pin it, or the stamp lands late.
- Hidden text: text under the mascot or hat gets hidden. Keep stamps and captions left of x ≈ 550 below y ≈ 1100, or put them higher.
- Small clocks: prClock with a small radius looks like a UI button.
- Background commands: don't run a command chain that creates a folder in the background while the next command uses it.
- Export time: the export is slow (about 7 s of render per second of video), so always give it a 600000 ms timeout.
