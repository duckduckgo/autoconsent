import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_ti.umontreal.ca_4ct', ['https://ti.umontreal.ca/accueil/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
