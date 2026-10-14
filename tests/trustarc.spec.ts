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

// US banner keeps a hidden "reject all" button, opt-out goes through the preference center
generateCMPTests('TrustArc-top', ['https://makerworld.com/en/models/390344-wall-mount-laptop-holder', 'https://www.salary.com/'], {
    testOptOut: true,
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
