import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { after, describe, it } from 'node:test';

import { emptyResult, enableGpc, projectRoot, rulesForFrame, runTest } from '../../../lib/regional-testing/harness.mjs';
import { buildProxyConfig, deviceContextOptions } from './regional-proxy.mjs';

const credentials = {
    REGIONAL_PROXY_PASSWORD: 'password',
    REGIONAL_PROXY_USERNAME: 'username',
};

describe('regional proxy config', () => {
    it('uses complete credential-free SOCKS URLs directly', () => {
        assert.deepEqual(
            buildProxyConfig('us', {
                REGIONAL_PROXY_US: 'socks5://usc-socks-tr-cluster.duckduckgo.com:80',
            }),
            { server: 'socks5://usc-socks-tr-cluster.duckduckgo.com:80' },
        );
    });

    it('passes credentials for HTTPS proxies', () => {
        assert.deepEqual(buildProxyConfig('de', { REGIONAL_PROXY_DE: 'https://proxy.example:443', ...credentials }), {
            password: 'password',
            server: 'https://proxy.example:443',
            username: 'username',
        });
    });

    it('allows HTTPS proxies without credentials', () => {
        assert.deepEqual(buildProxyConfig('de', { REGIONAL_PROXY_DE: 'https://proxy.example:443' }), {
            server: 'https://proxy.example:443',
        });
    });

    it('does not pass credentials for non-HTTPS proxies', () => {
        assert.deepEqual(buildProxyConfig('us', { REGIONAL_PROXY_US: 'socks5://proxy.example:80', ...credentials }), {
            server: 'socks5://proxy.example:80',
        });
        assert.deepEqual(buildProxyConfig('us', { REGIONAL_PROXY_US: 'http://proxy.example:3128', ...credentials }), {
            server: 'http://proxy.example:3128',
        });
    });

    it('rejects credentials embedded in URLs', () => {
        assert.throws(
            () => buildProxyConfig('us', { REGIONAL_PROXY_US: 'socks5://user:password@proxy.example:80' }),
            /must not contain embedded proxy credentials/,
        );
    });

    it('requires a protocol', () => {
        assert.throws(
            () => buildProxyConfig('gb', { REGIONAL_PROXY_GB: 'uks.socks.duckduckgo.com', ...credentials }),
            /must be a complete proxy URL/,
        );
    });

    it('rejects unsupported protocols', () => {
        assert.throws(() => buildProxyConfig('gb', { REGIONAL_PROXY_GB: 'socks4://proxy.example:1080' }), /unsupported proxy protocol/);
    });
});

describe('device emulation', () => {
    it('emulates nothing by default', () => {
        assert.deepEqual(deviceContextOptions(), {});
    });

    it('keeps the device settings but not its browser', () => {
        const options = deviceContextOptions('iPhone SE');
        assert.equal(options.isMobile, true);
        assert.equal(options.hasTouch, true);
        assert.match(options.userAgent ?? '', /iPhone/);
        assert.equal('defaultBrowserType' in options, false);
    });

    it('rejects unknown devices', () => {
        assert.throws(() => deviceContextOptions('Nokia 3310'), /Unknown Playwright device/);
    });
});

describe('Global Privacy Control', () => {
    it('sends the header and sets navigator.globalPrivacyControl', async () => {
        /** @type {{ headers: Record<string, string>[], scripts: Function[] }} */
        const calls = { headers: [], scripts: [] };
        const page = /** @type {any} */ ({
            setExtraHTTPHeaders: async (/** @type {Record<string, string>} */ headers) => calls.headers.push(headers),
            addInitScript: async (/** @type {Function} */ script) => calls.scripts.push(script),
        });

        await enableGpc(page);

        assert.deepEqual(calls.headers, [{ 'Sec-GPC': '1' }]);
        assert.equal(calls.scripts.length, 1);
        // Run the init script against a stand-in Navigator to check what it defines.
        class Navigator {}
        new Function('Navigator', `(${calls.scripts[0].toString()})()`)(Navigator);
        assert.equal(/** @type {any} */ (new Navigator()).globalPrivacyControl, true);
    });

    /**
     * The GPC headers runTest sets before navigating. The fake page fails to navigate, so the run stops there.
     * @param {object} options
     */
    async function gpcHeadersFor(options) {
        /** @type {Record<string, string>[]} */
        const headers = [];
        const page = /** @type {any} */ ({
            setExtraHTTPHeaders: async (/** @type {Record<string, string>} */ value) => headers.push(value),
            addInitScript: async () => {},
            goto: async () => {
                throw new Error('no network in tests');
            },
        });
        const provider = /** @type {any} */ ({ name: 'fake', defaultScreenshotsDir: '.', inject: async () => ({}) });
        const result = await runTest(page, 'https://example.com/', 'us', options, provider);
        assert.match(result.errors.join(' '), /no network in tests/);
        return headers;
    }

    it('is on by default', async () => {
        assert.deepEqual(await gpcHeadersFor({}), [{ 'Sec-GPC': '1' }]);
    });

    it('is off with gpc: false', async () => {
        assert.deepEqual(await gpcHeadersFor({ gpc: false }), []);
    });
});

