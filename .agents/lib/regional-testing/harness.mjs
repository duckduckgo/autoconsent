/**
 * Provider-agnostic harness for regional autoconsent testing in Playwright (Chromium only).
 *
 * Injects autoconsent into an isolated world of every frame (via CDP), answers its messages the
 * way the browser extension does, waits for the opt-out/opt-in flow, and screenshots the result.
 * Provider modules (`proxy-testing`, `oxylabs-testing` skills) supply the browser.
 */

/**
 * @typedef {import('playwright').Page} Page
 */

/** @typedef {import('../../../lib/types.js').Config} Config */

/**
 * Primitives the message handler uses to talk to a specific frame's content script.
 * `frameRef` is the isolated world's execution-context uniqueId the message arrived from;
 * the transport resolves it to the owning CDP session and the matching page-world context.
 * @typedef {Object} MessageTransport
 * @property {(frameRef: string, message: object) => Promise<void>} sendToContentScript
 * @property {(frameRef: string, code: string) => Promise<any>} evalInMainWorld
 */

/**
 * @typedef {(transport: MessageTransport) => (msg: any, frameRef: string) => Promise<void>} MessageHandlerFactory
 */

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
 * @property {(timeout?: number, detectionTimeout?: number, isPaused?: () => boolean) => Promise<boolean>} waitForCompletion - While `isPaused()` is true, neither timeout runs down.
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

/**
 * Provider code for the isolated world. Its messages go through the same binding as autoconsent's,
 * so they reach Node even if the page navigates right after.
 * @typedef {Object} IsolatedWorldExtension
 * @property {string} [script] - Runs after the content script; reports to Node with `window.autoconsentSendMessage(msg)`.
 * @property {(msg: any) => void} [onMessage] - Called with every message from the isolated world.
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

/**
 * Inject autoconsent into a page. Call before navigating to the target URL.
 *
 * The content script runs in an isolated world (via CDP) while `eval` snippets execute in
 * the page's main world, mirroring the browser extension. Chromium only.
 * @param {Page} page
 * @param {Partial<TestOptions>} options
 * @param {ProviderName} provider - Recorded in the collected TestResult.
 * @param {IsolatedWorldExtension} [extension] - Provider code that runs next to the content script.
 * @returns {Promise<AutoconsentContext>}
 */
