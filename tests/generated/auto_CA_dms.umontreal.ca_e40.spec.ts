import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_dms.umontreal.ca_e40', ['https://dms.umontreal.ca/fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
