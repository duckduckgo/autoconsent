import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ac-versailles.fr_fow', ['https://www.ac-versailles.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
