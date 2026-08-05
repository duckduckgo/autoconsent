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
 * @property {number} [detectionTimeout] - How long to wait for `cmpDetected` before giving up. Defaults to `completionTimeout`.
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
 * @property {(timeout?: number, detectionTimeout?: number) => Promise<boolean>} waitForCompletion
 * @property {(type: string, timeout?: number) => Promise<boolean>} waitForMessage
 * @property {(url: string, region: string) => TestResult} collectResult
 */

/** @typedef {import('../../../../lib/types').Config} Config */

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

import fs from 'fs';
import http from 'http';
import net from 'net';
import path from 'path';
import tls from 'tls';
import { fileURLToPath } from 'url';
import { chromium } from 'playwright';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '../../../..');

const contentScript = fs.readFileSync(path.join(projectRoot, 'dist/autoconsent.playwright.js'), 'utf8');
const rulesJson = JSON.parse(fs.readFileSync(path.join(projectRoot, 'rules/rules.json'), 'utf-8'));
const fullRules = rulesJson.autoconsent;

/** All supported proxy regions. */
export const ALL_REGIONS = ['us', 'gb', 'au', 'ca', 'de', 'fr', 'nl', 'ch', 'no', 'it', 'es', 'pl', 'se', 'dk', 'jp'];

/** Core pass: default verification set (CCPA, UK GDPR, EEA GDPR). Add the reported region when not already covered. */
export const CORE_REGIONS = ['us', 'gb', 'de'];

/** Expanded pass: escalation set covering all non-GDPR regimes plus GDPR representatives. */
export const EXPANDED_REGIONS = ['us', 'gb', 'de', 'fr', 'nl', 'pl', 'au', 'ca', 'jp'];

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
 *
 * Routes through a local relay (`startRegionalProxyRelay`) rather than pointing Chromium's
 * `proxy` directly at the region host, because some region hosts (e.g. `dew.socks.duckduckgo.com`,
 * region `de`) don't send their TLS intermediate certificate - a direct connection then fails
 * with `ERR_PROXY_CERTIFICATE_INVALID`. The relay transparently repairs an incomplete chain
 * when it hits one; hosts with a complete chain pay only the added local loopback hop.
 * @param {string} regionKey
 * @param {Partial<TestOptions>} [options]
 * @returns {Promise<Browser>}
 */
export async function launchRegionalProxyBrowser(regionKey, options = {}) {
    const relay = await startRegionalProxyRelay(regionKey);
    const browser = await chromium.launch({
        headless: options.headless ?? true,
        ...(options.launchOptions ?? {}),
        proxy: { server: `http://127.0.0.1:${relay.port}` },
    });
    browser.on('disconnected', relay.close);
    return browser;
}

function derToPem(der) {
    const lines = der.toString('base64').match(/.{1,64}/g) ?? [];
    return `-----BEGIN CERTIFICATE-----\n${lines.join('\n')}\n-----END CERTIFICATE-----\n`;
}

async function fetchAiaIntermediate(aiaUrl) {
    return new Promise((resolve, reject) => {
        http.get(aiaUrl, (res) => {
            if (res.statusCode !== 200) {
                reject(new Error(`AIA fetch of ${aiaUrl} returned HTTP ${res.statusCode}`));
                res.resume();
                return;
            }
            const chunks = [];
            res.on('data', (c) => chunks.push(c));
            res.on('end', () => resolve(derToPem(Buffer.concat(chunks))));
            res.on('error', reject);
        }).on('error', reject);
    });
}

/**
 * Read a `CONNECT` response off a socket: resolves once the status line + headers are in,
 * rejects if the status isn't 200.
 * @param {net.Socket} socket
 * @returns {Promise<void>}
 */
function readConnectResponse(socket) {
    return new Promise((resolve, reject) => {
        let buf = '';
        const onData = (d) => {
            buf += d.toString('latin1');
            if (!buf.includes('\r\n\r\n')) return;
            socket.removeListener('data', onData);
            if (/^HTTP\/1\.[01] 200/.test(buf)) resolve();
            else reject(new Error(`CONNECT failed: ${buf.split('\r\n')[0]}`));
        };
        socket.on('data', onData);
    });
}

/**
 * Open a raw (unencrypted) socket to host:port, tunneling through $HTTPS_PROXY via CONNECT
 * when it's set (needed inside the CCR sandbox, where direct egress to arbitrary hosts may
 * be blocked), otherwise connecting to the host directly.
 * @param {string} host
 * @param {number} [port]
 * @returns {Promise<net.Socket>}
 */
async function connectRaw(host, port = 443) {
    const gateway = process.env.HTTPS_PROXY || process.env.https_proxy;
    if (!gateway) {
        return new Promise((resolve, reject) => {
            const sock = net.connect(port, host);
            sock.once('connect', () => resolve(sock));
            sock.once('error', reject);
        });
    }
    const { hostname, port: gatewayPort, protocol } = new URL(gateway);
    const sock = await new Promise((resolve, reject) => {
        const s = net.connect(Number(gatewayPort) || (protocol === 'https:' ? 443 : 80), hostname, () => {
            s.write(`CONNECT ${host}:${port} HTTP/1.1\r\nHost: ${host}:${port}\r\n\r\n`);
        });
        s.once('error', reject);
        resolve(s);
    });
    try {
        await readConnectResponse(sock);
    } catch (e) {
        sock.destroy();
        throw new Error(`Gateway CONNECT to ${host}:${port} failed: ${e.message}`);
    }
    return sock;
}

