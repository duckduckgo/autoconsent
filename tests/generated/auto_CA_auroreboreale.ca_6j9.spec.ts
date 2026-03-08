import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_auroreboreale.ca_6j9', ['https://auroreboreale.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
