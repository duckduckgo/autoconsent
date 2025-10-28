import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_gardenworks.ca_jjq', ['https://www.gardenworks.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
