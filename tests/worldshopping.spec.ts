import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'worldshopping',
    ['https://www.hmv.co.jp/', 'https://suzuri.jp/', 'https://www.timexwatch.jp/', 'https://www.wako.co.jp/'],
    {
        mobile: true,
        skipRegions: ['US', 'AU', 'JP'],
    },
);
