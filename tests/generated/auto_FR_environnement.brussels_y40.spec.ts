import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_environnement.brussels_y40', ['https://environnement.brussels/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
