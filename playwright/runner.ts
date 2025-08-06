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

export async function injectContentScript(page: Page | Frame) {
    try {
        await page.evaluate(contentScript);
    } catch {
        // frame was detached
        // console.trace(e);
    }
}

const screenshotsDir = path.join(__dirname, '../test-results/screenshots');

function findReceivedMessages(receivedMessages: ContentScriptMessage[], msg: Partial<ContentScriptMessage>) {
    return receivedMessages.filter((m) => {
        return Object.keys(msg).every((k) => (<any>m)[k] === (<any>msg)[k]);
    });
}

function isMessageReceived(receivedMessages: ContentScriptMessage[], msg: Partial<ContentScriptMessage>) {
    return findReceivedMessages(receivedMessages, msg).length > 0;
}

function waitForMessage(receivedMessages: ContentScriptMessage[], msg: Partial<ContentScriptMessage>, maxTimes = 50, interval = 500) {
    return waitFor(() => isMessageReceived(receivedMessages, msg), maxTimes, interval);
}

async function assertMessageReceived(
    failureMessage: string,
    receivedMessages: ContentScriptMessage[],
    msg: Partial<ContentScriptMessage>,
    expectedState = true,
    maxTimes = 50,
    interval = 500,
) {
    await waitForMessage(receivedMessages, msg, maxTimes, interval);
    expect(isMessageReceived(receivedMessages, msg), failureMessage).toBe(expectedState);
}

export function generateTest(url: string, expectedCmp: string, options: TestOptions, autoAction: AutoAction | null) {
    const domain = new URL(url).hostname;
    const urlHash = crypto.createHash('md5').update(url).digest('hex').slice(0, 4);
    const formFactor = options.mobile ? 'mobile' : 'desktop';
    const testName = `${domain} ${urlHash} .${testRegion} ${autoAction} ${formFactor}`;

    test(testName, async ({ page }, { project }) => {
        let screenshotCounter = 0;

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

        async function takeScreenshot(name: string) {
            try {
                await page.screenshot({
                    path: path.join(
                        screenshotsDir,
                        `${expectedCmp}-${autoAction}-${testRegion}-${formFactor}-${domain}-${urlHash}-${name}.jpg`,
                    ),
                    quality: 50,
                    scale: 'css',
                    timeout: 2000,
                    type: 'jpeg',
                });
            } catch (e: any) {
                console.error(`Failed to take screenshot ${name}`, e.message);
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
            const expectedCmpDetected: Partial<ContentScriptMessage> = { type: 'cmpDetected', cmp: expectedCmp };
            await assertMessageReceived(`${expectedCmp} not detected`, received, expectedCmpDetected);

            const expectedPopupFound: Partial<ContentScriptMessage> = { type: 'popupFound', cmp: expectedCmp };
            await assertMessageReceived(`${expectedCmp} popup not found`, received, expectedPopupFound, options.expectPopupOpen, options.expectPopupOpen ? 50 : 5, 500);

            if (options.expectPopupOpen) {
                if (autoAction === 'optOut') {
                    await assertMessageReceived(`optOutResult not received`, received, { type: 'optOutResult' }, true, 50, 300);
                    await assertMessageReceived(`optOutResult received, but failed`, received, { type: 'optOutResult', result: true }, true, 50, 300);
                }
                if (autoAction === 'optIn') {
                    await assertMessageReceived(`optInResult not received`, received, { type: 'optInResult' }, true, 50, 300);
                    await assertMessageReceived(`optInResult received, but failed`, received, { type: 'optInResult', result: true }, true, 50, 300);
                }
                if (options.testSelfTest && selfTestFrame) {
                    await assertMessageReceived(`selfTestResult not received`, received, { type: 'selfTestResult' }, true, 50, 300);
                    await assertMessageReceived(`selfTestResult received, but failed`, received, { type: 'selfTestResult', result: true }, true, 50, 300);
                }
                await assertMessageReceived(`autoconsentDone not received`, received, { type: 'autoconsentDone' }, true, 10, 500);
                await assertMessageReceived(`autoconsentDone received for unexpected CMP`, received, { type: 'autoconsentDone', cmp: expectedCmp }, true, 10, 500);
            }

            received.forEach((msg) => {
                if (msg.type === 'autoconsentError') {
                    expect(msg.details.msg, 'only "multiple CMPs" errors are allowed').toContain('Found multiple CMPs');
                }
            });

            try {
                await page.waitForLoadState('networkidle', { timeout: 5000 });
            } catch (e) {
                // ignore timeout errors
            }
            await page.waitForTimeout(3000); // capture potential reloads
            if (options.expectPopupOpen) {
                // check that the autoconsentDone message was received the expected number of times (typically 1)
                expect(
                    findReceivedMessages(received, { type: 'autoconsentDone' }).length,
                    'Possible reload loop: too many autoconsentDone messages',
                ).toBe(options.expectedRuns);
            }
        } catch (e) {
            await takeScreenshot(`${screenshotCounter++}-failure`);
            throw e;
        }
    });
}

export default function generateCMPTests(cmp: string, sites: string[], overrideOptions: Partial<TestOptions> = {}) {
    test.describe(cmp, () => {
        sites.forEach((url) => {
            const finalOptions = Object.assign({}, defaultOptions, overrideOptions);
            if (finalOptions.onlyRegions && finalOptions.onlyRegions.length > 0 && !finalOptions.onlyRegions.includes(testRegion)) {
                return;
            }
            if (finalOptions.skipRegions && finalOptions.skipRegions.includes(testRegion)) {
                return;
            }

            if (!finalOptions.testOptIn && !finalOptions.testOptOut) {
                generateTest(url, cmp, finalOptions, null);
            }

            if (finalOptions.testOptIn) {
                generateTest(url, cmp, finalOptions, 'optIn');
            }

            if (finalOptions.testOptOut) {
                generateTest(url, cmp, finalOptions, 'optOut');
            }
        });
    });
}
