import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ak-interactive.com_j97', ['https://ak-interactive.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
