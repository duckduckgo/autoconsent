import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_phantasialand.de_slc', ['https://www.phantasialand.de/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
