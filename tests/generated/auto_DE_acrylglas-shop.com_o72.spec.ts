import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_acrylglas-shop.com_o72', ['https://acrylglas-shop.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
