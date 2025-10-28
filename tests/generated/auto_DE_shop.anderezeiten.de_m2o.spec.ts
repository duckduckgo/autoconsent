import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_shop.anderezeiten.de_m2o', ['https://shop.anderezeiten.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
