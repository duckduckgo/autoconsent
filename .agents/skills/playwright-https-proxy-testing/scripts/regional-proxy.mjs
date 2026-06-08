/**
 * Playwright HTTPS regional proxy utilities for multi-region autoconsent testing.
 *
 * Launches local Playwright browsers with an HTTPS proxy selected by region,
 * injects autoconsent, and evaluates opt-out/opt-in flows.
 *
 * Requires env vars:
 * - REGIONAL_PROXY_ENDPOINT_<REGION>
 * - REGIONAL_PROXY_USERNAME
 * - REGIONAL_PROXY_PASSWORD
 */

/**
 * @typedef {import('playwright').Page} Page
 * @typedef {import('playwright').Browser} Browser
 * @typedef {import('playwright').LaunchOptions} LaunchOptions
 */

/**
 * @typedef {Object} TestOptions
 * @property {'optOut'|'optIn'|null} [action='optOut']
 * @property {string} [screenshotsDir]
 * @property {number} [navigationTimeout=45000]
 * @property {number} [completionTimeout=45000]
 * @property {'chromium'|'firefox'|'webkit'} [browserName='chromium']
 * @property {boolean} [headless=true]
 * @property {LaunchOptions} [launchOptions]
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
 * @property {Object[]} received - All received autoconsent messages.
 * @property {(type: string) => boolean} hasMessage
 * @property {(timeout?: number) => Promise<boolean>} waitForCompletion
 * @property {(type: string, timeout?: number) => Promise<boolean>} waitForMessage
 * @property {(url: string, region: string) => TestResult} collectResult
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { chromium, firefox, webkit } from 'playwright';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '../../../..');

const contentScript = fs.readFileSync(path.join(projectRoot, 'dist/autoconsent.playwright.js'), 'utf8');
const rulesJson = JSON.parse(fs.readFileSync(path.join(projectRoot, 'rules/rules.json'), 'utf-8'));
const fullRules = rulesJson.autoconsent;

export const DEFAULT_REGIONS = ['us', 'gb', 'au', 'ca', 'de', 'fr', 'nl', 'ch', 'no'];

const BROWSERS = {
    chromium,
    firefox,
    webkit,
};

/**
 * Convert a region key to its environment variable suffix.
 * @param {string} regionKey
 * @returns {string}
 */
export function regionEnvSuffix(regionKey) {
    return regionKey.toUpperCase().replace(/[^A-Z0-9]/g, '_');
}

/**
 * Build the Playwright proxy object for a region.
 * @param {string} regionKey
 * @param {NodeJS.ProcessEnv} [env]
 * @returns {{ server: string, username: string, password: string }}
 */
export function buildProxyConfig(regionKey, env = process.env) {
    const suffix = regionEnvSuffix(regionKey);
    const endpoint = env[`REGIONAL_PROXY_ENDPOINT_${suffix}`];
    const username = env.REGIONAL_PROXY_USERNAME;
    const password = env.REGIONAL_PROXY_PASSWORD;

    if (!endpoint || !username || !password) {
        throw new Error(
            `Missing proxy environment variables for region "${regionKey}". ` +
                `Expected REGIONAL_PROXY_ENDPOINT_${suffix}, REGIONAL_PROXY_USERNAME, and REGIONAL_PROXY_PASSWORD.`,
        );
    }
    if (endpoint.includes('://') || endpoint.includes('@') || /:\d+$/.test(endpoint)) {
        throw new Error(
            `REGIONAL_PROXY_ENDPOINT_${suffix} should be a bare hostname without scheme, credentials, or port. ` +
                'The library adds https:// and port 443.',
        );
    }

    return {
        server: `https://${endpoint}:443`,
        username,
        password,
    };
}

/**
 * Launch a local Playwright browser through the HTTPS proxy for a region.
 * @param {string} regionKey
 * @param {Partial<TestOptions>} [options]
 * @returns {Promise<Browser>}
 */
