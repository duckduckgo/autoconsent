import generateCMPTests from '../playwright/runner';

generateCMPTests('AppConsent legacy', ['https://www.meteociel.fr/', 'https://www.maxifoot.fr/', 'https://www.voltex.fr/'], {
    testOptIn: false,
    testOptOut: true,
    onlyRegions: ['US', 'FR'],
});
