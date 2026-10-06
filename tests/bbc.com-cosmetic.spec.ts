import generateCMPTests from '../playwright/runner';

// The orb banner without a reject button is shown on bbc.com to EEA visitors, alongside a Sourcepoint frame.
generateCMPTests('bbc.com-cosmetic', ['https://www.bbc.com/', 'https://www.bbc.com/news'], {
    onlyRegions: ['FR', 'DE'],
    expectedRuns: 2,
});
