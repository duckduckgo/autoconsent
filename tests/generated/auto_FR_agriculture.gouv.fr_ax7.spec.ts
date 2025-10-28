import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_agriculture.gouv.fr_ax7', ['https://agriculture.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
