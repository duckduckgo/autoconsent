import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_semiconductor.samsung.com_jkd', ['https://semiconductor.samsung.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
