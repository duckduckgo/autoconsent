import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fischer-honsel.de_has', ['https://fischer-honsel.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
