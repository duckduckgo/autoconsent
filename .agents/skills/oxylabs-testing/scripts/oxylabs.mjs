/**
 * Oxylabs Unblocker remote browser utilities for multi-region autoconsent testing.
 *
 * Connects to Oxylabs CDP browsers, injects autoconsent into an isolated
 * world, and evaluates opt-out/opt-in flows across geographic regions.
 *
 * Requires env vars: OXYLABS_USER, OXYLABS_PASSWORD.
 * Optional: OXYLABS_HOST (defaults to ubc.oxylabs.io; use ubc-us.oxylabs.io
 * for US-only infra).
 */

/**
 * @typedef {import('playwright').Page} Page
 * @typedef {import('playwright').Browser} Browser
 */

/**
 * @typedef {Object} TestOptions
 * @property {'optOut'|'optIn'|null} [action='optOut']
 * @property {string} [screenshotsDir]
 * @property {number} [navigationTimeout=45000]
 * @property {number} [completionTimeout=45000]
 * @property {string[]} [bargs] - Oxylabs browser command-line args, e.g. ['hide-scrollbars'].
 * @property {'desktop'|'mobile'|'tablet'} [device] - Oxylabs ?p_device= value. Default 'desktop'. 'tablet' is Chrome-only.
 */

/**
 * @typedef {Object} TestResult
 * @property {string} url
 * @property {string} region
 * @property {string[]} cmpsDetected - All CMPs detected on the page.
 * @property {string|null} cmpActedOn - The CMP that was actually opted out/in.
 * @property {boolean} popupFound
 * @property {boolean|null} optOutResult
 * @property {boolean|null} optInResult
 * @property {boolean|null} selfTestResult
 * @property {boolean} autoconsentDone
 * @property {boolean|null} isCosmetic
 * @property {string[]} errors
 * @property {number} duration
 * @property {string[]} screenshotPaths
 */

/**
 * @typedef {Object} AutoconsentContext
 * @property {Object[]} received - All received messages.
 * @property {(type: string) => boolean} hasMessage
 * @property {(timeout?: number) => Promise<boolean>} waitForCompletion
 * @property {(type: string, timeout?: number) => Promise<boolean>} waitForMessage
 * @property {(url: string, region: string) => TestResult} collectResult
 * @property {{ detected: boolean, solved: boolean|null }} captcha - Captcha solver state.
 * @property {Promise<void>} captchaPromise - Resolves when captcha solving ends (success or error).
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { chromium } from 'playwright';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '../../../..');

const contentScript = fs.readFileSync(path.join(projectRoot, 'dist/autoconsent.playwright.js'), 'utf8');
const rulesJson = JSON.parse(fs.readFileSync(path.join(projectRoot, 'rules/rules.json'), 'utf-8'));
const fullRules = rulesJson.autoconsent;

const bindingWrapper = `
if (!window.autoconsentSendMessage) {
    window.autoconsentSendMessage = (msg) => _acSend(JSON.stringify(msg));
}
`;

// Bridge Oxylabs captcha events (window.postMessage) onto a CDP binding so
// the Node-side handler can observe solver progress without polling the page.
const captchaBridgeScript = `
window.addEventListener("message", (e) => {
    if (!e || !e.data || e.data.source !== "oxylabs-runtime") return;
    try { _oxyCaptcha(e.data.type); } catch {}
});
`;

export const REGIONS = {
    'us-newyork': { p_cc: 'US', p_city: 'new_york' },
    'us-losangeles': { p_cc: 'US', p_city: 'los_angeles' },
    de: { p_cc: 'DE' },
    fr: { p_cc: 'FR' },
    gb: { p_cc: 'GB' },
    nl: { p_cc: 'NL' },
    ca: { p_cc: 'CA' },
    au: { p_cc: 'AU' },
    jp: { p_cc: 'JP' },
};

/**
 * @param {string} regionKey
 * @param {{ device?: string, bargs?: string[] }} [opts]
 */
