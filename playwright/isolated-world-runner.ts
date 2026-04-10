/**
 * Proof-of-concept: Isolated World injection for the Playwright test runner.
 *
 * This module demonstrates how the autoconsent content script could be injected
 * into a CDP isolated world (Chromium only) instead of the page's main world.
 * This more accurately replicates the production extension environment where
 * the content script runs in Chrome's isolated world.
 *
 * Limitations:
 * - Chromium only (CDP is not available for WebKit or Firefox)
 * - More complex messaging bridge (CustomEvent-based instead of exposeBinding)
 * - Frame re-injection requires tracking isolated world context IDs
 *
 * This is NOT recommended for production use in the test suite. See
 * docs/isolated-world-analysis.md for full rationale.
 */

import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { test, expect, type Page, Frame, TestInfo, type CDPSession } from '@playwright/test';
import { waitFor } from '../lib/utils';
import { ContentScriptMessage } from '../lib/messages';
import { AutoAction, RuleBundle } from '../lib/types';
import { filterCompactRules } from '../lib/encoding';
import compactRules from '../rules/compact-rules.json';
import { autoconsent as fullRules } from '../rules/rules.json';

const LOG_MESSAGES: ContentScriptMessage['type'][] = process.env.CI
    ? []
    : ['optInResult', 'optOutResult', 'autoconsentDone', 'autoconsentError', 'selfTestResult'];
const LOG_PAGE_LOGS = false;

const testRegion = (process.env.REGION || 'NA').trim();
test.describe.configure({ mode: 'parallel' });

type TestOptions = {
    testOptOut: boolean;
    testSelfTest: boolean;
    testOptIn: boolean;
    skipRegions?: string[];
    onlyRegions?: string[];
    mobile: boolean;
    expectPopupOpen: boolean;
    expectedRuns: number;
};
const defaultOptions: TestOptions = {
    testOptOut: true,
    testOptIn: true,
    testSelfTest: true,
    skipRegions: [],
    onlyRegions: [],
    mobile: false,
    expectPopupOpen: true,
    expectedRuns: 1,
};

const contentScript = fs.readFileSync(path.join(__dirname, '../dist/autoconsent.playwright.js'), 'utf8');
const screenshotsDir = path.join(__dirname, '../test-results/screenshots');
const deduplicatedRuleLookup = (
    JSON.parse(fs.readFileSync(path.join(__dirname, '../rules/rules.json'), 'utf-8')) as RuleBundle
).autoconsent.reduce((acc, rule) => {
    if (rule._metadata?.deduplicatedFrom) {
        rule._metadata.deduplicatedFrom.forEach((from: string) => acc.set(from, rule.name));
    }
    return acc;
}, new Map<string, string>());

/**
 * Wraps the content script to use CustomEvent-based messaging instead of
 * window.autoconsentSendMessage (which would be a main-world binding).
 *
 * In the isolated world, we can't use Playwright's exposeBinding because
 * those bindings are injected into the main world's window object. Instead,
 * we use CustomEvents on the document, which are visible across worlds
 * since they share the same DOM.
 */
function wrapContentScriptForIsolatedWorld(originalScript: string): string {
    return `
(function() {
    // Bridge: content script (isolated world) -> Node.js (via main world listener)
    // We dispatch a CustomEvent on the document. The main world has a listener
    // that picks it up and forwards it to Node.js via exposeBinding.
    window.autoconsentSendMessage = async function(msg) {
        document.dispatchEvent(new CustomEvent('__autoconsent_to_bg', {
            detail: JSON.stringify(msg)
        }));
    };

    // Bridge: Node.js -> content script (isolated world)
    // The main world dispatches a CustomEvent that we listen for here.
    document.addEventListener('__autoconsent_from_bg', function(e) {
        const message = JSON.parse(e.detail);
        if (window.autoconsentReceiveMessage) {
            window.autoconsentReceiveMessage(message);
        }
    });

    ${originalScript}
})();
`;
}

/**
 * Script injected into the main world to bridge messages between
 * the isolated world's CustomEvents and Playwright's exposeBinding.
 */
function getMainWorldBridgeScript(): string {
    return `
(function() {
    // Listen for messages from the isolated world (via CustomEvent)
    // and forward them to Node.js via the exposed binding.
    document.addEventListener('__autoconsent_to_bg', async function(e) {
        const msg = JSON.parse(e.detail);
        if (window.__autoconsentBridge) {
            await window.__autoconsentBridge(msg);
        }
    });
})();
`;
}

