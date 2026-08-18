import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'civic-cookie-control',
    [
        'https://www.birmingham.gov.uk/',
        'https://planning.org.uk/',
        'https://www.jessops.com/',
        'https://www.bcs.org/',
        'https://forum-en.msi.com/index.php',
    ],
    {
        skipRegions: ['US', 'DE'],
    },
);
