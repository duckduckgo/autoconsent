import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_schuurman-schoenen.nl_tb3', ['https://www.schuurman-schoenen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
