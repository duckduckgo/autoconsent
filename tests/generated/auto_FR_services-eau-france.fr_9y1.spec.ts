import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_services-eau-france.fr_9y1', ['https://www.services-eau-france.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
