import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kreis-reutlingen.de_ekq', ['https://www.kreis-reutlingen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
