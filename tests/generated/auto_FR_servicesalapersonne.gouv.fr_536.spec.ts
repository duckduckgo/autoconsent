import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_servicesalapersonne.gouv.fr_536', ['https://www.servicesalapersonne.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
