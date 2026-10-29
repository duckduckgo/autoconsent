# Heuristic detection

Heuristic detection decides from text alone whether something looks like a cookie consent popup. It runs:

- on popup candidates found in the DOM, by the heuristic rule (`getActionablePopups` in `lib/heuristics.ts`);
- on a whole page's `innerText`, for reporting only (`detectHeuristics` in `lib/web.ts`);
- on crawl data, by tools such as tracker-radar-collector, through the `./heuristics` package entry.

## Modules

| File | Contents |
|---|---|
| `lib/heuristic-patterns.ts` | `DETECT_PATTERNS`, the regexes that indicate a consent notice, and the button patterns |
| `lib/heuristic-negatives.ts` | `DETECT_CONTEXT_NEGATIVES`, and the vocabulary they test: consent choices, age wording, leave buttons, legal clauses |
| `lib/heuristic-detect.ts` | The matching engine: `checkHeuristicPatterns`, `hasHeuristicPatterns`, `excludedBy` |
| `lib/heuristic-prefilter.ts`, `lib/heuristic-literals.ts` | The required-literal prefilter (see [heuristic-prefilter.md](heuristic-prefilter.md)) |
| `lib/heuristic-classify.ts` | Button and popup classification, and the `./heuristics` entry, which re-exports the modules above |

## Inputs

Every call says what the text is:

- `'popup'`: one popup element's text.
- `'page'`: a whole document's text, where cookie wording also appears in footers, policies and articles.

A detect pattern (`{ pattern, input }`) or a context negative (`input`) can be limited to one input. Without an input, only unscoped ones apply.

## Using the lists

The `./heuristics` entry exports the lists. Their entries aren't all regexes:

- **`DETECT_PATTERNS`:** each entry is a `RegExp` or `{ pattern, input }`. Use `patternOf(p)` to get the regex. Passing an object to `String.prototype.match` would turn it into the regex `/[object Object]/`.
- **`DETECT_CONTEXT_NEGATIVES`:** each entry is a `ContextNegative`. Its `unless` may be a predicate rather than a regex.

To match text, call `checkHeuristicPatterns` or `hasHeuristicPatterns` rather than running the regexes yourself: they apply scopes, the prefilter and negatives. Custom lists go in the `patterns` and `negatives` options. The second argument is the input, and the functions throw if they get a list there, as older callers passed one.

## Matching a text

`checkHeuristicPatterns(text, input, { patterns?, negatives? })` returns `{ patterns, snippets, suppressed }`. `hasHeuristicPatterns` gives the same answer as a boolean, and stops at the first pattern that counts.

1. The text is cut to 100,000 characters.
2. Patterns and negatives scoped to the other input are skipped.
3. The prefilter skips patterns whose required literals are all missing from the text.
4. Each remaining pattern is run. With no match, it doesn't count.
5. For each match, the negatives that apply to that pattern (all of them, or the ones whose `appliesTo` includes it) are tested on the match's context.
6. The pattern **counts** if at least one match has no negative hit. Otherwise it is reported in `suppressed`, with the negatives that hit.

The text matches if at least one pattern counts.

## Context negatives

A `ContextNegative` has these fields:

| Field | Meaning |
|---|---|
| `name` | Reported in `suppressed` |
| `pattern` | Wording that shows the match isn't a consent notice. Without it, the negative hits whenever `unless` doesn't match. |
| `unless` | A regex or a predicate on the context. When it matches, the negative doesn't hit. |
| `window` | Context: this many characters either side of the match. The default is 150. |
| `lines` | Context: the match's line plus `n` lines either side, or `[before, after]` lines |
| `whole` | Context: the whole text. A hit drops every match, so the text is **excluded**. |
| `input` | Applies to `'popup'` or `'page'` text only |
| `appliesTo` | Applies to these detect patterns only |

Whole-text negatives with `input: 'popup'` are the popup exclusions:

- **`age-gate-popup`:** age wording, unless a cookie choice or the notice's own control is present and no leave or "I am under 18" button is. A bare "Accept all" doesn't count as a cookie choice, since it can be the gate's own confirmation.
- **`legal-agreement`:** license and terms clauses that cookie notices don't contain.

`excludedBy(text, input)` lists the whole-text negatives that hit a text, whether or not any detect pattern matches it. It's useful for tests and for explaining a result.

Page text has its own age-gate negative (`age-gate`), tested on a few lines around each match. A page can show an age statement and a real cookie banner at once.

## Adding a pattern or negative

- **A detect pattern:** add it to `DETECT_PATTERNS`, run `npm run build-heuristic-literals`, and add a test with an example text and a near-miss that must not match.
- **A negative:** prefer narrow `appliesTo` and a short context. Add a test that drops the false positive and keeps a real notice with the same wording.
- **Compatibility:** don't use RegExp lookbehind in `lib/`, because some supported engines lack it (ESLint rejects it). Without the `u` flag, `\b` doesn't treat accented letters as word characters, so don't put `\b` next to one.
