import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_profitent24.nl_tz8', ['https://www.profitent24.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
