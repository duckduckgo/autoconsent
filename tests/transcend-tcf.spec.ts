import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'transcend-tcf',
    ['https://www.darkreading.com/', 'https://www.informationweek.com/', 'https://www.routledge.com/', 'https://gdconf.com/'],
    {
        testOptIn: false,
        skipRegions: ['US'],
    },
);
