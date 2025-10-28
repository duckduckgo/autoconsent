import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_recettes-et-terroirs.com_eis', ['https://www.recettes-et-terroirs.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
