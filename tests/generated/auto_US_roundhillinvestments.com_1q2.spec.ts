import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_roundhillinvestments.com_1q2', ['https://www.roundhillinvestments.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
