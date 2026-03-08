import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_billetterie.stade-de-reims.com_mlf', ['https://billetterie.stade-de-reims.com/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
