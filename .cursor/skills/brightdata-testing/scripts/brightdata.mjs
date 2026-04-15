/**
 * BrightData remote browser utilities for multi-region autoconsent testing.
 *
 * Connects to BrightData CDP browsers, injects autoconsent into an isolated
 * world, and evaluates opt-out/opt-in flows across geographic regions.
 *
 * Requires env vars: BRIGHTDATA_WEBACCESS_USER, BRIGHTDATA_WEBACCESS_PASSWORD,
 * BRIGHTDATA_WEBACCESS_HOST.
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

export const REGIONS = {
    'us-newyork': '-country-us-city-newyork',
    'us-losangeles': '-country-us-city-losangeles',
    de: '-country-de',
    fr: '-country-fr',
    gb: '-country-gb',
    nl: '-country-nl',
    ca: '-country-ca',
    au: '-country-au',
};

function buildWssEndpoint(regionKey) {
    const user = process.env.BRIGHTDATA_WEBACCESS_USER;
    const password = process.env.BRIGHTDATA_WEBACCESS_PASSWORD;
    const host = process.env.BRIGHTDATA_WEBACCESS_HOST;
    if (!user || !password || !host) {
        throw new Error(
            'Missing BrightData credentials. Set BRIGHTDATA_WEBACCESS_USER, BRIGHTDATA_WEBACCESS_PASSWORD, BRIGHTDATA_WEBACCESS_HOST.',
        );
    }
    const suffix = REGIONS[regionKey];
    if (suffix === undefined) {
        throw new Error(`Unknown region "${regionKey}". Valid regions: ${Object.keys(REGIONS).join(', ')}`);
    }
    return `wss://${user}${suffix}:${password}@${host}`;
}

/**
 * Connect to a BrightData remote browser for a specific region.
 * @param {string} regionKey
 * @returns {Promise<Browser>}
 */
export async function connectBrightData(regionKey) {
    return chromium.connectOverCDP(buildWssEndpoint(regionKey), { timeout: 30000 });
}

/**
 * Inject autoconsent into a page's isolated world via CDP.
 * Call BEFORE navigating to the target URL.
 * @param {Page} page
 * @param {Partial<TestOptions>} [options]
 * @returns {Promise<AutoconsentContext>}
 */
export async function injectAutoconsent(page, options = {}) {
    const action = options.action ?? 'optOut';
    const received = [];
    const client = await page.context().newCDPSession(page);

    await client.send('Runtime.enable');
    await client.send('Runtime.addBinding', { name: '_acSend' });
    await client.send('Page.addScriptToEvaluateOnNewDocument', {
        source: bindingWrapper + '\n' + contentScript,
        worldName: 'autoconsent',
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

    client.on('Runtime.bindingCalled', async ({ name, payload, executionContextId }) => {
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

    return { received, hasMessage, waitForCompletion, waitForMessage, collectResult };
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
    const screenshotsDir = options.screenshotsDir ?? path.join(projectRoot, 'test-results/brightdata');
    const startTime = Date.now();

    try {
        const ctx = await injectAutoconsent(page, options);
        await page.goto(url, { waitUntil: 'commit', timeout: navTimeout });

        // Wait for BrightData's auto-captcha-solver to finish (if a captcha
        // appeared). Returns immediately with "not_detected" when there is none.
        try {
            const captchaClient = await page.context().newCDPSession(page);
            await captchaClient.send('Captcha.solve', { detectTimeout: 30000 });
        } catch {}

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
 * Connects to BrightData, injects autoconsent, waits for results, and closes.
 * @param {string} url
 * @param {string} regionKey
 * @param {Partial<TestOptions>} [options]
 * @returns {Promise<TestResult>}
 */
export async function testUrl(url, regionKey, options = {}) {
    let browser = null;
    try {
        browser = await connectBrightData(regionKey);
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
