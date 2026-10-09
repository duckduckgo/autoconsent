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
 * @typedef {import('playwright').Browser} Browser
 * @typedef {import('../../../lib/regional-testing/harness.mjs').TestResult} TestResult
 * @typedef {import('../../../lib/regional-testing/harness.mjs').AutoconsentContext} AutoconsentContext
 * @typedef {import('../../../lib/regional-testing/harness.mjs').Provider} Provider
 */

/**
 * @typedef {'desktop'|'mobile'} OxylabsDevice
 */

/**
 * @typedef {Object} OxylabsBrowserOptions
 * @property {OxylabsDevice} [device] - Oxylabs ?p_device= value. Oxylabs defaults to 'desktop'.
 * @property {boolean} [solveCaptcha=false] - Send ?solve_captcha=true: let Oxylabs solve captchas on the page. Needs the feature enabled on the account.
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
import { chromium } from 'playwright';
import {
    CORE_REGIONS,
    emptyResult,
    injectAutoconsent as injectThrough,
    projectRoot,
    runTest,
} from '../../../lib/regional-testing/harness.mjs';

export { ALL_REGIONS, CORE_REGIONS, EXPANDED_REGIONS, formatResult } from '../../../lib/regional-testing/harness.mjs';

/**
 * US state- and city-targeted region keys, in addition to any two-letter country code. Query params
 * follow https://developers.oxylabs.io/products/agent-browser/geolocation-and-proxy-selection
 * (`p_state` is US-only; `p_city` needs `p_cc` or `p_state`).
 * @type {Record<string, Record<string, string>>}
 */
export const OXYLABS_LOCAL_REGIONS = {
    'us-california': { p_state: 'california' },
    'us-newyork': { p_cc: 'US', p_city: 'new_york' },
    'us-losangeles': { p_cc: 'US', p_city: 'los_angeles' },
};

/**
 * @param {string} regionKey - A two-letter country code (e.g. 'de', 'pt') or a key of OXYLABS_LOCAL_REGIONS.
 * @returns {Record<string, string>}
 */
export function oxylabsRegionParams(regionKey) {
    if (Object.prototype.hasOwnProperty.call(OXYLABS_LOCAL_REGIONS, regionKey)) {
        return OXYLABS_LOCAL_REGIONS[regionKey];
    }
    if (/^[a-z]{2}$/i.test(regionKey)) {
        return { p_cc: regionKey.toUpperCase() };
    }
    throw new Error(
        `Unknown Oxylabs region "${regionKey}". Use a two-letter country code or one of: ${Object.keys(OXYLABS_LOCAL_REGIONS).join(', ')}`,
    );
}

/**
 * @param {NodeJS.ProcessEnv} [env]
 */
export function isOxylabsConfigured(env = process.env) {
    return Boolean(env.OXYLABS_USER && env.OXYLABS_PASSWORD);
}

/**
 * Build the Oxylabs CDP endpoint for a region. The result contains credentials: never log it.
 * @param {string} regionKey
 * @param {OxylabsBrowserOptions} [opts]
 * @param {NodeJS.ProcessEnv} [env]
 */
export function buildOxylabsEndpoint(regionKey, opts = {}, env = process.env) {
    const user = env.OXYLABS_USER;
    const password = env.OXYLABS_PASSWORD;
    const host = env.OXYLABS_HOST || 'hb.oxylabs.io';
    if (!user || !password) {
        throw new Error('Missing Oxylabs credentials. Set OXYLABS_USER and OXYLABS_PASSWORD.');
    }
    const params = new URLSearchParams(oxylabsRegionParams(regionKey));
    if (opts.device) {
        params.set('p_device', opts.device);
    }
    // Accounts without captcha solving get HTTP 400 for this param, so only send it when asked.
    if (opts.solveCaptcha) {
        params.set('solve_captcha', 'true');
    }
    // user/password are interpolated raw — Oxylabs expects literal characters in
    // userinfo (e.g. '+' must NOT be percent-encoded), matching their Python/JS
    // SDK examples. If your credentials contain ':' or '@', escape upstream.
    return `wss://${user}:${password}@${host}/?${params.toString()}`;
}

/**
 * Playwright puts the endpoint URL in connection error messages; strip the credentials.
 * @param {string} message
 * @param {NodeJS.ProcessEnv} [env]
 */
export function redactCredentials(message, env = process.env) {
    let out = message;
    for (const secret of [env.OXYLABS_PASSWORD, env.OXYLABS_USER]) {
        if (secret) out = out.split(secret).join('***');
    }
    return out;
}

