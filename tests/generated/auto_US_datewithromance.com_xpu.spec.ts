import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_datewithromance.com_xpu', ['https://datewithromance.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
