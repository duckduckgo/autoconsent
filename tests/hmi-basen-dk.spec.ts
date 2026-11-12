import generateCMPTests from '../playwright/runner';

generateCMPTests('hmi-basen.dk', ['https://hmi-basen.dk/'], {
    expectedRuns: 2,
});
