import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_agence-energie.com_9y3', ['https://agence-energie.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
