import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_tripcentral.ca_v7v', ['https://www.tripcentral.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
