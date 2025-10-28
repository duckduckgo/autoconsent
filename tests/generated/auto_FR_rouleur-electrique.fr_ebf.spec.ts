import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_rouleur-electrique.fr_ebf', ['https://rouleur-electrique.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
