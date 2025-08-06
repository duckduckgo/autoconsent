import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_drogues-info-service.fr_407', ['https://www.drogues-info-service.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
