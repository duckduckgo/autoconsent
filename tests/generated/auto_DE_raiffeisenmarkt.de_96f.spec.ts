import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_raiffeisenmarkt.de_96f', ['https://www.raiffeisenmarkt.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
