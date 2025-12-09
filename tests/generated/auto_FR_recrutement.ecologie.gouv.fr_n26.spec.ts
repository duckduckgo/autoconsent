import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_recrutement.ecologie.gouv.fr_n26', ['https://recrutement.ecologie.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
