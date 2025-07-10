import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_bestviewsreviews.com_thq', ['https://bestviewsreviews.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
