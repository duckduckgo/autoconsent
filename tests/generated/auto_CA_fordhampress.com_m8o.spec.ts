import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_fordhampress.com_m8o', ['https://fordhampress.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
