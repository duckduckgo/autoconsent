import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_americanstandard-us.com_omd', ['https://www.americanstandard-us.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
