import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_colemancanada.ca_ytm', ['https://www.colemancanada.ca/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
