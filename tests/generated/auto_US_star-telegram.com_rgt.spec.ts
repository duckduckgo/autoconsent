import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_star-telegram.com_rgt', ['https://www.star-telegram.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
