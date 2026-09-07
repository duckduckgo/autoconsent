import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'quantcast',
    [
        'https://www.cyclingnews.com/',
        'https://www.techradar.com/',
        'https://www.anandtech.com/',
        'https://www.livescience.com',
        'https://www.gamesradar.com',
        'https://time.is/',
        // US Privacy (#qc-cmp2-usp) flavor, only served to US visitors
        'https://www.jamieoliver.com/',
        'https://www.ents24.com/',
    ],
    {
        skipRegions: ['US', 'GB', 'FR'],
    },
);
