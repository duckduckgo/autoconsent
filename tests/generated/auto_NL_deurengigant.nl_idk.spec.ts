import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_deurengigant.nl_idk', ['https://www.deurengigant.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
