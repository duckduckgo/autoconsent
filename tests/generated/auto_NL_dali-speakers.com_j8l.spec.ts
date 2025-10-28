import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dali-speakers.com_j8l', ['https://static.dali-speakers.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
