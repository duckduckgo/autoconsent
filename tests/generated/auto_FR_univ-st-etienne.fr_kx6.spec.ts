import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_univ-st-etienne.fr_kx6', ['https://www.univ-st-etienne.fr/fr/index.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
