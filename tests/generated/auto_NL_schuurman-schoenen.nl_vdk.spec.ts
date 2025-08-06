import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_schuurman-schoenen.nl_vdk', ['https://www.schuurman-schoenen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
