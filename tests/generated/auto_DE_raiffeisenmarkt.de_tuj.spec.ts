import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_raiffeisenmarkt.de_tuj', ['https://www.raiffeisenmarkt.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
