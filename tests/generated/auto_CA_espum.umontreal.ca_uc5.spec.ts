import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_espum.umontreal.ca_uc5', ['https://espum.umontreal.ca/accueil/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