export async function launchRegionalProxyBrowser(regionKey, options = {}) {
    const browserName = options.browserName ?? 'chromium';
    const browserType = BROWSERS[browserName];
    if (!browserType) {
        throw new Error(`Unknown browser "${browserName}". Valid browsers: ${Object.keys(BROWSERS).join(', ')}`);
    }

    return browserType.launch({
        headless: options.headless ?? true,
        ...(options.launchOptions ?? {}),
        proxy: buildProxyConfig(regionKey),
    });
}

/**
 * Inject autoconsent into a page. Call before navigating to the target URL.
 * @param {Page} page
 * @param {Partial<TestOptions>} [options]
 * @returns {Promise<AutoconsentContext>}
 */
export async function injectAutoconsent(page, options = {}) {
    const action = 'action' in options ? options.action : 'optOut';
    const received = [];
    let selfTestFrame = null;

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

    async function sendToFrame(frame, message) {
        try {
            await frame.evaluate(`autoconsentReceiveMessage(${JSON.stringify(message)})`);
        } catch {
            // A frame may navigate or detach while autoconsent is responding.
        }
    }

    await page.exposeBinding('autoconsentSendMessage', async ({ frame }, msg) => {
        received.push(msg);
        switch (msg.type) {
            case 'init':
                await sendToFrame(frame, {
                    type: 'initResp',
                    config,
                    rules: { autoconsent: fullRules },
                });
                break;
            case 'eval': {
                let result = false;
                try {
                    result = await frame.evaluate(msg.code);
                } catch {}
                await sendToFrame(frame, {
                    id: msg.id,
                    type: 'evalResp',
                    result,
                });
                break;
            }
            case 'optOutResult':
            case 'optInResult':
                if (msg.scheduleSelfTest) {
                    selfTestFrame = frame;
                }
                break;
            case 'autoconsentDone':
                await sendToFrame(selfTestFrame ?? frame, { type: 'selfTest' });
                break;
            case 'autoconsentError':
                console.error('autoconsent error:', msg.details);
                break;
        }
    });
    await page.addInitScript(contentScript);

    function hasMessage(type) {
        return received.some((m) => m.type === type);
    }

    async function waitForCompletion(timeout = 45000) {
        const start = Date.now();
        while (Date.now() - start < timeout) {
            if (hasMessage('optOutResult') || hasMessage('optInResult')) {
                return true;
            }
            // Detection-only mode (action: null): no action result will arrive.
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
 * Test a URL using an already-created Playwright page.
 * @param {Page} page
 * @param {string} url
 * @param {string} regionKey
 * @param {Partial<TestOptions>} [options]
 * @returns {Promise<TestResult>}
 */
export async function testPage(page, url, regionKey, options = {}) {
    const navTimeout = options.navigationTimeout ?? 45000;
    const completionTimeout = options.completionTimeout ?? 45000;
    const screenshotsDir = options.screenshotsDir ?? path.join(projectRoot, 'test-results/regional-proxy');
    const startTime = Date.now();

    try {
        const ctx = await injectAutoconsent(page, options);
        await page.goto(url, { waitUntil: 'commit', timeout: navTimeout });

        const completed = await ctx.waitForCompletion(completionTimeout);
        if (completed && !ctx.hasMessage('selfTestResult')) {
            await ctx.waitForMessage('selfTestResult', 10000);
        }
        if (completed) {
            await page.waitForTimeout(1500);
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
 * Test one URL across several regions.
 * @param {string} url
 * @param {string[]} [regions]
 * @param {Partial<TestOptions>} [options]
 * @returns {Promise<TestResult[]>}
 */
export async function testRegions(url, regions = DEFAULT_REGIONS, options = {}) {
    const results = [];
    for (const region of regions) {
        results.push(await testUrl(url, region, options));
    }
    return results;
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
    if (result.screenshotPaths.length > 0) {
        parts.push(`  Screenshots: ${result.screenshotPaths.join(', ')}`);
    }
    return parts.join('\n');
}
