import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_univ-lorraine.fr_f2e', ['https://www.univ-lorraine.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
