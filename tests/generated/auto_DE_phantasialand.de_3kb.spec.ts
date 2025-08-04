import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_phantasialand.de_3kb', ['https://www.phantasialand.de/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
