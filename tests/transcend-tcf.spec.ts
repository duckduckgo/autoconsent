import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'transcend-tcf',
    ['https://www.darkreading.com/', 'https://www.informationweek.com/', 'https://www.canalys.com/', 'https://www.lightreading.com/'],
    {
        skipRegions: ['US'],
    },
);
