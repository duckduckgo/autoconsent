import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_errial.georisques.gouv.fr_6zo', ['https://errial.georisques.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
