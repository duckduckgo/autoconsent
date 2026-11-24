import generateCMPTests from '../playwright/runner';

// the banner is only shown in regions that require consent
generateCMPTests('tourradar', ['https://www.tourradar.de/', 'https://www.tourradar.com/', 'https://www.tourradar.fr/'], {
    skipRegions: ['US', 'CA', 'AU', 'JP'],
});
