import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'mirasvit-gdpr',
    [
        'https://www.wallmur.com/wallpaper/navy-wallpapers-and-murals',
        'https://www.ilio.com/',
        'https://www.lamps-on-line.com/',
        'https://www.autopflege-shop.de/',
    ],
    {},
);
