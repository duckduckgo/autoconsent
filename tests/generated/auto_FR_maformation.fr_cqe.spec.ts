import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_maformation.fr_cqe', ['https://www.maformation.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
