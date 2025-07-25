import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_amundietf.fr_evw', ['https://www.amundietf.fr/fr/professionnels'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
