import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_shop.samsonite.com_jfl', ['https://shop.samsonite.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
