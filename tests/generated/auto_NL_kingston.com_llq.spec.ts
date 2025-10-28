import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_kingston.com_llq', ['https://www.kingston.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
