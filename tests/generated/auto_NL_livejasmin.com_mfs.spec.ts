import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_livejasmin.com_mfs', ['https://www.livejasmin.com/en/girls'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
