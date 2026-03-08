import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_cross-innovation-hub.de_8qg', ['https://cross-innovation-hub.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
