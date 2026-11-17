import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'tournamentsoftware',
    [
        'https://mijnknltb.toernooi.nl/',
        'https://www.tournamentsoftware.com/',
        'https://dbv.turnier.de/',
        'https://be.tournamentsoftware.com/',
    ],
    {
        testSelfTest: false,
        // the page after the cookie wall can embed a separate nojazz ad-consent frame
        expectedRuns: 2,
    },
);
