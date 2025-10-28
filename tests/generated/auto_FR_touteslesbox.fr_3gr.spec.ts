import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_touteslesbox.fr_3gr', ['https://touteslesbox.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
