import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_renaissancequebec.ca_0ee', ['https://renaissancequebec.ca/en/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
