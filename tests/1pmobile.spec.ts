import generateCMPTests from '../playwright/runner';

generateCMPTests('1pmobile.com', ['https://1pmobile.com/'], {
    expectedRuns: 2,
});
