import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_continentale.de_kmy', ['https://www.continentale.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
