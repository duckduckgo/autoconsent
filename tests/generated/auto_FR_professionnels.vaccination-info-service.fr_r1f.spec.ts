import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_professionnels.vaccination-info-service.fr_r1f', ['https://professionnels.vaccination-info-service.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
