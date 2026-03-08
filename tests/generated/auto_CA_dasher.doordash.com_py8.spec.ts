import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_dasher.doordash.com_py8', ['https://dasher.doordash.com/en-ca'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
