import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_continentale.de_i51', ['https://www.continentale.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
