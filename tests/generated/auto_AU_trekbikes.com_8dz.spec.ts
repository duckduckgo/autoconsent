import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_trekbikes.com_8dz', ['https://www.trekbikes.com/us/en_US/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
