import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_connect.maif.fr_bre', ['https://connect.maif.fr/connect/oic/login'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
