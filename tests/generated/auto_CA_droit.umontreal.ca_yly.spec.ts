import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_droit.umontreal.ca_yly', ['https://droit.umontreal.ca/accueil/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
