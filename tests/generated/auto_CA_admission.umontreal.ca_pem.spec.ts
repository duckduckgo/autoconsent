import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_admission.umontreal.ca_pem', ['https://admission.umontreal.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
