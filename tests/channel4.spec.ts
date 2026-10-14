import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'channel4.com',
    ['https://www.channel4.com/programmes/say-nothing/on-demand/78101-009', 'https://www.channel4.com/tv-guide/2025-11-21'],
    {
        skipRegions: ['US'],
    },
);
