import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_mabanque.fortuneo.fr_0d2', ['https://mabanque.fortuneo.fr/mon-espace'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
