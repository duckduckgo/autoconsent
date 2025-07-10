import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_goodmenproject.com_fj8', ['https://goodmenproject.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
