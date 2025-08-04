import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_admin.hostpoint.ch_hk9', ['https://admin.hostpoint.ch/customer/Auth/Login'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
