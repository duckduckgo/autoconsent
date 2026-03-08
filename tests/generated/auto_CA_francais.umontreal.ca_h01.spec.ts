import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_francais.umontreal.ca_h01', ['https://francais.umontreal.ca/accueil/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
