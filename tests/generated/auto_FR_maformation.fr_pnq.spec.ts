import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_maformation.fr_pnq', ['https://www.maformation.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
