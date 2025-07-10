import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_bonginoreport.com_3xd', ['https://bonginoreport.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
