import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_smartsheet.com_p05', ['https://www.smartsheet.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
