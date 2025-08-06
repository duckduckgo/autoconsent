import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_raiffeisenmarkt.de_erg', ['https://www.raiffeisenmarkt.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
