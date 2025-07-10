import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_sherwin-williams.com_0d3', ['https://www.sherwin-williams.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
