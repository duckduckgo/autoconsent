import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_churchleaders.com_6tu', ['https://churchleaders.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
