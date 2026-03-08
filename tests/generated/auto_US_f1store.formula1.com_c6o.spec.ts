import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_f1store.formula1.com_c6o', ['https://f1store.formula1.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
