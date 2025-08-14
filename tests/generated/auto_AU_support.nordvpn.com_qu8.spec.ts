import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_support.nordvpn.com_qu8', ['https://support.nordvpn.com/hc/en-us'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
