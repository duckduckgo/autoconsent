import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_francevegetalienne.fr_4zd', ['https://francevegetalienne.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