function tlsConnect(opts) {
    return new Promise((resolve, reject) => {
        const socket = tls.connect(opts, () => resolve(socket));
        socket.once('error', reject);
    });
}

/**
 * Read a host's AIA "CA Issuers" URL off its own (untrusted) leaf certificate and fetch the
 * intermediate it points to. This connection is used only to read that public pointer, never
 * to send credentials or real traffic.
 * @param {string} host
 * @returns {Promise<string|null>} PEM of the intermediate, or null if it can't be found.
 */
async function discoverMissingIntermediate(host) {
    const rawSocket = await connectRaw(host);
    return new Promise((resolve) => {
        const probe = tls.connect({ socket: rawSocket, servername: host, rejectUnauthorized: false }, () => {
            const aia = probe.getPeerCertificate()?.infoAccess?.['CA Issuers - URI']?.[0];
            probe.destroy();
            if (!aia) {
                resolve(null);
                return;
            }
            fetchAiaIntermediate(aia)
                .then(resolve)
                .catch(() => resolve(null));
        });
        probe.once('error', () => resolve(null));
    });
}

/** host -> extra CA PEM needed to complete its chain, once discovered. */
const chainRepairCache = new Map();

/**
 * Open a fully-verified TLS connection to a regional proxy host - `rejectUnauthorized` stays
 * `true` throughout, so the proxy credentials sent over it are never exposed to an unverified
 * connection. If the host's own chain turns out to be incomplete (missing intermediate - e.g.
 * `dew.socks.duckduckgo.com`), fetches the intermediate via AIA and retries once, caching the
 * result so later calls for the same host complete the chain on their first attempt.
 * @param {string} host
 * @returns {Promise<tls.TLSSocket>}
 */
async function connectRegionalProxyTls(host) {
    const cachedCa = chainRepairCache.get(host);
    const tlsOpts = { socket: await connectRaw(host), servername: host, rejectUnauthorized: true };
    if (cachedCa) tlsOpts.ca = [cachedCa, ...tls.rootCertificates];
    try {
        return await tlsConnect(tlsOpts);
    } catch (e) {
        if (cachedCa || e.code !== 'UNABLE_TO_VERIFY_LEAF_SIGNATURE') throw e;
        const intermediatePem = await discoverMissingIntermediate(host);
        if (!intermediatePem) throw e;
        chainRepairCache.set(host, intermediatePem);
        return tlsConnect({
            socket: await connectRaw(host),
            servername: host,
            rejectUnauthorized: true,
            ca: [intermediatePem, ...tls.rootCertificates],
        });
    }
}

/**
 * Start a local CONNECT-chaining relay for a region's proxy. Chromium points its `proxy` at
 * this relay instead of at the region host directly, so `connectRegionalProxyTls` can repair
 * an incomplete TLS chain on the region host transparently - see its docs for how.
 * @param {string} regionKey
 * @param {NodeJS.ProcessEnv} [env]
 * @returns {Promise<{ port: number, close: () => void }>}
 */
export async function startRegionalProxyRelay(regionKey, env = process.env) {
    const proxyConfig = buildProxyConfig(regionKey, env);
    const host = new URL(proxyConfig.server).hostname;
    const auth = Buffer.from(`${proxyConfig.username}:${proxyConfig.password}`).toString('base64');

    const server = http.createServer((_req, res) => {
        res.writeHead(400);
        res.end('CONNECT only');
    });

    server.on('connect', async (req, clientSocket) => {
        clientSocket.on('error', () => {});
        try {
            const tlsSocket = await connectRegionalProxyTls(host);
            tlsSocket.write(`CONNECT ${req.url} HTTP/1.1\r\nHost: ${req.url}\r\nProxy-Authorization: Basic ${auth}\r\n\r\n`);
            await readConnectResponse(tlsSocket);
            clientSocket.write('HTTP/1.1 200 Connection Established\r\n\r\n');
            tlsSocket.pipe(clientSocket);
            clientSocket.pipe(tlsSocket);
        } catch {
            clientSocket.end('HTTP/1.1 502 Bad Gateway\r\n\r\n');
        }
    });

    await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
    return {
        port: server.address().port,
        close: () => server.close(),
    };
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
 * Isolated-world injection via CDP (Chromium only). For each frame we create a dedicated isolated
 * world via `Page.createIsolatedWorld`, then inject the content script there and bridge messages
 * over a per-context CDP binding.
 *
 * @param {Page} page
 * @param {MessageHandlerFactory} createMessageHandler
 */
async function injectIntoIsolatedWorld(page, createMessageHandler) {
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
                        expression: `window.autoconsentSendMessage = (m) => { window.${bindingName}(JSON.stringify(m)); return Promise.resolve(); };\n${contentScript}`,
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
    const detectionTimeout = options.detectionTimeout ?? completionTimeout;
    const screenshotsDir = options.screenshotsDir ?? path.join(projectRoot, 'test-results/regional-proxy');
    const startTime = Date.now();

    try {
        const ctx = await injectAutoconsent(page, options);
        await page.goto(url, { waitUntil: 'commit', timeout: navTimeout });

        const completed = await ctx.waitForCompletion(completionTimeout, detectionTimeout);
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
