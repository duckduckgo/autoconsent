import generateCMPTests from '../playwright/runner';

generateCMPTests('pornhub.com', ['https://pornhub.com/'], {
    expectedRuns: 2,
});
