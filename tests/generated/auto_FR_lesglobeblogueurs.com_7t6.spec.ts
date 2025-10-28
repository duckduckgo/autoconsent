import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lesglobeblogueurs.com_7t6', ['https://lesglobeblogueurs.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
