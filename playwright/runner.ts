import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { test, expect, Page, Frame, TestInfo } from '@playwright/test';
import { waitFor } from '../lib/utils';
import { ContentScriptMessage } from '../lib/messages';
import { AutoAction } from '../lib/types';

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
    selfTestFrame: Frame | null = null;

    constructor(page: Page, testInfo: TestInfo, url: string, expectedCmp: string, options: TestOptions, autoAction: AutoAction | null) {
        this.page = page;
        this.testInfo = testInfo;
        this.url = url;
        this.expectedCmp = expectedCmp;
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

        await this.page.exposeBinding('autoconsentSendMessage', this.messageCallback.bind(this));
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
                // log the full url in the error message, this will be parsed by the review tool
                console.error(`Autoconsent test failed on ${this.url} failure stats: ${JSON.stringify(failureStats)}`);
            }
            try {
                await this.takeScreenshot(`${this.screenshotCounter++}-failure`);
            } catch (e) {
                // ignore this screenshot errors
            }
            throw e;
        }
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

    async messageCallback({ frame }: { frame: Frame }, msg: ContentScriptMessage) {
        LOG_MESSAGES.includes(msg.type) && console.log(msg);
        this.received.push(msg);
        switch (msg.type) {
            case 'init': {
                await frame.evaluate(
                    `autoconsentReceiveMessage({ type: "initResp", config: ${JSON.stringify({
                        enabled: true,
                        autoAction: this.autoAction,
                        disabledCmps: [],
                        enablePrehide: false,
                        detectRetries: 20,
                        enableCosmeticRules: true,
                        visualTest: true,
                    })} })`,
                );
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
                    await this.selfTestFrame.evaluate(`autoconsentReceiveMessage({ type: "selfTest" })`);
                }
                break;
            }
            case 'eval': {
                const result = await frame.evaluate(msg.code);
                await frame.evaluate(`autoconsentReceiveMessage({ id: "${msg.id}", type: "evalResp", result: ${JSON.stringify(result)} })`);
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

            if (!finalOptions.testOptIn && !finalOptions.testOptOut) {
                const testName = `${domain} ${urlHash} .${testRegion} noaction ${formFactor}`;
                test(testName, async ({ page }, testInfo) => {
                    const testRun = new TestRun(page, testInfo, url, cmp, finalOptions, null);
                    await testRun.run();
                });
            }
            if (finalOptions.testOptIn) {
                const testName = `${domain} ${urlHash} .${testRegion} optIn ${formFactor}`;
                test(testName, async ({ page }, testInfo) => {
                    const testRun = new TestRun(page, testInfo, url, cmp, finalOptions, 'optIn');
                    await testRun.run();
                });
            }
            if (finalOptions.testOptOut) {
                const testName = `${domain} ${urlHash} .${testRegion} optOut ${formFactor}`;
                test(testName, async ({ page }, testInfo) => {
                    const testRun = new TestRun(page, testInfo, url, cmp, finalOptions, 'optOut');
                    await testRun.run();
                });
            }
        });
    });
}
