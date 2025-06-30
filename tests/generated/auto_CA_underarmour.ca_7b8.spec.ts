import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_underarmour.ca_7b8', ['https://www.underarmour.ca/en-ca/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
