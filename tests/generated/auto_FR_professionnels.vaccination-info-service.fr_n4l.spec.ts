import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_professionnels.vaccination-info-service.fr_n4l', ['https://professionnels.vaccination-info-service.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
