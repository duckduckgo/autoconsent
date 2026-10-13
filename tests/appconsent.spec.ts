import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'AppConsent',
    ['https://magasin.darty.com/', 'https://www.bestwordlist.com/', 'https://www.sportsmole.co.uk/', 'https://www.iturf.fr/'],
    {
        testOptIn: false,
        testOptOut: true,
        onlyRegions: ['US', 'FR'],
    },
);
