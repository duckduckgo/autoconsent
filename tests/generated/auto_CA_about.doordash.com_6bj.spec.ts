import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_about.doordash.com_6bj', ['https://about.doordash.com/en-ca'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
