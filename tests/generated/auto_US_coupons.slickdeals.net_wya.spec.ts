import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_coupons.slickdeals.net_wya', ['https://coupons.slickdeals.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
