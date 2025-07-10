import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_bluemountain.com_6f9', ['https://www.bluemountain.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
