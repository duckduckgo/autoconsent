import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_auth.discoveryplus.com_v5c', ['https://auth.discoveryplus.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
