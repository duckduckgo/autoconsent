import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'cookie-alert-pl',
    ['https://trybunal.gov.pl/', 'https://zwik.zagan.pl/', 'https://www.cevo.pl/', 'https://velum.pl/', 'https://art-film.pl/'],
    {
        testOptIn: false,
        testSelfTest: false,
        skipRegions: ['US'],
    },
);
