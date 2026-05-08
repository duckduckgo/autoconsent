---
name: oxylabs-testing
description: Test autoconsent rules across geographic regions using Oxylabs Unblocker remote browsers. Use when verifying rule changes work in multiple regions (US, EU, UK, etc.), investigating region-dependent CMP behavior, or injecting autoconsent into any CDP-connected browser.
---

# Oxylabs Regional Testing

**All rule changes must be tested across geographic regions** to catch GDPR/CCPA/regional popup variations. This skill provides a JS library to run autoconsent against real remote browsers in multiple regions via [Oxylabs Unblocker Headless Browser](https://developers.oxylabs.io/products/headless-browser/chrome).
> Important! Autoconsent results can have false positives. When testing, always inspect the screenshots and confirm that opt-out was successful.

## Prerequisites

```bash
npm run prepublish  # builds dist/autoconsent.playwright.js and rules/rules.json
```

Environment variables (available as Cursor Cloud Agent secrets):
- `OXYLABS_USER`
- `OXYLABS_PASSWORD`
- `OXYLABS_HOST` (optional, defaults to `ubc.oxylabs.io`; set to `ubc-us.oxylabs.io` for the US-only entry point)

## Architecture

```
Node.js (handler)          CDP binding          Isolated world per frame
─────────────────    ←──  _acSend(JSON)   ←──  autoconsentSendMessage(msg)
                     ──→  Runtime.evaluate ──→  autoconsentReceiveMessage(msg)

                     ←──  _oxyCaptcha(type) ←─  window 'message' listener (main world)
```

- `Runtime.addBinding` creates `_acSend` and `_oxyCaptcha` in all execution contexts.
- `Page.addScriptToEvaluateOnNewDocument` with `worldName: 'autoconsent'` injects autoconsent into an isolated world per frame, before page scripts run.
- A second `addScriptToEvaluateOnNewDocument` (no `worldName` = main world) installs a `window.addEventListener('message', ...)` that forwards Oxylabs captcha events to `_oxyCaptcha`.
- `eval` messages are routed to the **main world** via `page.evaluate()` so page globals (e.g. `window.Cookiebot`) are accessible.
- `selfTest` is triggered automatically after `autoconsentDone`.

## API

The library is at [scripts/oxylabs.mjs](scripts/oxylabs.mjs). Three levels of abstraction:

### `testUrl(url, regionKey, options?)` — highest level

Connects to Oxylabs, opens a page, navigates, injects autoconsent, waits for completion, screenshots, and closes. Returns a `TestResult`.

```javascript
import { testUrl, formatResult, REGIONS } from './.agents/skills/oxylabs-testing/scripts/oxylabs.mjs';

for (const region of Object.keys(REGIONS)) {
    const result = await testUrl('https://www.wohnen.de/', region);
    console.log(formatResult(result));
}
```

### `testPage(page, url, regionKey, options?)` — mid level

Same but takes an already-connected Playwright `Page`. Use when managing the browser lifecycle yourself.

```javascript
import { connectOxylabs, testPage } from './.agents/skills/oxylabs-testing/scripts/oxylabs.mjs';

const browser = await connectOxylabs('de');
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
- `captcha` — `{ detected: boolean, solved: boolean|null }` reflecting the Oxylabs solver state
- `captchaPromise` — resolves when the solver finishes (success or error)

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
| `screenshotsDir` | `test-results/oxylabs` | Where to save screenshots |
| `navigationTimeout` | `45000` | Navigation timeout (ms) |
| `completionTimeout` | `45000` | Wait for autoconsent to finish (ms) |
| `device` | `'desktop'` | `'desktop' \| 'mobile' \| 'tablet'` — sets `?p_device=` for fingerprint emulation. Useful for testing mobile-only cookie banners. |
| `bargs` | `[]` | Oxylabs browser command-line args, e.g. `['hide-scrollbars', 'disable-notifications']`. Each entry is appended as a `?bargs=...` query param. See [browser arguments](https://developers.oxylabs.io/products/headless-browser/chrome). |

## Regions

Region selection uses Oxylabs query-string params (`?p_cc=`, `?p_city=`) per the [geolocation targeting docs](https://developers.oxylabs.io/products/headless-browser/features/geolocation-targeting.md).

| Key | Location | Query params |
|-----|----------|--------------|
| `us-newyork` | United States (New York) | `p_cc=US&p_city=new_york` |
| `us-losangeles` | United States (Los Angeles) | `p_cc=US&p_city=los_angeles` |
| `de` | Germany | `p_cc=DE` |
| `fr` | France | `p_cc=FR` |
| `gb` | United Kingdom | `p_cc=GB` |
| `nl` | Netherlands | `p_cc=NL` |
| `ca` | Canada | `p_cc=CA` |
| `au` | Australia | `p_cc=AU` |
| `jp` | Japan | `p_cc=JP` |

## Gotchas

- **CAPTCHA events arrive via `window.postMessage`, not CDP.** A bridge is injected into the main world before navigation that forwards Oxylabs `oxylabs-captcha-solve-start|end|error` messages to a `_oxyCaptcha` CDP binding. `testPage` waits up to 5s after navigation for a `solve-start`; if one arrives it blocks until `solve-end`/`solve-error` (capped at `completionTimeout`). Adds ~5s overhead on captcha-free pages.
- **`device: 'tablet'` is Chrome-only** per [Oxylabs docs](https://developers.oxylabs.io/products/headless-browser/features/device-type). Other browsers will silently fall back / fail.
- **Call injection before `page.goto`** — `addScriptToEvaluateOnNewDocument` only applies to future navigations.
- **Don't use `page.exposeBinding`/`page.evaluate` for the message channel** over CDP — they run in Playwright's utility context where CDP bindings aren't callable. Use raw CDP (`Runtime.addBinding` + `Runtime.evaluate`) instead.
- **Short-lived iframe contexts** produce `Cannot find context` errors on `Runtime.evaluate` responses — expected and harmless (suppressed by `.catch(() => {})`).
- **`eval` responses must include `msg.id`** — autoconsent matches responses by ID.
- **Oxylabs blocks certain site categories** (e.g. government sites). Use alternative URLs for the same CMP if blocked.
- **Each region test creates a new browser session** — there's no session reuse across regions.
