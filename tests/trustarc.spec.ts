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

// in-page preference center (no "Decline" shortcut on the banner)
generateCMPTests('TrustArc-top', ['https://www.ea.com/games/it-takes-two/it-takes-two', 'https://www.ea.com/'], {
    testOptOut: true,
    testOptIn: false,
    onlyRegions: ['CA', 'AU', 'JP'],
});
