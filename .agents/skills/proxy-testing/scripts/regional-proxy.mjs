/**
 * Playwright HTTPS regional proxy utilities for multi-region autoconsent testing.
 *
 * Launches a local Chromium browser with an HTTPS proxy selected by region, injects
 * autoconsent into an isolated world (via CDP), and evaluates opt-out/opt-in flows.
 * Chromium only - isolated worlds are reached through CDP, which Playwright exposes for
 * Chromium alone.
 *
 * Requires env vars:
 * - REGIONAL_PROXY_<REGION> (REGION is the uppercased two-letter region code)
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

/**
 * Per-CDP-session primitives the message handler uses. There is one session for the page
 * plus one per out-of-process iframe; each supplies a pair bound to its own contexts.
 * `frameRef` is the CDP frameId the message arrived from.
 * @typedef {Object} MessageTransport
 * @property {(frameRef: string, message: object) => Promise<void>} sendToContentScript
 * @property {(frameRef: string, code: string) => Promise<any>} evalInMainWorld
 */

/**
 * @typedef {(transport: MessageTransport) => (msg: any, frameRef: string) => Promise<void>} MessageHandlerFactory
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

export const DEFAULT_REGIONS = ['us', 'gb', 'au', 'ca', 'de', 'fr', 'nl', 'ch', 'no', 'it', 'es', 'pl', 'se', 'dk', 'jp'];

/**
 * Build the Playwright proxy object for a region.
 * @param {string} regionKey - Two-letter region code (e.g. 'us', 'gb').
 * @param {NodeJS.ProcessEnv} [env]
 * @returns {{ server: string, username: string, password: string }}
 */
