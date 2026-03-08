import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bestekenpannen.nl_pem', ['https://bestekenpannen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
