import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_certificat-air.gouv.fr_8k5', ['https://www.certificat-air.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
