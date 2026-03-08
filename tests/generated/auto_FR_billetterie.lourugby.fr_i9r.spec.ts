import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_billetterie.lourugby.fr_i9r', ['https://billetterie.lourugby.fr/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
