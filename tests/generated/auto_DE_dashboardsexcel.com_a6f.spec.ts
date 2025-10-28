import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dashboardsexcel.com_a6f', ['https://dashboardsexcel.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
