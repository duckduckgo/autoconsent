import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_amtrak.com_434', ['https://www.amtrak.com/home.html'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
