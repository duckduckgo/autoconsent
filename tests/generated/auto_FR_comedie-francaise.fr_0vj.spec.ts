import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_comedie-francaise.fr_0vj', ['https://www.comedie-francaise.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
