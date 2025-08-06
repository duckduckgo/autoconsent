import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_autoersatzteile.de_1ah', ['https://www.autoersatzteile.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
