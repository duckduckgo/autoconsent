import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dakraampje.nl_pll', ['https://www.dakraampje.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
