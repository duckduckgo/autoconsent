import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_careers.honeywell.com_lb6', ['https://careers.honeywell.com/en/sites/Honeywell'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
