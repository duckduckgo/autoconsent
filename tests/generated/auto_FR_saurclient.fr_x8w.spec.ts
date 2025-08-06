import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_saurclient.fr_x8w', ['https://www.saurclient.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
