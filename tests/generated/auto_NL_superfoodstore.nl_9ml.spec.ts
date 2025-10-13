import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_superfoodstore.nl_9ml', ['https://www.superfoodstore.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
