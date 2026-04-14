import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { chromium, Page, Frame, Browser, CDPSession } from '@playwright/test';
import { ContentScriptMessage } from '../lib/messages';
import { AutoAction } from '../lib/types';
import { IndexedCMPRuleset, filterCompactRules } from '../lib/encoding';
import compactRulesJson from '../rules/compact-rules.json';
import rulesJson from '../rules/rules.json';

const compactRules = compactRulesJson as unknown as IndexedCMPRuleset;
const fullRules = (rulesJson as any).autoconsent;

const contentScript = fs.readFileSync(path.join(__dirname, '../dist/autoconsent.playwright.js'), 'utf8');

const REGIONS: Record<string, string> = {
    'us-ny': '-country-us-state-ny',
    'us-ca': '-country-us-state-ca',
    de: '-country-de',
    fr: '-country-fr',
    gb: '-country-gb',
};

type TestResult = {
    url: string;
    region: string;
    cmpDetected: string | null;
    popupFound: boolean;
    optOutResult: boolean | null;
    selfTestResult: boolean | null;
    autoconsentDone: boolean;
    isCosmetic: boolean | null;
    errors: string[];
    messages: string[];
    duration: number;
    screenshotPaths: string[];
};

function buildWssEndpoint(regionKey: string): string {
    const user = process.env.BRIGHTDATA_WEBACCESS_USER;
    const password = process.env.BRIGHTDATA_WEBACCESS_PASSWORD;
    const host = process.env.BRIGHTDATA_WEBACCESS_HOST;

    if (!user || !password || !host) {
        throw new Error(
            'Missing BrightData credentials. Set BRIGHTDATA_WEBACCESS_USER, BRIGHTDATA_WEBACCESS_PASSWORD, and BRIGHTDATA_WEBACCESS_HOST.',
        );
    }

    const suffix = REGIONS[regionKey] || '';
    return `wss://${user}${suffix}:${password}@${host}`;
}

class BrightDataTestRun {
    page: Page;
    url: string;
    region: string;
    autoAction: AutoAction;
    received: ContentScriptMessage[] = [];
    screenshotCounter = 0;
    selfTestFrame: Frame | null = null;
    screenshotsDir: string;
    screenshotPaths: string[] = [];
    cdpClient: CDPSession | null = null;
    contextToFrame: Map<number, Frame> = new Map();
    loggedEvents: Set<string> = new Set();

    constructor(page: Page, url: string, region: string, autoAction: AutoAction, screenshotsDir: string) {
        this.page = page;
        this.url = url;
        this.region = region;
        this.autoAction = autoAction;
        this.screenshotsDir = screenshotsDir;
    }

    get domain(): string {
        return new URL(this.url).hostname;
    }

    get urlHash(): string {
        return crypto.createHash('md5').update(this.url).digest('hex').slice(0, 4);
    }

    async setupCDP(): Promise<void> {
        this.cdpClient = await this.page.context().newCDPSession(this.page);

        // Add raw binding for message transport (works reliably over CDP, unlike exposeBinding)
        await this.cdpClient.send('Runtime.addBinding', { name: '_autoconsentTransport' });

        // Inject wrapper that converts object calls to stringified transport calls.
        // This runs before page scripts, enabling early CMP prehiding.
        await this.cdpClient.send('Page.addScriptToEvaluateOnNewDocument', {
            source: `
                window.autoconsentSendMessage = async function(msg) {
                    window._autoconsentTransport(JSON.stringify(msg));
                };
            `,
        });

        // Track execution contexts for frame identification
        await this.cdpClient.send('Runtime.enable');
        this.cdpClient.on('Runtime.executionContextCreated', (event) => {
            const { id, auxData } = event.context;
            if (auxData?.frameId) {
                const frame = this.findFrameById(auxData.frameId);
                if (frame) {
                    this.contextToFrame.set(id, frame);
                }
            }
        });

        // Handle messages from page
        this.cdpClient.on('Runtime.bindingCalled', (event) => {
            if (event.name === '_autoconsentTransport') {
                this.handleMessage(event.payload, event.executionContextId).catch((e) => {
                    console.error(`  [${this.region}] Error handling message:`, e.message);
                });
            }
        });
    }

    findFrameById(frameId: string): Frame | null {
        if (this.page.mainFrame().url() && frameId) {
            for (const frame of this.page.frames()) {
                // Playwright doesn't expose frame ID directly, but we can match by context
                try {
                    return frame;
                } catch {
                    continue;
                }
            }
        }
        return this.page.mainFrame();
    }

    getFrameForContext(contextId: number): Frame {
        return this.contextToFrame.get(contextId) || this.page.mainFrame();
    }