describe('rules per frame', () => {
    /** @type {import('../../../../lib/rules.js').AutoConsentCMPRule[]} */
    const fullRules = JSON.parse(fs.readFileSync(path.join(projectRoot, 'rules/rules.json'), 'utf-8')).autoconsent;
    /** @param {(runContext: { main: boolean, frame: boolean, urlPattern?: string }) => boolean} test */
    const fullRuleNames = (test) =>
        fullRules
            .filter((r) => test({ main: true, frame: false, ...r.runContext }))
            .map((r) => r.name)
            .sort();
    /** @param {import('../../../../lib/types.js').RuleBundle} bundle */
    const compactRuleNames = (bundle) => (bundle.compact?.r ?? []).map((r) => r[1]).sort();

    it('gives a subframe only the rules that run in frames', () => {
        const bundle = rulesForFrame('optOut', 'https://ads.example/frame', false);
        assert.deepEqual(bundle.autoconsent, []);
        assert.deepEqual(
            compactRuleNames(bundle),
            fullRuleNames((rc) => rc.frame && !rc.urlPattern),
        );
    });

    it('gives the main frame the generic rules', () => {
        const bundle = rulesForFrame(null, 'https://example.com/', true);
        assert.deepEqual(
            compactRuleNames(bundle),
            fullRuleNames((rc) => rc.main && !rc.urlPattern),
        );
    });

    it('gives opt-in the full rules, with their opt-in steps', () => {
        const bundle = rulesForFrame('optIn', 'https://ads.example/frame', false);
        assert.equal(bundle.compact, undefined);
        assert.equal(bundle.autoconsent?.length, fullRules.length);
    });
});

describe('final screenshot', () => {
    const screenshotsDir = fs.mkdtempSync(path.join(os.tmpdir(), 'regional-testing-'));
    after(() => fs.rmSync(screenshotsDir, { recursive: true, force: true }));

    /**
     * Run a test on a fake page whose screenshot succeeds, or throws a Playwright-style timeout.
     * @param {boolean} fail
     */
    async function runWithScreenshot(fail) {
        const page = /** @type {any} */ ({
            setExtraHTTPHeaders: async () => {},
            addInitScript: async () => {},
            goto: async () => {},
            screenshot: async () => {
                if (fail) {
                    throw new Error('page.screenshot: Timeout 30000ms exceeded.\nCall log:\n  - taking page screenshot');
                }
            },
        });
        const ctx = {
            waitForCompletion: async () => false,
            hasMessage: () => false,
            collectResult: (/** @type {string} */ url, /** @type {string} */ region) => emptyResult(url, region, 'regional-proxy'),
        };
        const provider = /** @type {any} */ ({ name: 'regional-proxy', defaultScreenshotsDir: screenshotsDir, inject: async () => ctx });
        return runTest(page, 'https://example.com/', 'us', {}, provider);
    }

    it('is recorded when it succeeds', async () => {
        const result = await runWithScreenshot(false);
        assert.deepEqual(result.screenshotPaths, [path.join(screenshotsDir, 'example.com-us-final.jpg')]);
        assert.equal(
            result.errors.some((e) => e.startsWith('Screenshot failed')),
            false,
        );
    });

    it('reports the first line of the error when it fails', async () => {
        const result = await runWithScreenshot(true);
        assert.deepEqual(result.screenshotPaths, []);
        assert.ok(result.errors.includes('Screenshot failed: page.screenshot: Timeout 30000ms exceeded.'), result.errors.join('; '));
    });
});
