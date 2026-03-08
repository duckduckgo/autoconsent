import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_bigboxoutletstore.ca_96i', ['https://bigboxoutletstore.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