/**
 * @param {TestResult} result
 * @returns {TestResult}
 */
function redactResult(result) {
    result.errors = result.errors.map((e) => redactCredentials(e));
    return result;
}

/**
 * Connect to an Oxylabs remote browser for a specific region.
 * @param {string} regionKey
 * @param {OxylabsBrowserOptions} [opts]
 * @returns {Promise<Browser>}
 */
export async function connectOxylabs(regionKey, opts = {}) {
    try {
        return await chromium.connectOverCDP(buildOxylabsEndpoint(regionKey, opts), { timeout: 30000 });
    } catch (e) {
        // The first line has the cause; the call log after it repeats the endpoint URL.
        const message = redactCredentials((e instanceof Error ? e.message : String(e)).split('\n')[0]);
        const hint = opts.solveCaptcha && message.includes('400') ? ' (is captcha solving enabled for this Oxylabs account?)' : '';
        throw new Error(message + hint);
    }
}

// Captcha events arrive as window messages from the Oxylabs runtime. A listener in autoconsent's
// isolated world forwards them over its CDP binding: Agent Browser drops main-world bindings, so
// page.exposeBinding can't deliver them. See https://developers.oxylabs.io/products/agent-browser/captcha-handling
const CAPTCHA_MESSAGE = 'oxylabsCaptcha';
// Agent Browser sends `oxylabs-captcha-solve-start`; the docs list `-start`, `-end`, `-solve-end` and `-error`.
const CAPTCHA_START_EVENTS = ['oxylabs-captcha-start', 'oxylabs-captcha-solve-start'];
const CAPTCHA_END_EVENTS = ['oxylabs-captcha-end', 'oxylabs-captcha-solve-end'];
const CAPTCHA_ERROR_EVENTS = ['oxylabs-captcha-error', 'oxylabs-captcha-solve-error'];
// Longest a test pauses for solving, counted from the first start event: the wait in Oxylabs' example.
const CAPTCHA_SOLVE_TIMEOUT_MS = 60000;
const captchaListenerScript = `
window.addEventListener("message", (e) => {
    if (e?.data?.source === "oxylabs-runtime" && typeof e.data.type === "string") {
        window.autoconsentSendMessage({ type: "${CAPTCHA_MESSAGE}", event: e.data.type });
    }
});
`;

/**
 * Inject autoconsent into a page's isolated world via CDP and, with `solveCaptcha`, forward
 * Oxylabs captcha events to the Node side. Call BEFORE navigating to the target URL.
 * @param {Page} page
 * @param {Partial<TestOptions>} [options]
 * @returns {Promise<OxylabsAutoconsentContext>}
 */
export async function injectAutoconsent(page, options = {}) {
    /** @type {{ detected: boolean, solved: boolean|null }} */
    const captcha = { detected: false, solved: null };
    /** @type {() => void} */
    let resolveCaptcha = () => {};
    /** @type {Promise<void>} */
    const captchaPromise = new Promise((resolve) => {
        resolveCaptcha = resolve;
    });

    let solving = false;
    /** @type {number|null} */
    let firstStartAt = null;

    function handleCaptchaEvent(/** @type {string} */ type) {
        if (CAPTCHA_START_EVENTS.includes(type)) {
            captcha.detected = true;
            solving = true;
            firstStartAt ??= Date.now();
        } else if (CAPTCHA_END_EVENTS.includes(type)) {
            captcha.detected = true;
            captcha.solved = true;
            solving = false;
            resolveCaptcha();
        } else if (CAPTCHA_ERROR_EVENTS.includes(type)) {
            captcha.detected = true;
            captcha.solved = false;
            solving = false;
            resolveCaptcha();
        }
    }

    // Oxylabs gives no deadline for a start event, so autoconsent's wait pauses whenever one arrives.
    const isSolving = () => solving && firstStartAt !== null && Date.now() - firstStartAt < CAPTCHA_SOLVE_TIMEOUT_MS;

    /** @type {import('../../../lib/regional-testing/harness.mjs').IsolatedWorldExtension} */
    const captchaListener = {
        script: captchaListenerScript,
        onMessage: (msg) => {
            if (msg?.type === CAPTCHA_MESSAGE) handleCaptchaEvent(msg.event);
        },
    };
    const ctx = await injectThrough(page, options, 'oxylabs', options.solveCaptcha ? captchaListener : {});
    return {
        ...ctx,
        waitForCompletion: (timeout, detectionTimeout) => ctx.waitForCompletion(timeout, detectionTimeout, isSolving),
        captcha,
        captchaPromise,
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
