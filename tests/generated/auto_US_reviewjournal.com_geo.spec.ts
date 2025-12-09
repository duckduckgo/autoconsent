import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_reviewjournal.com_geo', ['https://www.reviewjournal.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
