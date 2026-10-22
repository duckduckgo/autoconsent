import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { buildProxyConfig } from './regional-proxy.mjs';

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
