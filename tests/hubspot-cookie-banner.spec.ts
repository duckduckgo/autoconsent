import generateCMPTests from '../playwright/runner';

generateCMPTests('hubspot-cookie-banner', ['https://blog.hubspot.com/', 'https://knowledge.hubspot.com/'], {
    skipRegions: ['US', 'NA'],
});
