import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_reutlingen.de_j2t', ['https://www.reutlingen.de/willkommen'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
