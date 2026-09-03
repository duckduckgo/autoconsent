import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'civic-cookie-control',
    [
        'https://www.birmingham.gov.uk/',
        'https://planning.org.uk/',
        'https://www.jessops.com/',
        'https://www.bcs.org/',
        // configured without a reject button, so opt-out goes through the settings panel and closes it
        'https://iabtechlab.com/',
        'https://www.digitalunite.com/',
        'https://www.gold.ac.uk/',
    ],
    {
        skipRegions: ['US', 'DE'],
    },
);
