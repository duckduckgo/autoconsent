import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_smartsheet.com_m3o', ['https://www.smartsheet.com/home-overview'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
