import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lhotellerie-restauration.fr_67d', ['https://www.lhotellerie-restauration.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
