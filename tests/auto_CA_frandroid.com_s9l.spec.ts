import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_CA_frandroid.com_s9l', ['https://www.frandroid.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
