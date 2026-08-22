---
name: proxy-testing
description: Test autoconsent via regional proxies in Playwright. Use when verifying rule changes across regions (US, EU, UK, etc.), or investigating region-dependent CMP behavior.
---

# Proxy Testing
This skill provides a JS library to run autoconsent via regional proxies in Playwright.

Rule changes are verified with a two-level regional policy.
The **core region set** (default for detection, iteration, and verification) covers `us` (CCPA), `gb` (UK GDPR), `de` (EEA GDPR), plus the reported region from the task when specified (if the reported region is not a supported proxy region, use the closest supported one, e.g. `es` for `pt`). Iterate in the single most relevant region; run the full core set once when the fix is stable.

Escalate to the **expanded set** (`us`, `gb`, `de`, `fr`, `nl`, `pl`, `au`, `ca`, `jp`) if any of these is true:
- core results diverge
- the rule contains region-dependent logic
- the fix relies on language-specific or brittle structural selectors
- the change touches a widely-used generic rule (as final pre-PR validation)
- a non-core region named in the report behaves differently.

The remaining GDPR/EEA regions (`ch`, `no`, `it`, `es`, `se`, `dk`) are optional even in an expanded pass: test them only when named in the report or clearly relevant (e.g. the site's ccTLD).

Important! Autoconsent results can have false positives. When testing, always inspect the screenshots and confirm that opt-out was successful.

Browsers run **headed** by default to get past botwalls (see [Botwalls](#botwalls)).

## Prerequisites

```bash
npm run prepublish # builds dist/autoconsent.playwright.js and rules/rules.json
```

Headed browsers need an X display. The library uses `$DISPLAY` when one is available and otherwise
starts an `Xvfb` server itself, so no setup is normally required. If neither is available it warns and
falls back to headless, which is much more likely to be blocked.

Environment variables:

- `REGIONAL_PROXY_<TWO_LETTER_REGION_CODE>` (for example, `REGIONAL_PROXY_US`, `REGIONAL_PROXY_GB`, `REGIONAL_PROXY_AU`, etc.) - the domain endpoint
- `REGIONAL_PROXY_USERNAME`
- `REGIONAL_PROXY_PASSWORD`

- Endpoints must be bare hostnames: no scheme, credentials, or port.
- The library adds `https://` and port `443`.
- Credentials are shared across regions.

## Usage

Test one URL:

```javascript
import { formatResult, testUrl } from './.agents/skills/proxy-testing/scripts/regional-proxy.mjs';

const result = await testUrl('https://www.wohnen.de/', 'de');
console.log(formatResult(result));
```

Test multiple regions:

```javascript
import { formatResult, testRegions } from './.agents/skills/proxy-testing/scripts/regional-proxy.mjs';

const results = await testRegions('https://www.wohnen.de/', ['us', 'de', 'fr']);
for (const result of results) {
    console.log(formatResult(result));
}
```

Use an existing page:

```javascript
import { launchRegionalProxyBrowser, testPage } from './.agents/skills/proxy-testing/scripts/regional-proxy.mjs';

const browser = await launchRegionalProxyBrowser('de');
const page = await browser.newPage();
const result = await testPage(page, 'https://www.wohnen.de/', 'de');
await browser.close();
```

Get proxy config for Playwright Test:

```javascript
import { defineConfig } from '@playwright/test';
import { buildProxyConfig } from './.agents/skills/proxy-testing/scripts/regional-proxy.mjs';

export default defineConfig({
    use: {
        proxy: buildProxyConfig('us'),
    },
});
```

## API

- `testUrl(url, regionKey, options?)` — test one URL in a single region; launches a proxied browser, runs autoconsent, returns a `TestResult`.
- `testRegions(url, regions?, options?)` — test one URL across several regions (defaults to `CORE_REGIONS`), a fresh browser per region; returns `TestResult[]`. Remember to include the reported region when not already covered.
- `CORE_REGIONS` — the core region set (default); add the reported region when not already covered.
- `EXPANDED_REGIONS` — the expanded region set used on escalation.
- `ALL_REGIONS` — all supported regions.
- `testPage(page, url, regionKey, options?)` — run a full test on a page you created yourself (you own the browser/context); returns a `TestResult`.
- `injectAutoconsent(page, options?)` — set up isolated-world injection; call before `page.goto()`. Returns a context (`received`, `hasMessage`, `waitForCompletion`, `waitForMessage`, `collectResult`).
- `buildProxyConfig(regionKey)` — build the Playwright `{ server, username, password }` proxy object for a region from its env vars.
- `launchRegionalProxyBrowser(regionKey, options?)` — launch a Chromium browser routed through the region's proxy.
- `ensureDisplay()` — resolve an X display for headed browsers, starting `Xvfb` if needed; returns the display string or `null`. Called automatically by the launcher.
- `formatResult(result)` — format a `TestResult` as a human-readable summary line.

Options (all optional):

- `action` — `'optOut'` (default), `'optIn'`, or `null` to only detect (no opt-out/opt-in performed).
- `screenshotsDir` — directory for the final screenshots (default: `test-results/regional-proxy`).
- `navigationTimeout` — `page.goto` timeout in ms (default `45000`).
- `completionTimeout` — max wait for autoconsent to finish opt-out/opt-in in ms (default `45000`).
- `detectionTimeout` — max wait for `cmpDetected` before giving up (default: `completionTimeout`).
- `headless` — run Chromium headless (default `false`). Only set it for sites that are not botwalled.
- `launchOptions` — extra options merged into `chromium.launch()` (e.g. `args`, `channel`); `headless`, `args`, and the regional `proxy` are applied on top.

## Botwalls

Datacenter proxy IPs attract bot protection, and headless Chromium makes it worse: the UA contains
`HeadlessChrome`, `navigator.plugins` is empty, and `window.chrome` is missing. Headed Chromium (the
default) fixes all three, and the launcher also passes `--disable-blink-features=AutomationControlled`
so `navigator.webdriver` is `false`. In practice this is enough to get through most Cloudflare,
DataDome, and PerimeterX interstitials that block headless runs.

A blocked page produces "no CMP detected", which is easy to misread as "this region shows no banner",
so every result carries a `botwall` field describing the signals found (blocking status code,
challenge titles, known vendor challenge elements). `formatResult` reports those runs as `BOTWALL?`.

If a site is still blocked:

1. Look at the screenshot to confirm it is a block and not an empty page.
2. Retry — challenges are often intermittent — or try another region's proxy.
3. Use a locally installed Google Chrome, which reports real Chrome branding in UA-CH:

```javascript
await testUrl('https://example.com/', 'de', { launchOptions: { channel: 'chrome' } });
```

Some blocks are pure IP reputation and cannot be worked around here. Treat those runs as
inconclusive rather than as evidence about the rule, and verify the site in another region.

## Smoke Test

```javascript
import { launchRegionalProxyBrowser } from './.agents/skills/proxy-testing/scripts/regional-proxy.mjs';

const browser = await launchRegionalProxyBrowser('us');

const page = await browser.newPage();
await page.goto('https://api.ipify.org?format=json', { waitUntil: 'domcontentloaded', timeout: 30000 });
console.log(await page.textContent('body'));
await browser.close();
```

## Rule Checks

1. Run `npm run build-rules` after changing rule JSON.
2. Smoke-test each regional proxy.
3. Verify on the core region set (`us`, `gb`, `de` + reported region); escalate to the expanded set per the policy above.
4. Inspect screenshots, not just API results.
5. Reload after dismissal and confirm the rule does not keep matching, unless cosmetic-only.

## Gotchas

- Use Playwright's proxy auth object: `{ server, username, password }`.
- Never embed proxy credentials in URLs, command lines, logs, traces, or source.
- Call `injectAutoconsent(page)` before `page.goto()` so the init script is installed before page scripts run.
- The content script runs in an isolated world (via CDP) and `eval` snippets run in the page's main world, matching the extension. Chromium only.
- Use a fresh browser per region to avoid leaking proxy state, cookies, cache, or DNS.
- Some sites localize by more than IP; only add locale/geolocation settings intentionally.
- Headed browsers all share one display in a process. Windows overlap, which is harmless, but keep runs sequential when in doubt.
- A `BOTWALL?` result says nothing about the rule. Do not record it as a regional difference.
