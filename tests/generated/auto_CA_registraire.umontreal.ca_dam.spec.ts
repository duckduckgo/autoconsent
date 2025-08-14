import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_registraire.umontreal.ca_dam', ['https://registraire.umontreal.ca/accueil/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
