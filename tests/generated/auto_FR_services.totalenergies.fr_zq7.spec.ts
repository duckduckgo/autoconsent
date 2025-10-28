import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_services.totalenergies.fr_zq7', ['https://services.totalenergies.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
