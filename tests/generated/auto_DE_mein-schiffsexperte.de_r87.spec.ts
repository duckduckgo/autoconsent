import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_mein-schiffsexperte.de_r87', ['https://euresa-reisen.de/reedereien/mein-schiff'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
