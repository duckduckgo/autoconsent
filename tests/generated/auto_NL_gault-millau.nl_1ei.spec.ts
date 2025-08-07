import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_gault-millau.nl_1ei', ['https://www.gault-millau.nl/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
