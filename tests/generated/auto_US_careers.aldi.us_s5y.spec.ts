import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_careers.aldi.us_s5y', ['https://careers.aldi.us/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
