import generateCMPTests from '../playwright/runner';

generateCMPTests('quantcast', ['https://www.trustedreviews.com/', 'https://www.sefton.gov.uk/'], {
    skipRegions: ['US', 'GB', 'FR'],
});
