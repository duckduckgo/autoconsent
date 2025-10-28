import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_jeunes.gouv.fr_baw', ['https://www.jeunes.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
