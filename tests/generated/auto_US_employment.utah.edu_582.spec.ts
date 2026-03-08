import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_employment.utah.edu_582', ['https://employment.utah.edu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
