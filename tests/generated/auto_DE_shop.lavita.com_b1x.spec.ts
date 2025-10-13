import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_shop.lavita.com_b1x', ['https://shop.lavita.com/de?region=DE'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
