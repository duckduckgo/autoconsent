import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_topersatzteile.de_m3q', ['https://www.topersatzteile.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
