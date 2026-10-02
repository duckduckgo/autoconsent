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
| `solveCaptcha` | `false` | Sends [`?solve_captcha=true`](https://developers.oxylabs.io/products/agent-browser/captcha-handling) so Oxylabs solves captchas on the page, and waits for the solver (see Gotchas). Accounts without the feature get HTTP 400 for every session, so leave it off unless captcha solving is enabled. |

Screenshots default to `test-results/oxylabs`, named `<domain>-<region>-oxylabs-final.jpg`.

## Regions

Any two-letter country code maps to `?p_cc=` (e.g. `de` → `p_cc=DE`), per the [geolocation docs](https://developers.oxylabs.io/products/agent-browser/geolocation-and-proxy-selection). State- and city-targeted keys (`OXYLABS_LOCAL_REGIONS`):

| Key | Location | Query params |
|-----|----------|--------------|
| `us-california` | United States (California) | `p_state=california` |
| `us-newyork` | United States (New York) | `p_cc=US&p_city=new_york` |
| `us-losangeles` | United States (Los Angeles) | `p_cc=US&p_city=los_angeles` |

## Architecture

Injection and result collection are shared with `proxy-testing` in [.agents/lib/regional-testing/harness.mjs](../../lib/regional-testing/harness.mjs): autoconsent runs in an isolated world of every frame (including out-of-process iframes) and talks to Node over CDP bindings, and `eval` snippets run in the page's main world. This skill only adds the Oxylabs connection and the captcha handling.

With `solveCaptcha: true`, an init script listens for the Oxylabs runtime's `window` messages and forwards captcha events to Node through a page binding (`page.exposeBinding`).

## Gotchas

- **CAPTCHA events arrive via `window.postMessage`, not CDP.** With `solveCaptcha: true`, `testPage` waits up to 5s after navigation for `oxylabs-captcha-start`. If one arrives, it blocks until `oxylabs-captcha-end` or `oxylabs-captcha-error`, capped at 60s (Oxylabs' documented solve time). That adds ~5s on captcha-free pages. The older `oxylabs-captcha-solve-*` names are still accepted.
- **Limits:** 100 concurrent sessions and 10 new sessions per second per account.
- **Call injection before `page.goto`**, so autoconsent is in place before page scripts run.
- **Oxylabs blocks certain site categories** (e.g. government sites), and some sites block Oxylabs too: check the screenshots. Use alternative URLs for the same CMP, or retest as described in the `proxy-testing` gotchas.
- **Each region test creates a new browser session** — there's no session reuse across regions.
