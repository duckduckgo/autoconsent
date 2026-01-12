import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kreis-reutlingen.de_o0y', ['https://www.kreis-reutlingen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
