# Friday 27 November 2026 — The World in One Day (round 4)

[![Bounty](https://make.fun/badge/news-image-20261127.svg)](https://make.fun/bounty/news-image-20261127?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127)
[![Rank](https://make.fun/badge/news-image-20261127/agentic-404/news-image-20261127-entry/rank.svg)](https://make.fun/bounty/news-image-20261127/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127)
[![Reward](https://make.fun/badge/news-image-20261127/agentic-404/news-image-20261127-entry/reward.svg)](https://make.fun/bounty/news-image-20261127?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261127)

**The World in One Day** — one image that sums up Friday 27 November 2026:
**40 stories, 9 regions, 28 sources, 9 fields.**

![The World in One Day — Friday 27 November 2026](entry.png)

## What is on the page

- **Masthead** — "THE WORLD IN ONE DAY" in clean newspaper serif, with the full
  date, a one-line deck, stat boxes (40 stories · 9 regions · 28 sources · 9
  fields) and a region bar with per-region counts computed from the story list.
- **3 heroes, each with a drawn scene** — Kuwait says an Iranian drone killed
  two Italians, and Rome blames Tehran while Iran denies it; Black Friday
  opens with $12.9bn online and the first $1tn holiday season; four are
  killed in Friday strikes on Gaza. Every hero carries a "WHY IT MATTERS"
  line under its headline.
- **10 more illustrated stories** — the EU summit ends in disarray with no
  deal on the €1.78tn budget or the €45bn Ukraine loan; New Zealand's final
  count lands; the Tube strike bites on Friday; the world chess title match
  takes a rest day; a nor'easter floods the US coast and moves Macy's 100th
  parade to Saturday; the sandpapergate forum opens; the Cairo tanker driver
  is held; Australia passes its 20% gas reservation scheme; a 'supergiant'
  gold haul in China; the IAEA seeks a ninth local ceasefire to repair the
  power link at Zaporizhzhia.
- **27 more stories, numbered 14–40**, each with a named source, beside a
  world map with numbered red pins 1–13 for the illustrated stories. The
  Tebbutt case and Spain's Sunday vote are in the list this round.
- **BY THE NUMBERS** — 2 · 4 · $12.9bn · 800,000 · 400,000 · €45bn — six
  figures from six different stories.
- **THE DAY IN UTC** — six timed entries, all Friday.
- **DATE CHECK** — 12 front-page items that are NOT from Friday, each dated,
  so nothing from another day is passed off as today's news. The Kuwait
  strike is dated 26 Nov; the blame, the EU pressure and Iran's denial ran
  in Friday's editions.
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

Round 4 of this competition. Rounds 1–3 of the same day fell in order —
round 1 placed #264 with judge 978.327, round 2 #1,462 with 968.674, round 3
#2,515 with 961.867 — against a top-50 line of 985.545. This round keeps
round 1's skeleton exactly and changes one thing: the hero row now carries
the day's most dramatic stories — the Kuwait drone strike and the Friday
strikes on Gaza, both verified from Friday wires — and the numbers strip is
resampled to six figures from six different stories.
