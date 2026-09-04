import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'mirasvit-gdpr',
    [
        'https://www.wallmur.com/wallpaper/navy-wallpapers-and-murals',
        'https://www.autopflege-shop.de/',
        'https://www.ilio.com/',
        // has a "Decline" button in the bar, so the settings dialog is not needed
        'https://crc.co.nz/',
        'https://www.lamps-on-line.com/',
    ],
    {},
);
