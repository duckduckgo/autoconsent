import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_maison-retraite-selection.fr_uqd', ['https://maison-retraite-selection.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
