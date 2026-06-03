import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_independer.nl_ind', ['https://www.independer.nl/mijnindepender/inloggen'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
