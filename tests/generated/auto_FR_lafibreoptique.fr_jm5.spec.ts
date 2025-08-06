import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lafibreoptique.fr_jm5', ['https://www.lafibreoptique.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
