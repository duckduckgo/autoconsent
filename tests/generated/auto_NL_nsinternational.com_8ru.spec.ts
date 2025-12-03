import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nsinternational.com_8ru', ['https://www.nsinternational.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
