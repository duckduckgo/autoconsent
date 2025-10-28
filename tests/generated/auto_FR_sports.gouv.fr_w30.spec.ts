import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_sports.gouv.fr_w30', ['https://www.sports.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
