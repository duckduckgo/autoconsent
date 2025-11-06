import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_pedagogie.ac-nantes.fr_5xf', ['https://pedagogie.ac-nantes.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
