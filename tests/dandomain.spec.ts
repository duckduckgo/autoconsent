import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'dandomain',
    [
        'https://www.lamper.dk/',
        'https://www.fruskov.dk/',
        'https://www.bestman.dk/',
        'https://www.whisky.dk/',
        'https://www.skiltex.dk/',
        'https://www.fashiongirls.se/',
        'https://www.plastbutikken.no/',
    ],
    {
        // saving consent reloads the page, which can drop the self-test message
        testSelfTest: false,
    },
);
