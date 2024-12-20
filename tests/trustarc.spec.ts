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

generateCMPTests('TrustArc-frame', ['https://www.wish.com/'], {
    testOptOut: true,
    testSelfTest: false,
    testOptIn: false, // opt-in works, but is triggered by the top frame
    skipRegions: ['US'],
});
