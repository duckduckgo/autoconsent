import generateCMPTests from '../playwright/runner';

generateCMPTests('pornhub.com', ['https://pornhub.com/'], {
    expectedRuns: 1,
    testSelfTest: false,
});
