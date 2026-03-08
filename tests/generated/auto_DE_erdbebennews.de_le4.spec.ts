import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_erdbebennews.de_le4', ['https://erdbebennews.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
