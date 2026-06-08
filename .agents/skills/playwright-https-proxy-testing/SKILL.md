---
name: playwright-https-proxy-testing
description: Test autoconsent rules across geographic regions with HTTPS regional proxies in Playwright. Use when verifying region-dependent CMP behavior with standard Playwright browsers and proxy authentication.
---

# Playwright HTTPS Regional Proxy Testing

Use this skill when testing autoconsent behavior from specific regions through an HTTPS proxy. These proxies are normal network proxies for locally launched Playwright browsers; they are not remote CDP browsers like Oxylabs.

Always use Playwright's built-in proxy authentication object. Do not embed credentials in the proxy URL, command line, screenshots, logs, or checked-in source.

## Prerequisites

Build the autoconsent assets before running rule tests:

```bash
npm run prepublish
```

Provide proxy details through environment variables or Cursor secrets:

```bash
export AC_PROXY_HOST="example.proxy.duckduckgo.com"
export AC_PROXY_PORT="443"
export AC_PROXY_USER="..."
export AC_PROXY_PASSWORD="..."
```

## Proxy Configuration

Use the HTTPS scheme in `server`, and pass credentials separately as `username` and `password`:

```javascript
const proxy = {
    server: `https://${process.env.AC_PROXY_HOST}:${process.env.AC_PROXY_PORT || '443'}`,
    username: process.env.AC_PROXY_USER,
    password: process.env.AC_PROXY_PASSWORD,
};
```

Do not do this:

```javascript
// Avoid putting credentials in the URL. They can leak through process lists,
// Playwright traces, error messages, or shell history.
const proxy = {
    server: `https://${user}:${password}@${host}:443`,
};
```

## One-off Browser Check

Use a small script to confirm that the proxy authenticates and changes browser egress before testing a CMP rule:

```javascript
import { chromium } from 'playwright';

const browser = await chromium.launch({
    headless: true,
    proxy: {
        server: `https://${process.env.AC_PROXY_HOST}:${process.env.AC_PROXY_PORT || '443'}`,
        username: process.env.AC_PROXY_USER,
        password: process.env.AC_PROXY_PASSWORD,
    },
});

const page = await browser.newPage();
await page.goto('https://api.ipify.org?format=json', { waitUntil: 'domcontentloaded', timeout: 30000 });
console.log(await page.textContent('body'));
await browser.close();
```

If the proxy rejects the connection, first check that `server` starts with `https://`, the port is correct, and the credentials are passed via `username`/`password` rather than URL userinfo.

## Playwright Test Runner

For a single region, set `use.proxy` in a temporary or local-only Playwright config:

```typescript
import { defineConfig } from '@playwright/test';

export default defineConfig({
    use: {
        proxy: {
            server: `https://${process.env.AC_PROXY_HOST}:${process.env.AC_PROXY_PORT || '443'}`,
            username: process.env.AC_PROXY_USER,
            password: process.env.AC_PROXY_PASSWORD,
        },
    },
});
```

Then run the specific CMP test:

```bash
npx playwright test tests/<cmp>.spec.ts --project chrome --config playwright.proxy.config.ts
```

For ad hoc checks, prefer a temporary script over changing the repo's default `playwright.config.ts`.

## Multiple Regions

Represent each region as host/port metadata, and create a fresh browser context or browser for each region. A fresh browser per region avoids proxy state, cookies, cache, and DNS reuse crossing regional boundaries.

```javascript
import { chromium } from 'playwright';

const REGIONAL_PROXIES = {
    us: { host: process.env.AC_PROXY_US_HOST, port: process.env.AC_PROXY_US_PORT || '443' },
    de: { host: process.env.AC_PROXY_DE_HOST, port: process.env.AC_PROXY_DE_PORT || '443' },
    fr: { host: process.env.AC_PROXY_FR_HOST, port: process.env.AC_PROXY_FR_PORT || '443' },
};

for (const [region, proxyTarget] of Object.entries(REGIONAL_PROXIES)) {
    if (!proxyTarget.host) continue;

    const browser = await chromium.launch({
        headless: true,
        proxy: {
            server: `https://${proxyTarget.host}:${proxyTarget.port}`,
            username: process.env.AC_PROXY_USER,
            password: process.env.AC_PROXY_PASSWORD,
        },
    });

    const page = await browser.newPage();
    await page.goto('https://example.com/', { waitUntil: 'domcontentloaded' });
    console.log(region, await page.title());
    await browser.close();
}
```

## Autoconsent Rule Workflow

1. Run `npm run build-rules` after changing rule JSON.
2. Sanity-check the proxy with a neutral IP/geo endpoint.
3. Run the target Playwright spec through the proxy for each relevant region.
4. Inspect screenshots, not just the API result. A rule can report success while the popup remains visible.
5. Reload after dismissal and confirm the same rule does not keep matching, unless the rule is cosmetic-only.
6. Keep proxy credentials in environment variables; never commit them.

## Gotchas

- HTTPS proxy server URLs need the `https://` scheme. `http://` and `socks://` can route differently and may not exercise the intended regional proxy.
- Use `proxy.username` and `proxy.password` so Playwright handles `Proxy-Authorization`.
- Do not pass proxy credentials via `--proxy-server`, URL userinfo, or environment variables that third-party tooling logs automatically.
- Prefer Chrome/Chromium for initial proxy debugging because proxy errors are usually clearer there.
- Some sites localize by account, cookies, Accept-Language, or browser geolocation in addition to IP. Clear state between regions and only add locale/geolocation settings intentionally.
- A proxy can authenticate successfully while the target site blocks the proxy's egress IP. Verify with more than one test URL before concluding the Playwright proxy setup is broken.
