import generateCMPTests from '../playwright/runner';

generateCMPTests('pornhub.com', ['https://pornhub.com/'], {
    onlyRegions: ['US'],
    expectedRuns: 2,
});
