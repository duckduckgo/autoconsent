import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_buckknives.com_62d', ['https://www.buckknives.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
