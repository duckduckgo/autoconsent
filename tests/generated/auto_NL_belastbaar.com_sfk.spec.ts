import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_belastbaar.com_sfk', ['https://belastbaar.com/nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
