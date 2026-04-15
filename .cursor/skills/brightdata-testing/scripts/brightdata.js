/**
 * BrightData remote browser utilities for multi-region autoconsent testing.
 *
 * Connects to BrightData's CDP browsers, injects autoconsent into an isolated
 * world, and evaluates opt-out/opt-in flows across geographic regions.
 *
 * Requires env vars: BRIGHTDATA_WEBACCESS_USER, BRIGHTDATA_WEBACCESS_PASSWORD,
 * BRIGHTDATA_WEBACCESS_HOST.
 */

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const { chromium } = require('@playwright/test');
const { filterCompactRules } = require('../../../../dist/autoconsent.cjs.js');

const compactRules = require('../../../../rules/compact-rules.json');
const rulesJson = require('../../../../rules/rules.json');
const fullRules = rulesJson.autoconsent;

const contentScript = fs.readFileSync(path.join(__dirname, '../../../../dist/autoconsent.playwright.js'), 'utf8');

const ISOLATED_WORLD_NAME = 'autoconsent';

/**
 * @typedef {Object} TestResult
 * @property {string} url
 * @property {string} region
 * @property {string|null} cmpDetected
 * @property {boolean} popupFound
 * @property {boolean|null} optOutResult
 * @property {boolean|null} selfTestResult
 * @property {boolean} autoconsentDone
 * @property {boolean|null} isCosmetic
 * @property {string[]} errors
 * @property {string[]} messages
 * @property {number} duration
 * @property {string[]} screenshotPaths
 */

/**
 * @typedef {Object} TestOptions
 * @property {'optOut'|'optIn'|null} [action='optOut'] - Action to perform.
 * @property {string} [screenshotsDir] - Directory to save screenshots.
 * @property {number} [navigationTimeout=45000] - Navigation timeout in ms.
 * @property {number} [completionTimeout=45000] - Completion timeout in ms.
 */

/** BrightData region suffixes appended to the username. */
const REGIONS = {
    'us-ny': '-country-us-state-ny',
    'us-la': '-country-us-state-ca',
    de: '-country-de',
    fr: '-country-fr',
    gb: '-country-gb',
    nl: '-country-nl',
    ca: '-country-ca',
    au: '-country-au',
};

/** @returns {TestOptions} */
function defaultOptions() {
    return {
        action: 'optOut',
        screenshotsDir: path.join(__dirname, '../../../../test-results/brightdata'),
        navigationTimeout: 45000,
        completionTimeout: 45000,
    };
}

/**
 * Build the BrightData CDP websocket endpoint for a given region.
 * @param {string} regionKey
 * @returns {string}
 */
