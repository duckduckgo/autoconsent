import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'ciaopeople.it',
    [
        'https://www.fanpage.it/',
        'https://www.ohga.it/',
        'https://www.lexplain.it/',
        'https://www.wamily.it/',
        'https://www.cookist.it/',
        'https://www.geopop.it/',
        'https://www.kodami.it/',
        'https://www.cookist.com/',
    ],
    { skipRegions: ['US'] },
);
