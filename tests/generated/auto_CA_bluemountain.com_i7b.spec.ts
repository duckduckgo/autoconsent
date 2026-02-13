import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_bluemountain.com_i7b', ['https://www.bluemountain.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
