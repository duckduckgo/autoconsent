/**
 * CDP transports that run the autoconsent content script in an isolated world of every frame
 * and ferry its messages to and from Node. Chromium only.
 *
 * - `injectWithBindings`: a per-context `Runtime.addBinding` channel. Covers out-of-process
 *   iframes. Used with locally launched browsers.
 * - `injectWithPolling`: an in-page outbox that Node drains with `Runtime.evaluate`. For remote
 *   CDP endpoints that strip `Runtime.addBinding` (Oxylabs).
 */

/**
 * @typedef {import('playwright').Page} Page
 * @typedef {import('playwright').CDPSession} CDPSession
 */

/**
 * Primitives the message handler uses to talk to a specific frame's content script.
 * `frameRef` identifies the isolated world the message arrived from; the transport resolves it
 * to the owning CDP session and the matching page-world context.
 * @typedef {Object} MessageTransport
 * @property {(frameRef: any, message: object) => Promise<void>} sendToContentScript
 * @property {(frameRef: any, code: string) => Promise<any>} evalInMainWorld
 */

/**
 * @typedef {(transport: MessageTransport) => (msg: any, frameRef: any) => Promise<void>} MessageHandlerFactory
 */

/**
 * @typedef {(page: Page, contentScript: string, createMessageHandler: MessageHandlerFactory) => Promise<void>} Transport
 */

/**
 * Isolated-world injection via CDP bindings. For each frame we create a dedicated isolated
 * world via `Page.createIsolatedWorld`, then inject the content script there and bridge messages
 * over a per-context CDP binding.
 * @type {Transport}
 */
