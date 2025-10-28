import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_consignaction.ca_48h', ['https://consignaction.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
