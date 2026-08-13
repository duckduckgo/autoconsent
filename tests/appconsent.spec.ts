import generateCMPTests from '../playwright/runner';

generateCMPTests('AppConsent', ['https://magasin.darty.com/', 'https://www.meteociel.fr/'], {
    testOptIn: false,
    testOptOut: true,
    onlyRegions: ['US', 'FR']
});
