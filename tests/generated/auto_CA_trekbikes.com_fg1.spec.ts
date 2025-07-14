import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_trekbikes.com_fg1', ['https://www.trekbikes.com/ca/en_CA/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
