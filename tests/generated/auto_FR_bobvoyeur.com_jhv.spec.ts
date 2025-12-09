import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bobvoyeur.com_jhv', ['https://www.bobvoyeur.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
