import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_f1store.formula1.com_15u', ['https://f1store.formula1.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
