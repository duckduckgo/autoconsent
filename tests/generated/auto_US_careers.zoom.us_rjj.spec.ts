import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_careers.zoom.us_rjj', ['https://careers.zoom.us/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
