import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_fac.umontreal.ca_pkp', ['https://fac.umontreal.ca/accueil/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
