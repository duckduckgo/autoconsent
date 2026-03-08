import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_cerium.umontreal.ca_1di', ['https://cerium.umontreal.ca/accueil/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
