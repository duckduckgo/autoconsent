import generateCMPTests from '../playwright/runner';

// The first three URLs show the current banner, the rest show the legacy "orb" banner.
// These UK variants only appear in the UK; elsewhere bbc.co.uk redirects to bbc.com.
generateCMPTests(
    'bbc.com',
    [
        'https://www.bbc.com/sport/formula1',
        'https://www.bbc.co.uk/',
        'https://www.bbc.co.uk/news',
        'https://www.bbc.co.uk/weather',
        'https://www.bbc.co.uk/iplayer',
        'https://www.bbc.co.uk/sounds',
    ],
    { onlyRegions: ['GB'] },
);

// In the EEA, the legacy banner has no reject button and is hidden instead; a Sourcepoint frame runs alongside it.
generateCMPTests('bbc.com', ['https://www.bbc.com/', 'https://www.bbc.com/news'], {
    onlyRegions: ['DE', 'FR'],
    testSelfTest: false,
    expectedRuns: 2,
});
