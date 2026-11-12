import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'r42-consent-iframe',
    [
        'https://www.corendon.nl/',
        'https://www.corendon.be/',
        'https://www.corendon.de/',
        'https://www.corendon.dk/',
        'https://www.corendon.se/',
        'https://www.stipreizen.nl/',
    ],
    {
        testOptIn: false,
        testSelfTest: true,
        onlyRegions: ['NL'],
    },
);
