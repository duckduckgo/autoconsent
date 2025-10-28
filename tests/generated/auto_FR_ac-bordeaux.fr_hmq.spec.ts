import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ac-bordeaux.fr_hmq', ['https://www.ac-bordeaux.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
