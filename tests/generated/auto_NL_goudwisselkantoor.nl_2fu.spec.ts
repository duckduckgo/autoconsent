import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_goudwisselkantoor.nl_2fu', ['https://www.goudwisselkantoor.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
