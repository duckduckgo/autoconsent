import generateCMPTests from '../playwright/runner';

// these sites reload the page after consent, which races with the self-test
generateCMPTests('consentmagic', ['https://me-fa.dk/', 'https://glenroy.com/', 'https://cooksandcompany.co.uk/'], {
    testSelfTest: false,
});

generateCMPTests('consentmagic', ['https://pixelyoursite.com/'], {
    skipRegions: ['US'],
});
