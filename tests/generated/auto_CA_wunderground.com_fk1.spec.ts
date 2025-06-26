import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_wunderground.com_fk1', ['https://www.wunderground.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