class IsolatedWorldTestRun {
    page: Page;
    testInfo: TestInfo;
    url: string;
    expectedCmp: string;
    options: TestOptions;
    autoAction: AutoAction | null;
    domain: string;
    urlHash: string;
    formFactor: string;
    received: ContentScriptMessage[] = [];
    screenshotCounter = 0;
    selfTestFrame: Frame | null = null;
    cdpSession: CDPSession | null = null;
    isolatedContextIds: Map<string, number> = new Map();
    injectedFrames: WeakSet<Frame> = new WeakSet();

    constructor(page: Page, testInfo: TestInfo, url: string, expectedCmp: string, options: TestOptions, autoAction: AutoAction | null) {
        this.page = page;
        this.testInfo = testInfo;
        this.url = url;
        if (deduplicatedRuleLookup.has(expectedCmp)) {
            this.expectedCmp = deduplicatedRuleLookup.get(expectedCmp)!;
        } else {
            this.expectedCmp = expectedCmp;
        }
        this.options = options;
        this.autoAction = autoAction;
        this.domain = new URL(url).hostname;
        this.urlHash = crypto.createHash('md5').update(url).digest('hex').slice(0, 4);
        this.formFactor = this.options.mobile ? 'mobile' : 'desktop';
    }

    async run() {
        if ((this.options.mobile && !this.testInfo.project.use.isMobile) || (!this.options.mobile && this.testInfo.project.use.isMobile)) {
            test.skip();
        }

        LOG_PAGE_LOGS &&
            this.page.on('console', async (msg) => {
                console.log(`    page log:`, msg.text());
            });

        // Set up CDP session for isolated world injection
        this.cdpSession = await this.page.context().newCDPSession(this.page);

        // Expose the bridge binding in the main world
        await this.page.exposeBinding('__autoconsentBridge', this.messageCallback.bind(this));

        await this.page.goto(this.url, { waitUntil: 'commit' });

        await this.injectContentScripts();

        try {
            await this.runAssertions();
        } catch (e) {
            if (e instanceof Error) {
                const failureStats = {
                    reason: e.message,
                    url: this.url,
                    cmp: this.expectedCmp,
                    autoAction: this.autoAction,
                    region: testRegion,
                    formFactor: this.formFactor,
                    testName: this.testInfo.title,
                    retry: this.testInfo.retry,
                };
                console.error(`Autoconsent test failed on ${this.url} failure stats: ${JSON.stringify(failureStats)}`);
            }
            try {
                await this.takeScreenshot(`${this.screenshotCounter++}-failure`);
            } catch {
                // ignore screenshot errors
            }
            throw e;
        }
    }

    /**
     * Get the frame tree from CDP to find frame IDs.
     */
    async getFrameId(frame: Frame): Promise<string | null> {
        if (!this.cdpSession) return null;
        try {
            const { frameTree } = await this.cdpSession.send('Page.getFrameTree');
            return this.findFrameId(frameTree, frame.url());
        } catch {
            return null;
        }
    }

    private findFrameId(frameTree: any, url: string): string | null {
        if (frameTree.frame.url === url) {
            return frameTree.frame.id;
        }
        if (frameTree.childFrames) {
            for (const child of frameTree.childFrames) {
                const found = this.findFrameId(child, url);
                if (found) return found;
            }
        }
        return null;
    }

    /**
     * Inject the content script into an isolated world for a specific frame.
     */
    async injectContentScriptIsolated(pageOrFrame: Page | Frame) {
        const frame = 'mainFrame' in pageOrFrame ? pageOrFrame.mainFrame() : pageOrFrame;

        if (this.injectedFrames.has(frame)) {
            return;
        }
        this.injectedFrames.add(frame);

        if (!this.cdpSession) {
            return this.injectContentScriptMainWorld(pageOrFrame);
        }

        try {
            const frameId = await this.getFrameId(frame);

            if (!frameId) {
                return this.injectContentScriptMainWorld(pageOrFrame);
            }

            // Create an isolated world for this frame
            const { executionContextId } = await this.cdpSession.send('Page.createIsolatedWorld', {
                frameId,
                worldName: 'autoconsent-test-isolated',
                grantUniveralAccess: true,
            });

            this.isolatedContextIds.set(frameId, executionContextId);

            // Inject the main-world bridge script (listens for CustomEvents
            // from the isolated world and forwards via exposeBinding)
            await pageOrFrame.evaluate(getMainWorldBridgeScript());

            // Inject the wrapped content script into the isolated world
            const wrappedScript = wrapContentScriptForIsolatedWorld(contentScript);
            await this.cdpSession.send('Runtime.evaluate', {
                expression: wrappedScript,
                contextId: executionContextId,
                awaitPromise: true,
            });
        } catch (e) {
            // Frame was detached or CDP error — fall back to main world
            try {
                await this.injectContentScriptMainWorld(pageOrFrame);
            } catch {
                // ignore
            }
        }
    }

