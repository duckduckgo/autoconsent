import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_baseball-reference.com_mt4', ['https://www.baseball-reference.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
