/**
 * Oxylabs Agent Browser connection: region targeting, the CDP endpoint, and credential redaction.
 * Docs: https://developers.oxylabs.io/products/agent-browser
 * Shared by the Playwright E2E runner and the `oxylabs-testing` skill.
 *
 * Requires env vars: OXYLABS_USER, OXYLABS_PASSWORD.
 * Optional: OXYLABS_HOST (defaults to hb.oxylabs.io).
 */

/**
 * @typedef {import('@playwright/test').Browser} Browser
 */

/**
 * @typedef {'desktop'|'mobile'} OxylabsDevice
 */

/**
 * @typedef {Object} OxylabsBrowserOptions
 * @property {OxylabsDevice} [device] - Oxylabs ?p_device= value. Oxylabs defaults to 'desktop'.
 * @property {boolean} [solveCaptcha=false] - Send ?solve_captcha=true: let Oxylabs solve captchas on the page. Needs the feature enabled on the account.
 */

import { chromium } from '@playwright/test';

/**
 * US state- and city-targeted region keys, in addition to any two-letter country code. Query params
 * follow https://developers.oxylabs.io/products/agent-browser/geolocation-and-proxy-selection
 * (`p_state` is US-only; `p_city` needs `p_cc` or `p_state`).
 * @type {Record<string, Record<string, string>>}
 */
export const OXYLABS_LOCAL_REGIONS = {
    'us-california': { p_state: 'california' },
    'us-newyork': { p_cc: 'US', p_city: 'new_york' },
    'us-losangeles': { p_cc: 'US', p_city: 'los_angeles' },
};

/**
 * @param {string} regionKey - A two-letter country code (e.g. 'de', 'pt') or a key of OXYLABS_LOCAL_REGIONS.
 * @returns {Record<string, string>}
 */
export function oxylabsRegionParams(regionKey) {
    if (Object.prototype.hasOwnProperty.call(OXYLABS_LOCAL_REGIONS, regionKey)) {
        return OXYLABS_LOCAL_REGIONS[regionKey];
    }
    if (/^[a-z]{2}$/i.test(regionKey)) {
        return { p_cc: regionKey.toUpperCase() };
    }
    throw new Error(
        `Unknown Oxylabs region "${regionKey}". Use a two-letter country code or one of: ${Object.keys(OXYLABS_LOCAL_REGIONS).join(', ')}`,
    );
}

/**
 * @param {NodeJS.ProcessEnv} [env]
 */
export function isOxylabsConfigured(env = process.env) {
    return Boolean(env.OXYLABS_USER && env.OXYLABS_PASSWORD);
}

/**
 * Build the Oxylabs CDP endpoint for a region. The result contains credentials: never log it.
 * @param {string} regionKey
 * @param {OxylabsBrowserOptions} [opts]
 * @param {NodeJS.ProcessEnv} [env]
 */
export function buildOxylabsEndpoint(regionKey, opts = {}, env = process.env) {
    const user = env.OXYLABS_USER;
    const password = env.OXYLABS_PASSWORD;
    const host = env.OXYLABS_HOST || 'hb.oxylabs.io';
    if (!user || !password) {
        throw new Error('Missing Oxylabs credentials. Set OXYLABS_USER and OXYLABS_PASSWORD.');
    }
    const params = new URLSearchParams(oxylabsRegionParams(regionKey));
    if (opts.device) {
        params.set('p_device', opts.device);
    }
    // Accounts without captcha solving get HTTP 400 for this param, so only send it when asked.
    if (opts.solveCaptcha) {
        params.set('solve_captcha', 'true');
    }
    // user/password are interpolated raw — Oxylabs expects literal characters in
    // userinfo (e.g. '+' must NOT be percent-encoded), matching their Python/JS
    // SDK examples. If your credentials contain ':' or '@', escape upstream.
    return `wss://${user}:${password}@${host}/?${params.toString()}`;
}

/**
 * Playwright puts the endpoint URL in connection error messages; strip the credentials.
 * @param {string} message
 * @param {NodeJS.ProcessEnv} [env]
 */
export function redactCredentials(message, env = process.env) {
    let out = message;
    for (const secret of [env.OXYLABS_PASSWORD, env.OXYLABS_USER]) {
        if (secret) out = out.split(secret).join('***');
    }
    return out;
}

/**
 * Connect to an Oxylabs remote browser for a specific region.
 * @param {string} regionKey
 * @param {OxylabsBrowserOptions} [opts]
 * @returns {Promise<Browser>}
 */
export async function connectOxylabs(regionKey, opts = {}) {
    try {
        return await chromium.connectOverCDP(buildOxylabsEndpoint(regionKey, opts), { timeout: 30000 });
    } catch (e) {
        // The first line has the cause; the call log after it repeats the endpoint URL.
        const message = redactCredentials((e instanceof Error ? e.message : String(e)).split('\n')[0]);
        const hint = opts.solveCaptcha && message.includes('400') ? ' (is captcha solving enabled for this Oxylabs account?)' : '';
        // eslint-disable-next-line preserve-caught-error -- the original error carries the credentials
        throw new Error(message + hint);
    }
}
