import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_code.travail.gouv.fr_1ok', ['https://code.travail.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
