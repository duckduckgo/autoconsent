import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_wgyoungfuneralhome.com_rh7', ['https://www.wgyoungfuneralhome.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
