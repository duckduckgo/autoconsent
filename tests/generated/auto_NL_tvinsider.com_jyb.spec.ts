import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_tvinsider.com_jyb', ['https://www.tvinsider.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
