# Autoconsent Agent Guide

A library for automatically handling cookie consent popups on websites. Used in DuckDuckGo browser apps. Rules detect Consent Management Providers (CMPs) and automate opt-out/opt-in flows.

## Project Layout

```
lib/              TypeScript source for the autoconsent engine
lib/cmps/         Code-based CMP rule classes (sourcepoint, onetrust, etc.)
lib/rules.ts      Type definitions for AutoConsentCMPRule and rule steps
lib/eval-snippets.ts  Eval snippets for main-world JS execution
rules/autoconsent/    Hand-maintained JSON rules
rules/generated/      Crawler-generated JSON rules (auto_XX_domain_hash.json)
rules/build.ts        Merges all rules into rules.json, compact-rules.json
data/                 Coverage data (coverage.json) and site lists
tests/                Playwright E2E test specs (one per CMP)
tests-wtr/            Web Test Runner unit tests for DOM actions and rule logic
playwright/runner.ts  Test harness: generateCMPTests(name, urls, options)
addon/                Browser extension (MV3 + Firefox)
scripts/              Build and validation scripts
docs/                 Reference documentation (rule syntax, internal API)
```

## Quick Start

```bash
npm ci
npm run prepublish    # full build: build rules and bundle
npm run watch         # auto-rebuild on changes to lib/, addon/, rules/
```

| Command | Purpose |
|---------|---------|
| `npm run watch` | Auto-rebuild on changes to `lib/`, `addon/`, `rules/` (runs `prepublish` on each change) |
| `npm run lint` | ESLint + Prettier + JSON rule schema validation |
| `npm run lint-fix` | Auto-fix lint and formatting issues |
| `npm run rule-syntax-check` | Validate `rules/autoconsent/*.json` against the TypeScript schema |
| `npm run test:lib` | Unit tests (Web Test Runner) |
| `npm run test` | All Playwright E2E tests |
| `npm run test:webkit` | Playwright tests in WebKit only |
| `npm run test:chrome` | Playwright tests in Chrome only |
| `npm run build-rules` | Rebuild `rules.json`, `compact-rules.json` |
| `npm run create-rule` | Scaffold a new JSON rule + test spec |

## Code Style
- **Preserve existing comments.** Do not remove JSDoc comments, TODO comments, or inline explanations unless the related code is also being removed. Rewriting a comment to reflect updated logic is fine.

## Working with autoconsent rules

### Scope: what autoconsent handles

Only cookie/consent/privacy/GDPR/tracking-consent dialogs are in scope. Age-verification gates (e.g. "I am 18+" / "Enter" adult-content confirmations), login walls, paywalls, newsletter and app-install prompts, and other non-consent overlays are **out of scope**. Do not write a rule or a site exception that dismisses them, and do not treat clicking through such a gate as the fix.

An out-of-scope overlay often sits in front of a real consent popup. Click through it yourself while investigating — that is the way to find out whether a consent dialog is behind it — and write the rule against the consent dialog you uncover. Only conclude that the report is out of scope once you have looked behind the gate.

### Rule syntax
For the complete rule syntax reference (all step types, element selectors, conditionals, etc.), see [docs/rule-syntax.md](docs/rule-syntax.md).

### Regional Differences

CMPs behave differently by region:

- **EU/EEA (GDPR):** Full consent dialog with explicit reject/accept options.
- **US (CCPA/state laws):** Often a simpler notice with "Close" or "Do Not Sell". Some CMPs show nothing.
- **Other regions:** Varies.

Use `if`/`then`/`else` to handle regional variants within a single rule.

**Test all rule changes across the core region set** — US, GB, DE, plus the reported region from the task (or the closest supported proxy region, e.g. ES for PT) — using the `proxy-testing` skill. Escalate to the expanded set according to the skill's policy.

### Generic vs Site-Specific Rules

Site-specific rules are rules scoped to specific sites with a `urlPattern`. Rules without a `urlPattern` are called generic.

**Always prefer a generic CMP rule over a `urlPattern`-scoped one.** One CMP rule can cover multiple sites; a `urlPattern` is a last resort when the popup cannot be expressed as a shared CMP. Before writing a site-specific rule, identify the CMP (see "Identifying a Consent Management Platform" below) and extend an existing generic rule if one applies. If the popup is custom-built but shared across sibling sites, still write a generic rule. Only use a `urlPattern` when the popup is unique to that site (or a small sibling set) and a generic rule would be too broad — and even then, prefer a heuristic-pattern fix over a new site-specific rule (see Updating existing rules).

### JSON Rules vs Code-based rules

JSON rules live in `rules/autoconsent/` (hand-maintained) and `rules/generated/` (auto-generated). Each file defines one CMP rule following the `AutoConsentCMPRule` type in `lib/rules.ts`.

```json
{
  "name": "example-cmp",
  "prehideSelectors": ["#cookie-banner"],
  "detectCmp": [{ "exists": "#cookie-banner" }],
  "detectPopup": [{ "visible": "#cookie-banner" }],
  "optIn": [{ "waitForThenClick": "#accept-all" }],
  "optOut": [{ "waitForThenClick": "#reject-all" }],
  "test": [{ "cookieContains": "consent=rejected" }]
}
```

