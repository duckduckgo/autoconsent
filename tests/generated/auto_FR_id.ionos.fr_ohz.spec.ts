import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_id.ionos.fr_ohz', ['https://id.ionos.fr/identifier'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
