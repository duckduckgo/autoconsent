import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_compressiekousen-shop.nl_kal', ['https://compressiekousen-shop.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
