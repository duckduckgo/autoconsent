import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_kingston.com_th7', ['https://www.kingston.com/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
