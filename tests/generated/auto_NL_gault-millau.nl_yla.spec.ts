import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_gault-millau.nl_yla', ['https://www.gault-millau.nl/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