function buildWssEndpoint(regionKey) {
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

/**
 * Connect to a BrightData remote browser for a specific region.
 * @param {string} regionKey
 * @returns {Promise<import('@playwright/test').Browser>}
 */
async function connectBrightData(regionKey) {
    const endpoint = buildWssEndpoint(regionKey);
    return chromium.connectOverCDP(endpoint, { timeout: 30000 });
}

/**
 * @param {string} url
 * @param {string} region
 * @param {string} message
 * @returns {TestResult}
 */
function errorResult(url, region, message) {
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
 * Inject autoconsent into a page's isolated world and handle the message protocol.
 *
 * Sets up CDP Runtime.addBinding for transport, Page.addScriptToEvaluateOnNewDocument
 * with worldName for isolated world injection, and a message handler for the
 * init/eval/selfTest protocol.
 *
 * Call this BEFORE navigating to the target URL.
 *
 * @param {import('@playwright/test').Page} page
 * @param {Partial<TestOptions>} [options={}]
 * @returns {Promise<AutoconsentContext>}
 */
async function injectAutoconsent(page, options = {}) {
    const opts = { ...defaultOptions(), ...options };

    /** @type {Object[]} */
    const received = [];
    const cdpClient = await page.context().newCDPSession(page);

    await cdpClient.send('Page.enable');
    await cdpClient.send('Runtime.enable');

    // Global binding ensures events fire from all worlds including isolated ones.
    await cdpClient.send('Runtime.addBinding', { name: '_autoconsentTransport' });

    // Inject autoconsent at document start in a named isolated world.
    await cdpClient.send('Page.addScriptToEvaluateOnNewDocument', {
        source: `
            window.autoconsentSendMessage = async function(msg) {
                window._autoconsentTransport(JSON.stringify(msg));
            };
            ${contentScript}
        `,
        worldName: ISOLATED_WORLD_NAME,
    });

    /**
     * @param {number} contextId
     * @param {string} expression
     */
    async function sendToIsolatedWorld(contextId, expression) {
        await cdpClient.send('Runtime.evaluate', {
            expression,
            contextId,
            awaitPromise: true,
            returnByValue: true,
        });
    }

    /**
     * @param {string} payload
     * @param {number} contextId
     */
    async function handleMessage(payload, contextId) {
        let msg;
        try {
            msg = JSON.parse(payload);
        } catch {
            return;
        }
        received.push(msg);

        switch (msg.type) {
            case 'init': {
                const url = page.url();
                const rules =
                    opts.action === 'optIn'
                        ? { autoconsent: fullRules }
                        : { compact: filterCompactRules(compactRules, { url, mainFrame: true }) };
                const config = {
                    enabled: true,
                    autoAction: opts.action,
                    disabledCmps: [],
                    enablePrehide: true,
                    detectRetries: 20,
                    enableCosmeticRules: true,
                    visualTest: false,
                };
                try {
                    await sendToIsolatedWorld(
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
                    await sendToIsolatedWorld(contextId, `autoconsentReceiveMessage({ type: "selfTest" })`);
                } catch {
                    // context destroyed
                }
                break;
            }
            case 'eval': {
                let evalResult = false;
                try {
                    evalResult = await page.evaluate(msg.code);
                } catch {
                    evalResult = false;
                }
                try {
                    await sendToIsolatedWorld(
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

    // Route binding calls to the message handler.
    // event.executionContextId identifies the source isolated world context for responses.
    cdpClient.on('Runtime.bindingCalled', (event) => {
        if (event.name === '_autoconsentTransport') {
            handleMessage(event.payload, event.executionContextId).catch((e) => {
                console.error('autoconsent message handler error:', e.message);
            });
        }
    });

    /**
     * Check if a specific message type has been received.
     * @param {string} type
     * @returns {boolean}
     */
    function hasMessage(type) {
        return received.some((m) => m.type === type);
    }

    /**
     * Wait for autoconsentDone + optOutResult/optInResult.
     * @param {number} timeout
     * @returns {Promise<boolean>}
     */
    async function waitForCompletion(timeout) {
        const start = Date.now();
        while (Date.now() - start < timeout) {
            if (hasMessage('autoconsentDone') && (hasMessage('optOutResult') || hasMessage('optInResult'))) {
                return true;
            }
            if (Date.now() - start > 15000 && !hasMessage('cmpDetected')) {
                return false;
            }
            await new Promise((resolve) => setTimeout(resolve, 500));
        }
        return false;
    }

    /**
     * Wait for a specific message type.
     * @param {string} type
     * @param {number} timeout
     * @returns {Promise<boolean>}
     */
    async function waitForMessage(type, timeout) {
        const start = Date.now();
        while (Date.now() - start < timeout) {
            if (hasMessage(type)) return true;
            await new Promise((resolve) => setTimeout(resolve, 500));
        }
        return false;
    }

    /**
     * Collect received messages into a TestResult.
     * @param {string} url
     * @param {string} region
     * @returns {TestResult}
     */
    function collectResult(url, region) {
        const result = {
            url,
            region,
            cmpDetected: null,
            popupFound: false,
            optOutResult: null,
            selfTestResult: null,
            autoconsentDone: false,
            isCosmetic: null,
            errors: [],
            messages: received.map((m) => m.type),
            duration: 0,
            screenshotPaths: [],
        };

        for (const msg of received) {
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

    return { received, hasMessage, waitForCompletion, waitForMessage, collectResult };
}

/**
 * @typedef {Awaited<ReturnType<typeof injectAutoconsent>>} AutoconsentContext
 */

/**
 * Test a URL using an already-connected page. Useful when you want to manage
 * the browser lifecycle yourself.
 * @param {import('@playwright/test').Page} page
 * @param {string} url
 * @param {string} regionKey
 * @param {Partial<TestOptions>} [options={}]
 * @returns {Promise<TestResult>}
 */
async function testPage(page, url, regionKey, options = {}) {
    const opts = { ...defaultOptions(), ...options };
    const startTime = Date.now();
    const domain = new URL(url).hostname;
    const urlHash = crypto.createHash('md5').update(url).digest('hex').slice(0, 4);

    try {
        const ctx = await injectAutoconsent(page, opts);

        await page.goto(url, { waitUntil: 'commit', timeout: opts.navigationTimeout });
        const completed = await ctx.waitForCompletion(opts.completionTimeout);

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

        try {
            const filepath = path.join(opts.screenshotsDir, `${domain}-${regionKey}-${urlHash}-final.jpg`);
            fs.mkdirSync(opts.screenshotsDir, { recursive: true });
            await page.screenshot({ path: filepath, quality: 50, scale: 'css', timeout: 5000, type: 'jpeg' });
            result.screenshotPaths.push(filepath);
        } catch {
            // non-fatal
        }

        return result;
    } catch (e) {
        const result = errorResult(url, regionKey, e.message);
        result.duration = Date.now() - startTime;
        return result;
    }
}

/**
 * High-level: test a URL in a specific region. Connects to BrightData, navigates,
 * injects autoconsent, waits for results, takes screenshots, and closes the browser.
 * @param {string} url
 * @param {string} regionKey
 * @param {Partial<TestOptions>} [options={}]
 * @returns {Promise<TestResult>}
 */
async function testUrl(url, regionKey, options = {}) {
    const opts = { ...defaultOptions(), ...options };
    let browser = null;
    try {
        browser = await connectBrightData(regionKey);
        const page = await browser.newPage();
        return await testPage(page, url, regionKey, opts);
    } catch (e) {
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
 * Format a TestResult as a human-readable string for console output.
 * @param {TestResult} result
 * @returns {string}
 */
function formatResult(result) {
    let status;
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

module.exports = {
    REGIONS,
    buildWssEndpoint,
    connectBrightData,
    injectAutoconsent,
    testPage,
    testUrl,
    formatResult,
};
