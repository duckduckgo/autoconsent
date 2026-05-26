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
other rules from being tried — while respecting priority so that a fast lower-priority
rule (especially heuristic) does not pre-empt a higher-priority rule that needs more
time.

### The speed asymmetry problem

Rule types have dramatically different detection speeds:

| Rule type | `detectCmp()` speed | `detectPopup()` speed | Total |
|-----------|--------------------|-----------------------|-------|
| **Site-specific / Generic** (declarative) | Instant (DOM check) | `waitForPopup`: up to 10 retries × 500ms = **~5s** | ~5s worst case |
| **Heuristic** | Instant (synchronous DOM walk + text matching via `getActionablePopups()`) | Instant (`this.popups.length > 0`, data already computed in `detectCmp`) | **< 50ms** |

The heuristic rule's `detectCmp()` does a full synchronous DOM scan — walking all
fixed/sticky/dialog elements, checking text against consent patterns, and classifying
reject buttons. Its `detectPopup()` then simply checks whether `this.popups` is
non-empty. Both phases complete in a single synchronous pass.

This means: in any concurrent design, the heuristic will almost always win the race
against declarative rules whose popup is still loading. A naive fallthrough that tries
stages sequentially but quickly would let the heuristic pre-empt a higher-priority rule
that just needs a few hundred more milliseconds.

### Approach: Concurrent Detection with Priority Gates

The proposed design runs all stages' popup detection **concurrently** for maximum speed,
but resolves results through a **priority-gated drain**: a higher-priority stage must
fully settle (or a minimum grace period must elapse) before a lower-priority result is
accepted.

This gives us:
- **No blocking**: a CMP-detected-but-no-popup stage doesn't block lower stages
- **Priority respect**: heuristic doesn't pre-empt a generic rule that's still loading
- **Performance**: all popup detection runs in parallel, total time ≈ max(stage times)
  rather than sum(stage times)

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
  # Phase 1: detectCmp for ALL stages (fast, parallel)
  stageResults = []
  for stage in [site-specific, generic, heuristic]:
    detected = runDetectCmp(stage.rules)    ← instant, no waits
    stageResults.push({ stage, detected })

  # Phase 2: start popup detection for ALL detected CMPs concurrently
  for each stageResult with detected CMPs:
    stageResult.popupTask = detectPopups(stageResult.detected)   ← started NOW

  # Phase 3: resolve in priority order with grace periods
  for each stageResult (highest priority first):
    if stageResult has no detected CMPs:
      continue                               ← skip instantly, no delay

    popups = await stageResult.popupTask     ← may already be resolved
    if popups.length > 0:
      handlePopup(first)
      cancel remaining lower-priority tasks
      return                                 ← success

    # This stage's CMP was detected but no popup shown.
    # Ensure minimum grace period has elapsed before accepting
    # a lower-priority result:
    await ensureMinElapsed(stageResult.minGracePeriod)
    continue                                 ← fall through to next stage
