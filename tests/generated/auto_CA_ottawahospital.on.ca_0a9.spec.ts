import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_ottawahospital.on.ca_0a9', ['https://www.ottawahospital.on.ca/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
