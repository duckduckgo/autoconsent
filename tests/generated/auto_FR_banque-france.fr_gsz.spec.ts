import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_banque-france.fr_gsz', ['https://www.banque-france.fr/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
