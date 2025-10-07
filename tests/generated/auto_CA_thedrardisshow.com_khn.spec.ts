import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_thedrardisshow.com_khn', ['https://thedrardisshow.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
