import generateCMPTests from '../playwright/runner';

generateCMPTests('AppConsent', ['https://magasin.darty.com/'], {
    testOptIn: false,
    testOptOut: true,
    onlyRegions: ['US', 'FR'],
});

generateCMPTests('AppConsent', ['https://www.bestwordlist.com/', 'https://www.sportsmole.co.uk/'], {
    testOptIn: false,
    testOptOut: true,
    onlyRegions: ['GB', 'US', 'DE'],
});
