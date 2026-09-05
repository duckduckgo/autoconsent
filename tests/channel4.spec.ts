import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'channel4.com',
    [
        'https://www.channel4.com/programmes/gogglebox',
        'https://www.channel4.com/4viewers',
        // the global nav renders the banner into a different mount point than the main site
        'https://www.channel4.com/tv-guide/2025-11-21',
    ],
    {
        skipRegions: ['US'],
    },
);
