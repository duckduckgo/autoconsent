import generateCMPTests from '../playwright/runner';

generateCMPTests('AppConsent legacy', ['https://www.meteociel.fr/'], {
    testOptIn: false,
    testOptOut: true,
    onlyRegions: ['US', 'FR'],
});
