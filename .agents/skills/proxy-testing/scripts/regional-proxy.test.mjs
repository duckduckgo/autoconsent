import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { buildProxyConfig } from './regional-proxy.mjs';

describe('regional proxy config', () => {
    it('uses complete credential-free SOCKS URLs directly', () => {
        assert.deepEqual(
            buildProxyConfig('us', {
                REGIONAL_PROXY_US: 'socks5://usc-socks-tr-cluster.duckduckgo.com:80',
            }),
            { server: 'socks5://usc-socks-tr-cluster.duckduckgo.com:80' },
        );
    });

    it('preserves authenticated HTTPS hostname configuration', () => {
        assert.deepEqual(
            buildProxyConfig('de', {
                REGIONAL_PROXY_DE: 'dew.socks.duckduckgo.com',
                REGIONAL_PROXY_PASSWORD: 'password',
                REGIONAL_PROXY_USERNAME: 'username',
            }),
            {
                password: 'password',
                server: 'https://dew.socks.duckduckgo.com:443',
                username: 'username',
            },
        );
    });

    it('rejects credentials embedded in URLs', () => {
        assert.throws(
            () => buildProxyConfig('us', { REGIONAL_PROXY_US: 'socks5://user:password@proxy.example:80' }),
            /must not contain embedded proxy credentials/,
        );
    });

    it('requires credentials for bare hostnames', () => {
        assert.throws(() => buildProxyConfig('gb', { REGIONAL_PROXY_GB: 'uks.socks.duckduckgo.com' }), /Missing proxy credentials/);
    });
});
