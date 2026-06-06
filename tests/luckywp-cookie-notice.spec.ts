import generateCMPTests from '../playwright/runner';

// The plugin can be configured per-site, so we test multiple variants:
// - sites that show "Reject" without reload: full opt-out flow works.
// - sites that show "Reject" but reload after the click: the self-test
//   is unreliable because the engine's selfTest target frame is detached.
// - sites that show only an "Accept" button (no "Reject"): opt-out
//   hides the banner cosmetically and no cookie is set.
generateCMPTests('luckywp-cookie-notice', ['https://alterego-lingerie.com/']);

generateCMPTests('luckywp-cookie-notice', ['https://simmakers.com/', 'https://bioregservices.com/', 'https://hygger.io/'], {
    testSelfTest: false,
});
