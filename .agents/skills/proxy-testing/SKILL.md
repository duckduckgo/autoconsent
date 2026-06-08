---
name: proxy-testing
description: Test autoconsent rules across geographic regions with HTTPS proxies in Playwright. Use when verifying region-dependent CMP behavior or running regional browser checks with shared proxy credentials.
---

# Proxy Testing

Use this skill to test autoconsent behavior from specific regions through HTTPS proxies. It launches local Playwright browsers with a regional proxy selected by environment variables.

The reusable library lives at [scripts/regional-proxy.mjs](scripts/regional-proxy.mjs). Prefer it over writing one-off proxy and autoconsent injection code.

Always use Playwright's proxy auth object (`{ server, username, password }`). Do not put credentials in proxy URLs, command lines, screenshots, logs, or checked-in source.

## Prerequisites

Build the autoconsent assets before running rule tests:

```bash
npm run prepublish
```

Set one endpoint per region and shared credentials:

```bash
export REGIONAL_PROXY_ENDPOINT_US="us.example.proxy.duckduckgo.com"
export REGIONAL_PROXY_ENDPOINT_DE="de.example.proxy.duckduckgo.com"
export REGIONAL_PROXY_ENDPOINT_FR="fr.example.proxy.duckduckgo.com"

export REGIONAL_PROXY_USERNAME="..."
export REGIONAL_PROXY_PASSWORD="..."
```

`REGIONAL_PROXY_ENDPOINT_<REGION>` values must be bare hostnames: no scheme, credentials, or port. The library adds `https://` and port `443`.

## Quick Start

Test one URL from one region:

```javascript
import { formatResult, testUrl } from './.agents/skills/proxy-testing/scripts/regional-proxy.mjs';

const result = await testUrl('https://www.wohnen.de/', 'de');
console.log(formatResult(result));
```

Test one URL across regions:

```javascript
import { formatResult, testRegions } from './.agents/skills/proxy-testing/scripts/regional-proxy.mjs';

const results = await testRegions('https://www.wohnen.de/', ['us', 'de', 'fr']);
for (const result of results) {
    console.log(formatResult(result));
}
```

## API

### `testUrl(url, regionKey, options?)`

High-level helper. Launches a local Playwright browser through the regional proxy, opens a page, injects autoconsent, navigates, waits for completion, captures a final screenshot, closes the browser, and returns a `TestResult`.

### `testRegions(url, regions?, options?)`

Runs `testUrl` sequentially for each region. Defaults to `['us', 'gb', 'au', 'ca', 'de', 'fr', 'nl', 'ch', 'no']`.

### `testPage(page, url, regionKey, options?)`

Runs the same autoconsent workflow on an existing Playwright `Page`. Use this when managing browser lifecycle yourself.

```javascript
import { launchRegionalProxyBrowser, testPage } from './.agents/skills/proxy-testing/scripts/regional-proxy.mjs';

const browser = await launchRegionalProxyBrowser('de');
const page = await browser.newPage();
const result = await testPage(page, 'https://www.wohnen.de/', 'de');
await browser.close();
```

### `injectAutoconsent(page, options?)`

Low-level injection helper. Call before `page.goto()`. Returns an `AutoconsentContext`:

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

### `buildProxyConfig(regionKey)`

Returns Playwright's native proxy config:

```javascript
{
    server: 'https://<regional endpoint>:443',
    username: process.env.REGIONAL_PROXY_USERNAME,
    password: process.env.REGIONAL_PROXY_PASSWORD,
}
```

Do not embed credentials in the `server` URL:

```javascript
// Avoid this. Credentials can leak through process lists, traces, errors, or shell history.
const proxy = {
    server: `https://${user}:${password}@${host}:443`,
};
```

### `launchRegionalProxyBrowser(regionKey, options?)`

Launches a local Playwright browser with the region proxy already configured.

### `formatResult(result)`

Formats a `TestResult` as `PASS`, `PARTIAL`, `ACTION FAILED`, or `NO CMP`, with details and screenshot paths.

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

## Proxy Smoke Test

Confirm that the proxy authenticates and changes browser egress before testing a CMP rule:

```javascript
import { launchRegionalProxyBrowser } from './.agents/skills/proxy-testing/scripts/regional-proxy.mjs';

const region = process.env.REGIONAL_PROXY_REGION || 'us';
const browser = await launchRegionalProxyBrowser(region);

const page = await browser.newPage();
await page.goto('https://api.ipify.org?format=json', { waitUntil: 'domcontentloaded', timeout: 30000 });
console.log(await page.textContent('body'));
await browser.close();
```

If the proxy rejects the connection, check that:

- `REGIONAL_PROXY_ENDPOINT_<REGION>` is a bare hostname.
- The generated proxy server starts with `https://` and uses port `443`.
- Credentials are passed via `username` and `password`, not URL userinfo.

## Playwright Test Runner

For a single region, use a temporary or local-only Playwright config:

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

## Autoconsent Rule Workflow

1. Run `npm run build-rules` after changing rule JSON.
2. Sanity-check each regional proxy with a neutral IP/geo endpoint.
3. Run the target Playwright spec through the proxy for each relevant region.
4. Inspect screenshots, not just the API result. A rule can report success while the popup remains visible.
5. Reload after dismissal and confirm the same rule does not keep matching, unless the rule is cosmetic-only.
6. Keep proxy credentials in environment variables; never commit them.

## Gotchas

- HTTPS proxy server URLs need the `https://` scheme. `http://` and `socks://` can route differently and may not exercise the intended regional proxy.
- Use `proxy.username` and `proxy.password`; Playwright will handle `Proxy-Authorization`.
- Call `injectAutoconsent(page)` before `page.goto()` so the init script is installed before page scripts run.
- Use a fresh browser per region to avoid leaking proxy state, cookies, cache, or DNS reuse across regions.
- Do not pass proxy credentials via `--proxy-server`, URL userinfo, or environment variables that third-party tooling logs automatically.
- Region endpoints are separate, but `REGIONAL_PROXY_USERNAME` and `REGIONAL_PROXY_PASSWORD` are shared across regions.
- Prefer Chrome/Chromium for initial proxy debugging because proxy errors are usually clearer there.
- Some sites localize by account, cookies, Accept-Language, or browser geolocation in addition to IP. Clear state between regions and only add locale/geolocation settings intentionally.
- A proxy can authenticate successfully while the target site blocks the proxy's egress IP. Verify with more than one test URL before concluding the Playwright proxy setup is broken.
