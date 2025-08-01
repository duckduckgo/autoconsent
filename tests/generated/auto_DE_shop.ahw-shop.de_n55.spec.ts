import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_shop.ahw-shop.de_n55', ['https://shop.ahw-shop.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
