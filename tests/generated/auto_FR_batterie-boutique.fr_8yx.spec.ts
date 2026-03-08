import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_batterie-boutique.fr_8yx', ['https://batterie-boutique.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
