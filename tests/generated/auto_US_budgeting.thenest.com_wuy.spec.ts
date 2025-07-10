import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_budgeting.thenest.com_wuy', ['https://budgeting.thenest.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
