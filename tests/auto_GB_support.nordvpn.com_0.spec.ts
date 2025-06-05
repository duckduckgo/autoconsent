import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_support.nordvpn.com_0', ['https://support.nordvpn.com/hc/en-us'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
