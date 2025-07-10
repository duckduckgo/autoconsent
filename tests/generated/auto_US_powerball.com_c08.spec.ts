import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_powerball.com_c08', ['https://www.powerball.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
