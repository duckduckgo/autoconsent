import generateCMPTests from '../playwright/runner';

// magasin.darty.com serves the "Refuse all" layout; the other two only offer "Continue without accepting".
generateCMPTests('AppConsent', ['https://magasin.darty.com/', 'https://www.lerugbynistere.fr/', 'https://dofuspourlesnoobs.com/'], {
    testOptIn: false,
    testOptOut: true,
    onlyRegions: ['US', 'FR'],
});
