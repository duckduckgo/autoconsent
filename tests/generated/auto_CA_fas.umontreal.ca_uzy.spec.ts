import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_fas.umontreal.ca_uzy', ['https://fas.umontreal.ca/accueil/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
