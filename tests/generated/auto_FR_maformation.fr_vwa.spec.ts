import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_maformation.fr_vwa', ['https://www.maformation.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
