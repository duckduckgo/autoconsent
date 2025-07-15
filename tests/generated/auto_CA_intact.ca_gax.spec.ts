import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_intact.ca_gax', ['https://www.intact.ca/en/personal-insurance'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
