/**
 * BrightData remote browser utilities for multi-region autoconsent testing.
 *
 * Connects to BrightData's CDP browsers, injects autoconsent into an isolated
 * world, and evaluates opt-out/opt-in flows across geographic regions.
 *
 * Requires env vars: BRIGHTDATA_WEBACCESS_USER, BRIGHTDATA_WEBACCESS_PASSWORD,
 * BRIGHTDATA_WEBACCESS_HOST.
 */

import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { chromium, Page, Browser, CDPSession } from '@playwright/test';
import { ContentScriptMessage } from '../../../../lib/messages';
import { AutoAction } from '../../../../lib/types';
import { IndexedCMPRuleset, filterCompactRules } from '../../../../lib/encoding';
import compactRulesJson from '../../../../rules/compact-rules.json';
import rulesJson from '../../../../rules/rules.json';

const compactRules = compactRulesJson as unknown as IndexedCMPRuleset;
const fullRules = (rulesJson as any).autoconsent;

const contentScript = fs.readFileSync(path.join(__dirname, '../../../../dist/autoconsent.playwright.js'), 'utf8');

const ISOLATED_WORLD_NAME = 'autoconsent';

/** BrightData region suffixes appended to the username. */
export const REGIONS: Record<string, string> = {
    'us-ny': '-country-us-state-ny',
    'us-la': '-country-us-state-ca',
    de: '-country-de',
    fr: '-country-fr',
    gb: '-country-gb',
    nl: '-country-nl',
    ca: '-country-ca',
    au: '-country-au',
};

