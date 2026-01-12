import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_la.spankbang.com_fbo', ['https://la.spankbang.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
