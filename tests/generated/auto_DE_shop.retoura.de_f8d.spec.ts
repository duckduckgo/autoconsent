import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_shop.retoura.de_f8d', ['https://shop.retoura.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
