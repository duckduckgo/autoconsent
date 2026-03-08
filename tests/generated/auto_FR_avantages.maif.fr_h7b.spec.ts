import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_avantages.maif.fr_h7b', ['https://avantages.maif.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
