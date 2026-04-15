---
name: brightdata-testing
description: Test autoconsent rules across geographic regions using BrightData remote browsers. Use this skill whenever you need to verify that a rule change works correctly in multiple regions (US, EU, UK, etc.), or when investigating region-dependent CMP behavior.
---

# BrightData Regional Testing

Test autoconsent cookie consent rules across geographic regions using BrightData's remote browser infrastructure.

## When to Use

- After creating or modifying any autoconsent rule (JSON or code-based) — all rules are potentially region-sensitive.
- When investigating region-dependent CMP behavior (GDPR vs CCPA vs other variants).
- When a Playwright E2E test passes locally but you need to verify behavior from specific geographic locations.
- When triaging broken sites that may behave differently by region.

## Prerequisites

The following environment variables must be set (available as Cursor Cloud Agent secrets):

- `BRIGHTDATA_WEBACCESS_USER`
- `BRIGHTDATA_WEBACCESS_PASSWORD`
- `BRIGHTDATA_WEBACCESS_HOST`

The project must be built before running tests:

```bash
npm run prepublish
```

## Library API

The utility functions are in `scripts/brightdata.js` (relative to this skill folder). Require them in any Node.js script.

### Quick usage — test a URL across regions

```javascript
const { testUrl, formatResult, REGIONS } = require('./.cursor/skills/brightdata-testing/scripts/brightdata');

for (const region of Object.keys(REGIONS)) {
    const result = await testUrl('https://www.wohnen.de/', region);
    console.log(formatResult(result));
}
```

### Functions

#### `testUrl(url, region, options?): Promise<TestResult>`

Highest-level function. Connects to BrightData, opens a page, navigates to the URL, injects autoconsent in an isolated world, waits for completion, takes a final screenshot, and closes the browser.

```javascript
const result = await testUrl('https://www.wohnen.de/', 'de');
// result.cmpDetected === 'Cybotcookiebot'
// result.optOutResult === true
```

#### `testPage(page, url, region, options?): Promise<TestResult>`

Same as `testUrl` but takes an already-connected Playwright `Page`. Use when you want to manage the browser lifecycle yourself (e.g., reusing a connection, inspecting the page after the test).

```javascript
const { connectBrightData, testPage } = require('./.cursor/skills/brightdata-testing/scripts/brightdata');

const browser = await connectBrightData('de');
const page = await browser.newPage();
const result = await testPage(page, 'https://www.wohnen.de/', 'de');
// ... inspect page, take screenshots, etc.
await browser.close();
```

#### `connectBrightData(region): Promise<Browser>`

Connect to a BrightData remote browser for a specific region. Returns a Playwright `Browser` instance connected via CDP.

#### `injectAutoconsent(page, options?): Promise<AutoconsentContext>`

Low-level injection. Sets up CDP bindings and injects autoconsent into the page's isolated world. Call this **before** navigating to the target URL. Returns an `AutoconsentContext` for tracking messages.

```javascript
const ctx = await injectAutoconsent(page, { action: 'optOut' });
await page.goto('https://www.wohnen.de/', { waitUntil: 'commit' });
const completed = await ctx.waitForCompletion(45000);
const result = ctx.collectResult('https://www.wohnen.de/', 'de');
```

#### `formatResult(result): string`

Format a `TestResult` as a human-readable string with pass/fail status indicator.

#### `REGIONS`

Map of region keys to BrightData username suffixes:

| Key | Location |
|-----|----------|
| `us-ny` | United States (New York) |
| `us-la` | United States (Los Angeles) |
| `de` | Germany |
| `fr` | France |
| `gb` | United Kingdom |
| `nl` | Netherlands |
| `ca` | Canada |
| `au` | Australia |

### AutoconsentContext

Returned by `injectAutoconsent()`. Provides:

- `received` — array of all `ContentScriptMessage` objects received
- `hasMessage(type)` — check if a specific message type was received
- `waitForCompletion(timeout)` — wait for `autoconsentDone` + `optOutResult`/`optInResult`
- `waitForMessage(type, timeout)` — wait for a specific message type
- `collectResult(url, region)` — collect messages into a `TestResult`

### TestOptions

```typescript
{
    action: 'optOut' | 'optIn',        // default: 'optOut'
    screenshotsDir: string,            // default: 'test-results/brightdata'
    navigationTimeout: number,         // default: 45000
    completionTimeout: number,         // default: 45000
}
```

## Interpreting Results

The `TestResult` type has these key fields:

- **cmpDetected**: Name of the detected CMP, or null
- **popupFound**: Whether the cookie popup was visible
- **optOutResult**: Whether opt-out succeeded (true/false/null)
- **selfTestResult**: Whether the post-opt-out self-test passed
- **autoconsentDone**: Whether the full flow completed
- **isCosmetic**: Whether the rule used CSS hiding instead of clicking
- **errors**: Array of error messages

`formatResult()` uses these status indicators:

| Status | Meaning |
|--------|---------|
| ✅ PASS | CMP detected, opt-out succeeded |
| ⚠️ PARTIAL | CMP detected but flow didn't complete |
| ❌ OPT-OUT FAILED | Flow completed but opt-out returned false |
| ⬚ NO CMP | No cookie consent popup detected |

## Testing Workflow for Rule Changes

1. **Build** to include rule changes: `npm run prepublish`
2. **Find test URLs** from `data/coverage.json` or the CMP's test spec in `tests/`
3. **Run across all regions** using `testUrl()` in a script
4. **Interpret**:
   - All PASS: rule works everywhere
   - Some NO CMP: expected for region-specific CMPs (e.g., EU-only)
   - Any PARTIAL or FAILED: rule broken in that region — fix and re-test
5. **Iterate**: fix, rebuild, re-test

## Technical Notes

- Autoconsent is injected into a **CDP isolated world** (matching Chrome extension content script isolation). Eval snippets that check page globals (e.g. `window.Cookiebot`) are routed to the main world via `page.evaluate()`.
- `page.exposeBinding()` doesn't work with `connectOverCDP`. The script uses `Runtime.addBinding` (global) + `Page.addScriptToEvaluateOnNewDocument` (with `worldName`) instead.
- `event.executionContextId` from `Runtime.bindingCalled` is used to route responses back to the correct isolated world context.
- BrightData blocks certain site categories (e.g., gaming sites). If a test URL is blocked, use an alternative URL for the same CMP.
- Each region test creates a new BrightData browser session.
