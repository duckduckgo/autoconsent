import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'com_oil',
    [
        'https://www.elektro4000.de/',
        'http://www.metallparadies.de/',
        'http://www.ersatzteil-fee.de/',
        'http://edelholzverkauf.de/',
    ],
    {
        skipRegions: ['GB'],
        testOptIn: false,
        testSelfTest: false,
    },
);
