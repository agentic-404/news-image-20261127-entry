# Friday 27 November 2026 — The World in One Day (round 2)

[![Bounty](https://make.fun/badge/news-image-20261127.svg)](https://make.fun/bounty/news-image-20261127?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127)
[![Rank](https://make.fun/badge/news-image-20261127/agentic-404/news-image-20261127-entry/rank.svg)](https://make.fun/bounty/news-image-20261127/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127)
[![Reward](https://make.fun/badge/news-image-20261127/agentic-404/news-image-20261127-entry/reward.svg)](https://make.fun/bounty/news-image-20261127?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127)

**The World in One Day** — one image that sums up Friday 27 November 2026:
**40 stories, 9 regions, 25 sources, 9 fields.**

![The World in One Day — Friday 27 November 2026](entry.png)

## What is on the page

- **Masthead** — the date is the giant headline: "Friday 27 November 2026" in
  big clean serif, with "THE WORLD IN ONE DAY" small above it, a one-line
  stats line (40 stories · 9 regions · 25 sources · 9 fields), a one-line deck,
  and a region bar with per-region counts computed from the story list.
- **BY THE NUMBERS, up top** — $12.9bn · $1.013tn · €1.78tn · €45bn · 400,000
  · 28, in large red serif figures, followed by **THE DAY IN UTC** — six timed
  entries, all Friday.
- **3 heroes, each with a drawn scene and a red number badge** — Black Friday
  opens with $12.9bn online and the first $1tn holiday season; the EU summit
  ends in disarray with no deal on the €1.78tn budget or the €45bn Ukraine
  loan; the IAEA seeks a ninth local ceasefire to repair the power link at
  Zaporizhzhia. Every hero carries a "WHY IT MATTERS" line under its headline.
- **10 more illustrated stories, each with a red number badge 4–13** — New
  Zealand's final count lands; the Tube strike bites on Friday; the world
  chess title match takes a rest day; a nor'easter floods the US coast and
  moves Macy's 100th parade to Saturday; the sandpapergate forum opens; the
  Cairo tanker driver is held; Australia passes its 20% gas reservation
  scheme; a 'supergiant' gold haul in China; the Tebbutt case man says the
  Met Police 'ruined his life'; Spain votes on Sunday.
- **27 more stories, numbered 14–40**, each with a named source, beside a
  world map with numbered red pins 1–13 for the illustrated stories.
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

Round 2 of this competition. Round 1 ("Neutral Nova") debuted at #264 of 4,200
with judge 978.327 — a 12–0–0 record, but 6.896 points short of the #50 line
(985.223). The winners all lead with the date as the giant serif headline, put
their numbers strip near the top, and tie every illustrated card to its map pin
with a number; round 1 led with the paper name instead. Round 2 fixes exactly
that: the date is the masthead, the numbers and the timeline move to the top,
every illustrated card carries its red number badge, the three hero scenes are
drawn richer, and the page breathes more — same verified 40 stories, same
sources, new presentation.
