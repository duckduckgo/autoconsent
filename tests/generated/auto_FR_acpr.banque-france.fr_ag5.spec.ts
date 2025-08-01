import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_acpr.banque-france.fr_ag5', ['https://acpr.banque-france.fr/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
