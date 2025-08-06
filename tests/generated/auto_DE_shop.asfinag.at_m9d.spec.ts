import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_shop.asfinag.at_m9d', ['https://shop.asfinag.at/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
