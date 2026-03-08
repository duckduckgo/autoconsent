import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_boutique.ateliers-du-bocage.fr_tmt', ['https://boutique.ateliers-du-bocage.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
