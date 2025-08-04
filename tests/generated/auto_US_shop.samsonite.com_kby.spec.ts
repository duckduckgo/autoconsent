import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_shop.samsonite.com_kby', ['https://shop.samsonite.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
