import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { buildOxylabsEndpoint, isOxylabsConfigured, oxylabsRegionParams, redactCredentials } from './oxylabs.mjs';

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
        assert.equal(buildOxylabsEndpoint('de', { device: 'mobile' }, env), 'wss://user:p+ss@hb.oxylabs.io/?p_cc=DE&p_device=mobile');
        assert.equal(
            buildOxylabsEndpoint('us', { solveCaptcha: true }, { ...env, OXYLABS_HOST: 'proxy.example' }),
            'wss://user:p+ss@proxy.example/?p_cc=US&solve_captcha=true',
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
