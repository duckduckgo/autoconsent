import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_CA_belairdirect.com_uj5', ['https://www.belairdirect.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
