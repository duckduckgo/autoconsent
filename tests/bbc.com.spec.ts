import generateCMPTests from '../playwright/runner';

// bbc.com/sport, bbc.co.uk/ and bbc.co.uk/news show the current banner, the rest show the legacy "orb" banner with a reject button.
// Outside the UK, Sourcepoint-frame also completes in its own iframe on bbc.com, so up to two autoconsentDone messages are expected.
generateCMPTests('bbc.com', ['https://www.bbc.com/sport/formula1', 'https://www.bbc.com/weather', 'https://www.bbc.co.uk/iplayer'], {
    skipRegions: ['US'],
    expectedRuns: 2,
});

// Outside the UK, these URLs redirect to bbc.com and show the orb banner without a reject button (bbc.com-orb-cosmetic).
generateCMPTests('bbc.com', ['https://www.bbc.co.uk/', 'https://www.bbc.co.uk/news', 'https://www.bbc.co.uk/sounds'], {
    onlyRegions: ['GB'],
});
