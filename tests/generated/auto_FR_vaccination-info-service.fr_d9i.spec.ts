import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_vaccination-info-service.fr_d9i', ['https://vaccination-info-service.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
