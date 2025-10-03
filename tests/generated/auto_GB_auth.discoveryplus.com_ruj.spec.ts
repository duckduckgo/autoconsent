import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_auth.discoveryplus.com_ruj', ['https://auth.discoveryplus.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
