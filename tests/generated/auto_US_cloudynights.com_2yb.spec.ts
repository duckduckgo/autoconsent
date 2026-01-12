import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_cloudynights.com_2yb', ['https://www.cloudynights.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
