import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_schach-spielen.eu_ps0', ['https://www.schach-spielen.eu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
