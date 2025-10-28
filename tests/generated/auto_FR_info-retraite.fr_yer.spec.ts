import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_info-retraite.fr_yer', ['https://www.info-retraite.fr/portail-info/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
