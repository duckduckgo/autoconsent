import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_storytel.com_fd7', ['https://www.storytel.com/nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
