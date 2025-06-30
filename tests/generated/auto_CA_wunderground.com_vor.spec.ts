import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_wunderground.com_vor', ['https://www.wunderground.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
