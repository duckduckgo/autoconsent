import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_billetterie.rcvannes.bzh_7by', ['https://billetterie.rcvannes.bzh/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
