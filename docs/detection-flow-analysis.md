# Detection Flow Analysis & Refactoring Proposal

## Table of Contents

1. [Current Detection Flow](#current-detection-flow)
2. [Flowchart](#flowchart)
3. [The Blocking Problem](#the-blocking-problem)
4. [Affected Flows — Definitive Analysis](#affected-flows--definitive-analysis)
5. [Refactoring Proposal](#refactoring-proposal)

---

## Current Detection Flow

The detection pipeline lives in `lib/web.ts` (class `AutoConsent`) and proceeds through
two main phases: **CMP detection** (`findCmp`) and **popup detection** (`detectPopups`).
These phases are orchestrated by the `_start()` method.

### Rule Types

Four categories of rules participate, in descending priority:

| Priority | Type | Source | Class | Notes |
|----------|------|--------|-------|-------|
| 1 | **Site-specific** (declarative or code) | `rules/autoconsent/`, `rules/generated/`, `lib/cmps/` | `AutoConsentCMP` or subclass of `AutoConsentCMPBase` | Has `urlPattern` in `runContext` AND matches current URL |
| 2 | **Generic** (declarative or code) | Same sources | Same classes | No `urlPattern`, or `urlPattern` that doesn't match |
| 3 | **Heuristic** | Instantiated at runtime | `AutoConsentHeuristicCMP` | Only runs in top frame when `enableHeuristicAction` is on |
| 4 | **Cosmetic** | Any source, `cosmetic: true` | Same classes, `isCosmetic === true` | Tried only after non-cosmetic rules fail popup detection |

Additionally, **ConsentOMatic** rules (`ConsentOMaticCMP`) are loaded from the
`consentomatic` bundle and participate as generic rules (no urlPattern, `checkFrameContext`
always returns true).

### Phase 1: `findCmp(retries)` — CMP Detection

```
_start()
  └─▶ findCmp(detectRetries)     // default 20 retries
        │
        ├─ Categorize rules:
        │   • siteSpecificRules:  has urlPattern AND matches current URL
        │   • genericRules:       no urlPattern (or doesn't match)
        │   • heuristicRules:     AutoConsentHeuristicCMP (top frame only, if enabled)
        │
        ├─ For each stage [site-specific → generic → heuristic]:
        │   ├─ Run ALL rules' detectCmp() in PARALLEL (Promise.all)
        │   ├─ Collect successes into foundCMPs[]
        │   └─ If foundCMPs is non-empty → BREAK (skip remaining stages)  ← KEY
        │
        ├─ If foundCMPs is empty AND retries > 0:
        │   ├─ Wait 500ms + DOM mutation
        │   └─ Recurse: findCmp(retries - 1)
        │
        └─ Return foundCMPs[]
```

**Key behaviors:**
- `detectCmp()` is expected to be fast (no waiting steps).
- Once ANY rule matches in a stage, lower-priority stages are never tried.
- Retries only occur when NO CMP is found across all stages.

### Phase 2: `_start()` — Popup Detection & Handling

```
_start() continued:
  │
  ├─ foundCmps = findCmp(retries)
  │
  ├─ If foundCmps is empty → undoPrehide, filterListFallback, return
  │
  ├─ Split foundCmps into:
  │   • staticCmps  (isCosmetic === false)
  │   • cosmeticCmps (isCosmetic === true)
  │
  ├─ foundPopups = detectPopups(staticCmps, handlePopup)
  │   │
  │   └─ If foundPopups is empty:
  │       foundPopups = detectPopups(cosmeticCmps, handlePopup)  ← cosmetic fallback
  │
  ├─ If foundPopups is empty → undoPrehide, return false
  │
  └─ Return result from handlePopup()
```

### Phase 2a: `detectPopups(cmps, onFirstPopupAppears)`

```
detectPopups(cmps, callback):
  │
  ├─ For EACH cmp → spawn detectPopup(cmp) task
  │   └─ detectPopup(cmp):
  │       └─ waitForPopup(cmp, retries=10, interval=500ms)
  │           ├─ Call cmp.detectPopup()
  │           ├─ If false AND retries > 0: wait 500ms (+mutation) → recurse
  │           └─ Returns true/false after up to ~5 seconds
  │
  ├─ Promise.any(tasks):
  │   └─ First popup found → callback(cmp) → handlePopup(cmp)
  │
  ├─ Promise.allSettled(tasks):
  │   └─ Collect ALL successful popup detections
  │
  └─ Return popups[]
```

### Phase 3: `handlePopup(cmp)` → Action

```
handlePopup(cmp):
  ├─ Update lifecycle → 'openPopupDetected'
  ├─ Re-apply prehide if timed out
  ├─ Cancel cosmetic filters if active
  ├─ Set foundCmp = cmp
  │
  └─ Based on config.autoAction:
      ├─ 'optOut' → doOptOut() → cmp.optOut()
      ├─ 'optIn'  → doOptIn()  → cmp.optIn()
      └─ null     → wait for user signal
```

---

## Flowchart

```
┌──────────────────────────────────────────────────────────────────────┐
│                        AutoConsent._start()                          │
└──────────────────────────┬───────────────────────────────────────────┘
                           │
                           ▼
              ┌────────────────────────┐
              │   findCmp(retries=20)  │
              └────────────┬───────────┘
                           │
              ┌────────────▼───────────────────────────────────────┐
              │  Categorize rules into priority stages:            │
              │  ┌──────────────┐ ┌─────────┐ ┌──────────────┐    │
              │  │ 1. Site-     │ │ 2.      │ │ 3. Heuristic │    │
              │  │   specific   │ │ Generic │ │ (if enabled) │    │
              │  └──────────────┘ └─────────┘ └──────────────┘    │
              └────────────┬──────────────────────────────────────┘
                           │
              ┌────────────▼──────────────────┐
              │  For each stage (in order):   │◄──────────────────┐
              │  Run all detectCmp() parallel  │                   │
              └────────────┬──────────────────┘                   │
                           │                                      │
               ┌───────────▼───────────┐                          │
               │ Any CMP detected?     │──── Yes ──► BREAK        │
               └───────────┬───────────┘        (skip remaining   │
                           │ No                  stages)           │
                           │                         │             │
                  ┌────────▼────────┐                │             │
                  │ More stages?    │── Yes ─────────┘             │
                  └────────┬────────┘                              │
                           │ No                                    │
                  ┌────────▼────────┐                              │
                  │ retries > 0?    │── Yes ── wait 500ms ─────────┘
                  └────────┬────────┘          + DOM mutation
                           │ No
                           ▼
                   Return foundCMPs[]
                           │
         ┌─────────────────▼─────────────────┐
         │         Back in _start()          │
         └─────────────────┬─────────────────┘
                           │
              ┌────────────▼────────────┐
              │ foundCmps empty?        │── Yes ──► undoPrehide
              └────────────┬────────────┘           filterListFallback
                           │ No                     return false
                           ▼
              ┌──────────────────────────┐
              │ Split: static / cosmetic │
              └────────────┬─────────────┘
                           │
              ┌────────────▼──────────────────────────────────────┐
              │ detectPopups(staticCmps)                          │
              │ ┌──────────────────────────────────────────┐      │
              │ │ For each CMP:                            │      │
              │ │   waitForPopup(cmp, retries=10, 500ms)   │      │
              │ │   ├─ cmp.detectPopup()                   │      │
              │ │   └─ retry up to 10x if false            │      │
              │ │                                          │      │
              │ │ Promise.any → first popup → handlePopup  │      │
              │ │ Promise.allSettled → collect all popups   │      │
              │ └──────────────────────────────────────────┘      │
              └────────────┬──────────────────────────────────────┘
                           │
              ┌────────────▼──────────────┐
              │ Static popups found?      │── Yes ──► return result
              └────────────┬──────────────┘
                           │ No
                           ▼
              ┌──────────────────────────────────────────────────┐
              │ detectPopups(cosmeticCmps)    ← cosmetic fallback│
              └────────────┬─────────────────────────────────────┘
                           │
              ┌────────────▼──────────────┐
              │ Cosmetic popups found?    │── Yes ──► return result
              └────────────┬──────────────┘
                           │ No
                           ▼
                    undoPrehide
                    return false
```

---

## The Blocking Problem

### Hypothesis

> A rule can stop the flow if the CMP is detected (`detectCmp` returns true), but
> `detectPopup` returns false, even if another rule would apply on the next iteration.

### Verdict: CONFIRMED — with specific scope

The hypothesis is correct, but only for **cross-stage** and **cross-retry** scenarios.
Within the same priority stage, the problem does NOT occur.

### Why it happens

The issue stems from two early-exit behaviors in `findCmp()`:

**1. Stage-level early exit** (`lib/web.ts` line 329):
```javascript
if (foundCMPs.length > 0) {
    break; // skip remaining stages
}
```

When a rule in stage N has `detectCmp()` → true, all rules in stages N+1, N+2, etc.
are **never evaluated**. If that rule's popup is not visible, no lower-priority rule
gets a chance — even one whose popup IS visible.

**2. Retry-level early exit** (`lib/web.ts` line 336):
```javascript
if (foundCMPs.length === 0 && retries > 0) {
    // retry only if nothing was found
    return this.findCmp(retries - 1);
}
```

Retries only happen when **zero** CMPs are detected. Once any CMP is found (even one
whose popup won't appear), retries stop. A rule that would have become detectable on a
later retry never gets its chance.

### Why the within-stage case is fine

Within the same priority stage, all rules run `detectCmp()` in parallel. If rules A and
B are both generic, both are detected. Then `detectPopups()` runs both in parallel — if
A's popup doesn't show but B's does, B is still found via `Promise.any`.

---

## Affected Flows — Definitive Analysis

### Flow 1: Site-specific blocks generic (AFFECTED)

**Scenario:** A site has a stale site-specific rule (CMP element exists in DOM but popup
is never shown). A valid generic rule also applies.

- `findCmp()` stage 1: site-specific rule's `detectCmp()` → true → **BREAK**
- Generic rules are never checked
- `detectPopups([siteSpecificRule])` → waitForPopup retries 10 times → fails
- `_start()` falls through to cosmetic fallback → also fails
- **Result: popup goes unhandled**

**Likelihood:** Moderate. Site-specific rules with `urlPattern` that match but whose
popup doesn't appear (e.g., changed CMP provider, A/B testing, regional differences).

### Flow 2: Site-specific blocks heuristic (AFFECTED)

Same as Flow 1, but with the heuristic rule as the blocked alternative.

- `findCmp()` stage 1: site-specific rule matches → BREAK
- Heuristic rule (stage 3) never instantiated/checked
- **Result: popup that heuristic could handle goes unhandled**

**Likelihood:** Low-moderate. Only when `enableHeuristicAction` is on and the
heuristic would have caught the popup.

### Flow 3: Generic blocks heuristic (AFFECTED)

**Scenario:** A generic CMP rule detects elements in the DOM (e.g., leftover Onetrust
SDK element) but the popup doesn't appear. The heuristic would have caught a custom popup.

- `findCmp()` stage 2: generic rule's `detectCmp()` → true → BREAK
- Heuristic (stage 3) never checked
- **Result: popup goes unhandled**

**Likelihood:** Low-moderate. Generic CMP detection selectors are usually quite specific,
but leftover DOM elements or lazy-loaded CMPs can cause this.

### Flow 4: findCmp retry starvation (AFFECTED)

**Scenario:** On retry 3, a generic rule detects its CMP element. The popup won't be
visible for another 3 seconds. Meanwhile, on retry 8 a different CMP would appear.

- `findCmp(retries=17)`: generic rule A detects CMP → retries stop
- `detectPopups([ruleA])` → waitForPopup eventually times out
- Rule B that would have appeared later is never detected
- **Result: popup goes unhandled**

**Likelihood:** Low. Requires two competing CMPs with different load timing, plus the
first one's popup never appearing.

### Flow 5: Non-cosmetic blocks cosmetic (PARTIALLY HANDLED)

**Scenario:** A non-cosmetic rule detects CMP but popup doesn't show. A cosmetic rule
would match.

- Both are found by `findCmp()` (assuming same stage) — split into static/cosmetic
- `detectPopups(staticCmps)` → fails (popup not visible)
- `detectPopups(cosmeticCmps)` → cosmetic fallback kicks in → **succeeds**
- **Result: works correctly IF both are in the same stage**

BUT if the non-cosmetic rule is site-specific and the cosmetic rule is generic:
- `findCmp()` breaks at stage 1 → cosmetic generic rule is never detected
- **Result: popup goes unhandled**

### Flow 6: Within-stage competition (NOT AFFECTED)

**Scenario:** Two generic rules: A detects CMP but not popup, B detects both.

- `findCmp()` stage 2: both A and B detect CMP (parallel)
- `detectPopups([A, B])` → B's popup found → handled
- **Result: works correctly**

### Summary Table

| # | Blocked rule type | Blocking rule type | Affected? | Current mitigation |
|---|---|---|---|---|
| 1 | Generic | Site-specific (no popup) | **YES** | None |
| 2 | Heuristic | Site-specific (no popup) | **YES** | None |
| 3 | Heuristic | Generic (no popup) | **YES** | None |
| 4 | Later-appearing CMP | Earlier-detected CMP | **YES** | None |
| 5 | Cosmetic | Non-cosmetic (same stage) | No | Cosmetic fallback in `_start()` |
| 5b | Cosmetic (generic) | Non-cosmetic (site-specific) | **YES** | None |
| 6 | Same-stage rule | Same-stage rule (no popup) | No | Parallel detection handles it |

---

## Refactoring Proposal

### Goal

Ensure that a CMP that passes `detectCmp` but fails `detectPopup` does not prevent
other rules from being tried.

### Approach: Stage Fallthrough on Popup Failure

Rather than merging `detectCmp` and `detectPopup` into a single phase (which would make
the detection cascade much slower, since `waitForPopup` involves up to 5 seconds of
retries per CMP), the proposed change keeps the two-phase structure but adds
**fallthrough logic**: if all detected CMPs in a stage fail popup detection, continue to
the next stage.

This is a more surgical change that preserves the performance characteristics of the
current design while fixing the blocking problem.

### Current Flow (simplified)

```
findCmp():
  for stage in [site-specific, generic, heuristic]:
    detected = runDetectCmp(stage.rules)
    if detected.length > 0:
      return detected          ← BLOCKS lower stages

_start():
  cmps = findCmp()
  static, cosmetic = split(cmps)
  popups = detectPopups(static)
  if popups.length == 0:
    popups = detectPopups(cosmetic)
```

### Proposed Flow

```
_start():
  for stage in [site-specific, generic, heuristic]:
    detected = runDetectCmp(stage.rules)
    if detected.length == 0:
      continue                 ← no CMP in this stage, try next

    static, cosmetic = split(detected)
    popups = detectPopups(static)
    if popups.length == 0:
      popups = detectPopups(cosmetic)
    if popups.length > 0:
      handlePopup(first)
      return                   ← success, stop
    else:
      continue                 ← CMP detected but no popup — try next stage
```

### Detailed Design

#### Option A: Move stage loop into `_start()` (Recommended)

Merge the `findCmp()` stage loop with the popup detection logic in `_start()`. This
eliminates the separation between the two phases for cross-stage purposes while keeping
them separate within a single stage (which is the correct behavior).

```typescript
async _start() {
  const logsConfig = this.config.logs;
  logsConfig.lifecycle && console.log(`Detecting CMPs on ${window.location.href}`);
  this.updateState({ lifecycle: 'started' });

  const isTop = isTopFrame();
  const siteSpecificRules: AutoCMP[] = [];
  const genericRules: AutoCMP[] = [];
  this.rules.forEach((cmp) => {
    if (cmp.checkFrameContext(isTop)) {
      if (cmp.hasMatchingUrlPattern()) {
        siteSpecificRules.push(cmp);
      } else if (!cmp.runContext.urlPattern) {
        genericRules.push(cmp);
      }
    }
  });
  const heuristicRules: AutoCMP[] =
    isTop && this.config.enableHeuristicAction
      ? [new AutoConsentHeuristicCMP(this)]
      : [];

  const stages: [string, AutoCMP[]][] = [
    ['site-specific', siteSpecificRules],
    ['generic', genericRules],
    ['heuristic', heuristicRules],
  ];

  let result = false;

  for (let attempt = 0; attempt <= this.config.detectRetries; attempt++) {
    this.updateState({ findCmpAttempts: this.state.findCmpAttempts + 1 });

    for (const [stageName, ruleGroup] of stages) {
      if (ruleGroup.length === 0) continue;

      // Phase 1: detectCmp (fast, no waits)
      const foundCMPs = await this.runDetectCmpForGroup(ruleGroup);
      if (foundCMPs.length === 0) continue;

      this.updateState({
        lifecycle: 'cmpDetected',
        detectedCmps: foundCMPs.map(c => c.name),
      });

      // Phase 2: detectPopup (with retries)
      const staticCmps = foundCMPs.filter(c => !c.isCosmetic);
      const cosmeticCmps = foundCMPs.filter(c => c.isCosmetic);

      let foundPopups = await this.detectPopups(staticCmps, async (cmp) => {
        result = await this.handlePopup(cmp);
      });
      if (foundPopups.length === 0) {
        foundPopups = await this.detectPopups(cosmeticCmps, async (cmp) => {
          result = await this.handlePopup(cmp);
        });
      }

      if (foundPopups.length > 0) {
        // Success — popup found and handled
        return result;
      }

      // CMP detected but no popup — FALL THROUGH to next stage
      logsConfig.lifecycle &&
        console.log(`${stageName}: CMP detected but no popup, trying next stage`);
    }

    // No stage produced a popup on this attempt — retry if allowed
    if (attempt < this.config.detectRetries) {
      await this.domActions.wait(500);
      // optionally wait for DOM mutation too
    }
  }

  // Nothing found after all attempts
  logsConfig.lifecycle && console.log('no CMP/popup found', location.href);
  if (this.shouldPrehide) {
    this.undoPrehide();
  }
  return this.filterListFallback();
}
```

#### Option B: Keep `findCmp()` but add fallthrough (Alternative)

Modify `findCmp()` to return results **per stage**, then let `_start()` try each stage's
results for popup detection before moving to the next.

```typescript
async findCmpByStage(retries: number): Promise<[string, AutoCMP[]][]> {
  // Returns: array of [stageName, detectedCMPs] for stages that had matches
  // Caller iterates and checks popup detection per stage
}
```

This is less clean because it splits the control flow across two methods, but it
minimizes the diff from the current implementation.

### Behavioral Changes

| Scenario | Before | After |
|----------|--------|-------|
| Site-specific CMP detected, no popup; generic CMP has popup | **Blocked** — generic never tried | **Fixed** — falls through to generic |
| Generic CMP detected, no popup; heuristic would catch it | **Blocked** — heuristic never tried | **Fixed** — falls through to heuristic |
| Site-specific CMP detected with popup | Works (stops at stage 1) | Same — stops at stage 1 |
| Two generic CMPs, one has popup | Works (parallel within stage) | Same — parallel within stage |
| Retry starvation (early detect, late popup) | **Blocked** — retries stop | **Fixed** — retries continue per-stage |

### Performance Implications

**Worst case:** A site-specific rule detects CMP but popup never shows. Currently the
engine spends ~5s on `waitForPopup` before giving up entirely. With the proposed change,
it would then proceed to generic rules (another ~5s if a CMP is detected there too). In
the absolute worst case (CMP detected in every stage, popup in none), detection time
increases from ~5s to ~15s.

**Mitigation:** The `waitForPopup` timeout per rule is already capped (10 retries *
500ms = 5s). The extra time is only spent when a CMP **is** detected (DOM elements
exist) but the popup doesn't show — a relatively uncommon scenario. For the common case
(CMP detected + popup visible), there is zero performance impact because the flow stops
at the first successful stage, same as today.

**Optimization opportunity:** When falling through to the next stage, the timeout for
`waitForPopup` could be reduced (e.g., from 10 retries to 5) since we already know the
previous stage's popup didn't appear promptly.

### Migration Risk

- **Low risk for the common case:** When exactly one CMP is present and its popup shows,
  the behavior is identical.
- **Low risk for the fallthrough case:** The new behavior is strictly better — it tries
  more rules instead of giving up.
- **Edge case to watch:** If a page has two real CMPs (e.g., one in an iframe, one in
  main frame), the stage ordering now matters more. But this is already handled by
  `runContext` frame filtering.

### Files to Modify

| File | Change |
|------|--------|
| `lib/web.ts` | Restructure `_start()` and `findCmp()` to implement stage fallthrough |
| `lib/web.ts` | Update state management (`detectedCmps`, `findCmpAttempts`) for new loop structure |
| (tests) | Add test cases for cross-stage fallthrough scenarios |

### What NOT to change

- `detectPopups()` / `waitForPopup()` — internal retry logic is fine as-is
- `handlePopup()` / `doOptOut()` / `doOptIn()` — action logic is unrelated
- Rule evaluation (`evaluateRuleStep`, `_runRulesSequentially`) — no change needed
- `filterCMPs()` / `parseDeclarativeRules()` — rule loading is unrelated
