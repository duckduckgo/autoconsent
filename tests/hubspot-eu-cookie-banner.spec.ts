import generateCMPTests from '../playwright/runner';

generateCMPTests('HubSpot EU cookie banner', ['https://blog.hubspot.com/'], {
    onlyRegions: ['DE', 'GB', 'FR', 'NL', 'PL'],
});
