import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_mg-solar-shop.de_v5d', ['https://www.mg-solar-shop.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
