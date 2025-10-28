import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_reviewjournal.com_tt4', ['https://www.reviewjournal.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
