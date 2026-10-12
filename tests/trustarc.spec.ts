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

generateCMPTests('TrustArc-top', ['https://us.store.bambulab.com/'], {
    testOptOut: true,
    testSelfTest: false,
    onlyRegions: ['US'],
});
