import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fittingteile.de_82e', ['https://fittingteile.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
