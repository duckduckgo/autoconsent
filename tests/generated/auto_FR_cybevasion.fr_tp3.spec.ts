import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cybevasion.fr_tp3', ['https://www.cybevasion.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