    logOnce(key: string, message: string): void {
        if (!this.loggedEvents.has(key)) {
            this.loggedEvents.add(key);
            console.log(message);
        }
    }

    async handleMessage(payload: string, executionContextId: number): Promise<void> {
        let msg: ContentScriptMessage;
        try {
            msg = JSON.parse(payload);
        } catch {
            return;
        }
        this.received.push(msg);

        const frame = this.getFrameForContext(executionContextId);

        switch (msg.type) {
            case 'init': {
                const url = frame.url() || this.url;
                const mainFrame = frame === this.page.mainFrame();
                const rules =
                    this.autoAction === 'optIn'
                        ? { autoconsent: fullRules }
                        : { compact: filterCompactRules(compactRules, { url, mainFrame }) };
                const config = {
                    enabled: true,
                    autoAction: this.autoAction,
                    disabledCmps: [],
                    enablePrehide: true,
                    detectRetries: 20,
                    enableCosmeticRules: true,
                    visualTest: false,
                };
                try {
                    await frame.evaluate(
                        `autoconsentReceiveMessage({ type: "initResp", config: ${JSON.stringify(config)}, rules: ${JSON.stringify(rules)} })`,
                    );
                } catch {
                    // frame may have been detached
                }
                break;
            }
            case 'cmpDetected': {
                this.logOnce(`cmpDetected-${msg.cmp}`, `  [${this.region}] CMP detected: ${msg.cmp}`);
                await this.takeScreenshot(`${this.screenshotCounter++}-cmpDetected`);
                break;
            }
            case 'popupFound': {
                this.logOnce(`popupFound-${msg.cmp}`, `  [${this.region}] Popup found: ${msg.cmp}`);
                await this.takeScreenshot(`${this.screenshotCounter++}-popupFound`);
                break;
            }
            case 'optInResult':
            case 'optOutResult': {
                this.logOnce(`${msg.type}`, `  [${this.region}] ${msg.type}: ${msg.result}`);
                await this.takeScreenshot(`${this.screenshotCounter++}-result`);
                if (msg.scheduleSelfTest) {
                    this.selfTestFrame = frame;
                }
                break;
            }
            case 'autoconsentDone': {
                this.logOnce('autoconsentDone', `  [${this.region}] Done: ${msg.cmp} (cosmetic: ${msg.isCosmetic})`);
                await this.takeScreenshot(`${this.screenshotCounter++}-done`);
                if (this.selfTestFrame) {
                    try {
                        await this.selfTestFrame.evaluate(`autoconsentReceiveMessage({ type: "selfTest" })`);
                    } catch {
                        // frame may have been detached
                    }
                }
                break;
            }
            case 'selfTestResult': {
                this.logOnce('selfTestResult', `  [${this.region}] Self-test: ${msg.result}`);
                break;
            }
            case 'eval': {
                try {
                    const result = await frame.evaluate(msg.code);
                    await frame.evaluate(
                        `autoconsentReceiveMessage({ id: "${msg.id}", type: "evalResp", result: ${JSON.stringify(result)} })`,
                    );
                } catch {
                    // frame may have been detached
                }
                break;
            }
            case 'autoconsentError': {
                console.error(`  [${this.region}] Error:`, msg.details);
                break;
            }
        }
    }

