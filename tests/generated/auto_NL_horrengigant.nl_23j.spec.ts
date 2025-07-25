import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_horrengigant.nl_23j', ['https://www.horrengigant.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
