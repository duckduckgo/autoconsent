import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_skysports.com_b3s', ['https://www.skysports.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
