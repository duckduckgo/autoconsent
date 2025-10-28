import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_theatredelaville-paris.com_aox', ['https://www.theatredelaville-paris.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
