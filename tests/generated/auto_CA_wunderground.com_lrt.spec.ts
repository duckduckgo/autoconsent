import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_wunderground.com_lrt', ['https://www.wunderground.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
