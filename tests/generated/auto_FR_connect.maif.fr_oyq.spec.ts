import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_connect.maif.fr_oyq', ['https://connect.maif.fr/connect/oic/login'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