```

### Detailed Design (Recommended)

#### Core: `_start()` with concurrent popup detection and priority drain

```typescript
type StageResult = {
  name: string;
  detected: AutoCMP[];
  popupTask: Promise<AutoCMP[]> | null;
  handleResult: boolean;
  minGracePeriod: number; // ms before accepting a lower-priority result
};

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

  const stages: StageResult[] = [
    { name: 'site-specific', detected: [], popupTask: null, handleResult: false,
      minGracePeriod: 0 },      // highest priority — no grace period
    { name: 'generic',       detected: [], popupTask: null, handleResult: false,
      minGracePeriod: 0 },      // checked after site-specific settles
    { name: 'heuristic',     detected: [], popupTask: null, handleResult: false,
      minGracePeriod: 2000 },   // must wait for higher-priority stages
  ];
  const ruleGroups = [siteSpecificRules, genericRules, heuristicRules];

  const startTime = Date.now();

  // === Phase 1: detectCmp for all stages (fast, parallel) ===
  await Promise.all(ruleGroups.map(async (rules, i) => {
    stages[i].detected = await this.runDetectCmpForGroup(rules);
  }));

  this.updateState({
    detectedCmps: stages.flatMap(s => s.detected.map(c => c.name)),
  });

  const anyDetected = stages.some(s => s.detected.length > 0);
  if (!anyDetected) {
    // No CMP detected in any stage on this attempt — enter retry loop
    return this.retryOrGiveUp(stages, ruleGroups, startTime);
  }

  this.updateState({ lifecycle: 'cmpDetected' });

  // === Phase 2: start popup detection for ALL detected CMPs concurrently ===
  for (const stage of stages) {
    if (stage.detected.length > 0) {
      stage.popupTask = this.detectPopupsForStage(stage.detected);
    }
  }

  // === Phase 3: resolve in priority order with grace periods ===
  for (const stage of stages) {
    if (!stage.popupTask) continue;

    const popups = await stage.popupTask;
    if (popups.length > 0) {
      // This stage found a popup — handle it
      logsConfig.lifecycle &&
        console.log(`${stage.name}: popup found, handling`);
      return this.handlePopup(popups[0]);
    }

    // Stage had CMP but no popup. Enforce grace period before proceeding.
    const elapsed = Date.now() - startTime;
    const remaining = stage.minGracePeriod - elapsed;
    if (remaining > 0) {
      logsConfig.lifecycle &&
        console.log(`${stage.name}: no popup, waiting ${remaining}ms grace period`);
      await this.domActions.wait(remaining);
    }

    logsConfig.lifecycle &&
      console.log(`${stage.name}: CMP detected but no popup, trying next stage`);
  }

  // All stages exhausted — retry or give up
  return this.retryOrGiveUp(stages, ruleGroups, startTime);
}
```

#### The grace period mechanism

The `minGracePeriod` field on each stage controls how long higher-priority stages are
given to resolve before a lower-priority result is accepted.

The timing works as follows:

```
Timeline example:
  t=0ms     detectCmp() for ALL stages runs (fast, parallel)
            → generic detects OneTrust (element exists)
            → heuristic detects a popup (instant DOM scan)

  t=0ms     Phase 2: start waitForPopup() for both concurrently
            → heuristic popup resolves immediately (< 50ms)
            → generic starts waitForPopup retries

  Phase 3 (priority drain):
  t=0ms     Check site-specific: no CMPs detected → skip (no delay)
  t=0ms     Check generic: popupTask still pending...
  t=800ms   generic popup found! → handle it, done.
            (heuristic result is discarded)

  OR:
  t=0ms     Check site-specific: skip
  t=0ms     Check generic: popupTask pending...
  t=5000ms  generic popup NOT found (all retries exhausted)
            Grace period for generic stage: 0ms (already elapsed)
  t=5000ms  Check heuristic: popup was found at t=50ms, result ready
            → handle heuristic, done.

  OR (the critical race scenario):
  t=0ms     Check site-specific: skip
  t=0ms     Check generic: no CMPs detected → skip (no delay)
            BUT heuristic has minGracePeriod=2000ms
            Elapsed = ~0ms, remaining = 2000ms
  t=0ms     Check... wait, generic had no CMPs so no grace needed.
            Check heuristic: minGracePeriod is on heuristic itself.
```

Actually, the grace period semantics need refinement. The grace period should mean:
"don't accept results from this stage until at least N ms have passed since detection
started" — this gives higher-priority stages time to resolve even when the current
stage resolves instantly.

Revised logic for Phase 3:

```typescript
  // === Phase 3: resolve in priority order with grace periods ===
  for (const stage of stages) {
    if (!stage.popupTask) continue;

    // Enforce this stage's grace period BEFORE checking its result.
    // This gives higher-priority stages (whose popupTasks are being
    // awaited above us) time to resolve.
    const elapsed = Date.now() - startTime;
    const remaining = stage.minGracePeriod - elapsed;
    if (remaining > 0) {
      logsConfig.lifecycle &&
        console.log(`Waiting ${remaining}ms before accepting ${stage.name} results`);
      await this.domActions.wait(remaining);
    }

    const popups = await stage.popupTask;
    if (popups.length > 0) {
      return this.handlePopup(popups[0]);
    }

    logsConfig.lifecycle &&
      console.log(`${stage.name}: CMP detected but no popup, trying next stage`);
  }
