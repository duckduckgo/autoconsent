import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lacartedescolocs.fr_rgu', ['https://www.lacartedescolocs.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
