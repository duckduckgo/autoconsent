import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_strooizoutgigant.nl_gkj', ['https://www.strooizoutgigant.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
