import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { test, expect, Page, Frame } from '@playwright/test';
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
};
const defaultOptions: TestOptions = {
    testOptOut: true,
    testOptIn: true,
    testSelfTest: true,
    skipRegions: [],
    onlyRegions: [],
    mobile: false,
    expectPopupOpen: true,
};

const contentScript = fs.readFileSync(path.join(__dirname, '../dist/autoconsent.playwright.js'), 'utf8');

export async function injectContentScript(page: Page | Frame) {
    try {
        await page.evaluate(contentScript);
    } catch {
        // frame was detached
        // console.trace(e);
    }
}

const screenshotsDir = path.join(__dirname, '../test-results/screenshots');

export function generateTest(url: string, expectedCmp: string, options: TestOptions = defaultOptions) {
    const domain = new URL(url).hostname;
    const urlHash = crypto.createHash('md5').update(url).digest('hex').slice(0, 4);
    const formFactor = options.mobile ? 'mobile' : 'desktop';
    function genTest(autoAction: AutoAction) {
        test(`${domain} ${urlHash} .${testRegion} ${autoAction} ${formFactor}`, async ({ page }, { project }) => {
            let screenshotCounter = 0;
            if (options.onlyRegions && options.onlyRegions.length > 0 && !options.onlyRegions.includes(testRegion)) {
                test.skip();
            }
            if (options.skipRegions && options.skipRegions.includes(testRegion)) {
                test.skip();
            }
            if ((options.mobile && !project.use.isMobile) || (!options.mobile && project.use.isMobile)) {
                test.skip();
            }

            LOG_PAGE_LOGS &&
                page.on('console', async (msg) => {
                    console.log(`    page log:`, msg.text());
                });
            await page.exposeBinding('autoconsentSendMessage', messageCallback);
            await page.goto(url, { waitUntil: 'commit' });

            // set up a messaging function
            const received: ContentScriptMessage[] = [];

            function isMessageReceived(msg: Partial<ContentScriptMessage>, partial = true) {
                return received.some((m) => {
                    const keysMatch = partial || Object.keys(m).length === Object.keys(msg).length;
                    return keysMatch && Object.keys(msg).every((k) => (<any>m)[k] === (<any>msg)[k]);
                });
            }

            async function takeScreenshot(name: string) {
                try {
                    await page.screenshot({
                        path: path.join(screenshotsDir, `${expectedCmp}-${autoAction}-${testRegion}-${formFactor}-${domain}-${urlHash}-${name}.jpg`),
                        quality: 50,
                        scale: 'css',
                        timeout: 2000,
                        type: 'jpeg',
                    });
                } catch (e) {
                    console.error(`Failed to take screenshot ${name}`, e);
                }
            }

            let selfTestFrame: Frame | null = null;
            async function messageCallback({ frame }: { frame: Frame }, msg: ContentScriptMessage) {
                LOG_MESSAGES.includes(msg.type) && console.log(msg);
                received.push(msg);
                switch (msg.type) {
                    case 'init': {
                        await frame.evaluate(
                            `autoconsentReceiveMessage({ type: "initResp", config: ${JSON.stringify({
                                enabled: true,
                                autoAction,
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
                        await takeScreenshot(`${screenshotCounter++}-cmpDetected`);
                        break;
                    }
                    case 'popupFound': {
                        await takeScreenshot(`${screenshotCounter++}-popupFound`);
                        break;
                    }
                    case 'optInResult':
                    case 'optOutResult': {
                        await takeScreenshot(`${screenshotCounter++}-result`);
                        if (msg.scheduleSelfTest) {
                            selfTestFrame = frame;
                        }
                        break;
                    }
                    case 'autoconsentDone': {
                        await takeScreenshot(`${screenshotCounter++}-done`);
                        if (selfTestFrame && options.testSelfTest) {
                            await selfTestFrame.evaluate(`autoconsentReceiveMessage({ type: "selfTest" })`);
                        }
                        break;
                    }
                    case 'eval': {
                        const result = await frame.evaluate(msg.code);
                        await frame.evaluate(
                            `autoconsentReceiveMessage({ id: "${msg.id}", type: "evalResp", result: ${JSON.stringify(result)} })`,
                        );
                        break;
                    }
                    case 'visualDelay': {
                        await takeScreenshot(`${screenshotCounter++}`);
                        break;
                    }
                    case 'autoconsentError': {
                        console.error(url, msg.details);
                        break;
                    }
                }
            }

            // inject content scripts into every frame
            await injectContentScript(page);
            page.frames().forEach(injectContentScript);
            page.on('framenavigated', injectContentScript);

            try {
                // wait for all messages and assertions
                await waitFor(() => isMessageReceived({ type: 'cmpDetected', cmp: expectedCmp }), 50, 500);
                expect(isMessageReceived({ type: 'cmpDetected', cmp: expectedCmp })).toBe(true);

                await waitFor(() => isMessageReceived({ type: 'popupFound', cmp: expectedCmp }), options.expectPopupOpen ? 50 : 5, 500);
                expect(isMessageReceived({ type: 'popupFound', cmp: expectedCmp })).toBe(options.expectPopupOpen);

                if (options.expectPopupOpen) {
                    if (autoAction === 'optOut') {
                        await waitFor(() => isMessageReceived({ type: 'optOutResult', result: true }), 50, 300);
                        expect(isMessageReceived({ type: 'optOutResult', result: true })).toBe(true);
                    }
                    if (autoAction === 'optIn') {
                        await waitFor(() => isMessageReceived({ type: 'optInResult', result: true }), 50, 300);
                        expect(isMessageReceived({ type: 'optInResult', result: true })).toBe(true);
                    }
                    if (options.testSelfTest && selfTestFrame) {
                        await waitFor(() => isMessageReceived({ type: 'selfTestResult', result: true }), 50, 300);
                        expect(isMessageReceived({ type: 'selfTestResult', result: true })).toBe(true);
                    }
                    await waitFor(() => isMessageReceived({ type: 'autoconsentDone' }), 10, 500);
                    expect(isMessageReceived({ type: 'autoconsentDone' })).toBe(true);
                }

                received.forEach((msg) => {
                    if (msg.type === 'autoconsentError') {
                        expect(msg.details.msg, 'only "multiple CMPs" errors are allowed').toContain('Found multiple CMPs');
                    }
                });
            } catch (e) {
                await takeScreenshot(`${screenshotCounter++}-failure`);
                throw e;
            }
        });
    }

    if (!options.testOptIn && !options.testOptOut) {
        genTest(null);
    }

    if (options.testOptIn) {
        genTest('optIn');
    }

    if (options.testOptOut) {
        genTest('optOut');
    }
}

export default function generateCMPTests(cmp: string, sites: string[], options: Partial<TestOptions> = {}) {
    test.describe(cmp, () => {
        sites.forEach((url) => {
            generateTest(url, cmp, Object.assign({}, defaultOptions, options));
        });
    });
}
