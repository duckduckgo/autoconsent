/**
 * Playwright regional proxy utilities for multi-region autoconsent testing.
 *
 * Launches a local Chromium browser with a proxy selected by region, injects
 * autoconsent into an isolated world (via CDP), and evaluates opt-out/opt-in flows.
 * Chromium only - isolated worlds are reached through CDP, which Playwright exposes for
 * Chromium alone.
 *
 * Requires env vars:
 * - REGIONAL_PROXY_<REGION> (REGION is the uppercased two-letter region code): a complete proxy URL
 * - REGIONAL_PROXY_USERNAME and REGIONAL_PROXY_PASSWORD (optional, used for https:// proxies only)
 */

/**
 * @typedef {import('playwright').Page} Page
 * @typedef {import('playwright').Browser} Browser
 * @typedef {import('playwright').LaunchOptions} LaunchOptions
 * @typedef {import('../../../lib/regional-testing/harness.mjs').TestResult} TestResult
 * @typedef {import('../../../lib/regional-testing/harness.mjs').AutoconsentContext} AutoconsentContext
 * @typedef {import('../../../lib/regional-testing/harness.mjs').Provider} Provider
 */

/**
 * @typedef {Object} RegionalProxyOptions
 * @property {boolean} [headless=true]
 * @property {LaunchOptions} [launchOptions]
 */

/**
 * @typedef {import('../../../lib/regional-testing/harness.mjs').TestOptions & RegionalProxyOptions} TestOptions
 */

import path from 'path';
import { chromium } from 'playwright';
import {
    CORE_REGIONS,
    emptyResult,
    injectAutoconsent as injectThrough,
    projectRoot,
    runTest,
} from '../../../lib/regional-testing/harness.mjs';
import { injectWithBindings } from '../../../lib/regional-testing/transports.mjs';

export { ALL_REGIONS, CORE_REGIONS, EXPANDED_REGIONS, formatResult } from '../../../lib/regional-testing/harness.mjs';

/**
 * Build the Playwright proxy object for a region.
 * @param {string} regionKey - Two-letter region code (e.g. 'us', 'gb').
 * @param {NodeJS.ProcessEnv} [env]
 * @returns {{ server: string, username?: string, password?: string }}
 */
export function buildProxyConfig(regionKey, env = process.env) {
    const envVar = `REGIONAL_PROXY_${regionKey.toUpperCase()}`;
    const endpoint = env[envVar];
    const username = env.REGIONAL_PROXY_USERNAME;
    const password = env.REGIONAL_PROXY_PASSWORD;

    if (!endpoint) {
        throw new Error(`Missing proxy environment variable for region "${regionKey}". Expected ${envVar}.`);
    }
    if (!endpoint.includes('://')) {
        throw new Error(`${envVar} must be a complete proxy URL (http://, https://, or socks5://).`);
    }
    const parsed = new URL(endpoint);
    if (!['http:', 'https:', 'socks5:'].includes(parsed.protocol)) {
        throw new Error(`${envVar} has unsupported proxy protocol "${parsed.protocol}".`);
    }
    if (parsed.username || parsed.password) {
        throw new Error(`${envVar} must not contain embedded proxy credentials.`);
    }
    // Credentials are only used for HTTPS proxies; Chromium cannot authenticate to SOCKS proxies.
    if (parsed.protocol === 'https:' && username && password) {
        return { server: endpoint, username, password };
    }
    return { server: endpoint };
}

/**
 * Launch a local Playwright browser through the proxy for a region.
 * @param {string} regionKey
 * @param {Partial<TestOptions>} [options]
 * @returns {Promise<Browser>}
 */
export async function launchRegionalProxyBrowser(regionKey, options = {}) {
    return chromium.launch({
        headless: options.headless ?? true,
        ...(options.launchOptions ?? {}),
        proxy: buildProxyConfig(regionKey),
    });
}

/**
 * Inject autoconsent into a page. Call before navigating to the target URL.
 *
 * The content script runs in an isolated world (via CDP) while `eval` snippets execute in
 * the page's main world, mirroring the browser extension. Chromium only.
 * @param {Page} page
 * @param {Partial<TestOptions>} [options]
 * @returns {Promise<AutoconsentContext>}
 */
export async function injectAutoconsent(page, options = {}) {
    return injectThrough(page, options, { transport: injectWithBindings, provider: 'regional-proxy' });
}

/** @type {Provider} */
const provider = {
    name: 'regional-proxy',
    defaultScreenshotsDir: path.join(projectRoot, 'test-results/regional-proxy'),
    inject: injectAutoconsent,
};

/**
 * Test a URL using an already-created Playwright page.
 * @param {Page} page
 * @param {string} url
 * @param {string} regionKey
 * @param {Partial<TestOptions>} [options]
 * @returns {Promise<TestResult>}
 */
export async function testPage(page, url, regionKey, options = {}) {
    return runTest(page, url, regionKey, options, provider);
}

/**
 * High-level: test a URL in a specific region.
 * Launches Playwright through the region proxy, injects autoconsent, waits for
 * results, screenshots, and closes the browser.
 * @param {string} url
 * @param {string} regionKey
 * @param {Partial<TestOptions>} [options]
 * @returns {Promise<TestResult>}
 */
export async function testUrl(url, regionKey, options = {}) {
    let browser = null;
    try {
        browser = await launchRegionalProxyBrowser(regionKey, options);
        const page = await browser.newPage();
        return await testPage(page, url, regionKey, options);
    } catch (e) {
        return emptyResult(url, regionKey, 'regional-proxy', e);
    } finally {
        try {
            await browser?.close();
        } catch {}
    }
}

/**
 * Test one URL across several regions.
 * @param {string} url
 * @param {string[]} [regions] Defaults to the core pass; pass EXPANDED_REGIONS or ALL_REGIONS to widen.
 * @param {Partial<TestOptions>} [options]
 * @returns {Promise<TestResult[]>}
 */
export async function testRegions(url, regions = CORE_REGIONS, options = {}) {
    const results = [];
    for (const region of regions) {
        results.push(await testUrl(url, region, options));
    }
    return results;
}
