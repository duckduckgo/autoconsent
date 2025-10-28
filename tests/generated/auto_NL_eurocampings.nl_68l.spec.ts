import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_eurocampings.nl_68l', ['https://www.eurocampings.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
