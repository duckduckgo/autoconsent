import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_modelle-hamburg.de_rh3', ['https://www.modelle-hamburg.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