    async injectContentScriptMainWorld(pageOrFrame: Page | Frame) {
        try {
            await pageOrFrame.evaluate(contentScript);
        } catch {
            // frame was detached
        }
    }

    async takeScreenshot(name: string) {
        try {
            await this.page.screenshot({
                path: path.join(screenshotsDir, `${this.testInfo.title}-${name}.jpg`),
                quality: 50,
                scale: 'css',
                timeout: 2000,
                type: 'jpeg',
            });
        } catch (e: any) {
            console.error(`Failed to take screenshot ${name}`, e.message);
        }
    }

    /**
     * Send a message from Node.js back to the content script in the isolated world.
     * Uses CustomEvent dispatched on the document (visible across worlds).
     */
    async sendToIsolatedWorld(frame: Frame, message: any) {
        const msgJson = JSON.stringify(message);
        // Dispatch a CustomEvent in the main world; the isolated world listens for it
        await frame.evaluate(`
            document.dispatchEvent(new CustomEvent('__autoconsent_from_bg', {
                detail: ${JSON.stringify(msgJson)}
            }));
        `);
    }

    async messageCallback({ frame }: { frame: Frame }, msg: ContentScriptMessage) {
        LOG_MESSAGES.includes(msg.type) && console.log(msg);
        this.received.push(msg);
        switch (msg.type) {
            case 'init': {
                const url = frame.url();
                const mainFrame = frame.parentFrame() === null;
                const rules =
                    this.autoAction === 'optIn'
                        ? { autoconsent: fullRules }
                        : { compact: filterCompactRules(compactRules, { url, mainFrame }) };
                const initResp = {
                    type: 'initResp',
                    config: {
                        enabled: true,
                        autoAction: this.autoAction,
                        disabledCmps: [],
                        enablePrehide: false,
                        detectRetries: 20,
                        enableCosmeticRules: true,
                        visualTest: true,
                    },
                    rules,
                };
                await this.sendToIsolatedWorld(frame, initResp);
                break;
            }
            case 'cmpDetected': {
                await this.takeScreenshot(`${this.screenshotCounter++}-cmpDetected`);
                break;
            }
            case 'popupFound': {
                await this.takeScreenshot(`${this.screenshotCounter++}-popupFound`);
                break;
            }
            case 'optInResult':
            case 'optOutResult': {
                await this.takeScreenshot(`${this.screenshotCounter++}-result`);
                if (msg.scheduleSelfTest) {
                    this.selfTestFrame = frame;
                }
                break;
            }
            case 'autoconsentDone': {
                await this.takeScreenshot(`${this.screenshotCounter++}-done`);
                if (this.selfTestFrame && this.options.testSelfTest) {
                    await this.sendToIsolatedWorld(this.selfTestFrame, { type: 'selfTest' });
                }
                break;
            }
            case 'eval': {
                // Execute eval in the MAIN world (like the real extension does)
                // This is the key difference: eval snippets run in main world,
                // while the content script runs in isolated world.
                const result = await frame.evaluate(msg.code);
                await this.sendToIsolatedWorld(frame, {
                    id: msg.id,
                    type: 'evalResp',
                    result,
                });
                break;
            }
            case 'visualDelay': {
                await this.takeScreenshot(`${this.screenshotCounter++}`);
                break;
            }
            case 'autoconsentError': {
                console.error(this.url, msg.details);
                break;
            }
        }
    }

    async injectContentScripts() {
        await this.injectContentScriptIsolated(this.page);
        this.page.frames().forEach((frame) => this.injectContentScriptIsolated(frame));
        this.page.on('framenavigated', (frame) => this.injectContentScriptIsolated(frame));
    }

    findReceivedMessages(msg: Partial<ContentScriptMessage>) {
        return this.received.filter((m) => {
            return Object.keys(msg).every((k) => (<any>m)[k] === (<any>msg)[k]);
        });
    }

    isMessageReceived(msg: Partial<ContentScriptMessage>) {
        return this.findReceivedMessages(msg).length > 0;
    }

    waitForMessage(msg: Partial<ContentScriptMessage>, maxTimes = 50, interval = 500) {
        return waitFor(() => this.isMessageReceived(msg), maxTimes, interval);
    }

    async assertMessageReceived(
        failureMessage: string,
        msg: Partial<ContentScriptMessage>,
        expectedState = true,
        maxTimes = 50,
        interval = 500,
    ) {
        await this.waitForMessage(msg, maxTimes, interval);
        expect(this.isMessageReceived(msg), failureMessage).toBe(expectedState);
    }

