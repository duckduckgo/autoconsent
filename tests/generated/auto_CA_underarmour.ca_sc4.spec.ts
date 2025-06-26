import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_underarmour.ca_sc4', ['https://www.underarmour.ca/en-ca/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
