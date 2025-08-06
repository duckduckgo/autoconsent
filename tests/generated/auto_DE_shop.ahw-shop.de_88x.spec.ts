import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_shop.ahw-shop.de_88x', ['https://shop.ahw-shop.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
