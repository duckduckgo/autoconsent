import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nsinternational.com_hr7', ['https://www.nsinternational.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
