---
name: oxylabs-testing
description: Test autoconsent rules across geographic regions using Oxylabs Agent Browser remote browsers. Use when a site shows our regional proxies a bot wall (captcha, challenge page, access denied), when a region has no regional proxy (e.g. pt, br), or for US state/city targeting. Default to proxy-testing otherwise.
---

# Oxylabs Regional Testing

This skill runs autoconsent in [Oxylabs Agent Browser](https://developers.oxylabs.io/products/agent-browser) sessions in a chosen country.

**Default to the `proxy-testing` skill.** Oxylabs costs money per session. Use this skill when:

- a site shows our proxies a bot wall (a captcha, a challenge page, an "access denied" page) instead of the real site. Oxylabs gets past most of them. Retest only the affected regions here;
- the region has no regional proxy (any two-letter country code works here, e.g. `pt`);
- you need a US state or city (CCPA: `us-california`).

The region policy (core and expanded sets) is the one in the `proxy-testing` skill. Results have the same shape, and the same rule applies: autoconsent results can have false positives, so always inspect the screenshots and confirm that opt-out was successful.

## Prerequisites

```bash
npm run prepublish  # builds dist/autoconsent.playwright.js and rules/rules.json
```

Environment variables:

- `OXYLABS_USER` — the Agent Browser username, including its account suffix (e.g. `user_ab12`)
- `OXYLABS_PASSWORD`
- `OXYLABS_HOST` (optional, defaults to `hb.oxylabs.io`. The older `ubc.oxylabs.io` endpoint is deprecated.)

The endpoint URL contains the credentials: never log it. Errors returned by this library are already redacted.

## Usage

The library is at [scripts/oxylabs.mjs](scripts/oxylabs.mjs). It exports the same functions as `proxy-testing` (`testUrl`, `testRegions`, `testPage`, `injectAutoconsent`, `formatResult`, region sets), so a script can switch providers by changing the import.

```javascript
import { formatResult, testRegions } from './.agents/skills/oxylabs-testing/scripts/oxylabs.mjs';

for (const result of await testRegions('https://www.wohnen.de/', ['us', 'gb', 'de', 'pt'])) {
    console.log(formatResult(result));
}
```

Use an existing page (one Oxylabs session; the callback's page is closed afterwards):

```javascript
import { testPage, withOxylabsPage } from './.agents/skills/oxylabs-testing/scripts/oxylabs.mjs';

const result = await withOxylabsPage('de', { device: 'mobile' }, async (page) => {
    const result = await testPage(page, 'https://www.wohnen.de/', 'de');
    await page.screenshot({ path: 'test-results/oxylabs/after-de-mobile.png' });
    return result;
});
```

## API

- `testUrl(url, regionKey, options?)` — open an Oxylabs session in the region, run autoconsent, screenshot, close; returns a `TestResult`.
- `testRegions(url, regions?, options?)` — `testUrl` for each region (defaults to `CORE_REGIONS`), a fresh session per region.
- `testPage(page, url, regionKey, options?)` — run a full test on a page from an Oxylabs session you opened.
- `withOxylabsPage(regionKey, options, fn)` — open a session, call `fn(page)`, close the session; returns what `fn` returns. Throws if the session cannot be opened.
- `connectOxylabs(regionKey, options?)` — the raw Playwright `Browser` (`chromium.connectOverCDP`). Close it yourself.
- `injectAutoconsent(page, options?)` — low level; call before `page.goto()`. Returns the `proxy-testing` context plus `captcha` (`{ detected, solved }`, the Oxylabs solver state) and `captchaPromise` (resolves when solving ends).
- `isOxylabsConfigured()` — whether `OXYLABS_USER` and `OXYLABS_PASSWORD` are set.
- `formatResult(result)`, `CORE_REGIONS`, `EXPANDED_REGIONS`, `ALL_REGIONS` — same as `proxy-testing`.

Options: everything `testPage` takes in `proxy-testing` (`action`, `screenshotsDir`, `navigationTimeout`, `completionTimeout`, `detectionTimeout`), plus:

| Option | Default | Description |
|--------|---------|-------------|
| `device` | `'desktop'` | `'desktop' \| 'mobile'` — sets [`?p_device=`](https://developers.oxylabs.io/products/agent-browser/device-type) (viewport, touch, headers, User-Agent). Use it for mobile tests instead of Playwright device descriptors, which would contradict the Oxylabs fingerprint. |
| `solveCaptcha` | `true` | Sends [`?solve_captcha=true`](https://developers.oxylabs.io/products/agent-browser/captcha-handling) so Oxylabs solves captchas on the page, and waits for the solver (see Gotchas). Our account has captcha solving enabled; an account without it gets HTTP 400 for every session. |

Screenshots default to `test-results/oxylabs`, named `<domain>-<region>-oxylabs-final.jpg`.

## Regions

Any two-letter country code maps to `?p_cc=` (e.g. `de` → `p_cc=DE`), per the [geolocation docs](https://developers.oxylabs.io/products/agent-browser/geolocation-and-proxy-selection). State- and city-targeted keys (`OXYLABS_LOCAL_REGIONS`):

| Key | Location | Query params |
|-----|----------|--------------|
| `us-california` | United States (California) | `p_state=california` |
| `us-newyork` | United States (New York) | `p_cc=US&p_city=new_york` |
| `us-losangeles` | United States (Los Angeles) | `p_cc=US&p_city=los_angeles` |

## Architecture

Injection and result collection are shared with `proxy-testing` in [.agents/lib/regional-testing/harness.mjs](../../lib/regional-testing/harness.mjs): autoconsent runs in an isolated world of every frame (including out-of-process iframes) and talks to Node over CDP bindings, and `eval` snippets run in the page's main world. The isolated-world transport itself is [playwright/isolated-world.mjs](../../../playwright/isolated-world.mjs), which the Playwright E2E runner also uses for Chromium. The Oxylabs connection and the captcha tracking live in [playwright/oxylabs.mjs](../../../playwright/oxylabs.mjs), shared with the E2E runner's Oxylabs pass in CI.

With captcha solving on, a listener in autoconsent's isolated world forwards the Oxylabs runtime's captcha `window` messages to Node over the same CDP binding, so they arrive even if the page navigates right after.

## Gotchas

- **CAPTCHA events arrive via `window.postMessage`, not CDP.** With captcha solving on, autoconsent's wait pauses whenever a start event arrives, until `oxylabs-captcha-end`, `oxylabs-captcha-solve-end` or `oxylabs-captcha-error`, for at most 60s from the first start (the timeout in Oxylabs' example). Oxylabs documents no deadline for the start event, so captcha-free pages aren't held up waiting for one. Agent Browser sends `oxylabs-captcha-solve-start` with a `captchaType` (e.g. `turnstile`); the documented `oxylabs-captcha-start` is accepted too. A Cloudflare Turnstile took about 35-40s to solve. Hard blocks without a captcha (e.g. DataDome "Access is temporarily restricted", Akamai "Access denied") send no events, so solving doesn't help there.
- **Main-world CDP bindings don't work on Agent Browser.** `page.exposeBinding`, and `Runtime.addBinding` without `executionContextName`, never reach the page. Bindings scoped to an isolated world (what the harness uses) work, and `window` messages reach isolated-world listeners, so listen there.
- **Limits:** 100 concurrent sessions and 10 new sessions per second per account. Going over the per-second limit fails `connectOverCDP` with `WebSocket error: ... 429 Too Many Requests`, and the library does not retry it. `testRegions` opens sessions one at a time, but a script that opens sessions in parallel (several `withOxylabsPage` calls in a `Promise.all`, or several such scripts at once) can easily send 10 within a second. Stagger the session opens (for example 200ms apart), and rerun any test that failed with a 429. A 429 is not a result about the site.
- **Call injection before `page.goto`**, so autoconsent is in place before page scripts run.
- **Oxylabs blocks certain site categories** (e.g. government sites), and some sites block Oxylabs too: check the screenshots. Use alternative URLs for the same CMP, or retest as described in the `proxy-testing` gotchas.
- **Each region test creates a new browser session** — there's no session reuse across regions.
