import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_seniorsafetyadvice.com_nad', ['https://seniorsafetyadvice.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
