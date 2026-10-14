import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'civic-cookie-control',
    [
        'https://www.birmingham.gov.uk/',
        'https://planning.org.uk/',
        'https://www.jessops.com/',
        'https://www.bcs.org/',
        'https://www.amnesty.org/en/',
        'https://www.gold.ac.uk/',
        'https://www.nordicnest.de/',
    ],
    {
        skipRegions: ['US', 'DE'],
    },
);
