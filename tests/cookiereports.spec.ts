import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'cookiereports',
    [
        'https://www.nordea.dk/',
        'https://www.visa.de/',
        'https://www.authorize.net/',
        'https://www.eversheds-sutherland.com/',
        'https://www.osborneclarke.com/',
    ],
    {
        testOptIn: true,
        testSelfTest: true,
    },
);

// no banner in the US: consent is implied there
generateCMPTests('cookiereports', ['https://www.jumeirah.com/'], {
    testOptIn: true,
    testSelfTest: true,
    skipRegions: ['US'],
});
