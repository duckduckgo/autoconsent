import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_semiconductor.samsung.com_ytg', ['https://semiconductor.samsung.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
