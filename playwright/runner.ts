import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { test as base, expect, Page, Frame, TestInfo, Response } from '@playwright/test';
import { ContentScriptMessage } from '../lib/messages';
import { AutoAction, RuleBundle } from '../lib/types';
import { filterCompactRules } from '../lib/encoding';
import compactRules from '../rules/compact-rules.json';
// Full rules include optIn steps that compact rules intentionally omit.
// We need both formats: compact for optOut tests, full for optIn tests.
import { autoconsent as fullRules } from '../rules/rules.json';
import { injectIntoIsolatedWorld } from './isolated-world.mjs';
import { connectOxylabs, createCaptchaTracker } from './oxylabs.mjs';

const LOG_MESSAGES: ContentScriptMessage['type'][] = process.env.CI
    ? []
    : ['optInResult', 'optOutResult', 'autoconsentDone', 'autoconsentError', 'selfTestResult'];
const LOG_PAGE_LOGS = false;

const testRegion = (process.env.REGION || 'NA').trim();

// OXYLABS=1 runs each test in a fresh Oxylabs Agent Browser session in REGION instead of a local browser.
const useOxylabs = process.env.OXYLABS === '1';
// Local runs list the tests that failed on a bot wall here; Oxylabs runs only define the listed tests.
const oxylabsCandidatesFile = process.env.OXYLABS_CANDIDATES;
const oxylabsCandidates = useOxylabs && oxylabsCandidatesFile ? readOxylabsCandidates(oxylabsCandidatesFile) : null;
// Pages load slower through remote Oxylabs sessions, so detection gets a longer window there.
const detectionSlowdown = useOxylabs ? 2 : 1;
// Page titles of common bot-protection challenge and block pages.
const BOT_WALL_TITLE =
    /just a moment|attention required|client challenge|access denied|access to this page has been denied|pardon our interruption|request unsuccessful|are you a robot|verify you are human|security check|captcha/i;

const test = useOxylabs
    ? base.extend({
          page: async ({ browserName }, use) => {
              if (browserName !== 'chromium') {
                  throw new Error('Oxylabs runs need a Chromium project');
              }
              const browser = await connectOxylabs(testRegion.toLowerCase());
              try {
                  await use(await browser.newPage());
              } finally {
                  await browser.close().catch(() => {});
              }
          },
      })
    : base;
test.describe.configure({ mode: 'parallel' });

function readOxylabsCandidates(file: string) {
    try {
        return new Set(fs.readFileSync(file, 'utf8').split('\n').filter(Boolean));
    } catch {
        return new Set<string>();
    }
}

type TestOptions = {
    testOptOut: boolean;
    testSelfTest: boolean;
    testOptIn: boolean;
    skipRegions?: string[];
    onlyRegions?: string[];
    mobile: boolean;
    expectPopupOpen: boolean;
    expectedRuns: number;
    gpc: boolean;
};
// A frame's content script, reached through either the isolated-world transport or a main-world Frame.
type ContentScriptTarget = {
    send: (message: object) => Promise<unknown>;
    evalInMainWorld: (code: string) => Promise<unknown>;
    isMainFrame: boolean;
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
    gpc: false,
};

const contentScript = fs.readFileSync(path.join(__dirname, '../dist/autoconsent.playwright.js'), 'utf8');
const screenshotsDir = path.join(__dirname, '../test-results/screenshots', useOxylabs ? 'oxylabs' : '');
const deduplicatedRuleLookup = (
    JSON.parse(fs.readFileSync(path.join(__dirname, '../rules/rules.json'), 'utf-8')) as RuleBundle
).autoconsent.reduce((acc, rule) => {
    if (rule._metadata?.deduplicatedFrom) {
        rule._metadata.deduplicatedFrom.forEach((from: string) => acc.set(from, rule.name));
    }
    return acc;
}, new Map<string, string>());

class TestRun {
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
    selfTestTarget: ContentScriptTarget | null = null;
    // Oxylabs solves captchas on the page; waits pause while it does.
    captcha = useOxylabs ? createCaptchaTracker() : null;

