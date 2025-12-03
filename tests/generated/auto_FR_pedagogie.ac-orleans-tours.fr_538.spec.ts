import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_pedagogie.ac-orleans-tours.fr_538', ['https://pedagogie.ac-orleans-tours.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
