import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_ebsi.umontreal.ca_2oj', ['https://ebsi.umontreal.ca/accueil/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
