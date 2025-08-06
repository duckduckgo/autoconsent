import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_avidafinance.com_17e', ['https://www.avidafinance.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
