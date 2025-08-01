import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_vistaprint.fr_c6p', ['https://www.vistaprint.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
