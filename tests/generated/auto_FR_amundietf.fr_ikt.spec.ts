import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_amundietf.fr_ikt', ['https://www.amundietf.fr/fr/professionnels'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
