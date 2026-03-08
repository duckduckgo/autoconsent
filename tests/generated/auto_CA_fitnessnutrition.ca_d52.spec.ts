import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_fitnessnutrition.ca_d52', ['https://fitnessnutrition.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
