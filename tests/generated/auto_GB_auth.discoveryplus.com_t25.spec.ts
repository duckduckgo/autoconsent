import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_auth.discoveryplus.com_t25', ['https://auth.discoveryplus.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
