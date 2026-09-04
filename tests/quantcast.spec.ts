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
    ],
    {
        skipRegions: ['US', 'GB', 'FR'],
    },
);

// US-only "Do Not Process My Personal Information" (USP/GPP) variant of the Quantcast/InMobi Choice dialog
generateCMPTests(
    'quantcast',
    [
        'https://www.footyheadlines.com/2025/03/ecuador-2025-centenary-home-away-kits.html',
        'https://www.ents24.com/',
        'https://www.visitwiltshire.co.uk/',
    ],
    {
        onlyRegions: ['US'],
    },
);