function buildWssEndpoint(regionKey, opts = {}) {
    const user = process.env.OXYLABS_USER;
    const password = process.env.OXYLABS_PASSWORD;
    const host = process.env.OXYLABS_HOST || 'ubc.oxylabs.io';
    if (!user || !password) {
        throw new Error('Missing Oxylabs credentials. Set OXYLABS_USER and OXYLABS_PASSWORD.');
    }
    const regionParams = REGIONS[regionKey];
    if (regionParams === undefined) {
        throw new Error(`Unknown region "${regionKey}". Valid regions: ${Object.keys(REGIONS).join(', ')}`);
    }
    const params = new URLSearchParams(regionParams);
    if (opts.device) {
        params.set('p_device', opts.device);
    }
    for (const arg of opts.bargs ?? []) {
        params.append('bargs', arg);
    }
    // user/password are interpolated raw — Oxylabs expects literal characters in
    // userinfo (e.g. '+' must NOT be percent-encoded), matching their Python/JS
    // SDK examples. If your credentials contain ':' or '@', escape upstream.
    return `wss://${user}:${password}@${host}/?${params.toString()}`;
}

/**
 * Connect to an Oxylabs remote browser for a specific region.
 * @param {string} regionKey
 * @param {{ device?: string, bargs?: string[] }} [opts]
 * @returns {Promise<Browser>}
 */
export async function connectOxylabs(regionKey, opts = {}) {
    return chromium.connectOverCDP(buildWssEndpoint(regionKey, opts), { timeout: 30000 });
}

/**
 * Inject autoconsent into a page's isolated world via CDP, plus a main-world
 * bridge that forwards Oxylabs captcha events to the Node side.
 * Call BEFORE navigating to the target URL.
 * @param {Page} page
 * @param {Partial<TestOptions>} [options]
 * @returns {Promise<AutoconsentContext>}
 */
