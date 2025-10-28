import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_uitmetkinderen.nl_j5a', ['https://www.uitmetkinderen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