    constructor(page: Page, testInfo: TestInfo, url: string, expectedCmp: string, options: TestOptions, autoAction: AutoAction | null) {
        this.page = page;
        this.testInfo = testInfo;
        this.url = url;
        // if a rule was deduplicated, update the expectation to the new deduplicate rule name
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

        // Chromium runs the content script in an isolated world like the extension; other browsers have no CDP for that.
        const useIsolatedWorld = this.page.context().browser()?.browserType().name() === 'chromium';
        if (useIsolatedWorld) {
            await injectIntoIsolatedWorld(
                this.page,
                (transport) => async (msg, frameRef) => {
                    if (this.captcha?.handleMessage(msg)) {
                        return;
                    }
                    await this.messageCallback(msg, {
                        send: (message) => transport.sendToContentScript(frameRef, message),
                        evalInMainWorld: (code) => transport.evalInMainWorld(frameRef, code),
                        isMainFrame: transport.isMainFrame(frameRef),
                    });
                },
                contentScript,
                this.captcha?.script,
            );
        } else {
            await this.page.exposeBinding('autoconsentSendMessage', ({ frame }, msg: ContentScriptMessage) =>
                this.messageCallback(msg, {
                    send: (message) => frame.evaluate(`autoconsentReceiveMessage(${JSON.stringify(message)})`),
                    evalInMainWorld: (code) => frame.evaluate(code),
                    isMainFrame: frame.parentFrame() === null,
                }),
            );
        }
        if (this.options.gpc) {
            await this.enableGpc();
        }
        let response: Response | null = null;
        try {
            response = await this.page.goto(this.url, { waitUntil: 'commit' });

            if (!useIsolatedWorld) {
                await this.injectContentScripts();
            }

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
                    provider: useOxylabs ? 'oxylabs' : 'local',
                };
                // log the full url in the error message, this will be parsed by the review tool
                console.error(`Autoconsent test failed on ${this.url} failure stats: ${JSON.stringify(failureStats)}`);
            }
            try {
                await this.takeScreenshot(`${this.screenshotCounter++}-failure`);
            } catch (e) {
                // ignore this screenshot errors
            }
            await this.recordOxylabsCandidate(e, response);
            throw e;
        }
    }

    // On the last attempt, list a test that hit a bot wall so the Oxylabs pass can rerun it.
    async recordOxylabsCandidate(error: unknown, response: Response | null) {
        if (useOxylabs || !oxylabsCandidatesFile || this.testInfo.retry < this.testInfo.project.retries) {
            return;
        }
        if (await this.looksBlocked(error, response)) {
            fs.appendFileSync(oxylabsCandidatesFile, `${this.testInfo.title}\n`);
        }
    }

    // The page never loaded, or the site served an error or challenge page instead of the content.
    async looksBlocked(error: unknown, response: Response | null) {
        if (!response) {
            return true;
        }
        if (!(error instanceof Error) || !error.message.startsWith('no CMP detected')) {
            return false;
        }
        if (response.status() >= 400) {
            return true;
        }
        const title = await this.page.title().catch(() => '');
        return BOT_WALL_TITLE.test(title);
    }

    // emulate a browser that sends the Global Privacy Control signal
    async enableGpc() {
        await this.page.setExtraHTTPHeaders({ 'Sec-GPC': '1' });
        await this.page.addInitScript(() => {
            Object.defineProperty(Navigator.prototype, 'globalPrivacyControl', { get: () => true, configurable: true });
        });
    }

    async injectContentScript(pageOrFrame: Page | Frame) {
        try {
            await pageOrFrame.evaluate(contentScript);
        } catch {
            // frame was detached
            // console.trace(e);
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

    async messageCallback(msg: ContentScriptMessage, target: ContentScriptTarget) {
        LOG_MESSAGES.includes(msg.type) && console.log(msg);
        this.received.push(msg);
        switch (msg.type) {
            case 'init': {
                // Use full rules for optIn (compact rules omit optIn steps), compact rules for optOut.
                const rules =
                    this.autoAction === 'optIn'
                        ? { autoconsent: fullRules }
                        : { compact: filterCompactRules(compactRules, { url: msg.url, mainFrame: target.isMainFrame }) };
                await target.send({
                    type: 'initResp',
                    config: {
                        enabled: true,
                        autoAction: this.autoAction,
                        disabledCmps: [],
                        enablePrehide: false,
                        detectRetries: 20 * detectionSlowdown,
                        enableCosmeticRules: true,
                        visualTest: true,
                    },
                    rules,
                });
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
                    this.selfTestTarget = target;
                }
                break;
            }
            case 'autoconsentDone': {
                await this.takeScreenshot(`${this.screenshotCounter++}-done`);
                if (this.selfTestTarget && this.options.testSelfTest) {
                    await this.selfTestTarget.send({ type: 'selfTest' });
                }
                break;
            }
            case 'eval': {
                let result: unknown = false;
                try {
                    result = await target.evalInMainWorld(msg.code);
                } catch {
                    // the frame may have navigated or detached
                }
                await target.send({ id: msg.id, type: 'evalResp', result });
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

    // inject content scripts into every frame
    async injectContentScripts() {
        await this.injectContentScript(this.page);
        this.page.frames().forEach((frame) => this.injectContentScript(frame));
        this.page.on('framenavigated', (frame) => this.injectContentScript(frame));
    }

    findReceivedMessages(msg: Partial<ContentScriptMessage>) {
        return this.received.filter((m) => {
            return Object.keys(msg).every((k) => (<any>m)[k] === (<any>msg)[k]);
        });
    }

    isMessageReceived(msg: Partial<ContentScriptMessage>) {
        return this.findReceivedMessages(msg).length > 0;
    }

    async waitForMessage(msg: Partial<ContentScriptMessage>, maxTimes = 50, interval = 500) {
        let attempts = 0;
        while (!this.isMessageReceived(msg)) {
            if (attempts >= maxTimes) {
                return false;
            }
            await new Promise((resolve) => setTimeout(resolve, interval));
            // time spent waiting for the captcha solver doesn't count
            if (!this.captcha?.isSolving()) {
                attempts++;
            }
        }
        return true;
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
        } catch (e) {
            // ignore timeout errors
        }
        await this.page.waitForTimeout(3000); // capture potential reloads
        // check that popupFound messages are unique
        const popupFoundMessages = this.findReceivedMessages({ type: 'popupFound' });
        for (let i = 0; i < popupFoundMessages.length; i++) {
            for (let j = i + 1; j < popupFoundMessages.length; j++) {
                expect(popupFoundMessages[i], `Possible reload loop: found multiple identical popupFound messages`).not.toEqual(
                    popupFoundMessages[j],
                );
            }
        }

        if (this.options.expectPopupOpen) {
            // check that the autoconsentDone message was received the expected number of times (typically 1)
            expect(
                this.findReceivedMessages({ type: 'autoconsentDone' }).length,
                'Possible reload loop: too many autoconsentDone messages',
            ).toBeLessThanOrEqual(this.options.expectedRuns);
        }
    }

    async runAssertions() {
        await this.assertMessageReceived(`no CMP detected`, { type: 'cmpDetected' }, true, 50 * detectionSlowdown);

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
            // first long wait for autoconsentDone
            await this.assertMessageReceived(`autoconsentDone not received`, { type: 'autoconsentDone' }, true, 90, 500);
            await this.assertMessageReceived(
                `autoconsentDone received for unexpected CMP`,
                { type: 'autoconsentDone', cmp: this.expectedCmp },
                true,
                90,
                500,
            );

            await this.assertNoReloadLoop();

            // short waits for other messages because they should have already arrived by now
            if (this.autoAction === 'optOut') {
                await this.assertMessageReceived(`optOutResult not received`, { type: 'optOutResult' }, true, 1, 300);
                await this.assertMessageReceived(`optOutResult received, but failed`, { type: 'optOutResult', result: true }, true, 1, 300);
            }
            if (this.autoAction === 'optIn') {
                await this.assertMessageReceived(`optInResult not received`, { type: 'optInResult' }, true, 1, 300);
                await this.assertMessageReceived(`optInResult received, but failed`, { type: 'optInResult', result: true }, true, 1, 300);
            }
            if (this.options.testSelfTest && this.selfTestTarget) {
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

export default function generateCMPTests(cmp: string, sites: string[], overrideOptions: Partial<TestOptions> = {}) {
    test.describe(cmp, () => {
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

            const defineTest = (label: string, autoAction: AutoAction | null) => {
                const testName = `${domain} ${urlHash} .${testRegion} ${label} ${formFactor}`;
                if (oxylabsCandidates && !oxylabsCandidates.has(testName)) {
                    return;
                }
                test(testName, async ({ page }, testInfo) => {
                    const testRun = new TestRun(page, testInfo, url, cmp, finalOptions, autoAction);
                    await testRun.run();
                });
            };

            if (!finalOptions.testOptIn && !finalOptions.testOptOut) {
                defineTest('noaction', null);
            }
            if (finalOptions.testOptIn) {
                defineTest('optIn', 'optIn');
            }
            if (finalOptions.testOptOut) {
                defineTest('optOut', 'optOut');
            }
        });
    });
}
