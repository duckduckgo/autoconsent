import generateCMPTests from '../playwright/runner';

generateCMPTests('hubspot-cookie-banner', ['https://blog.hubspot.com/'], {
    skipRegions: ['US'],
});