Code-based rules live in `lib/cmps/`. Each file defines one CMP rule following the `AutoConsentCMPBase` type in `lib/rules.ts`.

**JSON rules are always preferred over code-based rules.** Code-based rules are rarely needed, and should only be used for complex cases, when JSON format is not expressive enough.

### Selectors

Prefer selectors stable across builds and locales: data attributes (`[data-testid="..."]`) > stable IDs > class substrings (`[class*="..."]`) > structural CSS > XPath (last resort). **Do NOT use CSS module hashes** (4+ random chars like `.css-1a2b3c`) or framework-generated IDs.

Array selectors pierce shadow DOM and same-origin iframes. Each selector in the array
scopes into the previous match's `.shadowRoot` or `.contentDocument`:

```json
["#shadow-host", "button.reject"]
["#cmp-container iframe", ".opt-out-btn"]
```

Single-string selectors cannot pierce — use arrays whenever the target is inside a
shadow root or same-origin iframe.

### General Guidelines and Gotchas
- **Paywalls do not need to be handled, and should not be mitigated.** If the site presents a choice to pay or agree to cookies, do not write a rule, do not click through, and do not add a site exception (unless autoconsent is causing breakage).
- **Never click TIER2 buttons in the `optOut` rule.** TIER2 is the heuristic classification for a popup whose only actionable button is a single Accept (`classifyPopup` in `lib/heuristics.ts`). Clicking that button from a JSON rule is an opt-in disguised as a fix. If the popup has no reject, dismiss, or acknowledge control, do not "handle" it by accepting.
- `detectCmp` and `detectPopup` must be fast. Do NOT use waiting steps — the engine retries automatically.
- Keep regexes in `urlPattern` as simple as possible to avoid unnecessary performance overhead. In most cases, a simple "^https?://(\w+\.)?domain\.com/" is sufficient.
- **`prehideSelectors` do not affect autoconsent visibility checks.** Prehide selectors are injected early to prevent flicker, and are intentionally implemented using opacity, which hides elements from the user, but not from built-in steps such as `waitForVisible` and `visible`. That said, _prehide selectors should be narrow_: overly broad selectors (e.g. `body`) could hide the entire page.
- If you cover a new CMP or a new flavor of the existing CMP, ALWAYS try to look for more examples of that case, and add to the spec file.
- Prefer DOM-based steps when possible — `eval` steps are a last resort.
- Set `minimumRuleStepVersion: 2` if using `removeClass`, `setStyle`, or `addStyle`; set `minimumRuleStepVersion: 3` if using `stylesheet`.
- Prefer `cookieContains` in `test` when the CMP stores consent in cookies.
- Use `npm run create-rule` to scaffold a new rule and a spec file.
- Code comments: keep them brief (max one line), explain why not what, no references to specific sites in library code

### Updating existing rules
- **For site-specific popups, prefer a heuristic-pattern fix over a new rule, and check whether a rule is needed at all.** If the popup is unique to a site (not a shared CMP) and already has a reject, dismiss, or acknowledge button that the heuristic should match, extend `lib/heuristic-patterns.ts` instead of adding a `urlPattern`-scoped JSON rule. Do not use a heuristic fix in place of a generic CMP rule. A heuristic change must not cause false positives on other sites.
- If an existing generic rule fails on a specific site: first look for other sites with the same failure (spec sites, data/coverage.json, publicwww). If the issue applies to more sites, update the generic rule; if the issue is truly site-specific, prefer making a site-specific rule or a config exception. Never change a generic rule to fix a site-specific implementation problem.
- After updating an existing generic rule, do a heavy testing run: all known sites (specs + data/coverage.json + publicwww) across the expanded set. Inspect both API results AND screenshots.
- **When adding or fixing a rule for a site, remove stale site-specific rules covering the same site.** If a site-specific rule is obsolete in all regions (the site switched CMP), remove it rather than leaving it alongside the new or updated rule.
- if a popup does not provide an opt-out button, `optOut` _may_ click "dismiss"/"acknowledge" instead. Check with the existing heuristic patterns in /lib/heuristic-patterns.ts for reference. Do **not** click a TIER2 (single Accept) button — see General Guidelines.
- do not keep outdated selectors in changed rules, unless they are actually used in some conditions

