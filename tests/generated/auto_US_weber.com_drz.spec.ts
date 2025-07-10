import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_weber.com_drz', ['https://www.weber.com/US/en/home/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
