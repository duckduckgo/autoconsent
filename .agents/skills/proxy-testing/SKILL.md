---
name: proxy-testing
description: Test autoconsent via regional proxies in Playwright. Use when verifying rule changes across regions (US, EU, UK, etc.), or investigating region-dependent CMP behavior.
---

# Proxy Testing

All rule changes must be tested across ALL supported geographic regions to catch regional popup variations. This skill provides a JS library to run autoconsent via regional proxies in Playwright.

Important! Autoconsent results can have false positives. When testing, always inspect the screenshots and confirm that opt-out was successful.

## Prerequisites

```bash
npm run prepublish # builds dist/autoconsent.playwright.js and rules/rules.json
```

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

- `testUrl(url, regionKey, options?)`
- `testRegions(url, regions?, options?)`
- `testPage(page, url, regionKey, options?)`
- `injectAutoconsent(page, options?)` — call before `page.goto()`
- `buildProxyConfig(regionKey)`
- `launchRegionalProxyBrowser(regionKey, options?)`
- `formatResult(result)`

Options: `action`, `screenshotsDir`, `navigationTimeout`, `completionTimeout`, `detectionTimeout`, `headless`, `launchOptions`.

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
3. Test relevant regions.
4. Inspect screenshots, not just API results.
5. Reload after dismissal and confirm the rule does not keep matching, unless cosmetic-only.

## Gotchas

- Use Playwright's proxy auth object: `{ server, username, password }`.
- Never embed proxy credentials in URLs, command lines, logs, traces, or source.
- Call `injectAutoconsent(page)` before `page.goto()` so the init script is installed before page scripts run.
- The content script runs in an isolated world (via CDP) and `eval` snippets run in the page's main world, matching the extension. Chromium only.
- Use a fresh browser per region to avoid leaking proxy state, cookies, cache, or DNS.
- Some sites localize by more than IP; only add locale/geolocation settings intentionally.
