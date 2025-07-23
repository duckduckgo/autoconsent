import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_coupons.cnn.com_6s0', ['https://coupons.cnn.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
