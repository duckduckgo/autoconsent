import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_hospitalidee.fr_kjm', ['https://www.hospitalidee.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
