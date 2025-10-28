import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_dragonflyshipping.ca_dyc', ['https://dragonflyshipping.ca/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
