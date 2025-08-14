import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_schach-spielen.eu_6s3', ['https://www.schach-spielen.eu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
