import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dein-larp-shop.de_hiy', ['https://dein-larp-shop.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
