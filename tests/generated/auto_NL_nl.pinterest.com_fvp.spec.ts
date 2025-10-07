import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nl.pinterest.com_fvp', ['https://nl.pinterest.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
