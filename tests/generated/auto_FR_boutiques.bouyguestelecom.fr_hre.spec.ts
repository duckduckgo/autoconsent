import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_boutiques.bouyguestelecom.fr_hre', ['https://boutiques.bouyguestelecom.fr/bouyguestelecom/fr?_locale=fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
