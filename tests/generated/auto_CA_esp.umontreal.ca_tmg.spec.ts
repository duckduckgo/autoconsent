import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_esp.umontreal.ca_tmg', ['https://esp.umontreal.ca/accueil/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
