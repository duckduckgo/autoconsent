import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_amundietf.fr_9lx', ['https://www.amundietf.fr/fr/professionnels'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
