import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ac-strasbourg.fr_ir8', ['https://www.ac-strasbourg.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
