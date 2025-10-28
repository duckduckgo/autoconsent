import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_handicap.gouv.fr_m3v', ['https://handicap.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
