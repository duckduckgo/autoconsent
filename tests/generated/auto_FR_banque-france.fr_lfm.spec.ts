import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_banque-france.fr_lfm', ['https://www.banque-france.fr/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
