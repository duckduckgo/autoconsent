import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_chuv.umontreal.ca_cc0', ['https://chuv.umontreal.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
