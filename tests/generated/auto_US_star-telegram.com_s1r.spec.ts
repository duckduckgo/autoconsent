import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_star-telegram.com_s1r', ['https://www.star-telegram.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
