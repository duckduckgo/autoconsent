import generateCMPTests from '../playwright/runner';

generateCMPTests('TrustArc-top', ['https://www.samsung.com/uk/smartphones/all-smartphones/'], {
    testOptOut: true,
    testSelfTest: false,
    skipRegions: ['US'],
});

generateCMPTests('TrustArc-top', ['https://www.garmin.com/de-DE/'], {
    testOptOut: true,
    testSelfTest: false,
    skipRegions: ['US'],
});

// Regression: this Admiral integration relies on a transitionend callback to remove the
// banner overlay, which never fires when prehide sets opacity to 0 up front.
generateCMPTests('TrustArc-top', ['https://login.admiral.com/myaccount/login/'], {
    testOptOut: true,
    testSelfTest: false,
    skipRegions: ['US'],
});

generateCMPTests('TrustArc-frame', ['https://www.wish.com/', 'https://www.usa.philips.com/'], {
    testOptOut: true,
    testSelfTest: false,
    testOptIn: false, // opt-in works, but is triggered by the top frame
    skipRegions: ['US'],
});
