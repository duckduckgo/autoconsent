import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_guitariste.com_pq5', ['https://www.guitariste.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
