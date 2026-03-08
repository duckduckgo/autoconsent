import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_f1store.formula1.com_fbs', ['https://f1store.formula1.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
