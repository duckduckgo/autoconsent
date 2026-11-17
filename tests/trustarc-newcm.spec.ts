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