    async assertNoReloadLoop() {
        try {
            await this.page.waitForLoadState('networkidle', { timeout: 5000 });
        } catch {
            // ignore timeout errors
        }
        await this.page.waitForTimeout(3000);
        const popupFoundMessages = this.findReceivedMessages({ type: 'popupFound' });
        for (let i = 0; i < popupFoundMessages.length; i++) {
            for (let j = i + 1; j < popupFoundMessages.length; j++) {
                expect(popupFoundMessages[i], `Possible reload loop: found multiple identical popupFound messages`).not.toEqual(
                    popupFoundMessages[j],
                );
            }
        }

        if (this.options.expectPopupOpen) {
            expect(
                this.findReceivedMessages({ type: 'autoconsentDone' }).length,
                'Possible reload loop: too many autoconsentDone messages',
            ).toBeLessThanOrEqual(this.options.expectedRuns);
        }
    }

    async runAssertions() {
        await this.assertMessageReceived(`no CMP detected`, { type: 'cmpDetected' });

        const expectedCmpDetected: Partial<ContentScriptMessage> = { type: 'cmpDetected', cmp: this.expectedCmp };
        await this.assertMessageReceived(`detected a wrong CMP`, expectedCmpDetected);

        const expectedPopupFound: Partial<ContentScriptMessage> = { type: 'popupFound', cmp: this.expectedCmp };
        await this.assertMessageReceived(
            `expected popup not found`,
            expectedPopupFound,
            this.options.expectPopupOpen,
            this.options.expectPopupOpen ? 50 : 5,
            500,
        );

        await this.assertNoReloadLoop();

        if (this.options.expectPopupOpen) {
            await this.assertMessageReceived(`autoconsentDone not received`, { type: 'autoconsentDone' }, true, 90, 500);
            await this.assertMessageReceived(
                `autoconsentDone received for unexpected CMP`,
                { type: 'autoconsentDone', cmp: this.expectedCmp },
                true,
                90,
                500,
            );

            await this.assertNoReloadLoop();

            if (this.autoAction === 'optOut') {
                await this.assertMessageReceived(`optOutResult not received`, { type: 'optOutResult' }, true, 1, 300);
                await this.assertMessageReceived(`optOutResult received, but failed`, { type: 'optOutResult', result: true }, true, 1, 300);
            }
            if (this.autoAction === 'optIn') {
                await this.assertMessageReceived(`optInResult not received`, { type: 'optInResult' }, true, 1, 300);
                await this.assertMessageReceived(`optInResult received, but failed`, { type: 'optInResult', result: true }, true, 1, 300);
            }
            if (this.options.testSelfTest && this.selfTestFrame) {
                await this.assertMessageReceived(`selfTestResult not received`, { type: 'selfTestResult' }, true, 1, 300);
                await this.assertMessageReceived(
                    `selfTestResult received, but failed`,
                    { type: 'selfTestResult', result: true },
                    true,
                    1,
                    300,
                );
            }
        }

        this.received.forEach((msg) => {
            if (msg.type === 'autoconsentError') {
                expect(msg.details.msg, 'only "multiple CMPs" errors are allowed').toContain('Found multiple CMPs');
            }
        });
    }
}

/**
 * Generates CMP tests that inject the content script into a CDP isolated world.
 * Only works with Chromium-based browsers.
 */
export default function generateIsolatedWorldCMPTests(cmp: string, sites: string[], overrideOptions: Partial<TestOptions> = {}) {
    test.describe(`${cmp} (isolated-world)`, () => {
        sites.forEach((url) => {
            const finalOptions = { ...defaultOptions, ...overrideOptions };
            if (finalOptions.onlyRegions && finalOptions.onlyRegions.length > 0 && !finalOptions.onlyRegions.includes(testRegion)) {
                return;
            }
            if (finalOptions.skipRegions?.includes(testRegion)) {
                return;
            }

            const domain = new URL(url).hostname;
            const urlHash = crypto.createHash('md5').update(url).digest('hex').slice(0, 4);
            const formFactor = finalOptions.mobile ? 'mobile' : 'desktop';

            if (finalOptions.testOptOut) {
                const testName = `${domain} ${urlHash} .${testRegion} optOut ${formFactor}`;
                test(testName, async ({ page, browserName }, testInfo) => {
                    test.skip(browserName !== 'chromium', 'Isolated world tests only work with Chromium (requires CDP)');
                    const testRun = new IsolatedWorldTestRun(page, testInfo, url, cmp, finalOptions, 'optOut');
                    await testRun.run();
                });
            }
        });
    });
}
