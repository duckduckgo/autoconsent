import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_martiniziekenhuis.nl_77g', ['https://www.martiniziekenhuis.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
