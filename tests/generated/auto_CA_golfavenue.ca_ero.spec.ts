import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_golfavenue.ca_ero', ['https://www.golfavenue.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
