import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_shop.lavita.com_8ht', ['https://shop.lavita.com/de?region=DE'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
