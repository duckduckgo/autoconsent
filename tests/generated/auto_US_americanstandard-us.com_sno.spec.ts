import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_americanstandard-us.com_sno', ['https://www.americanstandard-us.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