```

Wait — this doesn't work either, because we're draining sequentially. By the time we
reach the heuristic stage, we've already awaited all higher-priority stages' results.
The grace period is only useful if we skip the higher-priority await. Let me think about
this differently.

The real design should be:

```
Phase 3 (correct priority drain):

  for each stage (highest priority first):
    if stage has no popupTask → continue (no delay)

    result = await stage.popupTask    ← BLOCKS here until this stage settles
    if result has popups → handle it, done

    # This stage failed. No grace period needed because we already
    # spent real time waiting for this stage's popup retries.
    continue
```

**The natural blocking of `await stage.popupTask` IS the grace period.** When we await
the generic stage's popup detection (which takes up to 5 seconds of retries), the
heuristic's result — which resolved instantly — just sits there waiting. It's only
checked after generic exhausts its retries. That's exactly the desired behavior.

The `minGracePeriod` is only needed for stages that have **no detected CMPs** — where
the await would skip instantly — to still ensure a minimum delay before accepting a
lower-priority result. This handles the edge case where no CMP is detected in site-
specific/generic stages (instant skip) but heuristic resolves immediately.

```
Scenario: no CMP in site-specific or generic, heuristic finds popup instantly

Without grace period:
  t=0ms  Check site-specific: no CMPs → skip
  t=0ms  Check generic: no CMPs → skip
  t=0ms  Check heuristic: popup found → handle immediately
  Total: ~0ms  ← This is actually CORRECT! No competing rules existed.

Scenario: generic CMP detected (slow popup), heuristic finds popup instantly

Without grace period:
  t=0ms     Check site-specific: no CMPs → skip
  t=0ms     Check generic: await popupTask...
  t=5000ms  Generic popup not found (retries exhausted)
  t=5000ms  Check heuristic: popup found → handle
  Total: ~5s  ← Correct, but slow.

With concurrent approach:
  t=0ms     Generic popup detection starts (concurrent)
  t=0ms     Heuristic popup detection starts (concurrent, resolves instantly)
  t=0ms     Priority drain: await generic popupTask...
  t=5000ms  Generic failed → check heuristic (already resolved) → handle
  Total: ~5s  ← Same wall time, but correct priority.
