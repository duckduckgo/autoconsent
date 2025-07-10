import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_entrepreneur.com_xud', ['https://www.entrepreneur.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
