import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_ca.firstclasswatches.com_35o', ['https://ca.firstclasswatches.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
