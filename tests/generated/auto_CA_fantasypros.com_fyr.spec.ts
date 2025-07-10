import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_fantasypros.com_fyr', ['https://www.fantasypros.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