export function buildProxyConfig(regionKey, env = process.env) {
    const envVar = `REGIONAL_PROXY_${regionKey.toUpperCase()}`;
    const endpoint = env[envVar];
    const username = env.REGIONAL_PROXY_USERNAME;
    const password = env.REGIONAL_PROXY_PASSWORD;

    if (!endpoint || !username || !password) {
        throw new Error(
            `Missing proxy environment variables for region "${regionKey}". ` +
                `Expected ${envVar}, REGIONAL_PROXY_USERNAME, and REGIONAL_PROXY_PASSWORD.`,
        );
    }
    if (endpoint.includes('://') || endpoint.includes('@') || /:\d+$/.test(endpoint)) {
        throw new Error(
            `${envVar} should be a bare hostname without scheme, credentials, or port. ` + 'The library adds https:// and port 443.',
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
    const action = 'action' in options ? options.action : 'optOut';
    /** @type {any[]} */
    const received = [];
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
        // The engine runs in the isolated world; eval snippets are forwarded to the main world.
        isMainWorld: false,
        logs: { lifecycle: true, rulesteps: true, detectionsteps: false, evals: false, errors: true },
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
        throw new Error(`regional-proxy supports Chromium only (got "${browserName}").`);
    }
    await injectIntoIsolatedWorld(page, createMessageHandler);

    function hasMessage(/** @type {string} */ type) {
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

    async function waitForMessage(/** @type {string} */ type, timeout = 30000) {
        const start = Date.now();
        while (Date.now() - start < timeout) {
            if (hasMessage(type)) return true;
            await new Promise((r) => setTimeout(r, 500));
        }
        return false;
    }

    function collectResult(/** @type {string} */ url, /** @type {string} */ region) {
        /** @type {TestResult} */
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
 * Isolated-world injection via CDP (Chromium only). The content script runs in a dedicated
 * world named `autoconsent`; it talks to Node through a CDP binding, and `eval` snippets are
 * executed in each frame's MAIN world - matching how the browser extension behaves.
 * @param {Page} page
 * @param {MessageHandlerFactory} createMessageHandler
 */
async function injectIntoIsolatedWorld(page, createMessageHandler) {
    const WORLD_NAME = 'autoconsent';
    const BINDING_NAME = 'autoconsentSendMessageBinding';
    // CDP bindings accept a single string argument, so wrap the raw binding in the
    // `window.autoconsentSendMessage(object)` shape the content script expects. The binding
    // is resolved lazily at call time, after CDP has installed it into the isolated world.
    const isolatedSource = `window.autoconsentSendMessage = (m) => { window.${BINDING_NAME}(JSON.stringify(m)); return Promise.resolve(); };\n${contentScript}`;

    const attachedFrames = new WeakSet();

    async function attachToSession(/** @type {any} */ client) {
        // frameId -> { main, isolated } unique execution-context ids
        const frameContexts = new Map();
        // numeric executionContextId -> frameId, for routing Runtime.bindingCalled events
        const frameByContextId = new Map();

        const handle = createMessageHandler({
            sendToContentScript: async (frameId, message) => {
                const uniqueContextId = frameContexts.get(frameId)?.isolated;
                if (!uniqueContextId) return;
                try {
                    await client.send('Runtime.evaluate', {
                        expression: `autoconsentReceiveMessage(${JSON.stringify(message)})`,
                        uniqueContextId,
                        awaitPromise: true,
                        // Some pages' CSP would otherwise block evaluating in the isolated world.
                        allowUnsafeEvalBlockedByCSP: true,
                    });
                } catch {
                    // The context may be gone if the frame navigated or detached.
                }
            },
            evalInMainWorld: async (frameId, code) => {
                const uniqueContextId = frameContexts.get(frameId)?.main;
                if (!uniqueContextId) return false;
                const { result, exceptionDetails } = await client.send('Runtime.evaluate', {
                    expression: code,
                    uniqueContextId,
                    returnByValue: true,
                    awaitPromise: true,
                    // Eval snippets must run even when the page's CSP disallows eval.
                    allowUnsafeEvalBlockedByCSP: true,
                });
                return exceptionDetails ? false : (result?.value ?? false);
            },
        });

        client.on('Runtime.executionContextCreated', (/** @type {any} */ event) => {
            const { context } = event;
            const frameId = context.auxData?.frameId;
            if (!frameId) return;
            const entry = frameContexts.get(frameId) ?? {};
            if (context.name === WORLD_NAME) {
                entry.isolated = context.uniqueId;
            } else if (context.auxData?.isDefault) {
                entry.main = context.uniqueId;
            }
            frameContexts.set(frameId, entry);
            frameByContextId.set(context.id, frameId);
        });
        client.on('Runtime.executionContextDestroyed', (/** @type {any} */ event) => {
            frameByContextId.delete(event.executionContextId);
        });
        client.on('Runtime.executionContextsCleared', () => {
            frameByContextId.clear();
            frameContexts.clear();
        });
        client.on('Runtime.bindingCalled', (/** @type {any} */ event) => {
            const { name, payload, executionContextId } = event;
            if (name !== BINDING_NAME) return;
            const frameId = frameByContextId.get(executionContextId);
            if (!frameId) return;
            let msg;
            try {
                msg = JSON.parse(payload);
            } catch {
                return;
            }
            handle(msg, frameId);
        });

        await client.send('Runtime.enable');
        await client.send('Page.enable');
        await client.send('Runtime.addBinding', { name: BINDING_NAME, executionContextName: WORLD_NAME });
        await client.send('Page.addScriptToEvaluateOnNewDocument', { source: isolatedSource, worldName: WORLD_NAME, runImmediately: true });
    }

    // The page session covers the main frame and all same-process (in-process) iframes.
    await attachToSession(await page.context().newCDPSession(page));

    // Out-of-process iframes (OOPIFs) are separate CDP targets, so each needs its own session.
    // newCDPSession throws for in-process frames, which are already handled above.
    async function attachToOopif(/** @type {import('playwright').Frame} */ frame) {
        if (!frame.parentFrame() || attachedFrames.has(frame)) return;
        let client;
        try {
            client = await page.context().newCDPSession(frame);
        } catch {
            return;
        }
        attachedFrames.add(frame);
        try {
            await attachToSession(client);
        } catch {
            // The OOPIF may navigate or detach while we are wiring up its session.
        }
    }
    page.on('frameattached', attachToOopif);
    page.on('framenavigated', attachToOopif);
    await Promise.all(page.frames().map(attachToOopif));
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
            errors: [e instanceof Error ? e.message : String(e)],
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
            errors: [e instanceof Error ? e.message : String(e)],
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
