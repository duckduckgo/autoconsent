import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_drogues-info-service.fr_t41', ['https://www.drogues-info-service.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
