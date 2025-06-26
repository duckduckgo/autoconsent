import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_renaissancequebec.ca_09z', ['https://renaissancequebec.ca/en/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
