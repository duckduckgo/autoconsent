import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_rupprecht.de_5yo', ['https://www.rupprecht.de/shop/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
