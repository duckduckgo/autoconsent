import generateCMPTests from '../playwright/runner';

generateCMPTests('AppConsent', ['https://magasin.darty.com/'], {
    testOptIn: false,
    testOptOut: true,
    onlyRegions: ['US', 'FR'],
});
