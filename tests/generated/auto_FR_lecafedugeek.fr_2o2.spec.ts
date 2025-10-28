import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lecafedugeek.fr_2o2', ['https://lecafedugeek.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
