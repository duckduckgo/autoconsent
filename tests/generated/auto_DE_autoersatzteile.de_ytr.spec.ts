import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_autoersatzteile.de_ytr', ['https://www.autoersatzteile.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
