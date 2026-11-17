import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'sitepark-sitekit',
    ['https://www.wuppertal.de/', 'https://www.fh-dortmund.de/', 'https://www.karriere-im-kreis.de/', 'https://www.delmenhorst.de/'],
    {
        testSelfTest: false,
    },
);
