import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lhotellerie-restauration.fr_f0j', ['https://www.lhotellerie-restauration.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
