import generateCMPTests from '../playwright/runner';

// several other regions redirect to other betway sites
generateCMPTests(
    'betway-africa',
    ['https://www.betway.co.zm/', 'https://www.betway.com.gh/', 'https://www.betway.co.tz/', 'https://www.betway.com.ng/'],
    {
        onlyRegions: ['US', 'GB'],
    },
);
