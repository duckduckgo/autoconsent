import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_support.lenovo.com_7u1', ['https://support.lenovo.com/ca/en/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
