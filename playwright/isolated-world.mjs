/**
 * Runs the autoconsent content script in an isolated world of every frame of a Chromium page (via CDP),
 * the way the browser extension does, and bridges its messages to Node. Shared by the Playwright E2E
 * runner and the regional-testing harness used by agent skills.
 */

/**
 * @typedef {import('playwright').Page} Page
 */

/**
 * Primitives the message handler uses to talk to a specific frame's content script.
 * `frameRef` is the isolated world's execution-context uniqueId the message arrived from;
 * the transport resolves it to the owning CDP session and the matching page-world context.
 * @typedef {Object} MessageTransport
 * @property {(frameRef: string, message: object) => Promise<void>} sendToContentScript
 * @property {(frameRef: string, code: string) => Promise<any>} evalInMainWorld
 * @property {(frameRef: string) => boolean} isMainFrame - Whether the frame is the page's top frame.
 */

/**
 * @typedef {(transport: MessageTransport) => (msg: any, frameRef: string) => Promise<void>} MessageHandlerFactory
 */

/**
 * Isolated-world injection via CDP (Chromium only). For each frame we create a dedicated isolated
 * world via `Page.createIsolatedWorld`, then inject the content script there and bridge messages
 * over a per-context CDP binding.
 *
 * @param {Page} page
 * @param {MessageHandlerFactory} createMessageHandler
 * @param {string} contentScript - The autoconsent content script bundle.
 * @param {string} [extraScript] - Runs in each isolated world after the content script.
 */
export async function injectIntoIsolatedWorld(page, createMessageHandler, contentScript, extraScript = '') {
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
    /** @type {Map<string, string>} isolated-world uniqueId -> CDP frame id */
    const frameByContext = new Map();
    /** @type {Map<string, string>} CDP frame id -> uniqueId of the frame's current page (main) world */
    const pageWorldByFrame = new Map();
    /** @type {any} */
    let pageSession = null;
    /** @type {string|null} */
    let mainFrameId = null;

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
        isMainFrame: (isolatedUniqueId) =>
            sessionByContext.get(isolatedUniqueId) === pageSession && frameByContext.get(isolatedUniqueId) === mainFrameId,
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
                // Chromium may create the named world in other frames too, and recreates it in the frame's
                // next document; keep only the one we asked for in the current document.
                if (intendedFrameId !== frameId || pageWorldByFrame.get(frameId) !== pageWorldUniqueId) return;

                isolated2pageWorld.set(context.uniqueId, pageWorldUniqueId);
                sessionByContext.set(context.uniqueId, client);
                frameByContext.set(context.uniqueId, frameId);

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
            if (!frameId || context.auxData?.type !== 'default') return;
            pageWorldByFrame.set(frameId, context.uniqueId);
            if (!context.origin || context.origin === '://') return;
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
            frameByContext.delete(uniqueId);
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
    pageSession = await page.context().newCDPSession(page);
    const { frameTree } = await pageSession.send('Page.getFrameTree');
    mainFrameId = frameTree.frame.id;
    await attachToSession(pageSession);

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
