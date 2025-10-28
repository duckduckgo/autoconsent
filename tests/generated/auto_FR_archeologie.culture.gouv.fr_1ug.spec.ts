import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_archeologie.culture.gouv.fr_1ug', ['https://archeologie.culture.gouv.fr/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
