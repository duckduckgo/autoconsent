import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_shop.asfinag.at_a3g', ['https://shop.asfinag.at/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
