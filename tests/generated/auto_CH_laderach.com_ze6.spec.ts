import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_laderach.com_ze6', ['https://laderach.com/ch-en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
