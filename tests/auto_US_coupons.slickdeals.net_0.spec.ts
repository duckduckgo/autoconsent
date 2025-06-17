import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_US_coupons.slickdeals.net_0', ['https://coupons.slickdeals.net/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
