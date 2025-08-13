import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lafibreoptique.fr_vek', ['https://www.lafibreoptique.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
