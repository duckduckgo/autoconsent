import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_aixenprovence.fr_cj0', ['https://www.aixenprovence.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
