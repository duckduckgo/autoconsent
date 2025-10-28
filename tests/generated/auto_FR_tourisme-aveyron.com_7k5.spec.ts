import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_tourisme-aveyron.com_7k5', ['https://www.tourisme-aveyron.com/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
