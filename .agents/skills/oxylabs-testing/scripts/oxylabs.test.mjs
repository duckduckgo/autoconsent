import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import {
    OXYLABS_MOBILE_CONTEXT,
    buildOxylabsEndpoint,
    isOxylabsConfigured,
    oxylabsContextOptions,
    oxylabsRegionParams,
    redactCredentials,
} from './oxylabs.mjs';

const env = { OXYLABS_USER: 'user', OXYLABS_PASSWORD: 'p+ss' };

describe('oxylabs config', () => {
    it('maps two-letter region codes to countries', () => {
        assert.deepEqual(oxylabsRegionParams('gb'), { p_cc: 'GB' });
        assert.deepEqual(oxylabsRegionParams('pt'), { p_cc: 'PT' });
        assert.deepEqual(oxylabsRegionParams('us-california'), { p_state: 'california' });
        assert.deepEqual(oxylabsRegionParams('us-losangeles'), { p_cc: 'US', p_city: 'los_angeles' });
        assert.throws(() => oxylabsRegionParams('europe'), /Unknown Oxylabs region/);
    });

    it('builds the endpoint with raw credentials and query params', () => {
        assert.equal(
            buildOxylabsEndpoint('de', { device: 'mobile' }, env),
            'wss://user:p+ss@hb.oxylabs.io/?p_cc=DE&p_device=mobile&solve_captcha=true',
        );
        assert.equal(
            buildOxylabsEndpoint('us', { solveCaptcha: false }, { ...env, OXYLABS_HOST: 'proxy.example' }),
            'wss://user:p+ss@proxy.example/?p_cc=US',
        );
    });

    it('requires credentials', () => {
        assert.equal(isOxylabsConfigured({}), false);
        assert.equal(isOxylabsConfigured(env), true);
        assert.throws(() => buildOxylabsEndpoint('de', {}, {}), /Missing Oxylabs credentials/);
    });

    it('redacts credentials from error messages', () => {
        assert.equal(
            redactCredentials('WebSocket error: wss://user:p+ss@hb.oxylabs.io/?p_cc=DE 401 Unauthorized', env),
            'WebSocket error: wss://***:***@hb.oxylabs.io/?p_cc=DE 401 Unauthorized',
        );
    });
});

describe('oxylabs pages', () => {
    it('opens desktop pages with Playwright defaults', () => {
        assert.equal(oxylabsContextOptions({}), null);
        assert.equal(oxylabsContextOptions({ device: 'desktop' }), null);
    });

    it('adds touch to the mobile profile without replacing its user agent', () => {
        const options = oxylabsContextOptions({ device: 'mobile' });
        assert.equal(options, OXYLABS_MOBILE_CONTEXT);
        assert.equal(options?.hasTouch, true);
        assert.equal(options?.isMobile, true);
        assert.equal(options?.userAgent, undefined);
    });

    it('lets a Playwright device override the mobile profile', () => {
        assert.match(oxylabsContextOptions({ device: 'mobile', emulateDevice: 'iPhone SE' })?.userAgent ?? '', /iPhone/);
    });
});
