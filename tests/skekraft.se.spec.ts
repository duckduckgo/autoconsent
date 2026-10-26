import generateCMPTests from '../playwright/runner';

// Opting out goes through the cookie settings page, so autoconsent runs on two pages.
generateCMPTests('skekraft.se', ['https://www.skekraft.se/'], {
    expectedRuns: 2,
});
