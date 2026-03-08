import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_diro.umontreal.ca_j18', ['https://diro.umontreal.ca/accueil/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
