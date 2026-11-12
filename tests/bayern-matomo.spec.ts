import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'bayern-matomo',
    ['https://www.statistik.bayern.de/', 'https://www.stmb.bayern.de/', 'https://www.regierung.oberbayern.bayern.de/'],
    {
        testOptIn: false,
    },
);
