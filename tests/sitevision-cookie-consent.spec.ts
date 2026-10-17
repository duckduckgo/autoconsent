import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'sitevision-cookie-consent',
    [
        'https://malmo.se/',
        'https://www.lund.se/',
        'https://www.uu.se/',
        'https://www.ltu.se/',
        'https://www.skolverket.se/',
        'https://www.sh.se/',
    ],
    {
        testSelfTest: false,
    },
);
