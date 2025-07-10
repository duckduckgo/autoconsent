import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_shop.samsonite.com_lc4', ['https://shop.samsonite.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
