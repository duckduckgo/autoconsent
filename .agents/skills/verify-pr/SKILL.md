---
name: verify-pr
description: Verifies an autoconsent pull request by running local CI checks, reviewing rule quality, and inspecting Jenkins E2E results. Use when reviewing, verifying, or approving a PR, when checking if a PR is ready to merge, or when the user asks to validate PR changes.
---

# Verify PR

Copy this checklist and track progress:

```
PR Verification:
- [ ] Step 1: Local checks pass
- [ ] Step 2: Rule review complete
- [ ] Step 3: CI results checked
- [ ] Step 4: Browser verification done
```

## Step 1: Local Checks

```bash
npm run lint
npm run rule-syntax-check
npm run test:lib
npx playwright test tests/<cmp>.spec.ts --project webkit
```

If any check fails, fix the issue and re-run before proceeding.

## Step 2: Rule Review

### JSON rule PRs

- [ ] Test spec exists in `tests/` with reachable URLs
- [ ] Selectors are stable (no CSS module hashes, dynamic IDs, or framework-generated IDs)
- [ ] `optOut` targets a reject/decline button, not a privacy policy link or close button
- [ ] `prehideSelectors` are narrow (no `body` or full-page selectors)
- [ ] `minimumRuleStepVersion: 2` if rule uses `removeClass`, `setStyle`, or `addStyle`
- [ ] Generated rule fixes (`rules/generated/`) are consistent across all region variants

### Code-based rule PRs

- [ ] No hardcoded site-specific values
- [ ] Fallback paths for regional variants
- [ ] Uses existing DOM helpers (`this.click()`, `this.waitForElement()`, etc.)

## Step 3: CI Results

**GitHub Actions** (`.github/workflows/checks.yml`): Runs `lint` and `test:lib`. Must pass.

**Jenkins**: Runs Playwright E2E in 9 regions (US, GB, AU, CA, DE, FR, NL, CH, NO) for modified rules only. Posts a PR comment with artifact ZIP and [review tool](https://zok.pw/autoconsent-review-tool/) link for inspecting screenshots.

### Flaky E2E failures

Before concluding a test is broken:

1. Check Jenkins screenshots in the review tool
2. Verify the site still shows the same popup
3. Region-only failures → consider adding `skipRegions`
4. CI retries twice — intermittent failures often self-resolve

## Step 4: Browser Verification

Build and load extension: `npm run prepublish` → load `dist/addon-mv3/` in Chrome.

Confirm on target site(s):

- Popup is detected and handled
- Page scrolls normally after opt-out
- Interactive elements remain clickable

For CMP rules: test on multiple sites using the same CMP (find sites in `data/coverage.json`).
