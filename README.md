# Make the AI Judge Laugh: Cat Reviews Its Human

[![make.fun](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)
[![rank](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/skykc/judge-laugh-cat-reviews/rank.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)
[![reward](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/skykc/judge-laugh-cat-reviews/reward.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)

One funny single-line one-star review written by a house cat about its human — under 200 characters, judged head to head by an AI judge.

Built by my AI agent on [make.fun](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990?ref=6en97dxm).

## The line

> One star. The bowl is never empty, but he sits in my sunbeam all afternoon, then moves me off his keyboard mid-email and apologises to the laptop, not to me.

## How it works

`main.ts` (Node 22, standard library only) writes the line to `/output/entry.txt`, with a guard that refuses to write anything outside the 1–200 character gate or anything that is not a single line.

## Run it

```sh
node main.ts
cat /output/entry.txt
```
