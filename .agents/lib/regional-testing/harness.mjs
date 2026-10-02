/**
 * Provider-agnostic harness for regional autoconsent testing in Playwright (Chromium only).
 *
 * Injects autoconsent into an isolated world of every frame (through one of the transports in
 * `transports.mjs`), answers its messages the way the browser extension does, waits for the
 * opt-out/opt-in flow, and screenshots the result. Provider modules
 * (`proxy-testing`, `oxylabs-testing` skills) supply the browser and pick the transport.
 */

/**
 * @typedef {import('playwright').Page} Page
 * @typedef {import('./transports.mjs').Transport} Transport
 * @typedef {import('./transports.mjs').MessageTransport} MessageTransport
 * @typedef {import('./transports.mjs').MessageHandlerFactory} MessageHandlerFactory
 */

/** @typedef {import('../../../lib/types.js').Config} Config */

/**
 * @typedef {'regional-proxy'|'oxylabs'} ProviderName
 */

/**
 * @typedef {Object} TestOptions
 * @property {'optOut'|'optIn'|null} [action='optOut']
 * @property {string} [screenshotsDir]
 * @property {number} [navigationTimeout=45000]
 * @property {number} [completionTimeout=45000]
 * @property {number} [detectionTimeout] - How long to wait for `cmpDetected` before giving up. Defaults to `completionTimeout`.
 */

/**
 * @typedef {Object} TestResult
 * @property {string} url
 * @property {string} region
 * @property {ProviderName} provider - Which browser provider produced this result.
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
 * @property {(timeout?: number, detectionTimeout?: number) => Promise<boolean>} waitForCompletion
 * @property {(type: string, timeout?: number) => Promise<boolean>} waitForMessage
 * @property {(url: string, region: string) => TestResult} collectResult
 */

/**
 * What a provider module plugs into `runTest`.
 * @typedef {Object} Provider
 * @property {ProviderName} name
 * @property {string} defaultScreenshotsDir
 * @property {string} [screenshotTag] - Added to screenshot file names so providers sharing a directory don't overwrite each other.
 * @property {(page: Page, options: Partial<TestOptions>) => Promise<AutoconsentContext>} inject
 * @property {(page: Page, ctx: any, options: Partial<TestOptions>) => Promise<void>} [afterNavigation] - Runs after the page commits, before waiting for autoconsent.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const projectRoot = path.resolve(__dirname, '../../..');

const contentScript = fs.readFileSync(path.join(projectRoot, 'dist/autoconsent.playwright.js'), 'utf8');
const rulesJson = JSON.parse(fs.readFileSync(path.join(projectRoot, 'rules/rules.json'), 'utf-8'));
const fullRules = rulesJson.autoconsent;

/** All regions in the verification policy (every region with a regional proxy). */
export const ALL_REGIONS = ['us', 'gb', 'au', 'ca', 'de', 'fr', 'nl', 'ch', 'no', 'it', 'es', 'pl', 'se', 'dk', 'jp'];

/** Core pass: default verification set (CCPA, UK GDPR, EEA GDPR). Add the reported region when not already covered. */
export const CORE_REGIONS = ['us', 'gb', 'de'];

/** Expanded pass: escalation set covering all non-GDPR regimes plus GDPR representatives. */
export const EXPANDED_REGIONS = ['us', 'gb', 'de', 'fr', 'nl', 'pl', 'au', 'ca', 'jp'];

/** @param {number} ms */
const sleep = (ms) =>
    new Promise((r) => {
        const t = setTimeout(r, ms);
        t.unref?.();
    });

/**
 * Inject autoconsent into a page through the given transport. Call before navigating to the target URL.
 *
 * The content script runs in an isolated world while `eval` snippets execute in the page's main
 * world, mirroring the browser extension. Chromium only.
 * @param {Page} page
 * @param {Partial<TestOptions>} options
 * @param {{ transport: Transport, provider: ProviderName }} using
 * @returns {Promise<AutoconsentContext>}
 */
