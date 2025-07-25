import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lafibreoptique.fr_t1z', ['https://www.lafibreoptique.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
