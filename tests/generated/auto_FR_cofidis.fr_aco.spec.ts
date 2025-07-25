import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cofidis.fr_aco', ['https://www.cofidis.fr/fr/index.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