export async function injectAutoconsent(page, options, { transport, provider }) {
    const action = 'action' in options ? options.action : 'optOut';
    /** @type {any[]} */
    const received = [];
    /** @type {Partial<Config>} */
    const config = {
        enabled: true,
        autoAction: action,
        disabledCmps: [],
        enablePrehide: true,
        detectRetries: 20,
        enableCosmeticRules: true,
        enableGeneratedRules: true,
        enableHeuristicDetection: true,
        heuristicMode: 'tier2',
        // The engine runs in the isolated world; eval snippets are forwarded to the main world.
        isMainWorld: false,
        logs: { lifecycle: true, rulesteps: true, detectionsteps: false, evals: false, errors: true, messages: false, waits: false },
    };

    // Remembers which frame (and its transport's sender) asked for a self test, so the
    // follow-up `selfTest` message is routed back to the same content-script context even
    // when several frames/CDP sessions are involved.
    /** @type {{ send: MessageTransport['sendToContentScript'], frameRef: any } | null} */
    let selfTestTarget = null;

    // The transport-agnostic message handler. A transport supplies two primitives:
    //   sendToContentScript(frameRef, message) - deliver to autoconsentReceiveMessage in the content-script world
    //   evalInMainWorld(frameRef, code)        - run an eval snippet in the frame's MAIN world
    // This split mirrors the browser extension: the engine lives in an isolated world,
    // while `eval` snippets execute in the page's main world.
    /** @type {MessageHandlerFactory} */
    const createMessageHandler = ({ sendToContentScript, evalInMainWorld }) => {
        return async function handleMessage(msg, frameRef) {
            received.push(msg);
            switch (msg.type) {
                case 'init':
                    await sendToContentScript(frameRef, { type: 'initResp', config, rules: { autoconsent: fullRules } });
                    break;
                case 'eval': {
                    let result = false;
                    try {
                        result = await evalInMainWorld(frameRef, msg.code);
                    } catch {}
                    await sendToContentScript(frameRef, { id: msg.id, type: 'evalResp', result });
                    break;
                }
                case 'optOutResult':
                case 'optInResult':
                    if (msg.scheduleSelfTest) {
                        selfTestTarget = { send: sendToContentScript, frameRef };
                    }
                    break;
                case 'autoconsentDone': {
                    const target = selfTestTarget ?? { send: sendToContentScript, frameRef };
                    await target.send(target.frameRef, { type: 'selfTest' });
                    break;
                }
                case 'autoconsentError':
                    console.error('autoconsent error:', msg.details);
                    break;
            }
        };
    };

    // Isolated-world injection requires CDP, which Playwright exposes for Chromium only.
    const browserName = page.context().browser()?.browserType().name();
    if (browserName && browserName !== 'chromium') {
        throw new Error(`Regional testing supports Chromium only (got "${browserName}").`);
    }
    await transport(page, contentScript, createMessageHandler);

    function hasMessage(/** @type {string} */ type) {
        return received.some((m) => m.type === type);
    }

    async function waitForCompletion(timeout = 45000, detectionTimeout = timeout) {
        const start = Date.now();
        while (Date.now() - start < timeout) {
            if (hasMessage('optOutResult') || hasMessage('optInResult')) {
                return true;
            }
            // Detection-only mode (action: null): no action result will arrive.
            if (!action && hasMessage('popupFound')) {
                return true;
            }
            // Bail out early only if no CMP was detected within the detection window. This defaults
            // to the full timeout, so slow regional pages that detect late are not abandoned (which
            // would otherwise yield a false "No CMP detected" and end before opt-out can finish).
            if (Date.now() - start > detectionTimeout && !hasMessage('cmpDetected')) {
                return false;
            }
            await sleep(500);
        }
        return false;
    }

    async function waitForMessage(/** @type {string} */ type, timeout = 30000) {
        const start = Date.now();
        while (Date.now() - start < timeout) {
            if (hasMessage(type)) return true;
            await sleep(500);
        }
        return false;
    }

    function collectResult(/** @type {string} */ url, /** @type {string} */ region) {
        const result = emptyResult(url, region, provider);
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
 * A result with nothing detected, optionally carrying an error.
 * @param {string} url
 * @param {string} region
 * @param {ProviderName} provider
 * @param {unknown} [error]
 * @returns {TestResult}
 */
export function emptyResult(url, region, provider, error) {
    return {
        url,
        region,
        provider,
        cmpsDetected: [],
        cmpActedOn: null,
        popupFound: false,
        optOutResult: null,
        optInResult: null,
        selfTestResult: null,
        autoconsentDone: false,
        isCosmetic: null,
        errors: error === undefined ? [] : [error instanceof Error ? error.message : String(error)],
        duration: 0,
        screenshotPaths: [],
    };
}

/**
 * Run autoconsent on a URL in an already-created page and collect a TestResult.
 * @param {Page} page
 * @param {string} url
 * @param {string} regionKey
 * @param {Partial<TestOptions>} options
 * @param {Provider} provider
 * @returns {Promise<TestResult>}
 */
export async function runTest(page, url, regionKey, options, provider) {
    const navTimeout = options.navigationTimeout ?? 45000;
    const completionTimeout = options.completionTimeout ?? 45000;
    const detectionTimeout = options.detectionTimeout ?? completionTimeout;
    const screenshotsDir = options.screenshotsDir ?? provider.defaultScreenshotsDir;
    const startTime = Date.now();

    try {
        const ctx = await provider.inject(page, options);
        await page.goto(url, { waitUntil: 'commit', timeout: navTimeout });
        await provider.afterNavigation?.(page, ctx, options);

        const completed = await ctx.waitForCompletion(completionTimeout, detectionTimeout);
        if (completed && !ctx.hasMessage('selfTestResult')) {
            await ctx.waitForMessage('selfTestResult', 10000);
        }
        // Brief settle after the rule (and its verification) has finished, to
        // outlast the page's own close animation / DOM teardown which can
        // still be in flight when the screenshot is taken.
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
            const tag = provider.screenshotTag ? `-${provider.screenshotTag}` : '';
            const filepath = path.join(screenshotsDir, `${domain}-${regionKey}${tag}-final.jpg`);
            fs.mkdirSync(screenshotsDir, { recursive: true });
            await page.screenshot({ path: filepath, quality: 50, scale: 'css', timeout: 5000, type: 'jpeg' });
            result.screenshotPaths.push(filepath);
        } catch {}

        return result;
    } catch (e) {
        const result = emptyResult(url, regionKey, provider.name, e);
        result.duration = Date.now() - startTime;
        return result;
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
    parts.push(`  Provider: ${result.provider}`);
    if (result.errors.length > 0) {
        parts.push(`  Errors: ${result.errors.join('; ')}`);
    }
    if (result.screenshotPaths.length > 0) {
        parts.push(`  Screenshots: ${result.screenshotPaths.join(', ')}`);
    }
    return parts.join('\n');
}
