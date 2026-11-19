import generateCMPTests from '../playwright/runner';

// the banner is only shown in GDPR regions
generateCMPTests(
    'rogers-sports-media',
    ['https://www.sportsnet.ca/', 'https://seekyoursounds.com/', 'https://toronto.citynews.ca/', 'https://www.breakfasttelevision.ca/'],
    { skipRegions: ['US', 'CA', 'AU', 'JP'] },
);
