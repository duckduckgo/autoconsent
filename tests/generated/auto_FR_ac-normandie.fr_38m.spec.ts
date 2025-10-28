import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ac-normandie.fr_38m', ['https://www.ac-normandie.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