export async function injectAutoconsent(page, options, provider, extension = {}) {
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
            extension.onMessage?.(msg);
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
    await injectIntoIsolatedWorld(page, createMessageHandler, extension.script ?? '');

    function hasMessage(/** @type {string} */ type) {
        return received.some((m) => m.type === type);
    }

    async function waitForCompletion(timeout = 45000, detectionTimeout = timeout, isPaused = () => false) {
        let start = Date.now();
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
            const before = Date.now();
            await new Promise((r) => setTimeout(r, 500));
            if (isPaused()) start += Date.now() - before;
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
 * Isolated-world injection via CDP (Chromium only). For each frame we create a dedicated isolated
 * world via `Page.createIsolatedWorld`, then inject the content script there and bridge messages
 * over a per-context CDP binding.
 *
 * @param {Page} page
 * @param {MessageHandlerFactory} createMessageHandler
 * @param {string} extraScript - Runs in each isolated world after the content script.
 */
async function injectIntoIsolatedWorld(page, createMessageHandler, extraScript) {
    // Isolated world name: `<prefix><pageWorldUniqueId><separator><frameId>`. Encoding the page-world
    // uniqueId lets us later run eval snippets in that frame's main world.
    const WORLD_PREFIX = 'autoconsent_iw_';
    const WORLD_SEPARATOR = '_frame_';
    const BINDING_PREFIX = 'autoconsentSendMessage_';

    /** @type {Map<string, string>} isolated-world uniqueId -> page (main) world uniqueId */
    const isolated2pageWorld = new Map();
    /** @type {Map<string, any>} isolated-world uniqueId -> CDP session that owns it */
    const sessionByContext = new Map();
    /** @type {Map<string, string>} binding name -> isolated-world uniqueId */
    const contextByBinding = new Map();

    const handle = createMessageHandler({
        sendToContentScript: async (isolatedUniqueId, message) => {
            const client = sessionByContext.get(isolatedUniqueId);
            if (!client) return;
            try {
                await client.send('Runtime.evaluate', {
                    expression: `autoconsentReceiveMessage(${JSON.stringify(message)})`,
                    uniqueContextId: isolatedUniqueId,
                    awaitPromise: true,
                    // Some pages' CSP would otherwise block evaluating in the isolated world.
                    allowUnsafeEvalBlockedByCSP: true,
                });
            } catch {
                // The context may be gone if the frame navigated or detached.
            }
        },
        evalInMainWorld: async (isolatedUniqueId, code) => {
            const client = sessionByContext.get(isolatedUniqueId);
            const pageWorldUniqueId = isolated2pageWorld.get(isolatedUniqueId);
            if (!client || !pageWorldUniqueId) return false;
            const { result, exceptionDetails } = await client.send('Runtime.evaluate', {
                expression: code,
                uniqueContextId: pageWorldUniqueId,
                returnByValue: true,
                awaitPromise: true,
                // Eval snippets must run even when the page's CSP disallows eval.
                allowUnsafeEvalBlockedByCSP: true,
            });
            return exceptionDetails ? false : (result?.value ?? false);
        },
    });

    async function attachToSession(/** @type {any} */ client) {
        client.on('Runtime.executionContextCreated', async (/** @type {any} */ event) => {
            const { context } = event;
            const frameId = context.auxData?.frameId;

            // Our isolated world finished initializing: wire up its binding and content script.
            if (context.auxData?.type === 'isolated' && typeof context.name === 'string' && context.name.startsWith(WORLD_PREFIX)) {
                const separatorIndex = context.name.indexOf(WORLD_SEPARATOR);
                const pageWorldUniqueId = context.name.slice(WORLD_PREFIX.length, separatorIndex);
                const intendedFrameId = context.name.slice(separatorIndex + WORLD_SEPARATOR.length);
                // Chromium may create the named world in other frames too; keep only the one we asked for.
                if (intendedFrameId !== frameId) return;

                isolated2pageWorld.set(context.uniqueId, pageWorldUniqueId);
                sessionByContext.set(context.uniqueId, client);

                const bindingName = `${BINDING_PREFIX}${context.uniqueId.replace(/\W/g, '_')}`;
                contextByBinding.set(bindingName, context.uniqueId);
                try {
                    await client.send('Runtime.addBinding', { name: bindingName, executionContextName: context.name });
                    // CDP bindings take a single string arg, so wrap it in the shape the content script expects.
                    await client.send('Runtime.evaluate', {
                        expression: `window.autoconsentSendMessage = (m) => { window.${bindingName}(JSON.stringify(m)); return Promise.resolve(); };\n${contentScript}\n${extraScript}`,
                        uniqueContextId: context.uniqueId,
                        allowUnsafeEvalBlockedByCSP: true,
                    });
                } catch {
                    // The frame may have navigated or detached before we finished wiring it up.
                }
                return;
            }

            // A regular page (main) world: request an isolated world for it, tagged with its id.
            if (!frameId || context.auxData?.type !== 'default' || !context.origin || context.origin === '://') return;
            try {
                await client.send('Page.createIsolatedWorld', {
                    frameId,
                    worldName: `${WORLD_PREFIX}${context.uniqueId}${WORLD_SEPARATOR}${frameId}`,
                });
            } catch {
                // The frame may have navigated or detached.
            }
        });

        client.on('Runtime.executionContextDestroyed', (/** @type {any} */ event) => {
            const uniqueId = event.executionContextUniqueId;
            if (!uniqueId) return;
            isolated2pageWorld.delete(uniqueId);
            sessionByContext.delete(uniqueId);
        });

        client.on('Runtime.bindingCalled', (/** @type {any} */ event) => {
            const isolatedUniqueId = contextByBinding.get(event.name);
            if (!isolatedUniqueId) return;
            let msg;
            try {
                msg = JSON.parse(event.payload);
            } catch {
                return;
            }
            handle(msg, isolatedUniqueId);
        });

        // Page must be enabled before createIsolatedWorld; Runtime.enable replays existing contexts.
        await client.send('Page.enable');
        await client.send('Runtime.enable');
    }

    // The page session covers the main frame and all same-process (in-process) iframes.
    await attachToSession(await page.context().newCDPSession(page));

    // Out-of-process iframes (OOPIFs) are separate CDP targets, so each needs its own session.
    // newCDPSession throws for in-process frames, which are already handled above.
    const attachedFrames = new WeakSet();
    async function attachToOopif(/** @type {import('playwright').Frame} */ frame) {
        if (!frame.parentFrame() || attachedFrames.has(frame)) return;
        // Mark synchronously (before any await) so concurrent frameattached/framenavigated events
        // can't open duplicate sessions for the same frame. Unmark on failure so a later event retries.
        attachedFrames.add(frame);
        let client;
        try {
            client = await page.context().newCDPSession(frame);
        } catch {
            // In-process frame (already covered by the page session) or the frame detached.
            attachedFrames.delete(frame);
            return;
        }
        try {
            await attachToSession(client);
        } catch {
            // Wiring up the session failed (e.g. the OOPIF navigated/detached). Detach the
            // half-initialized session before unmarking, otherwise a retry would open a second
            // session for the same frame, leaving duplicate listeners and possible double injection.
            try {
                await client.detach();
            } catch {
                // The session may already be gone.
            }
            attachedFrames.delete(frame);
        }
    }
    page.on('frameattached', attachToOopif);
    page.on('framenavigated', attachToOopif);
    await Promise.all(page.frames().map(attachToOopif));
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
