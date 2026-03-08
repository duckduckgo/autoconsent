import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_f1store.formula1.com_4tc', ['https://f1store.formula1.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
