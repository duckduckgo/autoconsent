import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hoogvliet.com_tv3', ['https://www.hoogvliet.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
