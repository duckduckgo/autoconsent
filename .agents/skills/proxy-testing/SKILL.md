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

- `testUrl(url, regionKey, options?)` — test one URL in a single region; launches a proxied browser, runs autoconsent, returns a `TestResult`.
- `testRegions(url, regions?, options?)` — test one URL across several regions (defaults to `CORE_REGIONS`), a fresh browser per region; returns `TestResult[]`. Remember to include the reported region when not already covered.
- `CORE_REGIONS` — the core region set (default); add the reported region when not already covered.
- `EXPANDED_REGIONS` — the expanded region set used on escalation.
- `ALL_REGIONS` — all supported regions.
- `testPage(page, url, regionKey, options?)` — run a full test on a page you created yourself (you own the browser/context); returns a `TestResult`.
- `injectAutoconsent(page, options?)` — set up isolated-world injection; call before `page.goto()`. Returns a context (`received`, `hasMessage`, `waitForCompletion`, `waitForMessage`, `collectResult`).
- `buildProxyConfig(regionKey)` — build the Playwright `{ server, username, password }` proxy object for a region from its env vars.
- `launchRegionalProxyBrowser(regionKey, options?)` — launch a Chromium browser routed through the region's proxy.
- `launchRegionalProxyBrowserViaRelay(regionKey, options?)` — like `launchRegionalProxyBrowser`, but through a local relay that repairs an incomplete TLS chain on the region host. Use only when you hit the certificate-chain symptom below.
- `startRegionalProxyRelay(regionKey, env?)` — start the relay directly; returns `{ port, close() }`. `launchRegionalProxyBrowserViaRelay` calls this for you.
- `formatResult(result)` — format a `TestResult` as a human-readable summary line.

Options (all optional):

- `action` — `'optOut'` (default), `'optIn'`, or `null` to only detect (no opt-out/opt-in performed).
- `screenshotsDir` — directory for the final screenshots (default: `test-results/regional-proxy`).
- `navigationTimeout` — `page.goto` timeout in ms (default `45000`).
- `completionTimeout` — max wait for autoconsent to finish opt-out/opt-in in ms (default `45000`).
- `detectionTimeout` — max wait for `cmpDetected` before giving up (default: `completionTimeout`).
- `headless` — run Chromium headless (default `true`).
- `launchOptions` — extra options merged into `chromium.launch()` (e.g. `args`); the regional `proxy` is always applied on top.

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
- **Certificate-chain errors from a regional proxy** (`ERR_PROXY_CERTIFICATE_INVALID` when connecting directly, or `ERR_TUNNEL_CONNECTION_FAILED` / `UNABLE_TO_VERIFY_LEAF_SIGNATURE` when connecting through a relay in strict mode) mean the region host isn't sending its TLS intermediate certificate — confirmed for `dew.socks.duckduckgo.com` (region `de`): its chain is leaf-only, issuer `Let's Encrypt E7`, no intermediate. This is not a gateway/egress block (no `403`/`proxy_ip_not_allowed`; the CONNECT tunnel to the region host succeeds fine) and not something a plain retry fixes. Swap `launchRegionalProxyBrowser` for `launchRegionalProxyBrowserViaRelay` — it fetches the missing intermediate from the leaf certificate's own AIA URL and verifies against it plus Node's trusted roots, so the chain is completed rather than skipped. **Never fix this by disabling certificate verification** (e.g. `rejectUnauthorized: false`) — that was tested and confirmed to "work" only by exposing the proxy credentials (sent in the CONNECT's `Proxy-Authorization` header) to any on-path interceptor on that hop.
