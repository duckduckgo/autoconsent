---
name: optimize-button-patterns
description: >-
  Iteratively improves the heuristic button regex patterns in lib/heuristic-patterns.ts
  against data/labelled-button-texts.csv. Use when labels are updated, benchmark
  coverage is low, or the user asks to optimize/fix button pattern regexes.
  Targets zero false positives and ≥90% weighted coverage per label (settings,
  accept, reject, acknowledge).
disable-model-invocation: true
---

# Optimize Button Patterns

Improve the button patterns in `lib/heuristic-patterns.ts` so `classifyButtonTextRegex` matches the labelled dataset in `data/labelled-button-texts.csv`.

These patterns decide what autoconsent clicks in users' browsers, and tracker-radar-collector imports them for crawl post-processing. A pattern that moves a button between labels changes which heuristic tier handles its popup (see `classifyPopup` in `lib/heuristic-classify.ts`): an `acknowledge` button is clicked in tier1, an `accept` button only in tier2. Keep that in mind when a fix moves text between `ACCEPT_PATTERNS` and `ACKNOWLEDGE_PATTERNS`.

## Prerequisites

1. Confirm `data/labelled-button-texts.csv` has up-to-date labels. New rows come from tracker-radar-collector: `collect-popup-button-texts.js` adds unlabelled rows and `label-button-texts.js` labels them with an LLM (see that repo's `post-processing/README.md`). If the CSV has unlabelled rows, suggest running `label-button-texts.js` first.
2. For label semantics, read the `classifyButtonTextLLM` prompt in tracker-radar-collector's `post-processing/generate-autoconsent-rules/detection.js`. That prompt is the source of truth for labels; do not duplicate it here.
3. If a label looks wrong, fix the row in the CSV rather than bending patterns to fit it (see AGENTS.md).

## Success criteria

Stop when all three are met:

1. **Zero false positives** (occurrence-weighted total across labels)
2. **Per-label weighted coverage > 90%** for each of `settings`, `accept`, `reject`, and `acknowledge` (`other` is excluded from optimization)
3. **Pattern consolidation**: merge literal clusters into regexes where safe; dedupe exact duplicates

`npm run test:lib` enforces criteria 1 and 2 (`tests-wtr/heuristics/button-classification-accuracy.test.ts`), so it must pass before you finish.

## Benchmark

Run after every batch of edits:

```bash
npm run benchmark-buttons -- --top 25
```

The output has the totals (weighted false positives, weighted misses) and, per label, the row and occurrence-weighted correct rate, the false-positive count, and the top false positives and misses sorted by occurrences, formatted as `[label -> predicted] "text" (xN)`. A label passes when its weighted rate is above 90%. Check all four labels every iteration. Use `--top <n>` for longer example lists.

Count patterns before and after with:

```bash
npx ts-node -e "import * as p from './lib/heuristic-patterns'; for (const [k, v] of Object.entries(p)) console.log(k, v.length)"
```

## Run loop

Max ~10 iterations. Each iteration:

### 1. Measure

Run the benchmark. Record each label's weighted rate (and which labels are below 90%), weighted false positives, and pattern counts.

### 2. Fix false positives first

For each false positive (predicted as a label, but the ground truth is a different label):

- Find the matching pattern in `lib/heuristic-patterns.ts` (grep the cleaned text; remember the classification order: reject → settings → accept → acknowledge).
- Fix by removing the pattern, moving it to the correct list, narrowing it with `^...$` anchors, or adding a `BUTTON_NEVER_MATCH_PATTERNS` guard.
- Re-run the benchmark. **Do not add new coverage patterns while false positives remain.**

### 3. Improve coverage

While any label is below 90%, prioritize the labels furthest below (by the gap in weighted correct count: weighted support minus weighted correct).

Each iteration, take the top 15–25 misses by occurrences from **under-target labels only**.

For each miss:

- Add the smallest pattern that fixes it in the correct list (`REJECT_PATTERNS`, `SETTINGS_PATTERNS`, `ACCEPT_PATTERNS` or `ACKNOWLEDGE_PATTERNS`, keeping the per-language sub-lists for reject).
- Prefer extending an existing regex over adding a literal string.
- Run the collision check (below) before keeping it.
- Re-run the benchmark after each batch. False positives must not increase, and no label's rate may drop below its previous value.

### 4. Merge patterns

Once false positives are 0 and **every** label is above 90%:

- Remove exact duplicate literals within the same list.
- Replace clusters of 3+ similar literals with one anchored alternation regex, e.g. `/^(alles accepteren|accepteer alles|alles akzeptieren)$/i`.
- Re-run the benchmark to confirm there is no regression.

### 5. Verify and report

Run `npm run test:lib` and `npm run lint`, then report using the output template at the end of this file.

## Pattern authoring rules

- Edit the button lists in `lib/heuristic-patterns.ts` only. Do not change `DETECT_PATTERNS`/`DETECT_NEVER_MATCH_PATTERNS` or the classification code in `lib/heuristic-classify.ts` as part of this loop.
- Classification order: **reject → settings → accept → acknowledge → other** (see `classifyButtonTextRegex`). Patterns are matched against `cleanButtonText` output (lowercased, punctuation and emoji stripped, whitespace collapsed).
- Essential/necessary-only phrases → **reject**, even when "accept" appears.
- `allow` / `permit` + selection → **accept**; `customize` / `manage` / show details → **settings**.
- Neutral dismiss (OK, close, got it) → **acknowledge**. Accept-and-close (e.g. "akzeptieren schließen") → **accept**.
- Use anchored regexes (`^...$`) for short action verbs to avoid substring false positives.
- Preserve the language section comments (`// German`, `// Dutch`, etc.) and existing explanatory comments.

## Known pitfalls

Patterns misplaced across lists cause false positives:

| Text | Correct label | Common mistake |
|------|---------------|----------------|
| `selectie toestaan` | accept | Listed in the Dutch reject patterns |
| `widerrufen` | other (revoke link, not a reject button) | Added to the German reject patterns |
| bare `essential` / `required` | other (category labels) | Matched by the essential-only reject pattern |

When fixing false positives, search `lib/heuristic-patterns.ts` for the literal or a regex that matches the cleaned text, then move, remove or narrow it.

## Collision check

Before adding pattern `P` for label `L`:

1. Apply `cleanButtonText` when matching (same as runtime).
2. Scan the labelled CSV: if `P` would match a row where `label !== L`, that is a collision. Include rows labelled `other`: the benchmark does not count those as false positives, but autoconsent would still click them.
3. If a high-occurrence collision exists, narrow `P` or skip it.
4. String patterns match the exact cleaned text; regex patterns use `.test(cleanedText)`.

## Stop conditions

- All success criteria met (including every label above 90%), or
- No improvement in any under-target label's weighted rate for 2 consecutive iterations (report blockers per label), or
- User iteration budget reached

## Output template

End with:

```markdown
## Button pattern optimization results
- False positives: N → 0
- Per-label weighted coverage (target >90% each):
  - settings: X% → Y%
  - accept: X% → Y%
  - reject: X% → Y%
  - acknowledge: X% → Y%
- Pattern count: A → B
- Key changes:
  - ...
- Remaining top misses (if any, by label below target):
  - [label -> predicted] "text" (xN)
```
