import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_support.lenovo.com_fyg', ['https://support.lenovo.com/ca/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
