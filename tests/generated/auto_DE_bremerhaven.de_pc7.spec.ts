import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bremerhaven.de_pc7', ['https://www.bremerhaven.de/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
