import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'TrustArc-newcm',
    ['https://www.gwr.com/', 'https://www.avantiwestcoast.co.uk/', 'https://www.philips-hue.com/', 'https://www.signify.com/'],
    {
        testOptOut: true,
        testOptIn: false,
        testSelfTest: false,
    },
);

// preference center shown without a banner
generateCMPTests('TrustArc-newcm', ['https://www.dsc.com/'], {
    testOptOut: true,
    testOptIn: false,
    testSelfTest: false,
    skipRegions: ['US'],
});

// preference center with a hidden "Decline All" button
generateCMPTests('TrustArc-newcm', ['https://www.magpul.com/'], {
    testOptOut: true,
    testOptIn: false,
    testSelfTest: false,
    skipRegions: ['US', 'CA'],
});
