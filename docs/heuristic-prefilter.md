# Heuristic detection prefilter

`checkHeuristicPatterns` and `hasHeuristicPatterns` (`lib/heuristic-detect.ts`) match a text against the detect patterns in `DETECT_PATTERNS` (`lib/heuristic-patterns.ts`). There are a few hundred of them, and a whole page's text can be long, so running every regex on every page costs time. Most patterns cannot match on a given page, and the prefilter skips those cheaply without changing any result. See [heuristic-detection.md](heuristic-detection.md) for the whole matching flow.

## How it works

Each detect pattern gets a set of **required literals**: lowercase strings such that *every* match of the pattern contains at least one of them. Some examples:

| Pattern | Required literals |
|---|---|
| `/accept all/gi` | `accept all` |
| `/\b(?:our\|unseren) \d{2,4} (?:partners\|partnern)\b/gi` | `partners`, `partnern` |
| `/\bcookies? zum einsatz\b\|\beinsatz von cookies\b/gi` | ` zum einsatz`, `einsatz von cookies` |
| `/by continuing\|\bab\b/gi` | none: `ab` is too short to be useful |

Detecting on a text works like this:

1. The text is lowercased, and a single regex finds which literals it contains, in one pass (the **literal index**, below).
2. A pattern that has literals is skipped when none of them are in that set. If a pattern had matched, the text would contain one of its literals, so skipping it can't change the result.
3. A pattern with no literals is always run.

## Build time and run time

```text
DETECT_PATTERNS ──(npm run build-heuristic-literals)──> lib/heuristic-literals.ts ──> checkHeuristicPatterns
                    scripts/required-literals.ts            DETECT_PATTERN_LITERALS       lib/heuristic-prefilter.ts
                    (parses each regex source)                                            (literal index at run time)
```

- **`scripts/required-literals.ts`** (build time only) works out a pattern's literals from its regex source. It is not bundled into the library, so pages never parse pattern sources.
- **`scripts/build-heuristic-literals.ts`** runs it over `DETECT_PATTERNS` and writes **`lib/heuristic-literals.ts`**. Its `DETECT_PATTERN_LITERALS` is an array in `DETECT_PATTERNS` order: entry `i` holds pattern `i`'s literals, so the bundle doesn't repeat the pattern sources as keys.
- **`lib/heuristic-prefilter.ts`** (run time) builds the literal index over all the literals, once per page, and reports which literals a text contains.
- **`lib/heuristic-detect.ts`** pairs each built-in regex with its table entry.

A **custom pattern list**, passed to `checkHeuristicPatterns` or `hasHeuristicPatterns` as the `patterns` option, uses the same table. Built-in regexes in it (the same objects, such as those imported from `heuristic-patterns.ts`) keep their literals, and other patterns get none, so they are always run. Results are therefore the same for any list. Only custom patterns miss the speed-up.

## Changing detect patterns

After adding, changing or removing a pattern in `DETECT_PATTERNS`, regenerate the table and commit it:

```bash
npm run build-heuristic-literals
```

A unit test in `tests-wtr/heuristics/heuristics-utils.test.ts` fails while the table is stale. A table whose length differs from `DETECT_PATTERNS` is ignored, so an added or removed pattern can't shift literals onto the wrong patterns: no pattern is skipped until the table is regenerated. An in-place edit of a pattern keeps the length, so it relies on that test.

## How the literals are worked out

The literals must be **sound**: a literal that some match lacks would make the prefilter skip a pattern that matches. `requiredLiterals` therefore takes only what the regex source guarantees, and returns none when it can't tell:

- **Top-level alternation (`a|b`):** each alternative must have literals. The result is their union. If any alternative has none, the pattern gets none.
- **Literal runs:** consecutive literal characters form a candidate. Escaped punctuation such as `\/` or `\.` counts as a literal.
- **What ends a run:** a character class, `.`, `^`, `$`, a class escape (`\s`, `\w`, `\d`, `\b`…) or a group.
- **Quantifiers:** a character under `?`, `*` or `{0,…}` is left out. A quantified character ends the run after it.
- **Groups:** a required, non-lookaround group whose alternatives are all plain literals of 3+ characters, such as `(?:partners|partnern)`, is a candidate of its own. Other groups add nothing.
- **Choosing one candidate:** among the candidates whose literals are all at least 3 characters (ignoring spaces), it takes the one whose shortest literal is longest. It needs that shortest literal to be at least 4 characters, since short literals are common enough to make the check cost more than it saves.

Literals are lowercased, and the text is lowercased before the check, so the `i` flag is handled. A case-sensitive pattern is checked a little more loosely than it matches, which is still sound.

## The literal index

The literal index is one zero-width lookahead over all literals, longest first: `(?=(literal1|literal2|…))`, run with `matchAll`. At each position it reports the longest literal starting there. Every shorter literal that starts at the same position is a prefix of it, so the index also marks those prefixes as present. Which literals imply which is worked out only for the literals a page actually contains.
