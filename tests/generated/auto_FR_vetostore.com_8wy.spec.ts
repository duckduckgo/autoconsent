import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_vetostore.com_8wy', ['https://www.vetostore.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
