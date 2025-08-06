import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_services-eau-france.fr_x7v', ['https://www.services-eau-france.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
