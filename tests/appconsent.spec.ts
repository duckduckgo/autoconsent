import generateCMPTests from '../playwright/runner';

generateCMPTests('AppConsent', ['https://magasin.darty.com/'], {
    testOptIn: false,
    testOptOut: true,
    onlyRegions: ['US', 'FR'],
});

generateCMPTests('AppConsent', ['https://www.sportsmole.co.uk/', 'https://www.bestwordlist.com/'], {
    testOptIn: false,
    testOptOut: true,
    onlyRegions: ['GB', 'US'],
});
