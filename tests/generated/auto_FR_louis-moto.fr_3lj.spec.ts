import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_louis-moto.fr_3lj', ['https://www.louis-moto.fr/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
