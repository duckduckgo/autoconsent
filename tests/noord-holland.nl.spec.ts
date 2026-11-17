import generateCMPTests from '../playwright/runner';

generateCMPTests('noord-holland.nl', ['https://www.noord-holland.nl/'], {
    expectedRuns: 2,
});