export async function injectAutoconsent(page, options = {}) {
    const action = 'action' in options ? options.action : 'optOut';
    const received = [];
    const client = await page.context().newCDPSession(page);

    await client.send('Runtime.enable');
    await client.send('Runtime.addBinding', { name: '_acSend' });
    await client.send('Runtime.addBinding', { name: '_oxyCaptcha' });
    await client.send('Page.addScriptToEvaluateOnNewDocument', {
        source: bindingWrapper + '\n' + contentScript,
        worldName: 'autoconsent',
    });
    await client.send('Page.addScriptToEvaluateOnNewDocument', {
        source: captchaBridgeScript,
    });

    const config = {
        enabled: true,
        autoAction: action,
        disabledCmps: [],
        enablePrehide: true,
        detectRetries: 20,
        enableCosmeticRules: true,
        enableGeneratedRules: true,
        enableHeuristicDetection: true,
        enableHeuristicAction: true,
        logs: { lifecycle: true, rulesteps: false, detectionsteps: false, evals: false, errors: true },
    };

    function respondToContext(contextId, message) {
        return client
            .send('Runtime.evaluate', {
                expression: `autoconsentReceiveMessage(${JSON.stringify(message)})`,
                contextId,
                awaitPromise: true,
            })
            .catch(() => {});
    }

    const captcha = { detected: false, solved: null };
    let resolveCaptcha;
    const captchaPromise = new Promise((resolve) => {
        resolveCaptcha = resolve;
    });

    client.on('Runtime.bindingCalled', async ({ name, payload, executionContextId }) => {
        if (name === '_oxyCaptcha') {
            // payload is the raw event.data.type string
            if (payload === 'oxylabs-captcha-solve-start') {
                captcha.detected = true;
            } else if (payload === 'oxylabs-captcha-solve-end') {
                captcha.detected = true;
                captcha.solved = true;
                resolveCaptcha();
            } else if (payload === 'oxylabs-captcha-solve-error') {
                captcha.detected = true;
                captcha.solved = false;
                resolveCaptcha();
            }
            return;
        }
        if (name !== '_acSend') return;
        const msg = JSON.parse(payload);
        received.push(msg);

        switch (msg.type) {
            case 'init':
                await respondToContext(executionContextId, {
                    type: 'initResp',
                    config,
                    rules: { autoconsent: fullRules },
                });
                break;
            case 'eval': {
                // Eval in main world so page globals (e.g. window.Cookiebot) are accessible
                let result = false;
                try {
                    result = await page.evaluate(msg.code);
                } catch {}
                await respondToContext(executionContextId, {
                    id: msg.id,
                    type: 'evalResp',
                    result,
                });
                break;
            }
            case 'autoconsentDone':
                // Trigger self-test after opt-out completes
                await respondToContext(executionContextId, { type: 'selfTest' });
                break;
            case 'autoconsentError':
                console.error('autoconsent error:', msg.details);
                break;
        }
    });

    function hasMessage(type) {
        return received.some((m) => m.type === type);
    }

    async function waitForCompletion(timeout = 45000) {
        const start = Date.now();
        while (Date.now() - start < timeout) {
            if (hasMessage('optOutResult') || hasMessage('optInResult')) {
                return true;
            }
            // detection-only mode (action: null): no action result will arrive
            if (!action && hasMessage('popupFound')) {
                return true;
            }
            if (Date.now() - start > 15000 && !hasMessage('cmpDetected')) {
                return false;
            }
            await new Promise((r) => setTimeout(r, 500));
        }
        return false;
    }

    async function waitForMessage(type, timeout = 30000) {
        const start = Date.now();
        while (Date.now() - start < timeout) {
            if (hasMessage(type)) return true;
            await new Promise((r) => setTimeout(r, 500));
        }
        return false;
    }

    function collectResult(url, region) {
        const result = {
            url,
            region,
            cmpsDetected: [],
            cmpActedOn: null,
            popupFound: false,
            optOutResult: null,
            optInResult: null,
            selfTestResult: null,
            autoconsentDone: false,
            isCosmetic: null,
            errors: [],
            duration: 0,
            screenshotPaths: [],
        };
        for (const msg of received) {
            switch (msg.type) {
                case 'cmpDetected':
                    result.cmpsDetected.push(msg.cmp);
                    break;
                case 'popupFound':
                    result.popupFound = true;
                    break;
                case 'optOutResult':
                    result.optOutResult = msg.result;
                    result.cmpActedOn = msg.cmp;
                    break;
                case 'optInResult':
                    result.optInResult = msg.result;
                    result.cmpActedOn = msg.cmp;
                    break;
                case 'selfTestResult':
                    result.selfTestResult = msg.result;
                    break;
                case 'autoconsentDone':
                    result.autoconsentDone = true;
                    result.isCosmetic = msg.isCosmetic;
                    break;
                case 'autoconsentError':
                    result.errors.push(msg.details?.msg || JSON.stringify(msg.details));
                    break;
            }
        }
        return result;
    }

    return { received, hasMessage, waitForCompletion, waitForMessage, collectResult, captcha, captchaPromise };
}

/**
 * Test a URL using an already-connected page.
 * @param {Page} page
 * @param {string} url
 * @param {string} regionKey
 * @param {Partial<TestOptions>} [options]
 * @returns {Promise<TestResult>}
 */
