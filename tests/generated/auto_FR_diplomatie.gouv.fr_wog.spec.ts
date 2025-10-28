import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_diplomatie.gouv.fr_wog', ['https://www.diplomatie.gouv.fr/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
