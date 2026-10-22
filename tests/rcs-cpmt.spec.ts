import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'rcs-cpmt',
    [
        'https://www.ilombardia.it/',
        'https://www.giroditalia.it/',
        'https://www.milanosanremo.it/',
        'https://www.strade-bianche.it/',
        'https://www.youreporter.it/',
    ],
    {
        testSelfTest: false,
    },
);
