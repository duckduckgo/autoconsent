import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_martiniziekenhuis.nl_hy9', ['https://www.martiniziekenhuis.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
