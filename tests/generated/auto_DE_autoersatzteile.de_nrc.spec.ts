import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_autoersatzteile.de_nrc', ['https://www.autoersatzteile.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
