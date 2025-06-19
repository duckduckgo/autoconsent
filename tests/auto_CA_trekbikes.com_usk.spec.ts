import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_CA_trekbikes.com_usk', ['https://www.trekbikes.com/ca/en_CA/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
