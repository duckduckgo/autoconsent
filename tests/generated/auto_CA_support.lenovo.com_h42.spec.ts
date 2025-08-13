import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_support.lenovo.com_h42', ['https://support.lenovo.com/ca/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
