# CAA English Practice — notes for Claude Code

Static website (no build step) of self-access English units, A1–C2, for CAA Virtual (BUAP self-access center).
The owner is Angelica, an English teacher. Talk to her in Spanish; all student-facing content is in English.

## Structure
- `index.html` — home page. The `UNITS` array in its script lists every unit (title, focus, level, url, isNew).
- `assets/unit.js` + `assets/unit.css` — shared engine. Each unit folder has an identical `index.html` that loads
  `../assets/config.js`, its own `data.js` (`window.UNIT = {...}`), then `../assets/unit.js`.
- `assets/config.js` — `writingEndpoint` (Google Apps Script web app URL), `speakingPlatformName/Url`, `homeUrl`.
- `_template/` — copy to start a new unit. `tools/writing-collector.gs` — Apps Script that stores writing submissions.
- 48 unit folders (8 per level, A1–C2), all using the shared engine; the order on the home page is the `UNITS` array.
  A1: hi-my-name-is, describing-myself-and-others, can-you-swim, my-daily-routine, what-do-you-like-doing,
  when-is-your-birthday, what-are-you-doing, what-is-in-your-room. A2: my-plans-for-the-weekend, are-you-ok,
  talking-about-personal-objects, shopping-for-clothes, lets-get-cooking, my-last-vacation, what-were-you-doing,
  have-you-ever. B1: whose-phone-is-this, how-do-i-get-there, how-was-your-weekend, what-would-you-like-to-eat,
  where-are-you-going, where-do-you-want-to-meet, what-would-you-do, made-in-mexico.
  B2: it-must-have-been, if-only, she-said-that, have-you-been-waiting-long, the-person-who, getting-things-done,
  by-this-time-next-year, applying-for-a-job. C1: never-have-i-seen, what-i-need-is, its-about-time, if-i-had-studied,
  it-is-said-that, having-finished, making-a-case, break-the-ice. C2: mind-your-register, shades-of-meaning, less-is-more,
  the-academic-voice, reading-between-the-lines, the-art-of-storytelling, finding-common-ground, it-is-essential-that.
- Speaker voices: each speaker name needs a gender, via `speakers: { "Name": "f" | "m" }` in data.js or the
  `SPEAKERS` list in unit.js.

## Conventions (keep them)
- Five steps per unit, IDs `mainsec-0` … `mainsec-4`; skill tabs `actsec-list`, `actsec-read`, `actsec-writ`, `actsec-spea`.
  Never use generic IDs like `id="presentation"`.
- Vary activity types; avoid repetitive multiple choice. Types: match, sort, gap (`[[answer|alt]]`), tiles, rewrite,
  tf, write (writing evidence: sent to `writingEndpoint` or downloaded), speak (solo recording), repeat.
- Speaking activity 1 in every unit is `repeat` (6 short sentences, `items: [...]`): TTS plays each sentence and SpeechRecognition
  scores it (`scoreSpeech`; 70% passes), same as the level repositories. Activity 2 is a `speak` solo recording (the evidence).
  Keep repeat sentences short (3–10 words) and avoid proper names.
- Every unit: 4 objectives, 6 can-do statements rated 1–5, each with a `review` hint.
- Each `slug` in `data.js` must equal its folder name (used for saved progress: `localStorage["caa:" + slug]`).
- Colors are CSS tokens with light and dark themes; keep the home page and units on the same palette.

## Deploying to GitHub Pages
1. `git init && git add -A && git commit -m "CAA English Practice site"`
2. `gh repo create caa-english --public --source=. --push` (ask Angelica for the repo name and account first).
3. Enable Pages: `gh api -X POST repos/{owner}/caa-english/pages -f "source[branch]=main" -f "source[path]=/"`
4. Site URL: `https://{owner}.github.io/caa-english/`. Give it to Angelica for Google Sites (Insert → Embed → By URL).
`.nojekyll` is present so `_template/` is served as is.

## Checking changes
- `node --check assets/unit.js` and `node --check <unit>/data.js` after edits.
- Open a unit with a local server (`python3 -m http.server`) and click through all five steps and four skills.

## Possible next tasks
- Add recorded audio (`audio: "file.mp3"` in a unit's `skills.listening`) to replace browser text-to-speech.
