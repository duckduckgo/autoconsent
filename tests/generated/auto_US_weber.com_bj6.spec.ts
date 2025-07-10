import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_weber.com_bj6', ['https://www.weber.com/US/en/home/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
