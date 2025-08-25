import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cofidis.fr_bz2', ['https://www.cofidis.fr/fr/index.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
