import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_thedrardisshow.com_w7w', ['https://thedrardisshow.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
