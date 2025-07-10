import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_powerball.com_mg0', ['https://www.powerball.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
