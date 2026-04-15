import generateCMPTests from '../playwright/runner';

// Ketch often does not render a consent banner in the default Playwright region (NA).
// These tests assert that the Ketch CMP is detected on representative sites.
generateCMPTests('ketch', ['https://time.com/', 'https://tailscale.com/'], {
    expectPopupOpen: false,
    testOptIn: false,
    testOptOut: false,
    testSelfTest: false,
});
