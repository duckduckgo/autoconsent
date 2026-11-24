import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'de-volksbank',
    [
        'https://www.asnbank.nl/',
        'https://www.snsbank.nl/',
        'https://www.regiobank.nl/',
        'https://www.asnbank.nl/online/web/onlinebankieren/',
        'https://www.snsbank.nl/mijnsns/',
        'https://www.regiobank.nl/mijnregiobank/',
    ],
    {
        testSelfTest: false,
    },
);
