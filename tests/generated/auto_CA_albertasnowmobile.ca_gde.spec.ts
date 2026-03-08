import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_albertasnowmobile.ca_gde', ['https://albertasnowmobile.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
