import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_reutlingen.de_xyj', ['https://www.reutlingen.de/willkommen'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
