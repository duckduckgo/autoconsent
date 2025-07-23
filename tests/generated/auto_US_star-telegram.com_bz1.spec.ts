import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_star-telegram.com_bz1', ['https://www.star-telegram.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
