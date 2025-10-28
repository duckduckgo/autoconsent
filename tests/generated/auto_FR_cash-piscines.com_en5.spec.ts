import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cash-piscines.com_en5', ['https://www.cash-piscines.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