    async run(): Promise<TestResult> {
        const startTime = Date.now();
        const result: TestResult = {
            url: this.url,
            region: this.region,
            cmpDetected: null,
            popupFound: false,
            optOutResult: null,
            selfTestResult: null,
            autoconsentDone: false,
            isCosmetic: null,
            errors: [],
            messages: [],
            duration: 0,
            screenshotPaths: [],
        };

        try {
            this.page.on('console', (msg) => {
                const text = msg.text();
                if (text.includes('autoconsent') || text.includes('CMP')) {
                    console.log(`    [${this.region}] page: ${text}`);
                }
            });

            await this.setupCDP();

            console.log(`  [${this.region}] Navigating to ${this.url}...`);
            await this.page.goto(this.url, { waitUntil: 'commit', timeout: 45000 });
            console.log(`  [${this.region}] Page committed.`);

            // Inject autoconsent content script into main frame
            await this.injectContentScript(this.page);

            // Inject into existing sub-frames
            for (const frame of this.page.frames()) {
                if (frame !== this.page.mainFrame()) {
                    await this.injectContentScript(frame);
                }
            }

            // Inject into new frames as they appear
            this.page.on('framenavigated', (frame) => this.injectContentScript(frame));

            console.log(`  [${this.region}] Autoconsent injected. Waiting...`);

            // Wait for autoconsent to complete (up to 45s)
            const completed = await this.waitForCompletion(45000);

            if (!completed && !this.received.some((m) => m.type === 'cmpDetected')) {
                result.errors.push('No CMP detected (site may not have a cookie banner in this region)');
            } else if (!completed) {
                result.errors.push('Timed out waiting for autoconsent to complete');
            }

            // Wait for self-test results that arrive after autoconsentDone
            if (completed && !this.received.some((m) => m.type === 'selfTestResult')) {
                const selfTestStart = Date.now();
                while (Date.now() - selfTestStart < 10000) {
                    if (this.received.some((m) => m.type === 'selfTestResult')) break;
                    await new Promise((resolve) => setTimeout(resolve, 500));
                }
            }

            // Collect results from received messages
            for (const msg of this.received) {
                switch (msg.type) {
                    case 'cmpDetected':
                        result.cmpDetected = msg.cmp;
                        break;
                    case 'popupFound':
                        result.popupFound = true;
                        break;
                    case 'optOutResult':
                        result.optOutResult = msg.result;
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

            // Take final screenshot
            await this.takeScreenshot(`final`);
        } catch (e: any) {
            result.errors.push(e.message);
        }

        result.messages = this.received.map((m) => m.type);
        result.duration = Date.now() - startTime;
        result.screenshotPaths = this.screenshotPaths;
        return result;
    }

    async waitForCompletion(timeout: number): Promise<boolean> {
        const start = Date.now();
        while (Date.now() - start < timeout) {
            const done = this.received.some((m) => m.type === 'autoconsentDone');
            const optResult = this.received.some((m) => m.type === 'optOutResult' || m.type === 'optInResult');
            if (done && optResult) {
                return true;
            }
            if (Date.now() - start > 15000 && !this.received.some((m) => m.type === 'cmpDetected')) {
                return false;
            }
            await new Promise((resolve) => setTimeout(resolve, 500));
        }
        return false;
    }

    async injectContentScript(pageOrFrame: Page | Frame) {
        try {
            await pageOrFrame.evaluate(contentScript);
        } catch {
            // frame was detached or not ready
        }
    }

    async takeScreenshot(name: string) {
        try {
            const filename = `${this.domain}-${this.region}-${this.urlHash}-${name}.jpg`;
            const filepath = path.join(this.screenshotsDir, filename);
            await this.page.screenshot({
                path: filepath,
                quality: 50,
                scale: 'css',
                timeout: 5000,
                type: 'jpeg',
            });
            this.screenshotPaths.push(filepath);
        } catch (e: any) {
            // Screenshot failures are non-fatal
        }
    }
}

async function testUrl(url: string, regionKey: string, autoAction: AutoAction, screenshotsDir: string): Promise<TestResult> {
    let browser: Browser | null = null;
    try {
        const endpoint = buildWssEndpoint(regionKey);
        console.log(`  [${regionKey}] Connecting to BrightData...`);
        browser = await chromium.connectOverCDP(endpoint, { timeout: 30000 });
        console.log(`  [${regionKey}] Connected.`);

        const page = await browser.newPage();
        const testRun = new BrightDataTestRun(page, url, regionKey, autoAction, screenshotsDir);
        return await testRun.run();
    } catch (e: any) {
        return {
            url,
            region: regionKey,
            cmpDetected: null,
            popupFound: false,
            optOutResult: null,
            selfTestResult: null,
            autoconsentDone: false,
            isCosmetic: null,
            errors: [e.message],
            messages: [],
            duration: 0,
            screenshotPaths: [],
        };
    } finally {
        if (browser) {
            try {
                await browser.close();
            } catch {
                // ignore
            }
        }
    }
}

function formatResult(result: TestResult): string {
    let status: string;
    if (result.autoconsentDone && result.optOutResult) {
        status = '✅ PASS';
    } else if (result.cmpDetected && !result.autoconsentDone) {
        status = '⚠️  PARTIAL';
    } else if (result.cmpDetected && result.autoconsentDone && !result.optOutResult) {
        status = '❌ OPT-OUT FAILED';
    } else {
        status = '⬚  NO CMP';
    }

    const parts = [
        `  ${status} [${result.region}] ${result.url}`,
        `    CMP: ${result.cmpDetected || 'none'}`,
        `    Popup: ${result.popupFound} | OptOut: ${result.optOutResult} | SelfTest: ${result.selfTestResult}`,
        `    Done: ${result.autoconsentDone}${result.isCosmetic ? ' (cosmetic)' : ''} | Duration: ${result.duration}ms`,
    ];
    if (result.errors.length > 0) {
        parts.push(`    Errors: ${result.errors.join('; ')}`);
    }
    return parts.join('\n');
}

function printUsage(): void {
    console.log(`
Usage: npx ts-node --transpile-only scripts/brightdata-test.ts [options] <url> [url2] ...

Options:
  --regions <list>      Comma-separated region keys (default: all)
                        Available: ${Object.keys(REGIONS).join(', ')}
  --action <action>     optOut (default) or optIn
  --screenshots <dir>   Directory for screenshots (default: test-results/brightdata)

Environment:
  BRIGHTDATA_WEBACCESS_USER      BrightData username
  BRIGHTDATA_WEBACCESS_PASSWORD  BrightData password
  BRIGHTDATA_WEBACCESS_HOST      BrightData CDP host

Examples:
  npx ts-node --transpile-only scripts/brightdata-test.ts https://www.wohnen.de/
  npx ts-node --transpile-only scripts/brightdata-test.ts --regions de,fr https://www.wohnen.de/
  npx ts-node --transpile-only scripts/brightdata-test.ts --regions us-ny,gb --action optOut https://example.com/
`);
}

async function main() {
    const args = process.argv.slice(2);

    if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
        printUsage();
        process.exit(0);
    }

    let regionKeys: string[] = Object.keys(REGIONS);
    let autoAction: AutoAction = 'optOut';
    let screenshotsDir = path.join(__dirname, '../test-results/brightdata');
    const urls: string[] = [];

    for (let i = 0; i < args.length; i++) {
        switch (args[i]) {
            case '--regions':
                regionKeys = args[++i].split(',').map((r) => r.trim());
                for (const key of regionKeys) {
                    if (!REGIONS[key]) {
                        console.error(`Unknown region: ${key}. Available: ${Object.keys(REGIONS).join(', ')}`);
                        process.exit(1);
                    }
                }
                break;
            case '--action':
                autoAction = args[++i] as AutoAction;
                if (autoAction !== 'optOut' && autoAction !== 'optIn') {
                    console.error(`Invalid action: ${autoAction}. Use optOut or optIn.`);
                    process.exit(1);
                }
                break;
            case '--screenshots':
                screenshotsDir = args[++i];
                break;
            default:
                if (args[i].startsWith('http')) {
                    urls.push(args[i]);
                } else {
                    console.error(`Unknown argument: ${args[i]}`);
                    printUsage();
                    process.exit(1);
                }
        }
    }

    if (urls.length === 0) {
        console.error('No URLs provided.');
        printUsage();
        process.exit(1);
    }

    fs.mkdirSync(screenshotsDir, { recursive: true });

    console.log(`BrightData Autoconsent Test`);
    console.log(`  URLs: ${urls.join(', ')}`);
    console.log(`  Regions: ${regionKeys.join(', ')}`);
    console.log(`  Action: ${autoAction}`);
    console.log(`  Screenshots: ${screenshotsDir}\n`);

    const allResults: TestResult[] = [];

    for (const url of urls) {
        console.log(`Testing: ${url}`);
        console.log('─'.repeat(60));

        for (const regionKey of regionKeys) {
            const result = await testUrl(url, regionKey, autoAction, screenshotsDir);
            allResults.push(result);
            console.log(formatResult(result));
            console.log();
        }
    }

    // Print summary
    console.log('═'.repeat(60));
    console.log('SUMMARY');
    console.log('═'.repeat(60));

    const passed = allResults.filter((r) => r.autoconsentDone && r.optOutResult);
    const partial = allResults.filter((r) => r.cmpDetected && !(r.autoconsentDone && r.optOutResult));
    const noCmp = allResults.filter((r) => !r.cmpDetected);

    console.log(`  Total: ${allResults.length}`);
    console.log(`  ✅ Passed (opt-out complete): ${passed.length}`);
    if (partial.length > 0) console.log(`  ⚠️  Partial (CMP detected, opt-out incomplete): ${partial.length}`);
    if (noCmp.length > 0) console.log(`  ⬚  No CMP detected: ${noCmp.length}`);

    if (partial.length > 0) {
        console.log('\nPartial results:');
        for (const r of partial) {
            console.log(`  [${r.region}] ${r.url} - CMP: ${r.cmpDetected}`);
            if (r.errors.length) console.log(`    Errors: ${r.errors.join('; ')}`);
        }
    }

    // Write JSON results
    const resultsPath = path.join(screenshotsDir, 'results.json');
    fs.writeFileSync(resultsPath, JSON.stringify(allResults, null, 2));
    console.log(`\nResults: ${resultsPath}`);

    // Exit with error if any CMP was detected but opt-out failed
    if (partial.length > 0) {
        process.exit(1);
    }
}

main().catch((e) => {
    console.error('Fatal error:', e);
    process.exit(1);
});
