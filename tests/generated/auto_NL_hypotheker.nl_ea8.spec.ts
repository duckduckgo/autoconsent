import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hypotheker.nl_ea8', ['https://www.hypotheker.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
