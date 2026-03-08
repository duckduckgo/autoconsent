import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ballas-shop.de_a0a', ['https://ballas-shop.de/online-shop/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
