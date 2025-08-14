import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_semiconductor.samsung.com_9ur', ['https://semiconductor.samsung.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