```

So actually, the concurrent approach **already preserves priority** through the
sequential drain — no explicit grace period needed for the normal case. The wall-clock
time is dominated by the highest-priority stage that has detected CMPs.

However, there's a subtlety the `minGracePeriod` addresses: **when `detectCmp` itself
might produce different results on retry.** Consider:

```
Attempt 1, t=0ms:
  site-specific detectCmp: false (CMP script hasn't loaded yet)
  generic detectCmp: false
  heuristic detectCmp: true (popup HTML is in initial page load)

Without any grace: heuristic handles immediately.
But at t=500ms, generic detectCmp would return true (script loaded).
```

The `minGracePeriod` on the heuristic stage addresses this: even when no higher-priority
CMP is detected on the first attempt, we wait before accepting the heuristic result to
give higher-priority rules a chance to appear on a retry.

#### Final design: concurrent detection with retry-aware priority drain

```typescript
async _start() {
  const logsConfig = this.config.logs;
  logsConfig.lifecycle && console.log(`Detecting CMPs on ${window.location.href}`);
  this.updateState({ lifecycle: 'started' });

  const { siteSpecificRules, genericRules, heuristicRules } =
    this.categorizeRules();

  const stageConfigs = [
    { name: 'site-specific', rules: siteSpecificRules, minGracePeriod: 0 },
    { name: 'generic',       rules: genericRules,       minGracePeriod: 0 },
    { name: 'heuristic',     rules: heuristicRules,     minGracePeriod: 1500 },
  ];

  const mutationObserver = this.domActions.waitForMutation('html');
  mutationObserver.catch(() => {});

  for (let attempt = 0; attempt <= this.config.detectRetries; attempt++) {
    this.updateState({ findCmpAttempts: this.state.findCmpAttempts + 1 });
    const attemptStart = Date.now();

    // Phase 1: detectCmp for ALL stages (fast, parallel)
    const stageResults = await Promise.all(
      stageConfigs.map(async (cfg) => ({
        ...cfg,
        detected: await this.runDetectCmpForGroup(cfg.rules),
      }))
    );

    this.detectHeuristics();
    this.updateState({
      detectedCmps: stageResults.flatMap(s => s.detected.map(c => c.name)),
    });

    // Phase 2: start popup detection concurrently for all stages with CMPs
    const popupTasks = stageResults.map((stage) =>
      stage.detected.length > 0
        ? this.detectPopupsForStage(stage.detected)
        : null
    );

    const anyDetected = popupTasks.some(t => t !== null);

    if (anyDetected) {
      this.updateState({ lifecycle: 'cmpDetected' });

      // Phase 3: priority drain — await stages in order
      for (let i = 0; i < stageResults.length; i++) {
        const stage = stageResults[i];
        const task = popupTasks[i];
        if (!task) continue;

        const popups = await task;  // blocks until this stage fully settles
        if (popups.length > 0) {
          return this.handlePopup(popups[0]);
        }

        logsConfig.lifecycle &&
          console.log(`${stage.name}: CMP detected but no popup`);
      }

      // All stages with CMPs failed popup detection.
      // Before falling to heuristic (if it wasn't already tried above),
      // or before retrying, check if any stage's grace period demands
      // we wait longer.
      //
      // In practice, this path means: a CMP was detected somewhere but
      // no popup appeared. We'll retry on the next attempt.
    }

    // Enforce minimum grace period for the lowest-priority stage that
    // has pending results. This prevents premature acceptance on the
    // NEXT attempt's heuristic check.
    const elapsed = Date.now() - attemptStart;
    const maxGrace = Math.max(
      ...stageConfigs
        .filter((_, i) => !popupTasks[i]) // stages with no CMPs this round
        .map(s => s.minGracePeriod)
    );
    const graceRemaining = maxGrace - elapsed;

    // Retry: wait for DOM changes before next attempt
    if (attempt < this.config.detectRetries) {
      const retryDelay = Math.max(500, graceRemaining);
      try {
        await Promise.all([this.domActions.wait(retryDelay), mutationObserver]);
      } catch (e) {
        break;
      }
      mutationObserver = this.domActions.waitForMutation('html');
      mutationObserver.catch(() => {});
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

#### Helper: `detectPopupsForStage`

Runs popup detection for a set of CMPs (static first, then cosmetic fallback) without
triggering `handlePopup` — returns the list of CMPs with open popups so the caller can
decide when to act.

```typescript
async detectPopupsForStage(cmps: AutoCMP[]): Promise<AutoCMP[]> {
  const staticCmps = cmps.filter(c => !c.isCosmetic);
  const cosmeticCmps = cmps.filter(c => c.isCosmetic);

  let popups = await this.waitForPopupsSettled(staticCmps);
  if (popups.length === 0 && cosmeticCmps.length > 0) {
    popups = await this.waitForPopupsSettled(cosmeticCmps);
  }
  return popups;
}

async waitForPopupsSettled(cmps: AutoCMP[]): Promise<AutoCMP[]> {
  const tasks = cmps.map((cmp) =>
    this.waitForPopup(cmp)
      .then((found) => (found ? cmp : null))
      .catch(() => null)
  );
  const results = await Promise.allSettled(tasks);
  return results
    .filter((r): r is PromiseFulfilledResult<AutoCMP> =>
      r.status === 'fulfilled' && r.value !== null)
    .map(r => r.value);
}
```

#### Helper: `categorizeRules`

Extracted from `findCmp()` for reuse:

```typescript
categorizeRules() {
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

  return { siteSpecificRules, genericRules, heuristicRules };
}
```

#### Why the priority drain works without explicit inter-stage delays

Consider the key scenarios:

**Scenario A: Generic CMP detected (slow popup) + heuristic (instant)**
```
t=0ms     Phase 1: generic detectCmp ✓, heuristic detectCmp ✓
t=0ms     Phase 2: start waitForPopup(generic) AND heuristic popupTask
          heuristic resolves at t≈50ms. Generic retries until t≈5000ms.
Phase 3 drain:
  t=0ms   site-specific: no task → skip
  t=0ms   generic: await popupTask... (blocks for ~5s)
  t=5000ms generic popup not found → continue
  t=5000ms heuristic: await popupTask (already resolved at t=50ms) → found!
  → handle heuristic. Total: ~5s.
```
The heuristic waited the full 5 seconds of generic retries — priority respected.

**Scenario B: No CMP in generic + heuristic (instant)**
```
t=0ms     Phase 1: generic detectCmp ✗, heuristic detectCmp ✓
t=0ms     Phase 2: only heuristic has a popupTask
Phase 3 drain:
  t=0ms   site-specific: skip
  t=0ms   generic: no task → skip
  t=0ms   heuristic: await popupTask → found!
  → handle heuristic immediately. Total: ~0ms.
```
No competing rules — heuristic should win fast. But should it? What if generic's CMP
element appears at t=500ms? This is where `minGracePeriod` on the retry loop matters.

**Scenario B with grace period:**
```
Attempt 0, t=0ms:
  Phase 1: generic ✗, heuristic ✓
  Phase 3: heuristic found popup
  BUT: grace period for heuristic = 1500ms, elapsed = 50ms
  → should we enforce grace here?
```

This is the design choice. Two valid options:

**Option 1: Enforce grace period before accepting heuristic result.** If generic had no
CMPs this round, we delay accepting the heuristic result by `minGracePeriod`, then
re-check whether generic has appeared:

```typescript
// In Phase 3, before accepting a stage's result:
const elapsed = Date.now() - attemptStart;
if (stage.minGracePeriod > 0 && elapsed < stage.minGracePeriod) {
  // Higher-priority stages had no CMPs — but they might appear soon.
  // Wait, then re-run detectCmp for higher-priority stages.
  await this.domActions.wait(stage.minGracePeriod - elapsed);
  const recheck = await this.recheckHigherPriorityStages(stageConfigs, i);
  if (recheck) {
    // A higher-priority stage now has a CMP — restart the drain
    continue outerLoop;
  }
}
```

**Option 2 (simpler, recommended): Let the retry loop handle it.** On the first
attempt, if only heuristic detects anything, its grace period inflates the retry delay.
On the next attempt, generic might now have its CMP element. The priority drain on the
second attempt would then correctly prefer generic.

This is simpler and consistent with the existing retry model. The retry loop already
waits 500ms + DOM mutation between attempts; the grace period just ensures the first few
retries aren't cut short:

```typescript
// In the retry section at the bottom of the attempt loop:
if (attempt < this.config.detectRetries) {
  const elapsed = Date.now() - attemptStart;
  const pendingGrace = stageConfigs
    .filter((cfg, i) => popupTasks[i] !== null) // stages that had CMPs
    .reduce((max, cfg) => Math.max(max, cfg.minGracePeriod), 0);
  const retryDelay = Math.max(500, pendingGrace - elapsed);
  await this.domActions.wait(retryDelay);
}
```

If heuristic found a popup on attempt 0 (at t=50ms), the retry delay becomes
`max(500, 1500 - 50) = 1450ms`. On attempt 1, generic's CMP element might now exist,
and its popup detection would take priority in the drain.

If no higher-priority CMP appears after the grace period, the heuristic result is
accepted on the next attempt. This adds at most one retry's delay (~1.5s) for the
heuristic case — an acceptable tradeoff for correctness.

### Grace period configuration

| Stage | `minGracePeriod` | Rationale |
|-------|-----------------|-----------|
| site-specific | 0ms | Highest priority — accepted immediately |
| generic | 0ms | Only deferred by site-specific's popup retries (natural drain) |
| heuristic | 1500ms | Must wait for site-specific/generic CMP elements to appear. Covers typical lazy-load delays without excessive waiting. |

The 1500ms value for heuristic is a starting point. It should be tuned based on
real-world data about how long CMP scripts typically take to inject their DOM elements
after page load. It can be exposed as a config option if needed:

```typescript
type Config = {
  // ... existing fields ...
  heuristicGracePeriod: number; // ms to wait before accepting heuristic over
                                // absent higher-priority rules (default: 1500)
};
```

### Behavioral Changes

| Scenario | Before | After |
|----------|--------|-------|
| Site-specific CMP detected, no popup; generic CMP has popup | **Blocked** — generic never tried | **Fixed** — generic popup found concurrently, accepted after site-specific settles |
| Generic CMP detected, no popup; heuristic would catch it | **Blocked** — heuristic never tried | **Fixed** — heuristic popup found concurrently, accepted after generic settles |
| Generic CMP slow to load; heuristic matches instantly | N/A (heuristic blocked) | **Correct** — heuristic waits for grace period, then generic appears on retry |
| No CMP in any stage; heuristic matches | N/A (heuristic blocked by generic) | **Correct** — heuristic waits grace period, no higher-priority CMP appears, accepted |
| Site-specific CMP detected with popup | Works (stops at stage 1) | Same — stops at site-specific in drain |
| Two generic CMPs, one has popup | Works (parallel within stage) | Same — parallel within stage |

### Performance Implications

**Common case (single CMP, popup visible):** Zero overhead. The CMP is detected in
Phase 1, its popup is found in Phase 2, and the priority drain accepts it immediately.

**Fallthrough case (CMP detected, no popup):** Instead of the current ~5s timeout
followed by giving up, the engine continues to the next stage. Since all stages' popup
detection runs concurrently, the total wall time is approximately
`max(stage_settle_times)` rather than `sum(stage_settle_times)`. In the worst case
(CMP detected in every stage, popup in none), total time is still ~5s (the longest
`waitForPopup` duration), not ~15s.

**Heuristic grace period:** Adds at most ~1.5s in the specific case where only the
heuristic finds a match and no higher-priority CMP is present. This is acceptable
because the heuristic is a last resort, and the delay ensures we don't miss a
higher-priority rule whose DOM elements are still loading.

### Migration Risk

- **Low risk for the common case:** When exactly one CMP is present and its popup shows,
  the behavior is identical.
- **Low risk for the fallthrough case:** The new behavior is strictly better — it tries
  more rules instead of giving up.
- **Heuristic timing:** The grace period adds a small delay for heuristic-only matches.
  Monitor for user-perceived latency in regions where heuristic is the only match.
- **Edge case to watch:** If a page has two real CMPs (e.g., one in an iframe, one in
  main frame), the stage ordering now matters more. But this is already handled by
  `runContext` frame filtering.

### Key change to `detectPopups`

The current `detectPopups()` method calls `onFirstPopupAppears(cmp)` (which triggers
`handlePopup`) as a side effect inside `Promise.any`. In the new design, handling must
be deferred until the priority drain decides which stage wins. The new
`detectPopupsForStage()` helper returns popup results without side effects; the caller
in `_start()` calls `handlePopup()` explicitly after priority resolution.

### Files to Modify

| File | Change |
|------|--------|
| `lib/web.ts` | Restructure `_start()`: concurrent Phase 1/2, priority drain Phase 3 |
| `lib/web.ts` | Add `detectPopupsForStage()`, `waitForPopupsSettled()`, `categorizeRules()` helpers |
| `lib/web.ts` | Deprecate or refactor `findCmp()` (logic absorbed into `_start()`) |
| `lib/web.ts` | Refactor `detectPopups()` to separate detection from handling |
| `lib/web.ts` | Update state management for new loop structure |
| `lib/types.ts` | (Optional) Add `heuristicGracePeriod` to `Config` |
| (tests) | Add test cases for: cross-stage fallthrough, heuristic grace period, concurrent popup detection |

### What NOT to change

- `waitForPopup()` — internal retry logic is fine as-is
- `handlePopup()` / `doOptOut()` / `doOptIn()` — action logic is unrelated
- Rule evaluation (`evaluateRuleStep`, `_runRulesSequentially`) — no change needed
- `filterCMPs()` / `parseDeclarativeRules()` — rule loading is unrelated
