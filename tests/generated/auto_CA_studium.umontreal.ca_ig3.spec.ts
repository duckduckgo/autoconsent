import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_studium.umontreal.ca_ig3', ['https://studium.umontreal.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
