import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_complexefuneraire.ca_gka', ['https://complexefuneraire.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
