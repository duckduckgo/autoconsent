import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_service.eau.veolia.fr_0ot', ['https://www.service.eau.veolia.fr/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
