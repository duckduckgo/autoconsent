import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_US_coupons.slickdeals.net_die', ['https://coupons.slickdeals.net/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
