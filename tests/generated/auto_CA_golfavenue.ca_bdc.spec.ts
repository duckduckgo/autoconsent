import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_golfavenue.ca_bdc', ['https://www.golfavenue.ca/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
