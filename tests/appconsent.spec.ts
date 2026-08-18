import generateCMPTests from '../playwright/runner';

generateCMPTests('AppConsent', ['https://magasin.darty.com/'], {
    testOptIn: false,
    testOptOut: true,
    onlyRegions: ['US', 'FR'],
});

generateCMPTests('AppConsent', ['https://www.pagesjaunes.fr/'], {
    testOptIn: false,
    testOptOut: true,
    onlyRegions: ['GB'],
    mobile: true,
});
