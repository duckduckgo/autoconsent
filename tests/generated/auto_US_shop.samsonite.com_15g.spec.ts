import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_shop.samsonite.com_15g', ['https://shop.samsonite.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
