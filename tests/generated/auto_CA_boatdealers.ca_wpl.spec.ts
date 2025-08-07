import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_boatdealers.ca_wpl', ['https://www.boatdealers.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
