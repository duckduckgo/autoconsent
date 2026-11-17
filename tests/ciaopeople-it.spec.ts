import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'ciaopeople.it',
    ['https://www.cookist.it/', 'https://www.cookist.com/', 'https://www.ohga.it/', 'https://www.lexplain.it/', 'https://www.geopop.it/'],
    {
        onlyRegions: ['DE'],
    },
);
