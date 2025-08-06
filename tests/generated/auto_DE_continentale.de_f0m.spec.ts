import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_continentale.de_f0m', ['https://www.continentale.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
