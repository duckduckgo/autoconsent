import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_la.spankbang.com_j38', ['https://la.spankbang.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
