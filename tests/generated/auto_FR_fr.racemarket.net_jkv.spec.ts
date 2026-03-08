import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.racemarket.net_jkv', ['https://fr.racemarket.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
