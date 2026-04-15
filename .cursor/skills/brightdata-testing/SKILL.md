---
name: brightdata-testing
description: Test autoconsent rules across geographic regions using BrightData remote browsers. Use when verifying rule changes work in multiple regions (US, EU, UK, etc.), investigating region-dependent CMP behavior, or injecting autoconsent into any CDP-connected browser.
---

# BrightData Regional Testing

**All rule changes must be tested across geographic regions** to catch GDPR/CCPA/regional popup variations. Use this skill to run autoconsent against real remote browsers in multiple regions.

## Prerequisites

```bash
npm run prepublish  # builds dist/autoconsent.playwright.js and rules/rules.json
```

Environment variables (available as Cursor Cloud Agent secrets):
- `BRIGHTDATA_WEBACCESS_USER`
- `BRIGHTDATA_WEBACCESS_PASSWORD`
- `BRIGHTDATA_WEBACCESS_HOST`

## Architecture

```
Node.js (handler)          CDP binding          Isolated world per frame
─────────────────    ←──  _acSend(JSON)   ←──  autoconsentSendMessage(msg)
                     ──→  Runtime.evaluate ──→  autoconsentReceiveMessage(msg)
```

- `Runtime.addBinding` creates `_acSend` in all execution contexts (including isolated worlds)
- `Page.addScriptToEvaluateOnNewDocument` with `worldName: 'autoconsent'` injects into an isolated world per frame, before page scripts run
- `eval` messages are routed to the **main world** via `page.evaluate()` so page globals (e.g. `window.Cookiebot`) are accessible
- `selfTest` is triggered automatically after `autoconsentDone`

## API

The library is at [scripts/brightdata.mjs](scripts/brightdata.mjs). Three levels of abstraction:

### `testUrl(url, regionKey, options?)` — highest level

Connects to BrightData, opens a page, navigates, injects autoconsent, waits for completion, screenshots, and closes. Returns a `TestResult`.

```javascript
import { testUrl, formatResult, REGIONS } from './.cursor/skills/brightdata-testing/scripts/brightdata.mjs';

for (const region of Object.keys(REGIONS)) {
    const result = await testUrl('https://www.wohnen.de/', region);
    console.log(formatResult(result));
}
```

### `testPage(page, url, regionKey, options?)` — mid level

Same but takes an already-connected Playwright `Page`. Use when managing the browser lifecycle yourself.

```javascript
import { connectBrightData, testPage } from './.cursor/skills/brightdata-testing/scripts/brightdata.mjs';

const browser = await connectBrightData('de');
const page = await browser.newPage();
const result = await testPage(page, 'https://www.wohnen.de/', 'de');
// inspect page, take extra screenshots, etc.
await browser.close();
```

### `injectAutoconsent(page, options?)` — low level

Sets up CDP bindings and injection. Call before `page.goto()`. Returns an `AutoconsentContext`:
- `received` — array of all messages
- `hasMessage(type)` — check if a message type was received
- `waitForCompletion(timeout?)` — wait for `autoconsentDone` + result
- `waitForMessage(type, timeout?)` — wait for a specific message type
- `collectResult(url, region)` — aggregate messages into a `TestResult`

```javascript
const ctx = await injectAutoconsent(page, { action: 'optOut' });
await page.goto(url, { waitUntil: 'commit' });
await ctx.waitForCompletion(45000);
const result = ctx.collectResult(url, 'de');
```

`formatResult()` produces a one-line status per result: PASS, PARTIAL, ACTION FAILED, or NO CMP (expected for region-specific CMPs tested from a non-target region).

### Options

| Option | Default | Description |
|--------|---------|-------------|
| `action` | `'optOut'` | `'optOut'`, `'optIn'`, or `null` |
| `screenshotsDir` | `test-results/brightdata` | Where to save screenshots |
| `navigationTimeout` | `45000` | Navigation timeout (ms) |
| `completionTimeout` | `45000` | Wait for autoconsent to finish (ms) |

## Regions

| Key | Location |
|-----|----------|
| `us-newyork` | United States (New York) |
| `us-losangeles` | United States (Los Angeles) |
| `de` | Germany |
| `fr` | France |
| `gb` | United Kingdom |
| `nl` | Netherlands |
| `ca` | Canada |
| `au` | Australia |

## Gotchas

- **CAPTCHA solving is automatic** — BrightData auto-solves CAPTCHAs. `testPage` listens for `Captcha.detected` / `Captcha.solveFinished` CDP events and blocks until the solver finishes when a captcha is present. Adds ~5s overhead on captcha-free pages (grace period for detection).
- **Call injection before `page.goto`** — `addScriptToEvaluateOnNewDocument` only applies to future navigations.
- **Don't use `page.exposeBinding`/`page.evaluate` for the message channel** over CDP — they run in Playwright's utility context where CDP bindings aren't callable. Use raw CDP (`Runtime.addBinding` + `Runtime.evaluate`) instead.
- **Short-lived iframe contexts** produce `Cannot find context` errors on `Runtime.evaluate` responses — expected and harmless (suppressed by `.catch(() => {})`).
- **`eval` responses must include `msg.id`** — autoconsent matches responses by ID.
- **BrightData blocks certain site categories** (e.g. gaming sites). Use alternative URLs for the same CMP if blocked.
- **Each region test creates a new browser session** — there's no session reuse across regions.
