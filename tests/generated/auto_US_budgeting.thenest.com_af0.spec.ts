import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_budgeting.thenest.com_af0', ['https://budgeting.thenest.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
