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

generateCMPTests('com_quantcast2', ['https://www.fandom.com/'], {
    testOptIn: false,
    testSelfTest: false,
    skipRegions: ['US'],
});

// USP/MSPA variant of InMobi (Quantcast) Choice CMP.
generateCMPTests('quantcast', ['https://secretldn.com/'], {
    onlyRegions: ['US'],
    testSelfTest: false,
});
