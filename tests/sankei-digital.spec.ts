import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'sankei-digital',
    ['https://jp.ign.com/', 'https://www.sankei.com/', 'https://www.sanspo.com/', 'https://www.zakzak.co.jp/'],
    {
        onlyRegions: ['JP'],
    },
);
