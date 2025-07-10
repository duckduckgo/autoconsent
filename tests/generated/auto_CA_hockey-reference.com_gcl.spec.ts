import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_hockey-reference.com_gcl', ['https://www.hockey-reference.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
