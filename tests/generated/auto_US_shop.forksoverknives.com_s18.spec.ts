import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_shop.forksoverknives.com_s18', ['https://shop.forksoverknives.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
