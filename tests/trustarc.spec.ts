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

// Magento store with a hidden built-in cookie notice next to TrustArc
generateCMPTests('TrustArc-top', ['https://shop.royalmail.com/garden-wildlife-stamp-set'], {
    testOptOut: true,
    testSelfTest: false,
});
