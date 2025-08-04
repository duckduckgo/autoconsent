import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_trekbikes.com_sbz', ['https://www.trekbikes.com/ca/en_CA/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
