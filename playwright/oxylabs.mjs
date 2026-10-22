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
 * @property {boolean} [solveCaptcha=true] - Send ?solve_captcha=true: let Oxylabs solve captchas on the page.
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
    if (opts.solveCaptcha ?? true) {
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
        const hint =
            (opts.solveCaptcha ?? true) && message.includes('400') ? ' (is captcha solving enabled for this Oxylabs account?)' : '';
        // eslint-disable-next-line preserve-caught-error -- the original error carries the credentials
        throw new Error(message + hint);
    }
}

// Captcha events arrive as window messages from the Oxylabs runtime. A listener in autoconsent's
// isolated world forwards them over its CDP binding: Agent Browser drops main-world bindings, so
// page.exposeBinding can't deliver them. See https://developers.oxylabs.io/products/agent-browser/captcha-handling
const CAPTCHA_MESSAGE = 'oxylabsCaptcha';
// Agent Browser sends `oxylabs-captcha-solve-start`; the docs list `-start`, `-end`, `-solve-end` and `-error`.
const CAPTCHA_START_EVENTS = ['oxylabs-captcha-start', 'oxylabs-captcha-solve-start'];
const CAPTCHA_END_EVENTS = ['oxylabs-captcha-end', 'oxylabs-captcha-solve-end'];
const CAPTCHA_ERROR_EVENTS = ['oxylabs-captcha-error', 'oxylabs-captcha-solve-error'];
// Longest a test pauses for solving, counted from the first start event: the wait in Oxylabs' example.
const CAPTCHA_SOLVE_TIMEOUT_MS = 60000;
const captchaListenerScript = `
window.addEventListener("message", (e) => {
    if (e?.data?.source === "oxylabs-runtime" && typeof e.data.type === "string") {
        window.autoconsentSendMessage({ type: "${CAPTCHA_MESSAGE}", event: e.data.type });
    }
});
`;

/**
 * Tracks the Oxylabs captcha solver for one page. Run `script` in each isolated world next to the
 * content script and pass every message from it to `handleMessage`.
 * @typedef {Object} CaptchaTracker
 * @property {{ detected: boolean, solved: boolean|null }} state - The solver state.
 * @property {Promise<void>} done - Resolves when solving ends (success or error).
 * @property {() => boolean} isSolving - Whether waits should pause for the solver.
 * @property {string} script
 * @property {(msg: any) => boolean} handleMessage - Returns true for a captcha event.
 */

/**
 * @returns {CaptchaTracker}
 */
export function createCaptchaTracker() {
    /** @type {{ detected: boolean, solved: boolean|null }} */
    const state = { detected: false, solved: null };
    /** @type {() => void} */
    let resolveDone = () => {};
    /** @type {Promise<void>} */
    const done = new Promise((resolve) => {
        resolveDone = resolve;
    });

    let solving = false;
    /** @type {number|null} */
    let firstStartAt = null;

    function handleCaptchaEvent(/** @type {string} */ type) {
        if (CAPTCHA_START_EVENTS.includes(type)) {
            state.detected = true;
            solving = true;
            firstStartAt ??= Date.now();
        } else if (CAPTCHA_END_EVENTS.includes(type)) {
            state.detected = true;
            state.solved = true;
            solving = false;
            resolveDone();
        } else if (CAPTCHA_ERROR_EVENTS.includes(type)) {
            state.detected = true;
            state.solved = false;
            solving = false;
            resolveDone();
        }
    }

    return {
        state,
        done,
        // Oxylabs gives no deadline for a start event, so waits pause whenever one arrives.
        isSolving: () => solving && firstStartAt !== null && Date.now() - firstStartAt < CAPTCHA_SOLVE_TIMEOUT_MS,
        script: captchaListenerScript,
        handleMessage: (msg) => {
            if (msg?.type !== CAPTCHA_MESSAGE) return false;
            handleCaptchaEvent(msg.event);
            return true;
        },
    };
}
