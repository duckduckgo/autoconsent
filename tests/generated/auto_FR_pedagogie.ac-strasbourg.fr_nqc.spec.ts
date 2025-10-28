import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_pedagogie.ac-strasbourg.fr_nqc', ['https://pedagogie.ac-strasbourg.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
