import generateCMPTests from '../playwright/runner';

generateCMPTests('AppConsent', ['https://magasin.darty.com/', 'https://www.dofuspourlesnoobs.com/', 'https://www.sportsmole.co.uk/'], {
    testOptIn: false,
    testOptOut: true,
    onlyRegions: ['US', 'FR'],
});
