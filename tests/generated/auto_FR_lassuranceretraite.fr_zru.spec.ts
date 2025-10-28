import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lassuranceretraite.fr_zru', ['https://www.lassuranceretraite.fr/portail-info/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
