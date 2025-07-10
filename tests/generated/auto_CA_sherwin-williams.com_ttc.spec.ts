import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_sherwin-williams.com_ttc', ['https://www.sherwin-williams.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
