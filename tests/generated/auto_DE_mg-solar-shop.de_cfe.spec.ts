import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_mg-solar-shop.de_cfe', ['https://www.mg-solar-shop.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
