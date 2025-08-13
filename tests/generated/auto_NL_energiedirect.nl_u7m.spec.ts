import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_energiedirect.nl_u7m', ['https://www.energiedirect.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
