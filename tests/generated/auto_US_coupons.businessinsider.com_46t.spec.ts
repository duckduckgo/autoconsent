import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_coupons.businessinsider.com_46t', ['https://coupons.businessinsider.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
