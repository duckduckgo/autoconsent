import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_hockeycanada.ca_o58', ['https://www.hockeycanada.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
