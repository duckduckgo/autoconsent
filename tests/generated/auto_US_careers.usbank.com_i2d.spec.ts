import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_careers.usbank.com_i2d', ['https://careers.usbank.com/global/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