export type TestResult = {
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

export type TestOptions = {
    /** Action to perform: optOut (default) or optIn. */
    action: AutoAction;
    /** Directory to save screenshots. Defaults to test-results/brightdata. */
    screenshotsDir: string;
    /** Navigation timeout in ms. Defaults to 45000. */
    navigationTimeout: number;
    /** How long to wait for autoconsent to complete in ms. Defaults to 45000. */
    completionTimeout: number;
};

const DEFAULT_OPTIONS: TestOptions = {
    action: 'optOut',
    screenshotsDir: path.join(__dirname, '../../../../test-results/brightdata'),
    navigationTimeout: 45000,
    completionTimeout: 45000,
};

/** Build the BrightData CDP websocket endpoint for a given region. */
export function buildWssEndpoint(regionKey: string): string {
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

/** Connect to a BrightData remote browser for a specific region. */
export async function connectBrightData(regionKey: string): Promise<Browser> {
    const endpoint = buildWssEndpoint(regionKey);
    return chromium.connectOverCDP(endpoint, { timeout: 30000 });
}

/**
 * Inject autoconsent into a page's isolated world and handle the message protocol.
 *
 * Sets up:
 * - CDP Runtime.addBinding for message transport
 * - Page.addScriptToEvaluateOnNewDocument with worldName for isolated world injection
 * - Message handler for init/eval/selfTest protocol
 *
 * Call this BEFORE navigating to the target URL.
 *
 * Returns a context object with the `received` messages array and a `waitForCompletion` helper.
 */
export async function injectAutoconsent(page: Page, options: Partial<TestOptions> = {}): Promise<AutoconsentContext> {
    const opts = { ...DEFAULT_OPTIONS, ...options };
    const ctx = new AutoconsentContext(page, opts);
    await ctx.setup();
    return ctx;
}

/**
 * High-level: test a URL in a specific region. Connects to BrightData, navigates, injects
 * autoconsent, waits for results, takes screenshots, and closes the browser.
 */
export async function testUrl(url: string, regionKey: string, options: Partial<TestOptions> = {}): Promise<TestResult> {
    const opts = { ...DEFAULT_OPTIONS, ...options };
    let browser: Browser | null = null;
    try {
        browser = await connectBrightData(regionKey);
        const page = await browser.newPage();
        return await testPage(page, url, regionKey, opts);
    } catch (e: any) {
        return errorResult(url, regionKey, e.message);
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

/**
 * Test a URL using an already-connected page. Useful when you want to manage
 * the browser lifecycle yourself.
 */
export async function testPage(page: Page, url: string, regionKey: string, options: Partial<TestOptions> = {}): Promise<TestResult> {
    const opts = { ...DEFAULT_OPTIONS, ...options };
    const startTime = Date.now();
    const domain = new URL(url).hostname;
    const urlHash = crypto.createHash('md5').update(url).digest('hex').slice(0, 4);

    try {
        const ctx = await injectAutoconsent(page, opts);

        await page.goto(url, { waitUntil: 'commit', timeout: opts.navigationTimeout });
        const completed = await ctx.waitForCompletion(opts.completionTimeout);

        // Wait for self-test if opt completed
        if (completed && !ctx.hasMessage('selfTestResult')) {
            await ctx.waitForMessage('selfTestResult', 10000);
        }

        const result = ctx.collectResult(url, regionKey);
        result.duration = Date.now() - startTime;

        if (!completed && !ctx.hasMessage('cmpDetected')) {
            result.errors.push('No CMP detected (site may not have a cookie banner in this region)');
        } else if (!completed) {
            result.errors.push('Timed out waiting for autoconsent to complete');
        }

        // Take final screenshot
        try {
            const filepath = path.join(opts.screenshotsDir, `${domain}-${regionKey}-${urlHash}-final.jpg`);
            fs.mkdirSync(opts.screenshotsDir, { recursive: true });
            await page.screenshot({ path: filepath, quality: 50, scale: 'css', timeout: 5000, type: 'jpeg' });
            result.screenshotPaths.push(filepath);
        } catch {
            // non-fatal
        }

        return result;
    } catch (e: any) {
        const result = errorResult(url, regionKey, e.message);
        result.duration = Date.now() - startTime;
        return result;
    }
}

/** Format a TestResult as a human-readable string for console output. */
export function formatResult(result: TestResult): string {
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
        `${status} [${result.region}] ${result.url}`,
        `  CMP: ${result.cmpDetected || 'none'}`,
        `  Popup: ${result.popupFound} | OptOut: ${result.optOutResult} | SelfTest: ${result.selfTestResult}`,
        `  Done: ${result.autoconsentDone}${result.isCosmetic ? ' (cosmetic)' : ''} | Duration: ${result.duration}ms`,
    ];
    if (result.errors.length > 0) {
        parts.push(`  Errors: ${result.errors.join('; ')}`);
    }
    return parts.join('\n');
}

function errorResult(url: string, region: string, message: string): TestResult {
    return {
        url,
        region,
        cmpDetected: null,
        popupFound: false,
        optOutResult: null,
        selfTestResult: null,
        autoconsentDone: false,
        isCosmetic: null,
        errors: [message],
        messages: [],
        duration: 0,
        screenshotPaths: [],
    };
}

/**
 * Context object returned by injectAutoconsent(). Tracks received messages
 * and provides helpers for waiting on specific events.
 */
export class AutoconsentContext {
    page: Page;
    options: TestOptions;
    received: ContentScriptMessage[] = [];
    cdpClient: CDPSession | null = null;

    constructor(page: Page, options: TestOptions) {
        this.page = page;
        this.options = options;
    }

    async setup(): Promise<void> {
        this.cdpClient = await this.page.context().newCDPSession(this.page);

        await this.cdpClient.send('Page.enable');
        await this.cdpClient.send('Runtime.enable');

        // Global binding ensures events fire from all worlds including isolated ones.
        await this.cdpClient.send('Runtime.addBinding', { name: '_autoconsentTransport' });

        // Inject autoconsent at document start in a named isolated world.
        await this.cdpClient.send('Page.addScriptToEvaluateOnNewDocument', {
            source: `
                window.autoconsentSendMessage = async function(msg) {
                    window._autoconsentTransport(JSON.stringify(msg));
                };
                ${contentScript}
            `,
            worldName: ISOLATED_WORLD_NAME,
        });

        // Route binding calls to the message handler.
        // event.executionContextId identifies the source isolated world context for responses.
        this.cdpClient.on('Runtime.bindingCalled', (event) => {
            if (event.name === '_autoconsentTransport') {
                this.handleMessage(event.payload, event.executionContextId).catch((e) => {
                    console.error('autoconsent message handler error:', e.message);
                });
            }
        });
    }

    private async sendToIsolatedWorld(contextId: number, expression: string): Promise<void> {
        await this.cdpClient!.send('Runtime.evaluate', {
            expression,
            contextId,
            awaitPromise: true,
            returnByValue: true,
        });
    }

    private async handleMessage(payload: string, contextId: number): Promise<void> {
        let msg: ContentScriptMessage;
        try {
            msg = JSON.parse(payload);
        } catch {
            return;
        }
        this.received.push(msg);

        switch (msg.type) {
            case 'init': {
                const url = this.page.url();
                const rules =
                    this.options.action === 'optIn'
                        ? { autoconsent: fullRules }
                        : { compact: filterCompactRules(compactRules, { url, mainFrame: true }) };
                const config = {
                    enabled: true,
                    autoAction: this.options.action,
                    disabledCmps: [],
                    enablePrehide: true,
                    detectRetries: 20,
                    enableCosmeticRules: true,
                    visualTest: false,
                };
                try {
                    await this.sendToIsolatedWorld(
                        contextId,
                        `autoconsentReceiveMessage({ type: "initResp", config: ${JSON.stringify(config)}, rules: ${JSON.stringify(rules)} })`,
                    );
                } catch {
                    // context destroyed
                }
                break;
            }
            case 'autoconsentDone': {
                try {
                    await this.sendToIsolatedWorld(contextId, `autoconsentReceiveMessage({ type: "selfTest" })`);
                } catch {
                    // context destroyed
                }
                break;
            }
            case 'eval': {
                let evalResult = false;
                try {
                    evalResult = await this.page.evaluate(msg.code);
                } catch {
                    evalResult = false;
                }
                try {
                    await this.sendToIsolatedWorld(
                        contextId,
                        `autoconsentReceiveMessage({ id: "${msg.id}", type: "evalResp", result: ${JSON.stringify(evalResult)} })`,
                    );
                } catch {
                    // context destroyed
                }
                break;
            }
            case 'autoconsentError': {
                console.error('autoconsent error:', msg.details);
                break;
            }
        }
    }

    /** Check if a specific message type has been received. */
    hasMessage(type: ContentScriptMessage['type']): boolean {
        return this.received.some((m) => m.type === type);
    }

    /** Wait for autoconsentDone + optOutResult/optInResult. */
    async waitForCompletion(timeout: number): Promise<boolean> {
        const start = Date.now();
        while (Date.now() - start < timeout) {
            const done = this.hasMessage('autoconsentDone');
            const optResult = this.hasMessage('optOutResult') || this.hasMessage('optInResult');
            if (done && optResult) return true;
            if (Date.now() - start > 15000 && !this.hasMessage('cmpDetected')) return false;
            await new Promise((resolve) => setTimeout(resolve, 500));
        }
        return false;
    }

    /** Wait for a specific message type. */
    async waitForMessage(type: ContentScriptMessage['type'], timeout: number): Promise<boolean> {
        const start = Date.now();
        while (Date.now() - start < timeout) {
            if (this.hasMessage(type)) return true;
            await new Promise((resolve) => setTimeout(resolve, 500));
        }
        return false;
    }

    /** Collect received messages into a TestResult. */
    collectResult(url: string, region: string): TestResult {
        const result: TestResult = {
            url,
            region,
            cmpDetected: null,
            popupFound: false,
            optOutResult: null,
            selfTestResult: null,
            autoconsentDone: false,
            isCosmetic: null,
            errors: [],
            messages: this.received.map((m) => m.type),
            duration: 0,
            screenshotPaths: [],
        };

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

        return result;
    }
}
