import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bibliotheque.sceaux.fr_w83', ['https://bibliotheque.sceaux.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
