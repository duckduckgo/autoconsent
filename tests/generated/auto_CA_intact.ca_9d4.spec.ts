import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_intact.ca_9d4', ['https://www.intact.ca/en/personal-insurance'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
