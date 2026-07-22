import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'cookieinfoscript',
    [
        'https://www.uketropolis.com/',
        'https://www.unb.ca/',
        'https://www.gengo.com/',
        'https://www.taseto.com/',
        'https://www.nationaljewish.org/',
        'https://www.futsalplanet.com/',
    ],
    {
        testOptIn: false,
        testSelfTest: false,
    },
);
