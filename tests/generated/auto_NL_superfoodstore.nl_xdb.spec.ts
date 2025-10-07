import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_superfoodstore.nl_xdb', ['https://www.superfoodstore.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