export async function testPage(page, url, regionKey, options = {}) {
    const navTimeout = options.navigationTimeout ?? 45000;
    const completionTimeout = options.completionTimeout ?? 45000;
    const screenshotsDir = options.screenshotsDir ?? path.join(projectRoot, 'test-results/oxylabs');
    const startTime = Date.now();

    try {
        const ctx = await injectAutoconsent(page, options);
        await page.goto(url, { waitUntil: 'commit', timeout: navTimeout });

        // Brief wait for the captcha solver to declare itself before deciding
        // whether to block. Oxylabs sends a "solve-start" message via
        // window.postMessage shortly after the page commits if a captcha is
        // detected; if no message arrives within the grace period, assume
        // there's no captcha and proceed.
        if (!ctx.captcha.detected) {
            await new Promise((r) => setTimeout(r, 5000));
        }
        if (ctx.captcha.detected && ctx.captcha.solved === null) {
            await Promise.race([ctx.captchaPromise, new Promise((r) => setTimeout(r, completionTimeout))]);
        }

        const completed = await ctx.waitForCompletion(completionTimeout);
        if (completed && !ctx.hasMessage('selfTestResult')) {
            await ctx.waitForMessage('selfTestResult', 10000);
        }

        const result = ctx.collectResult(url, regionKey);
        result.duration = Date.now() - startTime;

        if (!completed && !ctx.hasMessage('cmpDetected')) {
            result.errors.push('No CMP detected (site may not show a cookie banner in this region)');
        } else if (!completed) {
            result.errors.push('Timed out waiting for autoconsent to complete');
        }

        try {
            const domain = new URL(url).hostname;
            const filepath = path.join(screenshotsDir, `${domain}-${regionKey}-final.jpg`);
            fs.mkdirSync(screenshotsDir, { recursive: true });
            await page.screenshot({ path: filepath, quality: 50, scale: 'css', timeout: 5000, type: 'jpeg' });
            result.screenshotPaths.push(filepath);
        } catch {}

        return result;
    } catch (e) {
        return {
            url,
            region: regionKey,
            cmpsDetected: [],
            cmpActedOn: null,
            popupFound: false,
            optOutResult: null,
            optInResult: null,
            selfTestResult: null,
            autoconsentDone: false,
            isCosmetic: null,
            errors: [e.message],
            duration: Date.now() - startTime,
            screenshotPaths: [],
        };
    }
}

/**
 * High-level: test a URL in a specific region.
 * Connects to Oxylabs, injects autoconsent, waits for results, and closes.
 * @param {string} url
 * @param {string} regionKey
 * @param {Partial<TestOptions>} [options]
 * @returns {Promise<TestResult>}
 */
export async function testUrl(url, regionKey, options = {}) {
    let browser = null;
    try {
        browser = await connectOxylabs(regionKey, { device: options.device, bargs: options.bargs });
        const page = await browser.newPage();
        return await testPage(page, url, regionKey, options);
    } catch (e) {
        return {
            url,
            region: regionKey,
            cmpsDetected: [],
            cmpActedOn: null,
            popupFound: false,
            optOutResult: null,
            optInResult: null,
            selfTestResult: null,
            autoconsentDone: false,
            isCosmetic: null,
            errors: [e.message],
            duration: 0,
            screenshotPaths: [],
        };
    } finally {
        try {
            await browser?.close();
        } catch {}
    }
}

/**
 * Format a TestResult as a human-readable line.
 * @param {TestResult} result
 * @returns {string}
 */
export function formatResult(result) {
    const actionResult = result.optOutResult ?? result.optInResult;
    const actionAttempted = result.optOutResult !== null || result.optInResult !== null;
    let status;
    if (actionAttempted && actionResult) status = 'PASS';
    else if (actionAttempted && !actionResult) status = 'ACTION FAILED';
    else if (result.cmpsDetected.length > 0) status = 'PARTIAL';
    else status = 'NO CMP';

    const parts = [
        `${status} [${result.region}] ${result.url}`,
        `  CMP: ${result.cmpActedOn || 'none'}${result.cmpsDetected.length > 1 ? ` (also detected: ${result.cmpsDetected.filter((c) => c !== result.cmpActedOn).join(', ')})` : ''}`,
        `  Popup: ${result.popupFound} | OptOut: ${result.optOutResult} | OptIn: ${result.optInResult} | SelfTest: ${result.selfTestResult}`,
        `  Done: ${result.autoconsentDone}${result.isCosmetic ? ' (cosmetic)' : ''} | ${result.duration}ms`,
    ];
    if (result.errors.length > 0) {
        parts.push(`  Errors: ${result.errors.join('; ')}`);
    }
    return parts.join('\n');
}
