/**
 * Oxylabs Agent Browser utilities for multi-region autoconsent testing.
 * Docs: https://developers.oxylabs.io/products/agent-browser
 *
 * Connects to Oxylabs CDP browsers, injects autoconsent into an isolated world, and evaluates
 * opt-out/opt-in flows across geographic regions. For sites that show our regional proxies a
 * bot wall; the `proxy-testing` skill is the default.
 *
 * Requires env vars: OXYLABS_USER, OXYLABS_PASSWORD.
 * Optional: OXYLABS_HOST (defaults to hb.oxylabs.io).
 */

/**
 * @typedef {import('playwright').Page} Page
 * @typedef {import('../../../lib/regional-testing/harness.mjs').TestResult} TestResult
 * @typedef {import('../../../lib/regional-testing/harness.mjs').AutoconsentContext} AutoconsentContext
 * @typedef {import('../../../lib/regional-testing/harness.mjs').Provider} Provider
 */

/**
 * @typedef {import('../../../../playwright/oxylabs.mjs').OxylabsBrowserOptions} OxylabsBrowserOptions
 */

/**
 * @typedef {import('../../../lib/regional-testing/harness.mjs').TestOptions & OxylabsBrowserOptions} TestOptions
 */

/**
 * @typedef {AutoconsentContext & {
 *   captcha: { detected: boolean, solved: boolean|null },
 *   captchaPromise: Promise<void>,
 * }} OxylabsAutoconsentContext - `captcha` reflects the Oxylabs solver state; `captchaPromise` resolves when solving ends (success or error). With `solveCaptcha`, `waitForCompletion` pauses while a captcha is being solved.
 */

import path from 'path';
import { connectOxylabs, createCaptchaTracker, redactCredentials } from '../../../../playwright/oxylabs.mjs';
import {
    CORE_REGIONS,
    emptyResult,
    injectAutoconsent as injectThrough,
    projectRoot,
    runTest,
} from '../../../lib/regional-testing/harness.mjs';

export { ALL_REGIONS, CORE_REGIONS, EXPANDED_REGIONS, formatResult } from '../../../lib/regional-testing/harness.mjs';
export {
    OXYLABS_LOCAL_REGIONS,
    buildOxylabsEndpoint,
    connectOxylabs,
    isOxylabsConfigured,
    oxylabsRegionParams,
    redactCredentials,
} from '../../../../playwright/oxylabs.mjs';

/**
 * @param {TestResult} result
 * @returns {TestResult}
 */
function redactResult(result) {
    result.errors = result.errors.map((e) => redactCredentials(e));
    return result;
}

/**
 * Inject autoconsent into a page's isolated world via CDP and, unless `solveCaptcha` is false, forward
 * Oxylabs captcha events to the Node side. Call BEFORE navigating to the target URL.
 * @param {Page} page
 * @param {Partial<TestOptions>} [options]
 * @returns {Promise<OxylabsAutoconsentContext>}
 */
export async function injectAutoconsent(page, options = {}) {
    const tracker = createCaptchaTracker();
    /** @type {import('../../../lib/regional-testing/harness.mjs').IsolatedWorldExtension} */
    const captchaListener = { script: tracker.script, onMessage: tracker.handleMessage };
    const ctx = await injectThrough(page, options, 'oxylabs', (options.solveCaptcha ?? true) ? captchaListener : {});
    return {
        ...ctx,
        waitForCompletion: (timeout, detectionTimeout) => ctx.waitForCompletion(timeout, detectionTimeout, tracker.isSolving),
        captcha: tracker.state,
        captchaPromise: tracker.done,
    };
}

/** @type {Provider} */
const provider = {
    name: 'oxylabs',
    defaultScreenshotsDir: path.join(projectRoot, 'test-results/oxylabs'),
    screenshotTag: 'oxylabs',
    inject: injectAutoconsent,
};

/**
 * Test a URL using an already-connected page.
 * @param {Page} page
 * @param {string} url
 * @param {string} regionKey
 * @param {Partial<TestOptions>} [options]
 * @returns {Promise<TestResult>}
 */
export async function testPage(page, url, regionKey, options = {}) {
    return redactResult(await runTest(page, url, regionKey, options, provider));
}

/**
 * Run `fn` on a page of a fresh Oxylabs session for a region, then close the session. Throws if
 * the session cannot be opened.
 * @template T
 * @param {string} regionKey
 * @param {OxylabsBrowserOptions} options
 * @param {(page: Page) => Promise<T>} fn
 * @returns {Promise<T>}
 */
export async function withOxylabsPage(regionKey, options, fn) {
    const browser = await connectOxylabs(regionKey, { device: options.device, solveCaptcha: options.solveCaptcha });
    try {
        return await fn(await browser.newPage());
    } finally {
        try {
            await browser.close();
        } catch {}
    }
}

/**
 * High-level: test a URL in a specific region.
 * Connects to Oxylabs, injects autoconsent, waits for results, screenshots, and closes.
 * @param {string} url
 * @param {string} regionKey
 * @param {Partial<TestOptions>} [options]
 * @returns {Promise<TestResult>}
 */
export async function testUrl(url, regionKey, options = {}) {
    try {
        return await withOxylabsPage(regionKey, options, (page) => testPage(page, url, regionKey, options));
    } catch (e) {
        return redactResult(emptyResult(url, regionKey, 'oxylabs', e));
    }
}

/**
 * Test one URL across several regions, a fresh Oxylabs session per region.
 * @param {string} url
 * @param {string[]} [regions] Defaults to the core pass.
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
