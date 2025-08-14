import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bremerhaven.de_xne', ['https://www.bremerhaven.de/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
