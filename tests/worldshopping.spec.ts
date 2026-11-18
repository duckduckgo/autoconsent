import generateCMPTests from '../playwright/runner';

// The WorldShopping consent banner is only shown to mobile visitors from outside Japan
generateCMPTests(
    'worldshopping',
    ['https://palcloset.jp/', 'https://www.idee-online.com/', 'https://rinkan-online.com/', 'https://ichiri-mall.jp/'],
    {
        mobile: true,
        onlyRegions: ['GB'],
    },
);
