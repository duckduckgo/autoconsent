import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_cuisinart.com_pyr', ['https://www.cuisinart.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
