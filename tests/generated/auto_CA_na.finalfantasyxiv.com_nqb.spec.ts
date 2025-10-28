import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_na.finalfantasyxiv.com_nqb', ['https://na.finalfantasyxiv.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
