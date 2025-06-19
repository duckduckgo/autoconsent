import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_CA_boatdealers.ca_4uf', ['https://www.boatdealers.ca/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
