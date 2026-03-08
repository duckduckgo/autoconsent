import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_blackstoneshooting.com_zjr', ['https://blackstoneshooting.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
