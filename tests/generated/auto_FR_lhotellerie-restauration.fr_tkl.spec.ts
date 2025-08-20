import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lhotellerie-restauration.fr_tkl', ['https://www.lhotellerie-restauration.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
