---
name: proxy-testing
description: Test autoconsent rules across geographic regions with HTTPS regional proxies in Playwright. Use when verifying region-dependent CMP behavior with standard Playwright browsers and proxy authentication.
---

# Playwright HTTPS Regional Proxy Testing

Use this skill when testing autoconsent behavior from specific regions through an HTTPS proxy. These proxies are normal network proxies for locally launched Playwright browsers; they are not remote CDP browsers like Oxylabs.

Always use Playwright's built-in proxy authentication object. Do not embed credentials in the proxy URL, command line, screenshots, logs, or checked-in source.

This skill provides a JS library at [scripts/regional-proxy.mjs](scripts/regional-proxy.mjs). Prefer the library for ad hoc regional testing instead of rewriting proxy and autoconsent injection boilerplate.

## Prerequisites

Build the autoconsent assets before running rule tests:

```bash
npm run prepublish
```

Proxy endpoints are provided through environment variables or Cursor secrets, one endpoint per region. Credentials are shared across all regions:

```bash
export REGIONAL_PROXY_ENDPOINT_US="us.example.proxy.duckduckgo.com"
export REGIONAL_PROXY_ENDPOINT_DE="de.example.proxy.duckduckgo.com"
export REGIONAL_PROXY_ENDPOINT_FR="fr.example.proxy.duckduckgo.com"

export REGIONAL_PROXY_USERNAME="..."
export REGIONAL_PROXY_PASSWORD="..."
```

`REGIONAL_PROXY_ENDPOINT_<REGION>` values should be hostnames, without a scheme, credentials, or port. The Playwright proxy helper adds `https://` and port `443`.

## Proxy Configuration

The library's `buildProxyConfig(regionKey)` helper returns Playwright's native proxy object. It uses the HTTPS scheme in `server`, hardcodes port `443`, and passes credentials separately as `username` and `password`:

```javascript
import { buildProxyConfig } from './.agents/skills/proxy-testing/scripts/regional-proxy.mjs';

const proxy = buildProxyConfig('us');
```

Do not do this:

```javascript
// Avoid putting credentials in the URL. They can leak through process lists,
// Playwright traces, error messages, or shell history.
const proxy = {
    server: `https://${user}:${password}@${host}:443`,
};
```

## API

### `testUrl(url, regionKey, options?)` — highest level

Launches a local Playwright browser through the selected regional proxy, opens a page, injects autoconsent, navigates, waits for completion, screenshots, and closes. Returns a `TestResult`.

```javascript
import { testUrl, formatResult } from './.agents/skills/proxy-testing/scripts/regional-proxy.mjs';

const result = await testUrl('https://www.wohnen.de/', 'de');
console.log(formatResult(result));
```

Test one URL across multiple regions:

```javascript
import { testRegions, formatResult } from './.agents/skills/proxy-testing/scripts/regional-proxy.mjs';

const results = await testRegions('https://www.wohnen.de/', ['us', 'de', 'fr']);
for (const result of results) {
    console.log(formatResult(result));
}
```

### `testPage(page, url, regionKey, options?)` — mid level

Same autoconsent workflow, but takes an existing Playwright `Page`. Use this when managing the browser lifecycle yourself.

```javascript
import { launchRegionalProxyBrowser, testPage } from './.agents/skills/proxy-testing/scripts/regional-proxy.mjs';

const browser = await launchRegionalProxyBrowser('de');
const page = await browser.newPage();
const result = await testPage(page, 'https://www.wohnen.de/', 'de');
await browser.close();
```

### `injectAutoconsent(page, options?)` — low level

Sets up Playwright bindings and init scripts. Call before `page.goto()`. Returns an `AutoconsentContext`:

- `received` — array of all autoconsent messages
- `hasMessage(type)` — check if a message type was received
- `waitForCompletion(timeout?)` — wait for opt-in/opt-out/detection completion
- `waitForMessage(type, timeout?)` — wait for a specific message type
- `collectResult(url, region)` — aggregate messages into a `TestResult`

```javascript
import {
    injectAutoconsent,
    launchRegionalProxyBrowser,
} from './.agents/skills/proxy-testing/scripts/regional-proxy.mjs';

