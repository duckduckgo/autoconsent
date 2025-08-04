import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_admin.hostpoint.ch_el2', ['https://admin.hostpoint.ch/customer/Auth/Login'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
