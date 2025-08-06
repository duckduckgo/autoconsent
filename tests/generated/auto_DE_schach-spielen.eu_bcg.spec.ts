import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_schach-spielen.eu_bcg', ['https://www.schach-spielen.eu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
