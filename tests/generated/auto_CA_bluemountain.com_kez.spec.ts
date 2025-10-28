import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_bluemountain.com_kez', ['https://www.bluemountain.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
