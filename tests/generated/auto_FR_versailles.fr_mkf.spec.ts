import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_versailles.fr_mkf', ['https://www.versailles.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
