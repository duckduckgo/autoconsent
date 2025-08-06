import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_georisques.gouv.fr_jmj', ['https://www.georisques.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
