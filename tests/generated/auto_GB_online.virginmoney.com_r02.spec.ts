import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_online.virginmoney.com_r02', ['https://online.virginmoney.com/SSO/SSO/CustomerIdView.jsf'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
