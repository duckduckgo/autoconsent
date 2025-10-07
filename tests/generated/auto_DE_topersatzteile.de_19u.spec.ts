import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_topersatzteile.de_19u', ['https://www.topersatzteile.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