### Verification guidelines
- **Regional testing is mandatory** for any rule change — CMPs behave differently under GDPR (EU), CCPA (US), and other jurisdictions. Run the rule against different regions using `proxy-testing` skill before considering the change done. Iterate on the fix in the single most relevant region and run the verification according to the skill's policy.
- **Mobile policy**: by default test desktop across the current set's regions, plus one mobile sanity check in the region where the popup reproduces. If the mobile sanity check differs from desktop (different popup, rule, or outcome), expand mobile across the current set's regions. If the original report is from a mobile OS, test both desktop and mobile from the start.
- When verifying a rule, **look at the screenshots** on top of the API results — sometimes a rule reports success, but the popup is not actually handled - a screenshot will detect this.
- **Handling timing and DOM races.** A common pitfall is clicking before the site's JS handlers are ready. Prefer a state-based wait (`waitForVisible`, `waitForThenClick`) over an unconditional `wait`, and cap any unconditional `wait` at 1s — unconditional waits are a last resort because they hurt UX. When a click lands before handlers are attached, use `retry` / `retryInterval` on `waitForThenClick` (see `lib/rules.ts` and [docs/rule-syntax.md](docs/rule-syntax.md)) rather than padding a wait. `retry` only suits elements expected to **disappear** once the click is handled; extra clicks on a persistent control (e.g. a toggle) are wasted or harmful.
- **Watch out for false positive detections**. Verify that the rule does NOT match after the popup is dismissed and the page is reloaded. A cosmetic rule is the exception: it stores no consent state, so it matches every load by design — there the thing to rule out is the repeated handling making the page reload. Over-detection can lead to reload loops.
- **selfTests are optional.** It is okay to NOT have a self-test, or have it failing as long as the popup is handled correctly. Confirm this with screenshots.
- Generic rules without a urlPattern MUST have at least two sites in the spec file.
- If the popup comes in different DOM structures, cover all of them in the spec file.

### Breakage in cosmetic rules
**Prefer a non-cosmetic rule.** A cosmetic (`hide`) rule is a last resort when there is no reject/dismiss path. If cosmetic is unavoidable, verify that hiding the element does not break the page and **report that evidence**. Cosmetic rule without breakage-check evidence is incomplete.

Check each breakage type separately and report a verdict on each, rather than a general "looks fine": **leftover overlay** (a banner remnant or backdrop still covering the page), **blocked scrolling** (a scroll or overflow lock left on html/body or the dialog), **blocked interaction** (clicks or taps not reaching the page), and **reload loop** (the rule still matching after the popup is dismissed and the page is reloaded).

When using `hide`, the CMP may lock scrolling or add overlays. Add fixes AFTER the `hide` step, marked `"optional": true`:

| Problem | Fix |
|---------|-----|
| Scroll lock via CSS class | `{ "removeClass": "no-scroll", "selector": "body", "optional": true }` |
| Scroll lock via inline style | `{ "addStyle": "overflow: auto !important", "selector": "body", "optional": true }` |
| Overlay blocking clicks | `{ "hide": "#overlay", "optional": true }` |
| Body position lock | `{ "setStyle": "", "selector": "body", "optional": true }` |

Using `removeClass`, `setStyle`, or `addStyle` requires `"minimumRuleStepVersion": 2`.

## Identifying a Consent Management Platform
The following techniques can help identify a generic CMP:

1. **DOM inspection:** Check class names on popup elements for vendor prefixes
   (`onetrust-`, `didomi-`, `sp_choice_type_`, `cmp-`, `fc-`, `klaro-`, `pd-`, etc.).
2. **JS source analysis:** Inspect the popup buttons' click handlers or find the cookie
   that stores consent and search for that cookie name in the page's scripts. Look for:
   - Vendor names in variable/function names or `window` globals.
   - Scripts in `node_modules/`, `vendor/`, or `wp-content/plugins/` paths.
   - License comments with vendor URLs at the top of the script.
3. **Cross-site prevalence:** Use the `publicwww-search` skill to search for distinctive
   selectors, script URLs, or copy strings. If the same popup markup appears on many
   sites, it's a CMP.

## CMP Discovery with PublicWWW

Use the `/publicwww-search` skill to search website source code for CMP-specific identifiers. This helps determine if a cookie popup is from a shared third-party CMP (warranting a generic rule) or is site-specific. It also helps find additional test URLs for existing rules and region-specific test sites.

Requires `PUBLICWWW_KEY` environment variable.

## Checking for Existing Site Exceptions in `privacy-configuration`

Some sites have autoconsent disabled via the `duckduckgo/privacy-configuration` repo. Before investigating a reported popup, check whether an **exception** already exists for the domain in:

- `features/autoconsent.json`
- `overrides/{android,ios,macos,windows,extension}-override.json` and any files under `overrides/browsers/`

**Know what you are looking at.** `features/autoconsent.json` carries both site exceptions *and* `settings.compactRuleList` rule bundle — a rule appearing there is **not** an exception. An autoconsent exception is not interchangeable with other privacy-config mitigations (content blocking, `unprotectedTemporary`, and similar); stay inside the `autoconsent` feature scope.

**Exceptions are only for breakage**, paywalls without breakage should not be mitigated.

**Do NOT rely on `gh search code` for this lookup.** GitHub's code search index has a per-file size limit and `features/autoconsent.json` is excluded — searches for the domain there silently return zero hits even when an exception exists.

Instead, fetch the file directly and grep locally, and/or list PRs by title.

## Verification

After creating or modifying a rule:

1. `npm run build-rules` — rebuild rules.json (required for tests)
2. `npm run rule-syntax-check` — validate rule JSON against schema
3. `npx playwright test tests/<name>.spec.ts` — run the E2E test
4. `npm run prepublish` — full build including extension bundle
5. Validate that the rule stops matching after the popup is dismissed and the page is reloaded (unless it's a cosmetic rule).
6. Check the rule works across regions as per guidelines above.