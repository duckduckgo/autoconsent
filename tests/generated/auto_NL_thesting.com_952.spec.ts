import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_thesting.com_952', ['https://www.thesting.com/nl-nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
