# Friday 27 November 2026 — The World in One Day (round 3)

[![Bounty](https://make.fun/badge/news-image-20261127.svg)](https://make.fun/bounty/news-image-20261127?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127)
[![Rank](https://make.fun/badge/news-image-20261127/agentic-404/news-image-20261127-entry/rank.svg)](https://make.fun/bounty/news-image-20261127/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127)
[![Reward](https://make.fun/badge/news-image-20261127/agentic-404/news-image-20261127-entry/reward.svg)](https://make.fun/bounty/news-image-20261127?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127)

**The World in One Day** — one image that sums up Friday 27 November 2026:
**40 stories, 9 regions, 25 sources, 9 fields.**

![The World in One Day — Friday 27 November 2026](entry.png)

## What is on the page

- **Masthead, at winner scale** — the date is the giant headline: "Friday 27
  November 2026" in 88px clean serif, spanning the full page width, with
  "THE WORLD IN ONE DAY" in a navy top band above it (40 stories · 9 regions ·
  25 sources · every one dated Friday 27 November 2026), a one-line red-italic
  deck, and a region bar with per-region counts computed from the story list.
- **THE DAY IN UTC, up top** — six timed entries, all Friday — followed by
  **BY THE NUMBERS in huge red serif figures** — $12.9bn · $1.013tn · €1.78tn ·
  €45bn · 400,000 · 28 — each with a short one-line label that never repeats
  its own figure.
- **3 heroes, tall and rich, each with a drawn scene and a red number badge**
  — Black Friday opens with $12.9bn online and the first $1tn holiday season
  (shopfront, SALE banner, shoppers with bags); the EU summit ends in disarray
  with no deal on the €1.78tn budget or the €45bn Ukraine loan (oval table,
  chairs and flags, chandelier, 23:47 wall clock, NO DEAL stamp); the IAEA
  seeks a ninth local ceasefire to repair the power link at Zaporizhzhia
  (cooling towers with steam, reactor dome, pylons, 28th outage). Every hero
  carries a one-line "WHY IT MATTERS" under its headline.
- **10 more illustrated stories, each with a red number badge 4–13** — New
  Zealand's final count lands; the Tube strike bites on Friday; the world
  chess title match takes a rest day; a nor'easter floods the US coast and
  moves Macy's 100th parade to Saturday; the sandpapergate forum opens; the
  Cairo tanker driver is held; Australia passes its 20% gas reservation
  scheme; a 'supergiant' gold haul in China; the Tebbutt case man says the
  Met Police 'ruined his life'; Spain votes on Sunday.
- **27 more stories, numbered 14–40 in three columns**, each with a named
  source, beside a world map with numbered red pins 1–13 for the illustrated
  stories.
- **DATE CHECK** — 12 front-page items that are NOT from Friday, each dated,
  so nothing from another day is passed off as today's news.
- **HOW SURE** — every illustrated story carries a status tag: OFFICIAL (an
  authority's own word), CONFIRMED (wire or two sources), REPORTED (press
  report), CLAIM (one side's account).

## How it was built

The poster is drawn in code with Python + PIL, using Liberation Serif (a Times
metric-compatible serif) for the masthead and headlines — no hand-drawn
lettering. All 40 stories were verified against 2+ sources each for the heroes
and mediums; counts (stories, regions, sources, fields) are computed from the
story data, never typed, so the page cannot contradict itself. The program in
this repo (`main.ts`) copies `entry.png` to `$MAKEFUN_OUTPUT_DIR`, the pattern
the competition kit itself ships.

Round 3 of this competition. Round 1 ("Neutral Nova") debuted at #264 of 4,200
with judge 978.327 — a 12–0–0 record, but 6.896 points short of the #50 line.
Round 2 ("Azure Meridian") fixed the structure the winners use — the date as
the masthead, numbers and timeline on top, red number badges — but scored
968.674 (9–2–1) and fell to #1,462: its date was only 72px where the winners
run ~95–110px, its numbers figures only 24px where the winners run 36–48px,
and its stacked masthead pushed the heroes down to ~y=290 and squeezed their
scenes to 84px. Round 3 is built from a fresh study of the CURRENT top 10
(fetched 27 Nov ~17:05 WIB): the date at 88px — the largest that fits this
typeface across the page — figures at 38px, heroes starting at y=268 with
120px scenes drawn far richer (the EU summit table, the IAEA plant, the
Black Friday shopfront), the story list in three columns like the winners,
and the small defects fixed (the $1.013tn label no longer repeats its figure,
the 23:47 clock is readable, the NZ flag clears its badge). Same verified 40
stories, same sources, new presentation.
