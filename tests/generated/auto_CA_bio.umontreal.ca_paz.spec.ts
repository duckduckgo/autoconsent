import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_bio.umontreal.ca_paz', ['https://bio.umontreal.ca/accueil/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