const browser = await launchRegionalProxyBrowser('de');
const page = await browser.newPage();
const ctx = await injectAutoconsent(page, { action: 'optOut' });
await page.goto('https://www.wohnen.de/', { waitUntil: 'commit' });
await ctx.waitForCompletion(45000);
const result = ctx.collectResult('https://www.wohnen.de/', 'de');
await browser.close();
```

### Options

| Option | Default | Description |
|--------|---------|-------------|
| `action` | `'optOut'` | `'optOut'`, `'optIn'`, or `null` |
| `screenshotsDir` | `test-results/regional-proxy` | Where to save final screenshots |
| `navigationTimeout` | `45000` | Navigation timeout (ms) |
| `completionTimeout` | `45000` | Wait for autoconsent to finish (ms) |
| `browserName` | `'chromium'` | `'chromium'`, `'firefox'`, or `'webkit'` |
| `headless` | `true` | Launch browser headless |
| `launchOptions` | `{}` | Extra Playwright launch options; proxy is supplied by the library |

`formatResult(result)` produces a one-line status per result: PASS, PARTIAL, ACTION FAILED, or NO CMP.

## One-off Browser Check

Use a small script to confirm that the proxy authenticates and changes browser egress before testing a CMP rule:

```javascript
import { launchRegionalProxyBrowser } from './.agents/skills/proxy-testing/scripts/regional-proxy.mjs';

const region = process.env.REGIONAL_PROXY_REGION || 'us';
const browser = await launchRegionalProxyBrowser(region);

const page = await browser.newPage();
await page.goto('https://api.ipify.org?format=json', { waitUntil: 'domcontentloaded', timeout: 30000 });
console.log(await page.textContent('body'));
await browser.close();
```

If the proxy rejects the connection, first check that `server` starts with `https://`, uses port `443`, and passes credentials via `username`/`password` rather than URL userinfo.

## Playwright Test Runner

For a single region, set `use.proxy` in a temporary or local-only Playwright config and select the region with `REGIONAL_PROXY_REGION`:

```typescript
import { defineConfig } from '@playwright/test';
import { buildProxyConfig } from './.agents/skills/proxy-testing/scripts/regional-proxy.mjs';

export default defineConfig({
    use: {
        proxy: buildProxyConfig(process.env.REGIONAL_PROXY_REGION || 'us'),
    },
});
```

Then run the specific CMP test:

```bash
npx playwright test tests/<cmp>.spec.ts --project chrome --config playwright.proxy.config.ts
```

For ad hoc checks, prefer a temporary script over changing the repo's default `playwright.config.ts`.

## Multiple Regions

Represent each region with a `REGIONAL_PROXY_ENDPOINT_<REGION>` variable, and create a fresh browser context or browser for each region. A fresh browser per region avoids proxy state, cookies, cache, and DNS reuse crossing regional boundaries.

```javascript
import { launchRegionalProxyBrowser } from './.agents/skills/proxy-testing/scripts/regional-proxy.mjs';

const REGIONS = ['us', 'de', 'fr'];

for (const region of REGIONS) {
    const browser = await launchRegionalProxyBrowser(region);

    const page = await browser.newPage();
    await page.goto('https://example.com/', { waitUntil: 'domcontentloaded' });
    console.log(region, await page.title());
    await browser.close();
}
```

## Autoconsent Rule Workflow

1. Run `npm run build-rules` after changing rule JSON.
2. Sanity-check each regional proxy with a neutral IP/geo endpoint.
3. Run the target Playwright spec through the proxy for each relevant region.
4. Inspect screenshots, not just the API result. A rule can report success while the popup remains visible.
5. Reload after dismissal and confirm the same rule does not keep matching, unless the rule is cosmetic-only.
6. Keep proxy credentials in environment variables; never commit them.

## Gotchas

- HTTPS proxy server URLs need the `https://` scheme. `http://` and `socks://` can route differently and may not exercise the intended regional proxy.
- Use `proxy.username` and `proxy.password` so Playwright handles `Proxy-Authorization`.
- Call `injectAutoconsent(page)` before `page.goto()` so the init script is installed before page scripts run.
- Do not pass proxy credentials via `--proxy-server`, URL userinfo, or environment variables that third-party tooling logs automatically.
- Region endpoints are separate, but `REGIONAL_PROXY_USERNAME` and `REGIONAL_PROXY_PASSWORD` are shared across regions.
- Prefer Chrome/Chromium for initial proxy debugging because proxy errors are usually clearer there.
- Some sites localize by account, cookies, Accept-Language, or browser geolocation in addition to IP. Clear state between regions and only add locale/geolocation settings intentionally.
- A proxy can authenticate successfully while the target site blocks the proxy's egress IP. Verify with more than one test URL before concluding the Playwright proxy setup is broken.
