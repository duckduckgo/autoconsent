import generateCMPTests from '../playwright/runner';

// consent is saved via XHR followed by a page reload, so the self-test cannot observe the cookie
generateCMPTests(
    'smartweb',
    [
        'https://hellers.dk/',
        'https://taon.dk/',
        'https://exentri.com/',
        'https://kraftblokk.no/',
        'https://huntinglife.dk/',
        'https://billigcykel.dk/',
    ],
    {
        testSelfTest: false,
    },
);
