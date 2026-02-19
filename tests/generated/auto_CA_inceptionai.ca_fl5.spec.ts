import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_inceptionai.ca_fl5', ['https://inceptionai.ca/en-CA'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
