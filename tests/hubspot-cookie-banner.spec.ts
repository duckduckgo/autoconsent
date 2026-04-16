import generateCMPTests from '../playwright/runner';

generateCMPTests('hubspot-cookie-banner', ['https://blog.hubspot.com/', 'https://knowledge.hubspot.com/', 'https://www.hubspot.de/'], {
    skipRegions: ['US', 'NA'],
});