export async function injectWithBindings(page, contentScript, createMessageHandler) {
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
 * An extra main-world message queue drained alongside the autoconsent outbox. `script` is
 * installed in every frame's main world before page scripts run and should push items onto
 * `globalThis[varName]`.
 * @typedef {Object} MainWorldQueue
 * @property {string} script
 * @property {string} varName
 * @property {(item: any) => void} onItem
 */

const POLL_INTERVAL_MS = 50;
const POLLING_WORLD_NAME = 'autoconsent';

// The content script's outgoing messages are pushed onto an in-world array instead of a CDP binding.
const outboxWrapper = `
if (!globalThis.__acOutbox) globalThis.__acOutbox = [];
if (!window.autoconsentSendMessage) {
    window.autoconsentSendMessage = (msg) => { globalThis.__acOutbox.push(msg); };
}
`;

// Drain expression: returns null when the queue is empty (cheap), JSON-encoded array of messages
// otherwise. JSON-encoding lets us avoid re-deserialization surprises with returnByValue on complex
// objects.
const DRAIN_EXPRESSION = (/** @type {string} */ varName) => `(() => {
    const q = globalThis.${varName};
    if (!q || q.length === 0) return null;
    const out = q.splice(0);
    return JSON.stringify(out);
})()`;

/**
 * Isolated-world injection via an in-page outbox polled over CDP. Some remote CDP endpoints
 * (Oxylabs Agent Browser) silently strip `Runtime.addBinding`, so bindings register on the Node side
 * but never reach the page. `Page.addScriptToEvaluateOnNewDocument` and `Runtime.evaluate` are
 * honored, so the content script pushes messages onto an in-world array and Node drains it every
 * 50 ms via `Runtime.evaluate({ contextId })`.
 *
 * Out-of-process iframes are not attached as separate CDP sessions (unlike `injectWithBindings`).
 * @param {Page} page
 * @param {string} contentScript
 * @param {MessageHandlerFactory} createMessageHandler
 * @param {{ mainWorldQueue?: MainWorldQueue }} [options]
 */
export async function injectWithPolling(page, contentScript, createMessageHandler, options = {}) {
    const { mainWorldQueue } = options;
    const client = await page.context().newCDPSession(page);

    // Track contexts so we know which ones to drain. The autoconsent isolated world is created
    // per-frame on every navigation; the main world is the default context. Both are scoped per frame.
    /** @type {Map<number, string>} isolated contextId -> frameId */
    const isolatedContexts = new Map();
    /** @type {Map<number, string>} main contextId -> frameId */
    const mainContexts = new Map();
    /** @type {Map<string, number>} frameId -> main contextId */
    const mainContextByFrame = new Map();

    client.on('Runtime.executionContextCreated', ({ context }) => {
        const frameId = context.auxData?.frameId;
        if (!frameId) return;
        if (context.name === POLLING_WORLD_NAME) {
            isolatedContexts.set(context.id, frameId);
        } else if (context.auxData?.isDefault) {
            mainContexts.set(context.id, frameId);
            mainContextByFrame.set(frameId, context.id);
        }
    });
    client.on('Runtime.executionContextDestroyed', ({ executionContextId }) => {
        isolatedContexts.delete(executionContextId);
        const frameId = mainContexts.get(executionContextId);
        mainContexts.delete(executionContextId);
        if (frameId && mainContextByFrame.get(frameId) === executionContextId) {
            mainContextByFrame.delete(frameId);
        }
    });
    client.on('Runtime.executionContextsCleared', () => {
        isolatedContexts.clear();
        mainContexts.clear();
        mainContextByFrame.clear();
    });

    await client.send('Runtime.enable');
    await client.send('Page.enable');
    await client.send('Page.addScriptToEvaluateOnNewDocument', {
        source: outboxWrapper + '\n' + contentScript,
        worldName: POLLING_WORLD_NAME,
    });
    if (mainWorldQueue) {
        await client.send('Page.addScriptToEvaluateOnNewDocument', { source: mainWorldQueue.script });
    }

    const handle = createMessageHandler({
        sendToContentScript: async (contextId, message) => {
            try {
                await client.send('Runtime.evaluate', {
                    expression: `autoconsentReceiveMessage(${JSON.stringify(message)})`,
                    contextId,
                    awaitPromise: true,
                });
            } catch {
                // Short-lived iframe contexts produce "Cannot find context" errors; harmless.
            }
        },
        evalInMainWorld: async (contextId, code) => {
            // Run in the main world of the frame the message came from, so page globals
            // (e.g. window.Cookiebot) are accessible.
            const frameId = isolatedContexts.get(contextId);
            const mainContextId = frameId ? mainContextByFrame.get(frameId) : undefined;
            if (mainContextId === undefined) return false;
            const { result, exceptionDetails } = await client.send('Runtime.evaluate', {
                expression: code,
                contextId: mainContextId,
                returnByValue: true,
                awaitPromise: true,
            });
            return exceptionDetails ? false : (result?.value ?? false);
        },
    });

    let stopped = false;
    const stop = () => {
        stopped = true;
    };
    page.on('close', stop);
    page.context().browser()?.on('disconnected', stop);

    async function drain(/** @type {number} */ contextId, /** @type {string} */ varName) {
        try {
            const r = await client.send('Runtime.evaluate', {
                contextId,
                expression: DRAIN_EXPRESSION(varName),
                returnByValue: true,
            });
            const value = r?.result?.value;
            if (value == null) return [];
            return JSON.parse(value);
        } catch {
            // Context may have been destroyed mid-call (navigation); ignore.
            return [];
        }
    }

    // All contexts are drained in parallel: every eval round trip waits for one poll iteration, so
    // draining frame by frame (each a CDP round trip) slows the content script down on busy pages.
    async function pollOnce() {
        const drains = [...isolatedContexts.keys()].map(async (contextId) => {
            for (const msg of await drain(contextId, '__acOutbox')) {
                // Not awaited: replies such as `selfTest` only resolve after the content script gets
                // answers to its own eval messages, which this loop has to keep draining meanwhile.
                handle(msg, contextId);
            }
        });
        if (mainWorldQueue) {
            const { varName, onItem } = mainWorldQueue;
            for (const contextId of mainContexts.keys()) {
                drains.push(drain(contextId, varName).then((items) => items.forEach(onItem)));
            }
        }
        await Promise.all(drains);
    }

    (async function pollLoop() {
        while (!stopped) {
            try {
                await pollOnce();
            } catch {}
            await new Promise((r) => {
                // unref'd so Node can exit cleanly once the test completes.
                const t = setTimeout(r, POLL_INTERVAL_MS);
                t.unref?.();
            });
        }
    })();
}
