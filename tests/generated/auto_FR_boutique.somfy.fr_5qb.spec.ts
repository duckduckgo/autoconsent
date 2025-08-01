import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_boutique.somfy.fr_5qb', ['https://boutique.somfy.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
