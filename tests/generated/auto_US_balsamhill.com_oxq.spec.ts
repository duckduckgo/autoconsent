import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_balsamhill.com_oxq', ['https://www.balsamhill.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
