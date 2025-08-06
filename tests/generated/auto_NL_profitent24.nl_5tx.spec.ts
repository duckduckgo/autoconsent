import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_profitent24.nl_5tx', ['https://www.profitent24.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
