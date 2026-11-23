import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'gov.uk',
    [
        'https://gov.uk',
        'https://data.gov.uk',
        'https://sorn.service.gov.uk/',
        'https://beready.campaign.gov.uk/',
        'https://www.thepensionsregulator.gov.uk/',
        'https://www.leedsth.nhs.uk/',
    ],
    {
        skipRegions: ['US', 'FR', 'DE'],
    },
);
