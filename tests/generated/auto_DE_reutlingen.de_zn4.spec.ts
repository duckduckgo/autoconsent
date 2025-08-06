import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_reutlingen.de_zn4', ['https://www.reutlingen.de/willkommen'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
