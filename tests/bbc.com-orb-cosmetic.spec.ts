import generateCMPTests from '../playwright/runner';

// Outside the UK, bbc.com shows the "orb" banner without a reject button next to the Sourcepoint dialog.
// Sourcepoint-frame handles that dialog in its own iframe, so two autoconsentDone messages are expected.
generateCMPTests('bbc.com-orb-cosmetic', ['https://www.bbc.com/', 'https://www.bbc.com/news'], {
    skipRegions: ['US', 'GB'],
    expectedRuns: 2,
});
