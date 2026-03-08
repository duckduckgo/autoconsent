import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_billetterie.musee-orsay.fr_jzh', ['https://billetterie.musee-orsay.fr/index-css5-museeorsay-pg1.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
